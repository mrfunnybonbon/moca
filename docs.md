# Sigma Paint – Technical Documentation

## Overview

Sigma Paint is a modern canvas-based drawing application inspired by Windows Paint and extended with layers, filters, animated UI, themes, autosave, multi-language support, and accessibility features.

The application is implemented as a single-page web app using:
- HTML5 Canvas (with pointer events) for drawing
- Vanilla JavaScript modules for logic
- CSS for layout, themes, animations, and micro-interactions

No build step is required: open `index.html` in a browser or serve the folder with a static HTTP server.

## File Structure

- `index.html` – Root HTML document and UI layout
- `styles.css` – Visual design, themes, layout, and animations
- `app.js` – Application logic, canvas engine, tools, layers, filters, I/O
- `docs.md` – Technical documentation
- `user-manual.md` – End-user manual

## Core Architecture

### High-level modules

- UI shell (in `index.html` and `styles.css`)
  - Header: logo, workspace presets, theme switcher, language selector, UI scale
  - Left toolbar: tool groups (brushes, shapes, selection, color/text)
  - Canvas workspace: rulers, grid overlay, guides, main canvas, zoom/grid/rulers controls
  - Right panels: colors, layers, text, settings (floating/dockable/collapsible)
  - Floating menu: File operations, undo/redo
  - Status bar: tool name, cursor position, zoom, current color
  - Dialogs: print preview, recent files, generic dialog

- Classes in `app.js`
  - `HistoryManager`
    - Ring buffer of serialized canvas snapshots with undo/redo
    - Limit configurable via `MAX_HISTORY`
  - `Layer`
    - Offscreen canvas (`canvas`, `ctx`) plus metadata:
      - `id`, `name`, `visible`, `opacity`, `blendMode`, `effects`
    - Serialization: `toJSON()` → base64 PNG plus metadata
  - `CanvasEngine`
    - Owns:
      - Visible canvas element
      - Array of `Layer` instances and active layer index
      - Composite offscreen canvas for rendering
      - Tool state (current tool, brush settings, text settings)
      - View state (zoom, pan)
      - Selection state (rectangle, freeform, crop)
      - Gesture state (pointer map for pinch zoom)
    - Responsibilities:
      - Pointer handling and coordinate transforms
      - Tool-specific drawing (pencil, brush, eraser, shapes, spray, bucket, eyedropper, text)
      - Layers and blend modes
      - Selection and crop
      - Filters and image adjustments
      - Transformations (flip, rotate, resize with interpolation)
      - History snapshots and undo/redo
      - Project serialization/deserialization
      - Image exports (PNG, JPG, SVG, PDF view)
  - `UI`
    - Initializes DOM references and wiring
    - Bridges user interactions to `CanvasEngine`
      - Tool switching, layer controls, color and text settings
      - File operations and autosave
      - Workspace presets
      - Accessibility toggles
      - Keyboard shortcuts and global commands
    - Manages:
      - Floating panels (drag, dock/undock, collapse)
      - Context menu actions
      - Notifications and dialogs
      - Recent files metadata (localStorage)
      - Localization based on `TRANSLATIONS`

### Data Flow

- Input events
  - Pointer events on canvas → `CanvasEngine.onPointerDown/Move/Up`
  - Keyboard events → `UI.handleKeydown` → engine methods
  - UI widgets (buttons, sliders, select boxes) → `UI.attachUIEvents` → engine + UI updates

- Drawing pipeline
  - Active tool sees pointer events and updates active layer canvas
  - `getCompositeContext()` composites all visible layers into an offscreen canvas
  - `render()` applies current transform (zoom/pan) and draws composite onto the visible canvas

- History
  - After finishing a drawing operation or transformation:
    - `pushHistory()` serializes the composite image as PNG data URL and pushes onto `HistoryManager`
  - Undo/redo:
    - `undo()`/`redo()` retrieve close states and redraw onto base layer, then re-render

- Projects
  - `toProjectJSON()`:
    - Serializes width, height, each layer’s PNG data and metadata, active layer, zoom, pan
  - `fromProjectJSON()`:
    - Rebuilds layers, rehydrates images, restores view state, resets history

## Tools and Drawing Engine

### Tool identifiers

`TOOL` enum:
- `pencil`, `brush`, `eraser`
- `line`, `rectangle`, `ellipse`, `polygon`
- `text`, `spray`, `bucket`, `eyedropper`
- `select-rect`, `select-free`, `crop`, `pan`

### Pointer handling and coordinates

- Canvas is rendered with transform:
  - `ctx.setTransform(zoom, 0, 0, zoom, panX, panY)`
- Pointer client coordinates are converted to layer coordinates via:
  - Subtract canvas DOM bounding rect and pan offsets, then divide by zoom

### Tools behavior

- Pencil/Brush/Eraser
  - Freehand strokes with round caps and joins
  - Eraser uses `destination-out` composite mode

- Spray
  - Random points around the cursor within brush radius

- Line/Rectangle/Ellipse/Polygon
  - Live preview during drag using strokes on the visible canvas (temporary dashed shape)
  - Final shape committed to active layer on pointer up

- Text
  - Pointer up triggers text dialog
  - Options:
    - Font family, size, bold, italic, underline
    - Alignment (left, center, right)
    - Effects: none, shadow, outline

- Fill bucket
  - Flood fill on active layer using a color tolerance threshold

- Eyedropper
  - Picks color from composite image at pointer position
  - Updates primary color and recent colors

- Selection / Crop
  - Rectangle selection and freeform selection maintain selection bounds
  - Crop:
    - Drag to define crop rectangle
    - On release, all layers are cropped and engine width/height updated
    - Zoom and pan reset

- Pan
  - Drag canvas by adjusting `panX`/`panY`

## Layers System

- Each layer is an offscreen canvas; layers are composited in order
- Per-layer properties:
  - Opacity
  - Blend mode (normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, soft-light, hard-light)
  - Effects flag (none/shadow/glow/outline – currently used as metadata)
- Layer operations:
  - Add, duplicate, delete
  - Merge active layer down into layer beneath

## Filters and Image Manipulation

- Implemented in `CanvasEngine.applyFilter` by manipulating ImageData:
  - Blur (3×3 convolution)
  - Sharpen
  - Emboss
  - Edge detection
  - Brightness adjustment
  - Contrast adjustment
  - Hue shift (via RGB → HSL → RGB)
  - Saturation boost (via HSL)

- Transformations:
  - `flipHorizontal`, `flipVertical`
  - `rotate(deg)` – rotates active layer around center
  - `resizeCanvas(width, height, method)`:
    - Resizes each layer canvas
    - Interpolation methods:
      - `nearest`: disables smoothing
      - `low`, `medium`, `high`: map to `imageSmoothingQuality`

## File Operations and Autosave

- Project format:
  - JSON object with dimensions, layers (inline PNG), active layer ID, zoom, pan
  - Saved to:
    - `localStorage` for autosave key
    - Downloaded `.sigma.json` file via “Save As”
- Load:
  - File input dialog accepts JSON-based project files and rebuilds project
- Export:
  - PNG and JPG via canvas `toDataURL`
  - SVG wrapper embedding PNG as an `<image>` node
  - PDF export:
    - Creates an HTML document embedding PNG and opens in new tab
    - Users print to PDF via browser
- Print:
  - Print preview dialog shows PNG image; “Print” calls `window.print()`
- Recent files:
  - Metadata list in `localStorage` under `RECENTS_KEY`
  - Dialog shows recent file names and timestamps

## UI, Animations, and Themes

- Modern visual design using:
  - CSS variables for themes and state
  - Rounded corners, glassmorphism, soft shadows
  - Hover elevation and scale transitions
  - Panel and menu entrance animations (`panelIn`, `menuIn`, `toastIn`)

- Panels:
  - Draggable via pointer events on headers
  - Dock/undock toggles between static and floating modes
  - Collapsible bodies for compact layout

- Workspace presets:
  - Default, Illustration, Minimal
  - Control which panels are expanded/collapsed

- Themes:
  - Light, Dark, Midnight, High-contrast
  - Implemented via body classes changing CSS variables

- UI scale:
  - Global CSS variable `--ui-scale`, bound to range slider

## Accessibility

- Keyboard support:
  - Global keyboard shortcuts for tools, zoom, undo/redo, filters, transforms, resize
  - Native tab ordering for buttons, inputs, and selects
- ARIA and semantics:
  - Landmarks and roles (header, toolbar, main, status bar, menu, dialogs)
  - Status area (`statusHint`) used as live region for screen reader hints
- High contrast mode:
  - Dedicated theme with high-contrast colors and borders
- Reduced motion:
  - `prefers-reduced-motion` media query minimizes animation durations

## Internationalization

- `TRANSLATIONS` object contains string dictionaries for:
  - English (`en`)
  - Spanish (`es`)
  - French (`fr`)
- Elements with `data-i18n` and `data-i18n-title` are updated when language changes
- Tooltips and labels are localized; status messages reuse translation keys when possible

## Touch, Stylus, and Gestures

- Pointer Events are used for unified input:
  - Mouse, touch, pen
- Gestures:
  - Pinch zoom with two contact points (distance mapped to zoom factor)
  - Pan via dedicated Pan tool
  - Double-tap to reset view

## Performance and Memory

- Only one visible canvas; layers are offscreen canvases
- Composite canvas reused across renders
- History limit controls memory use; earlier states are discarded beyond limit
- Flood fill uses minimal bookkeeping with a visited set to limit reprocessing
- Image operations performed on ImageData buffers reused per filter application

## Extensibility

Potential extension points:
- Additional tools:
  - Add new tool identifier, toolbar button, and handling in pointer methods
- More filters:
  - Extend `applyFilter` with new filter names and kernels
- Layer effects:
  - Use `layer.effects` flag to customize rendering in `getCompositeContext`
- Extra export formats:
  - Add new export handlers in the File menu and implement corresponding engine method

