# Sigma Paint – User Manual

## 1. Introduction

Sigma Paint is a modern drawing application inspired by Windows Paint. It focuses on:
- A clean, minimal interface
- Smooth animations and micro-interactions
- Layers, filters, and advanced tools
- Themeable UI and accessibility options

You can use it for quick sketches, annotations, UI mockups, or more detailed illustrations.

## 2. Getting Started

### 2.1 Opening the app

You can start Sigma Paint in either of these ways:
- Open `index.html` directly in a modern browser (Chrome, Firefox, Safari, Edge)
- Or serve the folder with a static web server and browse to the local URL

No installation or build step is required.

### 2.2 Basic layout

The main screen contains:
- Top bar:
  - Application name and logo
  - Workspace presets
  - Theme selector
  - Language selector
  - UI scale slider
- Left toolbar:
  - Buttons for drawing, shapes, selection, and other tools
- Center workspace:
  - Rulers at the top and left
  - Optional grid overlay
  - Canvas in the middle
- Right panels:
  - Colors
  - Layers
  - Text settings
  - Settings and accessibility
- Bottom status bar:
  - Current tool
  - Cursor position
  - Zoom level
  - Current color and hints

## 3. Canvas Basics

### 3.1 Creating a new document

- Open the File menu
- Choose “New”
- Optionally confirm resetting the current canvas

### 3.2 Zoom and pan

- Zoom in/out:
  - Use the mouse wheel while holding Ctrl (or use zoom controls)
  - Keyboard:
    - `+` zooms in
    - `-` zooms out
    - `0` resets zoom and pan
- Pan:
  - Select the Pan tool in the toolbar (hand icon)
  - Drag the canvas to move it

### 3.3 Grid and guides

- Toggle grid visibility in the workspace controls
- Adjust grid spacing:
  - Use the grid spacing input in the Settings panel
- Toggle guides (crosshair / alignment guides) from the same area

## 4. Drawing Tools

All tools are available in the left toolbar. Select a tool by clicking the icon or using keyboard shortcuts.

### 4.1 Pencil, brush, and eraser

- Pencil:
  - Draws thin, precise lines
- Brush:
  - Draws thicker, smoother strokes
- Eraser:
  - Erases strokes and shapes on the active layer

Shared options:
- Brush size slider in the Colors panel
- Opacity slider for transparency
- Primary color input for stroke color

### 4.2 Shapes (line, rectangle, ellipse, polygon)

- Select Line, Rectangle, Ellipse, or Polygon tool
- Click and drag on the canvas to preview the shape
- Release the mouse to commit the shape to the active layer

Tips:
- Use zoom and grid for precise alignment
- Combine shapes on multiple layers for complex compositions

### 4.3 Spray paint

- Select the Spray tool
- Click and hold to spray paint around the cursor
- Brush size controls the spray radius

### 4.4 Fill bucket

- Select the Fill Bucket tool
- Click on an area to fill with the primary color
- Fill operates on the active layer

### 4.5 Eyedropper (color picker)

- Select the Eyedropper tool
- Click anywhere on the canvas to pick that pixel color
- The primary color updates, and the picked color is added to recent colors

### 4.6 Selection tools

- Rectangle selection:
  - Select the rectangular selection tool
  - Click and drag to select a rectangular region
- Freeform selection:
  - Select the freeform selection tool
  - Draw around the area you want to select

Selections are displayed as an overlay. They can be used as a reference for cropping and transformations.

### 4.7 Crop tool

- Select the Crop tool
- Click and drag to define a crop rectangle
- Release to apply the crop:
  - All layers are cropped to the selected area
  - Canvas size is updated
  - Zoom and pan reset

### 4.8 Text tool

- Select the Text tool
- Click on the canvas where you want to add text
- A dialog appears where you can type your text

Text options:
- Font family and size
- Bold, italic, underline toggles
- Text effects:
  - None
  - Shadow
  - Outline
- Fill color (primary color)

## 5. Layers

### 5.1 Layers panel

The Layers panel on the right lets you:
- Create new layers
- Select the active layer
- Toggle visibility
- Adjust opacity
- Choose blend mode (Normal, Multiply, Screen, etc.)
- Apply layer effects metadata

### 5.2 Managing layers

- Add a layer:
  - Use the “Add layer” button in the Layers panel
- Duplicate a layer:
  - From the context menu (right-click on canvas or layer area)
- Delete a layer:
  - Use the delete action in the context menu or Layers panel
- Merge down:
  - Merge the active layer into the one below to reduce layer count

Layers are composited in order from bottom to top.

## 6. Filters and Image Adjustments

### 6.1 Applying filters

You can apply filters to the active layer using:
- Toolbar buttons (if configured) or
- Keyboard shortcuts (see section 9)

Available filters:
- Blur
- Sharpen
- Emboss
- Edge detection
- Brightness adjust
- Contrast adjust
- Hue shift
- Saturation boost

Filters modify the image data of the active layer. You can undo if you do not like the result.

### 6.2 Transformations

- Flip:
  - Flip horizontally or vertically via keyboard shortcuts
- Rotate:
  - Rotate left or right via keyboard shortcuts
- Resize:
  - Open the resize dialog:
    - Keyboard: Ctrl+Shift+R
    - Choose new width and height
    - Choose interpolation method:
      - `nearest`, `low`, `medium`, or `high`

You can always undo transformations using the undo shortcut.

## 7. File Operations

### 7.1 Saving projects

- Quick save:
  - Use “Save” in the File menu
  - Saves to browser storage (autosave slot)
- Save As:
  - Use “Save As” in the File menu
  - Downloads a `.sigma.json` project file that preserves layers and settings

### 7.2 Loading projects

- Use “Open” in the File menu
- Choose a previously saved `.json` / `.sigma.json` project file
- The canvas and layers are restored

### 7.3 Exporting images

You can export the current canvas to:
- PNG
- JPG
- SVG (PNG embedded in SVG wrapper)
- HTML-based PDF view (for printing to PDF using the browser)

Use the corresponding export entries in the File menu. Exports flatten all layers.

### 7.4 Recent files

- Use the “Recent files” option in the File menu
- Recent project metadata (name and date) is stored in the browser and listed in the dialog

### 7.5 Printing

- Use the “Print” option
- A print preview dialog appears
- Confirm to open the browser print dialog and print the image (or print to PDF)

## 8. Autosave and Productivity

### 8.1 Autosave

- In the Settings panel:
  - Enable/disable autosave toggle
  - Set autosave interval in minutes
- When enabled, the current project is periodically saved to browser storage
- On reload, Sigma Paint restores the last autosaved project if available

### 8.2 Keyboard shortcuts overview

General:
- Ctrl+Z – Undo
- Ctrl+Y – Redo

Tools:
- B – Brush
- P – Pencil
- E – Eraser
- L – Line
- R – Rectangle
- O – Ellipse
- G – Fill bucket
- T – Text
- I – Eyedropper
- V – Pan

View:
- + – Zoom in
- - – Zoom out
- 0 – Reset view

Filters:
- Ctrl+1 – Blur
- Ctrl+2 – Sharpen
- Ctrl+3 – Emboss
- Ctrl+4 – Edge detection
- Ctrl+5 – Brightness adjust
- Ctrl+6 – Contrast adjust
- Ctrl+7 – Hue shift
- Ctrl+8 – Saturation boost

Transforms:
- Ctrl+Shift+H – Flip horizontally
- Ctrl+Shift+V – Flip vertically
- Ctrl+Shift+D – Rotate right
- Ctrl+Shift+L – Rotate left
- Ctrl+Shift+R – Open resize dialog

## 9. Themes, Language, and Workspace

### 9.1 Themes

Use the theme selector in the header to switch between:
- Light
- Dark
- Midnight
- High contrast

Themes change the entire color scheme of the app.

### 9.2 Languages

Use the language selector to switch the interface language. Currently available:
- English
- Spanish
- French

Most labels, tooltips, and menu entries update immediately.

### 9.3 Workspace presets

Use workspace preset buttons to quickly rearrange panels:
- Default:
  - Common panels visible; text and settings collapsed
- Illustration:
  - All panels visible for maximum control
- Minimal:
  - Most panels collapsed for a distraction-free canvas

## 10. Accessibility and UI Scaling

### 10.1 High contrast

- Enable the high contrast toggle in the Settings panel or select the high-contrast theme
- Enhances text and control visibility with strong foreground/background contrast

### 10.2 Screen reader hints

- Enable the screen reader toggle in the Settings panel
- The status hint area under the canvas will describe:
  - Active tool
  - Significant actions (e.g., filters applied, exports)

### 10.3 Keyboard navigation

- Use Tab/Shift+Tab to move between controls
- Use arrow keys and Enter/Space where appropriate
- Keyboard shortcuts provide fast access to tools and operations

### 10.4 UI scaling

- Use the UI scale slider in the header
- Increases or decreases overall UI size to improve readability and usability

## 11. Tips and Best Practices

- Use layers to separate different parts of your drawing (background, subject, annotations)
- Save frequently using “Save As” to avoid data loss
- Use autosave if you are working for long sessions
- Try different themes to find one that works best with your monitor and environment
- If performance slows with very large canvases, consider:
  - Reducing canvas size via the resize dialog
  - Flattening layers by merging down

## 12. Troubleshooting

- Nothing draws on the canvas:
  - Ensure the active layer is visible and not fully transparent
  - Check that a drawing tool (not selection or crop) is active
- Colors look different than expected:
  - Check the active theme and high-contrast mode
  - Verify opacity is set to 100% if you want solid colors
- App does not respond to shortcuts:
  - Click inside the canvas or app window to ensure it has focus
  - Some browser or OS-level shortcuts may conflict on certain platforms

If something goes wrong, try:
- Undoing recent actions
- Reloading the page (autosave may restore your work)
- Reopening a previously saved project file

