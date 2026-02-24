const TOOL = {
  PENCIL: "pencil",
  BRUSH: "brush",
  ERASER: "eraser",
  LINE: "line",
  RECTANGLE: "rectangle",
  ELLIPSE: "ellipse",
  POLYGON: "polygon",
  TEXT: "text",
  SPRAY: "spray",
  BUCKET: "bucket",
  EYEDROPPER: "eyedropper",
  SELECT_RECT: "select-rect",
  SELECT_FREE: "select-free",
  CROP: "crop",
  PAN: "pan"
};

const MAX_HISTORY = 80;
const AUTOSAVE_KEY = "sigma-paint-autosave";
const RECENTS_KEY = "sigma-paint-recent-files";

const TRANSLATIONS = {
  en: {
    "label.language": "Language",
    "label.theme": "Theme",
    "label.uiScale": "UI scale",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.midnight": "Midnight",
    "theme.highContrast": "High contrast",
    "group.brushes": "Brushes",
    "group.shapes": "Shapes",
    "group.selection": "Selection",
    "group.colorText": "Color & text",
    "tool.pencil": "Pencil",
    "tool.brush": "Brush",
    "tool.spray": "Spray",
    "tool.eraser": "Eraser",
    "tool.line": "Line",
    "tool.rectangle": "Rectangle",
    "tool.ellipse": "Ellipse",
    "tool.polygon": "Polygon",
    "tool.selectRect": "Rectangle selection",
    "tool.selectFree": "Free selection",
    "tool.crop": "Crop",
    "tool.pan": "Pan",
    "tool.bucket": "Fill bucket",
    "tool.eyedropper": "Color picker",
    "tool.text": "Text",
    "panel.colors": "Colors",
    "panel.layers": "Layers",
    "panel.text": "Text",
    "panel.settings": "Settings",
    "label.opacity": "Opacity",
    "label.brushSize": "Brush size",
    "label.palette": "Palette",
    "button.add": "Add",
    "label.recentColors": "Recent",
    "button.resetView": "Reset",
    "button.grid": "Grid",
    "button.rulers": "Rulers",
    "label.layerOpacity": "Layer opacity",
    "label.blendMode": "Blend mode",
    "label.layerEffects": "Effects",
    "effect.none": "None",
    "effect.shadow": "Shadow",
    "effect.glow": "Glow",
    "effect.outline": "Outline",
    "label.fontFamily": "Font",
    "label.fontSize": "Size",
    "label.textEffects": "Text effects",
    "settings.autosave": "Autosave",
    "settings.autosaveEnable": "Enable autosave",
    "settings.autosaveInterval": "Interval (seconds)",
    "settings.grid": "Grid",
    "settings.gridSpacing": "Grid spacing (px)",
    "settings.accessibility": "Accessibility",
    "settings.highContrast": "High contrast mode",
    "settings.screenReader": "Screen reader hints",
    "menu.file": "File",
    "menu.new": "New",
    "menu.open": "Open",
    "menu.save": "Save",
    "menu.saveAs": "Save as",
    "menu.exportPng": "Export PNG",
    "menu.exportJpg": "Export JPG",
    "menu.exportSvg": "Export SVG",
    "menu.exportPdf": "Export PDF",
    "menu.print": "Print",
    "menu.recentFiles": "Recent files",
    "menu.undo": "Undo",
    "menu.redo": "Redo",
    "menu.cut": "Cut",
    "menu.copy": "Copy",
    "menu.paste": "Paste",
    "menu.duplicateLayer": "Duplicate layer",
    "menu.deleteLayer": "Delete layer",
    "button.print": "Print",
    "dialog.printPreviewTitle": "Print preview",
    "dialog.recentsTitle": "Recent files",
    "button.clearRecent": "Clear",
    "status.tool": "Tool",
    "status.zoom": "Zoom",
    "status.position": "Position"
  },
  es: {
    "label.language": "Idioma",
    "label.theme": "Tema",
    "label.uiScale": "Escala UI",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.midnight": "Medianoche",
    "theme.highContrast": "Alto contraste",
    "group.brushes": "Pinceles",
    "group.shapes": "Formas",
    "group.selection": "Selección",
    "group.colorText": "Color y texto",
    "tool.pencil": "Lápiz",
    "tool.brush": "Pincel",
    "tool.spray": "Aerosol",
    "tool.eraser": "Borrador",
    "tool.line": "Línea",
    "tool.rectangle": "Rectángulo",
    "tool.ellipse": "Círculo",
    "tool.polygon": "Polígono",
    "tool.selectRect": "Selección rectangular",
    "tool.selectFree": "Selección libre",
    "tool.crop": "Recortar",
    "tool.pan": "Mover",
    "tool.bucket": "Relleno",
    "tool.eyedropper": "Cuentagotas",
    "tool.text": "Texto",
    "panel.colors": "Colores",
    "panel.layers": "Capas",
    "panel.text": "Texto",
    "panel.settings": "Ajustes",
    "label.opacity": "Opacidad",
    "label.brushSize": "Tamaño",
    "label.palette": "Paleta",
    "button.add": "Añadir",
    "label.recentColors": "Recientes",
    "button.resetView": "Reiniciar",
    "button.grid": "Cuadrícula",
    "button.rulers": "Reglas",
    "label.layerOpacity": "Opacidad",
    "label.blendMode": "Modo fusión",
    "label.layerEffects": "Efectos",
    "effect.none": "Ninguno",
    "effect.shadow": "Sombra",
    "effect.glow": "Brillo",
    "effect.outline": "Contorno",
    "label.fontFamily": "Fuente",
    "label.fontSize": "Tamaño",
    "label.textEffects": "Efectos texto",
    "settings.autosave": "Autoguardado",
    "settings.autosaveEnable": "Activar autoguardado",
    "settings.autosaveInterval": "Intervalo (segundos)",
    "settings.grid": "Cuadrícula",
    "settings.gridSpacing": "Espaciado (px)",
    "settings.accessibility": "Accesibilidad",
    "settings.highContrast": "Modo alto contraste",
    "settings.screenReader": "Mensajes lector pantalla",
    "menu.file": "Archivo",
    "menu.new": "Nuevo",
    "menu.open": "Abrir",
    "menu.save": "Guardar",
    "menu.saveAs": "Guardar como",
    "menu.exportPng": "Exportar PNG",
    "menu.exportJpg": "Exportar JPG",
    "menu.exportSvg": "Exportar SVG",
    "menu.exportPdf": "Exportar PDF",
    "menu.print": "Imprimir",
    "menu.recentFiles": "Recientes",
    "menu.undo": "Deshacer",
    "menu.redo": "Rehacer",
    "menu.cut": "Cortar",
    "menu.copy": "Copiar",
    "menu.paste": "Pegar",
    "menu.duplicateLayer": "Duplicar capa",
    "menu.deleteLayer": "Eliminar capa",
    "button.print": "Imprimir",
    "dialog.printPreviewTitle": "Vista previa",
    "dialog.recentsTitle": "Archivos recientes",
    "button.clearRecent": "Limpiar",
    "status.tool": "Herramienta",
    "status.zoom": "Zoom",
    "status.position": "Posición"
  },
  fr: {
    "label.language": "Langue",
    "label.theme": "Thème",
    "label.uiScale": "Échelle UI",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "theme.midnight": "Minuit",
    "theme.highContrast": "Contraste élevé",
    "group.brushes": "Outils",
    "group.shapes": "Formes",
    "group.selection": "Sélection",
    "group.colorText": "Couleur et texte",
    "tool.pencil": "Crayon",
    "tool.brush": "Pinceau",
    "tool.spray": "Aérosol",
    "tool.eraser": "Gomme",
    "tool.line": "Ligne",
    "tool.rectangle": "Rectangle",
    "tool.ellipse": "Cercle",
    "tool.polygon": "Polygone",
    "tool.selectRect": "Sélection rectangle",
    "tool.selectFree": "Sélection libre",
    "tool.crop": "Recadrer",
    "tool.pan": "Déplacer",
    "tool.bucket": "Remplir",
    "tool.eyedropper": "Pipette",
    "tool.text": "Texte",
    "panel.colors": "Couleurs",
    "panel.layers": "Calques",
    "panel.text": "Texte",
    "panel.settings": "Paramètres",
    "label.opacity": "Opacité",
    "label.brushSize": "Taille",
    "label.palette": "Palette",
    "button.add": "Ajouter",
    "label.recentColors": "Récents",
    "button.resetView": "Réinitialiser",
    "button.grid": "Grille",
    "button.rulers": "Règles",
    "label.layerOpacity": "Opacité",
    "label.blendMode": "Mode de fusion",
    "label.layerEffects": "Effets",
    "effect.none": "Aucun",
    "effect.shadow": "Ombre",
    "effect.glow": "Lueur",
    "effect.outline": "Contour",
    "label.fontFamily": "Police",
    "label.fontSize": "Taille",
    "label.textEffects": "Effets texte",
    "settings.autosave": "Sauvegarde auto",
    "settings.autosaveEnable": "Activer",
    "settings.autosaveInterval": "Intervalle (secondes)",
    "settings.grid": "Grille",
    "settings.gridSpacing": "Espacement (px)",
    "settings.accessibility": "Accessibilité",
    "settings.highContrast": "Mode contraste élevé",
    "settings.screenReader": "Messages lecteur",
    "menu.file": "Fichier",
    "menu.new": "Nouveau",
    "menu.open": "Ouvrir",
    "menu.save": "Enregistrer",
    "menu.saveAs": "Enregistrer sous",
    "menu.exportPng": "Exporter PNG",
    "menu.exportJpg": "Exporter JPG",
    "menu.exportSvg": "Exporter SVG",
    "menu.exportPdf": "Exporter PDF",
    "menu.print": "Imprimer",
    "menu.recentFiles": "Récents",
    "menu.undo": "Annuler",
    "menu.redo": "Rétablir",
    "menu.cut": "Couper",
    "menu.copy": "Copier",
    "menu.paste": "Coller",
    "menu.duplicateLayer": "Dupliquer calque",
    "menu.deleteLayer": "Supprimer calque",
    "button.print": "Imprimer",
    "dialog.printPreviewTitle": "Aperçu avant impression",
    "dialog.recentsTitle": "Fichiers récents",
    "button.clearRecent": "Vider",
    "status.tool": "Outil",
    "status.zoom": "Zoom",
    "status.position": "Position"
  }
};

class HistoryManager {
  constructor(limit = MAX_HISTORY) {
    this.limit = limit;
    this.stack = [];
    this.index = -1;
  }

  push(state) {
    if (this.index < this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.index + 1);
    }
    this.stack.push(state);
    if (this.stack.length > this.limit) {
      this.stack.shift();
    } else {
      this.index++;
    }
  }

  canUndo() {
    return this.index > 0;
  }

  canRedo() {
    return this.index < this.stack.length - 1;
  }

  undo() {
    if (!this.canUndo()) return null;
    this.index--;
    return this.stack[this.index];
  }

  redo() {
    if (!this.canRedo()) return null;
    this.index++;
    return this.stack[this.index];
  }
}

class Layer {
  constructor(width, height, name, id) {
    this.id = id;
    this.name = name;
    this.visible = true;
    this.opacity = 1;
    this.blendMode = "normal";
    this.effects = "none";
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      visible: this.visible,
      opacity: this.opacity,
      blendMode: this.blendMode,
      effects: this.effects,
      dataUrl: this.canvas.toDataURL("image/png")
    };
  }
}

class CanvasEngine {
  constructor(canvas, statusCallbacks) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { willReadFrequently: true });
    this.width = 1600;
    this.height = 900;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.layers = [];
    this.activeLayerIndex = 0;
    this.history = new HistoryManager();
    this.isPointerDown = false;
    this.currentTool = TOOL.PENCIL;
    this.brushSize = 6;
    this.opacity = 1;
    this.primaryColor = "#1f6feb";
    this.secondaryColor = "#ffffff";
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.selection = null;
    this.freeSelectionPath = [];
    this.cropRect = null;
    this.statusCallbacks = statusCallbacks;
    this.gesturePointers = new Map();
    this.lastTapTime = 0;
    this.textSettings = {
      family: "system-ui",
      size: 24,
      bold: false,
      italic: false,
      underline: false,
      align: "left",
      effect: "none"
    };
    this.createBaseLayer();
    this.attachEvents();
    this.pushHistory();
  }

  createBaseLayer() {
    const base = new Layer(this.width, this.height, "Background", crypto.randomUUID());
    base.ctx.fillStyle = "#ffffff";
    base.ctx.fillRect(0, 0, this.width, this.height);
    this.layers.push(base);
  }

  get activeLayer() {
    return this.layers[this.activeLayerIndex];
  }

  setTool(tool) {
    this.currentTool = tool;
    if (this.statusCallbacks && this.statusCallbacks.onToolChange) {
      this.statusCallbacks.onToolChange(tool);
    }
  }

  setBrushSettings({ size, opacity, primaryColor, secondaryColor }) {
    if (size != null) this.brushSize = size;
    if (opacity != null) this.opacity = opacity;
    if (primaryColor) this.primaryColor = primaryColor;
    if (secondaryColor) this.secondaryColor = secondaryColor;
    if (this.statusCallbacks && this.statusCallbacks.onColorChange) {
      this.statusCallbacks.onColorChange(this.primaryColor, this.secondaryColor);
    }
  }

  setTextSettings(settings) {
    this.textSettings = Object.assign({}, this.textSettings, settings);
  }

  setZoom(zoom) {
    const clamped = Math.min(Math.max(zoom, 0.2), 4);
    this.zoom = clamped;
    if (this.statusCallbacks && this.statusCallbacks.onZoomChange) {
      this.statusCallbacks.onZoomChange(this.zoom);
    }
    this.render();
  }

  resetView() {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    if (this.statusCallbacks && this.statusCallbacks.onZoomChange) {
      this.statusCallbacks.onZoomChange(this.zoom);
    }
    this.render();
  }

  addLayer(name) {
    const layer = new Layer(this.width, this.height, name, crypto.randomUUID());
    this.layers.splice(this.activeLayerIndex + 1, 0, layer);
    this.activeLayerIndex++;
    this.pushHistory();
    return layer;
  }

  duplicateLayer() {
    const current = this.activeLayer;
    const copy = new Layer(this.width, this.height, current.name + " copy", crypto.randomUUID());
    copy.ctx.drawImage(current.canvas, 0, 0);
    copy.visible = current.visible;
    copy.opacity = current.opacity;
    copy.blendMode = current.blendMode;
    copy.effects = current.effects;
    this.layers.splice(this.activeLayerIndex + 1, 0, copy);
    this.activeLayerIndex++;
    this.pushHistory();
    return copy;
  }

  deleteLayer() {
    if (this.layers.length <= 1) return;
    this.layers.splice(this.activeLayerIndex, 1);
    this.activeLayerIndex = Math.max(0, this.activeLayerIndex - 1);
    this.pushHistory();
  }

  mergeActiveDown() {
    if (this.activeLayerIndex === 0) return;
    const upper = this.layers[this.activeLayerIndex];
    const lower = this.layers[this.activeLayerIndex - 1];
    lower.ctx.save();
    lower.ctx.globalAlpha = upper.opacity;
    lower.ctx.globalCompositeOperation = upper.blendMode || "normal";
    lower.ctx.drawImage(upper.canvas, 0, 0);
    lower.ctx.restore();
    this.layers.splice(this.activeLayerIndex, 1);
    this.activeLayerIndex--;
    this.pushHistory();
  }

  setActiveLayerById(id) {
    const idx = this.layers.findIndex(l => l.id === id);
    if (idx !== -1) {
      this.activeLayerIndex = idx;
      this.render();
    }
  }

  setLayerProperties(id, { opacity, blendMode, effects, visible }) {
    const layer = this.layers.find(l => l.id === id);
    if (!layer) return;
    if (opacity != null) layer.opacity = opacity;
    if (blendMode) layer.blendMode = blendMode;
    if (effects) layer.effects = effects;
    if (visible != null) layer.visible = visible;
    this.render();
  }

  canvasToLayerCoordinates(evt) {
    const rect = this.canvas.getBoundingClientRect();
    const x = (evt.clientX - rect.left - this.panX) / this.zoom;
    const y = (evt.clientY - rect.top - this.panY) / this.zoom;
    return { x, y };
  }

  attachEvents() {
    this.canvas.addEventListener("pointerdown", evt => this.onPointerDown(evt));
    window.addEventListener("pointermove", evt => this.onPointerMove(evt));
    window.addEventListener("pointerup", evt => this.onPointerUp(evt));
    window.addEventListener("pointercancel", evt => this.onPointerUp(evt));
    this.canvas.addEventListener("wheel", evt => this.onWheel(evt), { passive: false });
  }

  onPointerDown(evt) {
    this.canvas.setPointerCapture(evt.pointerId);
    this.isPointerDown = true;
    const now = performance.now();
    if (now - this.lastTapTime < 280) {
      this.resetView();
    }
    this.lastTapTime = now;
    this.gesturePointers.set(evt.pointerId, { x: evt.clientX, y: evt.clientY });
    if (this.gesturePointers.size === 2) {
      const [a, b] = Array.from(this.gesturePointers.values());
      this.initialPinchDistance = Math.hypot(b.x - a.x, b.y - a.y);
      this.initialZoom = this.zoom;
    }
    const pos = this.canvasToLayerCoordinates(evt);
    this.lastX = pos.x;
    this.lastY = pos.y;
    if (this.statusCallbacks && this.statusCallbacks.onPointerMove) {
      this.statusCallbacks.onPointerMove(pos.x, pos.y);
    }
    if (this.currentTool === TOOL.PAN) return;
    if (this.currentTool === TOOL.TEXT) return;
    if (this.currentTool === TOOL.SELECT_RECT) {
      this.selection = { startX: pos.x, startY: pos.y, endX: pos.x, endY: pos.y };
      return;
    }
    if (this.currentTool === TOOL.SELECT_FREE) {
      this.freeSelectionPath = [{ x: pos.x, y: pos.y }];
      return;
    }
    if (this.currentTool === TOOL.CROP) {
      this.cropRect = { startX: pos.x, startY: pos.y, endX: pos.x, endY: pos.y };
      if (this.statusCallbacks && this.statusCallbacks.onSelectionChange) {
        this.statusCallbacks.onSelectionChange(this.cropRect);
      }
      return;
    }
    const ctx = this.activeLayer.ctx;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = this.brushSize;
    ctx.globalAlpha = this.opacity;
    if (this.currentTool === TOOL.ERASER) {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = this.primaryColor;
      ctx.fillStyle = this.primaryColor;
    }
    if ([TOOL.PENCIL, TOOL.BRUSH, TOOL.ERASER, TOOL.SPRAY].includes(this.currentTool)) {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
    ctx.restore();
    if (this.currentTool === TOOL.BUCKET) {
      this.fillAt(pos.x, pos.y);
      this.pushHistory();
      this.render();
    }
    if (this.currentTool === TOOL.EYEDROPPER) {
      this.pickColorAt(pos.x, pos.y);
    }
  }

  onPointerMove(evt) {
    if (this.gesturePointers.has(evt.pointerId)) {
      this.gesturePointers.set(evt.pointerId, { x: evt.clientX, y: evt.clientY });
      if (this.gesturePointers.size === 2 && this.initialPinchDistance) {
        const [a, b] = Array.from(this.gesturePointers.values());
        const dist = Math.hypot(b.x - a.x, b.y - a.y);
        const factor = dist / this.initialPinchDistance;
        this.setZoom(this.initialZoom * factor);
      }
    }
    const pos = this.canvasToLayerCoordinates(evt);
    if (this.statusCallbacks && this.statusCallbacks.onPointerMove) {
      this.statusCallbacks.onPointerMove(pos.x, pos.y);
    }
    if (!this.isPointerDown) return;
    if (this.currentTool === TOOL.PAN) {
      this.panX += evt.movementX;
      this.panY += evt.movementY;
      this.render();
      return;
    }
    if (this.currentTool === TOOL.SELECT_RECT && this.selection) {
      this.selection.endX = pos.x;
      this.selection.endY = pos.y;
      if (this.statusCallbacks && this.statusCallbacks.onSelectionChange) {
        this.statusCallbacks.onSelectionChange(this.selection);
      }
      return;
    }
    if (this.currentTool === TOOL.SELECT_FREE) {
      this.freeSelectionPath.push({ x: pos.x, y: pos.y });
      if (this.statusCallbacks && this.statusCallbacks.onFreeSelectionChange) {
        this.statusCallbacks.onFreeSelectionChange(this.freeSelectionPath);
      }
      return;
    }
    if (this.currentTool === TOOL.CROP && this.cropRect) {
      this.cropRect.endX = pos.x;
      this.cropRect.endY = pos.y;
      if (this.statusCallbacks && this.statusCallbacks.onSelectionChange) {
        this.statusCallbacks.onSelectionChange(this.cropRect);
      }
      return;
    }
    const ctx = this.activeLayer.ctx;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = this.brushSize;
    ctx.globalAlpha = this.opacity;
    if (this.currentTool === TOOL.ERASER) {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = this.primaryColor;
      ctx.fillStyle = this.primaryColor;
    }
    if (this.currentTool === TOOL.PENCIL || this.currentTool === TOOL.BRUSH || this.currentTool === TOOL.ERASER) {
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (this.currentTool === TOOL.SPRAY) {
      const count = 10 + this.brushSize;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * this.brushSize;
        const sx = pos.x + Math.cos(angle) * radius;
        const sy = pos.y + Math.sin(angle) * radius;
        ctx.fillRect(sx, sy, 1, 1);
      }
    } else if ([TOOL.LINE, TOOL.RECTANGLE, TOOL.ELLIPSE, TOOL.POLYGON].includes(this.currentTool)) {
      this.render();
      const tempCtx = this.ctx;
      tempCtx.save();
      tempCtx.setTransform(this.zoom, 0, 0, this.zoom, this.panX, this.panY);
      tempCtx.lineWidth = this.brushSize;
      tempCtx.strokeStyle = this.primaryColor;
      tempCtx.setLineDash([4, 4]);
      tempCtx.beginPath();
      if (this.currentTool === TOOL.LINE) {
        tempCtx.moveTo(this.lastX, this.lastY);
        tempCtx.lineTo(pos.x, pos.y);
      } else if (this.currentTool === TOOL.RECTANGLE) {
        const w = pos.x - this.lastX;
        const h = pos.y - this.lastY;
        tempCtx.rect(this.lastX, this.lastY, w, h);
      } else if (this.currentTool === TOOL.ELLIPSE) {
        const rx = (pos.x - this.lastX) / 2;
        const ry = (pos.y - this.lastY) / 2;
        const cx = this.lastX + rx;
        const cy = this.lastY + ry;
        tempCtx.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, 0, Math.PI * 2);
      } else if (this.currentTool === TOOL.POLYGON) {
        const sides = 6;
        const dx = pos.x - this.lastX;
        const dy = pos.y - this.lastY;
        const r = Math.hypot(dx, dy);
        for (let i = 0; i <= sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          const x = this.lastX + Math.cos(angle) * r;
          const y = this.lastY + Math.sin(angle) * r;
          if (i === 0) tempCtx.moveTo(x, y);
          else tempCtx.lineTo(x, y);
        }
      }
      tempCtx.stroke();
      tempCtx.restore();
    }
    ctx.restore();
    this.lastX = pos.x;
    this.lastY = pos.y;
    this.render(false);
  }

  onPointerUp(evt) {
    this.canvas.releasePointerCapture(evt.pointerId);
    this.gesturePointers.delete(evt.pointerId);
    if (!this.isPointerDown) return;
    this.isPointerDown = false;
    if (this.currentTool === TOOL.TEXT) {
      const pos = this.canvasToLayerCoordinates(evt);
      if (this.statusCallbacks && this.statusCallbacks.onTextRequested) {
        this.statusCallbacks.onTextRequested(pos.x, pos.y, this.textSettings);
      }
      return;
    }
    if (this.currentTool === TOOL.LINE || this.currentTool === TOOL.RECTANGLE || this.currentTool === TOOL.ELLIPSE || this.currentTool === TOOL.POLYGON) {
      const pos = this.canvasToLayerCoordinates(evt);
      const ctx = this.activeLayer.ctx;
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.brushSize;
      ctx.strokeStyle = this.primaryColor;
      ctx.fillStyle = this.primaryColor;
      if (this.currentTool === TOOL.LINE) {
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      } else if (this.currentTool === TOOL.RECTANGLE) {
        const w = pos.x - this.lastX;
        const h = pos.y - this.lastY;
        ctx.strokeRect(this.lastX, this.lastY, w, h);
      } else if (this.currentTool === TOOL.ELLIPSE) {
        const rx = (pos.x - this.lastX) / 2;
        const ry = (pos.y - this.lastY) / 2;
        const cx = this.lastX + rx;
        const cy = this.lastY + ry;
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (this.currentTool === TOOL.POLYGON) {
        const sides = 6;
        const dx = pos.x - this.lastX;
        const dy = pos.y - this.lastY;
        const r = Math.hypot(dx, dy);
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          const x = this.lastX + Math.cos(angle) * r;
          const y = this.lastY + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();
    }
    if (this.currentTool === TOOL.SELECT_RECT || this.currentTool === TOOL.SELECT_FREE) {
      return;
    }
    if (this.currentTool === TOOL.CROP && this.cropRect) {
      this.cropToRect(this.cropRect);
      this.cropRect = null;
      this.selection = null;
      if (this.statusCallbacks && this.statusCallbacks.onSelectionChange) {
        this.statusCallbacks.onSelectionChange(null);
      }
      this.pushHistory();
      this.render();
      return;
    }
    this.pushHistory();
    this.render();
  }

  onWheel(evt) {
    if (evt.ctrlKey || evt.metaKey) {
      evt.preventDefault();
      const delta = evt.deltaY < 0 ? 0.05 : -0.05;
      this.setZoom(this.zoom + delta);
    }
  }

  applyText(text, x, y) {
    if (!text) return;
    const ctx = this.activeLayer.ctx;
    const size = this.textSettings.size;
    const parts = [];
    if (this.textSettings.italic) parts.push("italic");
    if (this.textSettings.bold) parts.push("bold");
    parts.push(size + "px");
    parts.push(this.textSettings.family);
    ctx.save();
    ctx.font = parts.join(" ");
    ctx.fillStyle = this.primaryColor;
    ctx.textAlign = this.textSettings.align;
    ctx.textBaseline = "top";
    if (this.textSettings.effect === "shadow") {
      ctx.shadowColor = "rgba(0,0,0,0.4)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    }
    ctx.fillText(text, x, y);
    if (this.textSettings.effect === "outline") {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#000000";
      ctx.strokeText(text, x, y);
    }
    if (this.textSettings.underline) {
      const width = ctx.measureText(text).width;
      const underlineY = y + size + 2;
      ctx.beginPath();
      ctx.moveTo(x, underlineY);
      ctx.lineTo(x + (this.textSettings.align === "center" ? width / 2 : width), underlineY);
      ctx.strokeStyle = this.primaryColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
    this.pushHistory();
    this.render();
  }

  pickColorAt(x, y) {
    const composite = this.getCompositeContext();
    const data = composite.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
    const r = data[0].toString(16).padStart(2, "0");
    const g = data[1].toString(16).padStart(2, "0");
    const b = data[2].toString(16).padStart(2, "0");
    const color = "#" + r + g + b;
    this.primaryColor = color;
    if (this.statusCallbacks && this.statusCallbacks.onColorChange) {
      this.statusCallbacks.onColorChange(this.primaryColor, this.secondaryColor, true);
    }
  }

  fillAt(x, y) {
    const layer = this.activeLayer;
    const ctx = layer.ctx;
    const image = ctx.getImageData(0, 0, this.width, this.height);
    const targetIndex = (Math.floor(y) * this.width + Math.floor(x)) * 4;
    const targetColor = image.data.slice(targetIndex, targetIndex + 4);
    const fillColor = this.hexToRgba(this.primaryColor, this.opacity);
    if (this.colorsMatch(targetColor, fillColor)) return;
    const stack = [[Math.floor(x), Math.floor(y)]];
    const visited = new Set();
    const tolerance = 16;
    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (cx < 0 || cy < 0 || cx >= this.width || cy >= this.height) continue;
      const idx = (cy * this.width + cx) * 4;
      if (visited.has(idx)) continue;
      visited.add(idx);
      const current = image.data.slice(idx, idx + 4);
      if (!this.colorsClose(current, targetColor, tolerance)) continue;
      image.data[idx] = fillColor[0];
      image.data[idx + 1] = fillColor[1];
      image.data[idx + 2] = fillColor[2];
      image.data[idx + 3] = 255;
      stack.push([cx + 1, cy]);
      stack.push([cx - 1, cy]);
      stack.push([cx, cy + 1]);
      stack.push([cx, cy - 1]);
    }
    ctx.putImageData(image, 0, 0);
  }

  hexToRgba(hex, alpha) {
    let h = hex.replace("#", "");
    if (h.length === 3) {
      h = h.split("").map(c => c + c).join("");
    }
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return [r, g, b, alpha != null ? alpha * 255 : 255];
  }

  colorsMatch(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }

  colorsClose(a, b, tolerance) {
    return Math.abs(a[0] - b[0]) <= tolerance && Math.abs(a[1] - b[1]) <= tolerance && Math.abs(a[2] - b[2]) <= tolerance;
  }

  getCompositeContext() {
    if (!this.compositeCanvas) {
      this.compositeCanvas = document.createElement("canvas");
      this.compositeCanvas.width = this.width;
      this.compositeCanvas.height = this.height;
      this.compositeCtx = this.compositeCanvas.getContext("2d");
    }
    const ctx = this.compositeCtx;
    ctx.clearRect(0, 0, this.width, this.height);
    for (const layer of this.layers) {
      if (!layer.visible) continue;
      ctx.save();
      ctx.globalAlpha = layer.opacity;
      ctx.globalCompositeOperation = layer.blendMode || "normal";
      ctx.drawImage(layer.canvas, 0, 0);
      ctx.restore();
    }
    return ctx;
  }

  render(updateComposite = true) {
    const ctx = this.ctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.setTransform(this.zoom, 0, 0, this.zoom, this.panX, this.panY);
    if (updateComposite) {
      this.getCompositeContext();
    }
    ctx.drawImage(this.compositeCanvas, 0, 0);
  }

  pushHistory() {
    const ctx = this.getCompositeContext();
    const dataUrl = ctx.canvas.toDataURL("image/png");
    this.history.push({ dataUrl });
    if (this.statusCallbacks && this.statusCallbacks.onHistoryChange) {
      this.statusCallbacks.onHistoryChange(this.history.canUndo(), this.history.canRedo());
    }
  }

  undo() {
    const state = this.history.undo();
    if (!state) return;
    this.restoreFromHistory(state);
  }

  redo() {
    const state = this.history.redo();
    if (!state) return;
    this.restoreFromHistory(state);
  }

  restoreFromHistory(state) {
    const image = new Image();
    image.onload = () => {
      const base = this.layers[0];
      base.ctx.clearRect(0, 0, this.width, this.height);
      base.ctx.drawImage(image, 0, 0, this.width, this.height);
      this.render();
      if (this.statusCallbacks && this.statusCallbacks.onHistoryChange) {
        this.statusCallbacks.onHistoryChange(this.history.canUndo(), this.history.canRedo());
      }
    };
    image.src = state.dataUrl;
  }

  applyFilter(filterName) {
    const compositeCtx = this.getCompositeContext();
    const image = compositeCtx.getImageData(0, 0, this.width, this.height);
    const data = image.data;
    if (filterName === "brightness") {
      const delta = 20;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, data[i] + delta);
        data[i + 1] = Math.min(255, data[i + 1] + delta);
        data[i + 2] = Math.min(255, data[i + 2] + delta);
      }
    } else if (filterName === "contrast") {
      const factor = 1.1;
      const intercept = 128 * (1 - factor);
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, Math.max(0, data[i] * factor + intercept));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * factor + intercept));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * factor + intercept));
      }
    } else if (filterName === "hue" || filterName === "saturation") {
      const hueDelta = 20;
      const saturationFactor = 1.2;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        let [h, s, l] = this.rgbToHsl(r, g, b);
        if (filterName === "hue") {
          h = (h + hueDelta) % 360;
        } else {
          s = Math.min(1, s * saturationFactor);
        }
        const [nr, ng, nb] = this.hslToRgb(h, s, l);
        data[i] = nr;
        data[i + 1] = ng;
        data[i + 2] = nb;
      }
    } else if (filterName === "blur" || filterName === "sharpen" || filterName === "emboss" || filterName === "edges") {
      const kernelMap = {
        blur: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        sharpen: [0, -1, 0, -1, 5, -1, 0, -1, 0],
        emboss: [-2, -1, 0, -1, 1, 1, 0, 1, 2],
        edges: [0, 1, 0, 1, -4, 1, 0, 1, 0]
      };
      const kernel = kernelMap[filterName];
      const side = 3;
      const half = Math.floor(side / 2);
      const src = data.slice();
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          let r = 0;
          let g = 0;
          let b = 0;
          for (let ky = 0; ky < side; ky++) {
            for (let kx = 0; kx < side; kx++) {
              const px = Math.min(this.width - 1, Math.max(0, x + kx - half));
              const py = Math.min(this.height - 1, Math.max(0, y + ky - half));
              const srcIndex = (py * this.width + px) * 4;
              const w = kernel[ky * side + kx];
              r += src[srcIndex] * w;
              g += src[srcIndex + 1] * w;
              b += src[srcIndex + 2] * w;
            }
          }
          const dstIndex = (y * this.width + x) * 4;
          data[dstIndex] = Math.min(255, Math.max(0, r));
          data[dstIndex + 1] = Math.min(255, Math.max(0, g));
          data[dstIndex + 2] = Math.min(255, Math.max(0, b));
        }
      }
    }
    compositeCtx.putImageData(image, 0, 0);
    const base = this.layers[0];
    base.ctx.clearRect(0, 0, this.width, this.height);
    base.ctx.drawImage(this.compositeCanvas, 0, 0);
    this.pushHistory();
    this.render();
  }

  flipHorizontal() {
    const ctx = this.activeLayer.ctx;
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    const temp = document.createElement("canvas");
    temp.width = this.width;
    temp.height = this.height;
    temp.getContext("2d").drawImage(this.activeLayer.canvas, 0, 0);
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.drawImage(temp, 0, 0);
    ctx.restore();
    this.pushHistory();
    this.render();
  }

  flipVertical() {
    const ctx = this.activeLayer.ctx;
    ctx.save();
    ctx.translate(0, this.height);
    ctx.scale(1, -1);
    const temp = document.createElement("canvas");
    temp.width = this.width;
    temp.height = this.height;
    temp.getContext("2d").drawImage(this.activeLayer.canvas, 0, 0);
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.drawImage(temp, 0, 0);
    ctx.restore();
    this.pushHistory();
    this.render();
  }

  rotate(deg) {
    const radians = (deg * Math.PI) / 180;
    const temp = document.createElement("canvas");
    temp.width = this.width;
    temp.height = this.height;
    const tctx = temp.getContext("2d");
    tctx.translate(this.width / 2, this.height / 2);
    tctx.rotate(radians);
    tctx.drawImage(this.activeLayer.canvas, -this.width / 2, -this.height / 2);
    const ctx = this.activeLayer.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.drawImage(temp, 0, 0);
    this.pushHistory();
    this.render();
  }

  cropToRect(rect) {
    const x = Math.round(Math.min(rect.startX, rect.endX));
    const y = Math.round(Math.min(rect.startY, rect.endY));
    const w = Math.round(Math.abs(rect.endX - rect.startX));
    const h = Math.round(Math.abs(rect.endY - rect.startY));
    if (w <= 0 || h <= 0) return;
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
    if (this.compositeCanvas) {
      this.compositeCanvas.width = w;
      this.compositeCanvas.height = h;
    }
    this.layers.forEach(layer => {
      const temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      const tctx = temp.getContext("2d");
      tctx.drawImage(layer.canvas, x, y, w, h, 0, 0, w, h);
      layer.canvas.width = w;
      layer.canvas.height = h;
      layer.ctx.clearRect(0, 0, w, h);
      layer.ctx.drawImage(temp, 0, 0);
    });
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
  }

  resizeCanvas(newWidth, newHeight, method) {
    const width = Math.max(64, Math.min(4096, Math.round(newWidth)));
    const height = Math.max(64, Math.min(4096, Math.round(newHeight)));
    if (width === this.width && height === this.height) return;
    this.layers.forEach(layer => {
      const temp = document.createElement("canvas");
      temp.width = width;
      temp.height = height;
      const tctx = temp.getContext("2d");
      if (method === "nearest") {
        tctx.imageSmoothingEnabled = false;
      } else {
        tctx.imageSmoothingEnabled = true;
        tctx.imageSmoothingQuality = method === "high" ? "high" : method === "medium" ? "medium" : "low";
      }
      tctx.drawImage(layer.canvas, 0, 0, width, height);
      layer.canvas.width = width;
      layer.canvas.height = height;
      layer.ctx.clearRect(0, 0, width, height);
      layer.ctx.drawImage(temp, 0, 0);
    });
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    if (this.compositeCanvas) {
      this.compositeCanvas.width = width;
      this.compositeCanvas.height = height;
    }
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.pushHistory();
    this.render();
  }

  rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h *= 60;
    }
    return [h, s, l];
  }

  hslToRgb(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const hh = h / 60;
    const x = c * (1 - Math.abs((hh % 2) - 1));
    let r1 = 0;
    let g1 = 0;
    let b1 = 0;
    if (hh >= 0 && hh < 1) {
      r1 = c;
      g1 = x;
    } else if (hh >= 1 && hh < 2) {
      r1 = x;
      g1 = c;
    } else if (hh >= 2 && hh < 3) {
      g1 = c;
      b1 = x;
    } else if (hh >= 3 && hh < 4) {
      g1 = x;
      b1 = c;
    } else if (hh >= 4 && hh < 5) {
      r1 = x;
      b1 = c;
    } else if (hh >= 5 && hh < 6) {
      r1 = c;
      b1 = x;
    }
    const m = l - c / 2;
    const r = Math.round((r1 + m) * 255);
    const g = Math.round((g1 + m) * 255);
    const b = Math.round((b1 + m) * 255);
    return [r, g, b];


  toProjectJSON() {
    return {
      width: this.width,
      height: this.height,
      layers: this.layers.map(l => l.toJSON()),
      activeLayerId: this.activeLayer.id,
      zoom: this.zoom,
      panX: this.panX,
      panY: this.panY
    };
  }

  async fromProjectJSON(json) {
    this.width = json.width;
    this.height = json.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.layers = [];
    for (const layerData of json.layers) {
      const layer = new Layer(this.width, this.height, layerData.name, layerData.id);
      layer.visible = layerData.visible;
      layer.opacity = layerData.opacity;
      layer.blendMode = layerData.blendMode;
      layer.effects = layerData.effects;
      await new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          layer.ctx.clearRect(0, 0, this.width, this.height);
          layer.ctx.drawImage(img, 0, 0, this.width, this.height);
          resolve();
        };
        img.src = layerData.dataUrl;
      });
      this.layers.push(layer);
    }
    const idx = this.layers.findIndex(l => l.id === json.activeLayerId);
    this.activeLayerIndex = idx === -1 ? 0 : idx;
    this.zoom = json.zoom || 1;
    this.panX = json.panX || 0;
    this.panY = json.panY || 0;
    this.history = new HistoryManager();
    this.pushHistory();
    this.render();
  }

  exportImage(mimeType, quality) {
    const ctx = this.getCompositeContext();
    return ctx.canvas.toDataURL(mimeType, quality);
  }

  exportSVG() {
    const dataUrl = this.exportImage("image/png");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><image href="${dataUrl}" width="${this.width}" height="${this.height}"/></svg>`;
    return "data:image/svg+xml;base64," + btoa(svg);
  }

  exportPDFDataUrl() {
    const png = this.exportImage("image/png");
    const html = `<html><head><title>Sigma Paint Export</title></head><body style="margin:0;padding:0;display:flex;align-items:center;justify-content:center;background:#fff;"><img src="${png}" style="max-width:100%;max-height:100%;"/></body></html>`;
    return "data:text/html;base64," + btoa(unescape(encodeURIComponent(html)));
  }
}

class UI {
  constructor() {
    this.root = document.getElementById("app");
    this.canvas = document.getElementById("drawingCanvas");
    this.canvasGrid = document.getElementById("canvasGrid");
    this.canvasGuides = document.getElementById("canvasGuides");
    this.canvasSelection = document.getElementById("canvasSelection");
    this.notificationContainer = document.getElementById("notificationContainer");
    this.contextMenu = document.getElementById("contextMenu");
    this.fileMenuButton = document.getElementById("fileMenuButton");
    this.fileMenuDropdown = document.getElementById("fileMenuDropdown");
    this.languageSelect = document.getElementById("languageSelect");
    this.themeSelect = document.getElementById("themeSelect");
    this.uiScaleRange = document.getElementById("uiScaleRange");
    this.zoomLabel = document.getElementById("zoomLabel");
    this.statusTool = document.getElementById("statusTool");
    this.statusPosition = document.getElementById("statusPosition");
    this.statusZoom = document.getElementById("statusZoom");
    this.statusHint = document.getElementById("statusHint");
    this.statusColor = document.getElementById("statusColor");
    this.layersList = document.getElementById("layersList");
    this.layerOpacityRange = document.getElementById("layerOpacityRange");
    this.blendModeSelect = document.getElementById("blendModeSelect");
    this.layerEffectsSelect = document.getElementById("layerEffectsSelect");
    this.autosaveToggle = document.getElementById("autosaveToggle");
    this.autosaveIntervalInput = document.getElementById("autosaveInterval");
    this.gridSpacingInput = document.getElementById("gridSpacingInput");
    this.highContrastToggle = document.getElementById("highContrastToggle");
    this.screenReaderToggle = document.getElementById("screenReaderToggle");
    this.primaryColorInput = document.getElementById("colorPrimary");
    this.secondaryColorInput = document.getElementById("colorSecondary");
    this.opacityRange = document.getElementById("opacityRange");
    this.brushSizeRange = document.getElementById("brushSizeRange");
    this.paletteGrid = document.getElementById("paletteGrid");
    this.recentColorsGrid = document.getElementById("recentColorsGrid");
    this.addPaletteColorButton = document.getElementById("addPaletteColor");
    this.fontFamilySelect = document.getElementById("fontFamilySelect");
    this.fontSizeInput = document.getElementById("fontSizeInput");
    this.toggleBoldButton = document.getElementById("toggleBold");
    this.toggleItalicButton = document.getElementById("toggleItalic");
    this.toggleUnderlineButton = document.getElementById("toggleUnderline");
    this.textEffectsSelect = document.getElementById("textEffectsSelect");
    this.printPreviewDialog = document.getElementById("printPreviewDialog");
    this.printPreviewImage = document.getElementById("printPreviewImage");
    this.recentFilesDialog = document.getElementById("recentFilesDialog");
    this.recentFilesList = document.getElementById("recentFilesList");
    this.genericDialog = document.getElementById("genericDialog");
    this.genericDialogTitle = document.getElementById("genericDialogTitle");
    this.genericDialogBody = document.getElementById("genericDialogBody");
    this.genericDialogFooter = document.getElementById("genericDialogFooter");
    this.historyUndoButton = document.getElementById("historyUndoButton");
    this.historyRedoButton = document.getElementById("historyRedoButton");
    this.toolLabelMap = {
      [TOOL.PENCIL]: "tool.pencil",
      [TOOL.BRUSH]: "tool.brush",
      [TOOL.ERASER]: "tool.eraser",
      [TOOL.LINE]: "tool.line",
      [TOOL.RECTANGLE]: "tool.rectangle",
      [TOOL.ELLIPSE]: "tool.ellipse",
      [TOOL.POLYGON]: "tool.polygon",
      [TOOL.TEXT]: "tool.text",
      [TOOL.SPRAY]: "tool.spray",
      [TOOL.BUCKET]: "tool.bucket",
      [TOOL.EYEDROPPER]: "tool.eyedropper",
      [TOOL.SELECT_RECT]: "tool.selectRect",
      [TOOL.SELECT_FREE]: "tool.selectFree",
      [TOOL.CROP]: "tool.crop",
      [TOOL.PAN]: "tool.pan"
    };
    this.currentLanguage = "en";
    this.palette = [];
    this.recentColors = [];
    this.autosaveTimer = null;
    this.recentFiles = this.loadRecents();
    this.engine = new CanvasEngine(this.canvas, {
      onToolChange: tool => this.updateToolStatus(tool),
      onZoomChange: zoom => this.updateZoom(zoom),
      onPointerMove: (x, y) => this.updatePosition(x, y),
      onColorChange: (primary, secondary, fromEyedropper) => this.updateColorStatus(primary, secondary, fromEyedropper),
      onTextRequested: (x, y, settings) => this.handleTextRequested(x, y, settings),
      onHistoryChange: (canUndo, canRedo) => this.updateHistoryButtons(canUndo, canRedo),
      onSelectionChange: selection => this.updateSelectionOverlay(selection),
      onFreeSelectionChange: path => this.updateFreeSelectionOverlay(path)
    });
    this.attachUIEvents();
    this.applyLanguage(this.currentLanguage);
    this.updateZoom(this.engine.zoom);
    this.updateColorStatus(this.engine.primaryColor, this.engine.secondaryColor);
    this.updateToolStatus(this.engine.currentTool);
    this.updateHistoryButtons(false, false);
    this.updateLayersList();
    this.restoreAutosave();
    this.configureAutosave();
    this.updateGridSpacing();
  }

  attachUIEvents() {
    document.querySelectorAll(".tool-button").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tool-button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.engine.setTool(btn.dataset.tool);
      });
    });
    document.querySelectorAll(".canvas-controls button").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        if (action === "zoom-in") this.engine.setZoom(this.engine.zoom + 0.1);
        if (action === "zoom-out") this.engine.setZoom(this.engine.zoom - 0.1);
        if (action === "zoom-reset") this.engine.resetView();
        if (action === "toggle-grid") this.toggleGrid();
        if (action === "toggle-rulers") this.toggleGuides();
      });
    });
    this.fileMenuButton.addEventListener("click", () => {
      this.fileMenuDropdown.classList.toggle("open");
    });
    this.fileMenuDropdown.addEventListener("click", evt => {
      const btn = evt.target.closest("button[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      this.handleFileAction(action);
      this.fileMenuDropdown.classList.remove("open");
    });
    this.historyUndoButton.addEventListener("click", () => this.engine.undo());
    this.historyRedoButton.addEventListener("click", () => this.engine.redo());
    this.languageSelect.addEventListener("change", () => {
      this.applyLanguage(this.languageSelect.value);
    });
    this.themeSelect.addEventListener("change", () => {
      this.applyTheme(this.themeSelect.value);
    });
    this.uiScaleRange.addEventListener("input", () => {
      const scale = parseFloat(this.uiScaleRange.value);
      this.root.style.setProperty("--ui-scale", scale.toString());
    });
    this.gridSpacingInput.addEventListener("change", () => {
      this.updateGridSpacing();
    });
    this.primaryColorInput.addEventListener("input", () => {
      this.engine.setBrushSettings({ primaryColor: this.primaryColorInput.value });
      this.addRecentColor(this.primaryColorInput.value);
    });
    this.secondaryColorInput.addEventListener("input", () => {
      this.engine.setBrushSettings({ secondaryColor: this.secondaryColorInput.value });
    });
    this.opacityRange.addEventListener("input", () => {
      this.engine.setBrushSettings({ opacity: parseFloat(this.opacityRange.value) });
    });
    this.brushSizeRange.addEventListener("input", () => {
      this.engine.setBrushSettings({ size: parseInt(this.brushSizeRange.value, 10) });
    });
    this.addPaletteColorButton.addEventListener("click", () => {
      this.addPaletteColor(this.primaryColorInput.value);
    });
    this.layerOpacityRange.addEventListener("input", () => {
      const active = this.engine.activeLayer;
      this.engine.setLayerProperties(active.id, { opacity: parseFloat(this.layerOpacityRange.value) });
      this.updateLayersList();
    });
    this.blendModeSelect.addEventListener("change", () => {
      const active = this.engine.activeLayer;
      this.engine.setLayerProperties(active.id, { blendMode: this.blendModeSelect.value });
      this.updateLayersList();
    });
    this.layerEffectsSelect.addEventListener("change", () => {
      const active = this.engine.activeLayer;
      this.engine.setLayerProperties(active.id, { effects: this.layerEffectsSelect.value });
      this.updateLayersList();
    });
    document.querySelectorAll(".layers-toolbar button").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        if (action === "layer-add") {
          const layer = this.engine.addLayer("Layer " + (this.engine.layers.length + 1));
          this.updateLayersList();
          this.scrollLayersTo(layer.id);
        }
        if (action === "layer-duplicate") {
          const layer = this.engine.duplicateLayer();
          this.updateLayersList();
          this.scrollLayersTo(layer.id);
        }
        if (action === "layer-delete") {
          this.engine.deleteLayer();
          this.updateLayersList();
        }
        if (action === "layer-merge") {
          this.engine.mergeActiveDown();
          this.updateLayersList();
        }
      });
    });
    document.querySelectorAll(".panel").forEach(panel => {
      const header = panel.querySelector(".panel-header");
      const collapseBtn = panel.querySelector("[data-action='toggle-collapse']");
      const dockBtn = panel.querySelector("[data-action='toggle-dock']");
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startLeft = 0;
      let startTop = 0;
      header.addEventListener("pointerdown", evt => {
        if (evt.target === collapseBtn || evt.target === dockBtn) return;
        dragging = true;
        panel.setPointerCapture(evt.pointerId);
        startX = evt.clientX;
        startY = evt.clientY;
        const rect = panel.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        panel.style.position = "fixed";
      });
      header.addEventListener("pointermove", evt => {
        if (!dragging) return;
        const dx = evt.clientX - startX;
        const dy = evt.clientY - startY;
        panel.style.left = startLeft + dx + "px";
        panel.style.top = startTop + dy + "px";
      });
      header.addEventListener("pointerup", evt => {
        dragging = false;
        panel.releasePointerCapture(evt.pointerId);
      });
      if (collapseBtn) {
        collapseBtn.addEventListener("click", () => {
          panel.classList.toggle("panel-collapsed");
        });
      }
      if (dockBtn) {
        dockBtn.addEventListener("click", () => {
          panel.classList.toggle("panel-floating");
          panel.classList.toggle("panel-docked");
          panel.style.position = "";
          panel.style.left = "";
          panel.style.top = "";
        });
      }
    });
    this.autosaveToggle.addEventListener("change", () => this.configureAutosave());
    this.autosaveIntervalInput.addEventListener("change", () => this.configureAutosave());
    this.highContrastToggle.addEventListener("change", () => {
      if (this.highContrastToggle.checked) {
        this.applyTheme("high-contrast");
        this.themeSelect.value = "high-contrast";
      } else {
        this.applyTheme(this.themeSelect.value);
      }
    });
    this.fontFamilySelect.addEventListener("change", () => this.updateTextSettings());
    this.fontSizeInput.addEventListener("change", () => this.updateTextSettings());
    this.toggleBoldButton.addEventListener("click", () => this.toggleTextStyle(this.toggleBoldButton, "bold"));
    this.toggleItalicButton.addEventListener("click", () => this.toggleTextStyle(this.toggleItalicButton, "italic"));
    this.toggleUnderlineButton.addEventListener("click", () => this.toggleTextStyle(this.toggleUnderlineButton, "underline"));
    this.textEffectsSelect.addEventListener("change", () => this.updateTextSettings());
    document.querySelectorAll("#textPanel [data-align]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#textPanel [data-align]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.engine.setTextSettings({ align: btn.dataset.align });
      });
    });
    document.querySelectorAll("dialog [data-action='dialog-close']").forEach(btn => {
      btn.addEventListener("click", evt => {
        const dialog = evt.target.closest("dialog");
        dialog.close();
      });
    });
    this.printPreviewDialog.querySelector("[data-action='print-dialog']").addEventListener("click", () => {
      window.print();
    });
    this.recentFilesDialog.querySelector("[data-action='clear-recents']").addEventListener("click", () => {
      this.recentFiles = [];
      this.saveRecents();
      this.renderRecents();
    });
    window.addEventListener("click", evt => {
      if (!this.contextMenu.contains(evt.target)) {
        this.contextMenu.classList.remove("open");
      }
      if (!this.fileMenuDropdown.contains(evt.target) && evt.target !== this.fileMenuButton) {
        this.fileMenuDropdown.classList.remove("open");
      }
    });
    this.canvas.addEventListener("contextmenu", evt => {
      evt.preventDefault();
      this.showContextMenu(evt.clientX, evt.clientY);
    });
    this.contextMenu.addEventListener("click", evt => {
      const btn = evt.target.closest("button[data-action]");
      if (!btn) return;
      this.handleContextAction(btn.dataset.action);
      this.contextMenu.classList.remove("open");
    });
    document.querySelectorAll("[data-workspace]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-workspace]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.applyWorkspacePreset(btn.dataset.workspace);
      });
    });
    window.addEventListener("keydown", evt => this.handleKeydown(evt));
  }

  handleKeydown(evt) {
    const key = evt.key.toLowerCase();
    const ctrl = evt.ctrlKey || evt.metaKey;
    if (ctrl && key === "z") {
      evt.preventDefault();
      this.engine.undo();
      return;
    }
    if (ctrl && (key === "y" || (key === "z" && evt.shiftKey))) {
      evt.preventDefault();
      this.engine.redo();
      return;
    }
    if (ctrl && key === "s") {
      evt.preventDefault();
      this.handleFileAction("file-save");
      return;
    }
    if (ctrl && key === "o") {
      evt.preventDefault();
      this.handleFileAction("file-open");
      return;
    }
    if (ctrl && key === "n") {
      evt.preventDefault();
      this.handleFileAction("file-new");
      return;
    }
    if (key === "b") this.setToolByShortcut(TOOL.BRUSH);
    if (key === "p") this.setToolByShortcut(TOOL.PENCIL);
    if (key === "e") this.setToolByShortcut(TOOL.ERASER);
    if (key === "l") this.setToolByShortcut(TOOL.LINE);
    if (key === "r") this.setToolByShortcut(TOOL.RECTANGLE);
    if (key === "o") this.setToolByShortcut(TOOL.ELLIPSE);
    if (key === "g") this.setToolByShortcut(TOOL.BUCKET);
    if (key === "t") this.setToolByShortcut(TOOL.TEXT);
    if (key === "i") this.setToolByShortcut(TOOL.EYEDROPPER);
    if (key === "v") this.setToolByShortcut(TOOL.PAN);
    if (key === "+") this.engine.setZoom(this.engine.zoom + 0.1);
    if (key === "-") this.engine.setZoom(this.engine.zoom - 0.1);
    if (key === "0") this.engine.resetView();
    if (ctrl && key === "1") this.engine.applyFilter("blur");
    if (ctrl && key === "2") this.engine.applyFilter("sharpen");
    if (ctrl && key === "3") this.engine.applyFilter("emboss");
    if (ctrl && key === "4") this.engine.applyFilter("edges");
    if (ctrl && key === "5") this.engine.applyFilter("brightness");
    if (ctrl && key === "6") this.engine.applyFilter("contrast");
    if (ctrl && key === "7") this.engine.applyFilter("hue");
    if (ctrl && key === "8") this.engine.applyFilter("saturation");
    if (ctrl && evt.shiftKey && key === "h") this.engine.flipHorizontal();
    if (ctrl && evt.shiftKey && key === "v") this.engine.flipVertical();
    if (ctrl && evt.shiftKey && key === "d") this.engine.rotate(90);
    if (ctrl && evt.shiftKey && key === "l") this.engine.rotate(-90);
    if (ctrl && evt.shiftKey && key === "r") {
      evt.preventDefault();
      this.openResizeDialog();
    }
  }

  setToolByShortcut(tool) {
    this.engine.setTool(tool);
    document.querySelectorAll(".tool-button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tool === tool);
    });
  }

  applyLanguage(lang) {
    this.currentLanguage = lang;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key]) {
        el.title = dict[key];
      }
    });
  }

  applyTheme(theme) {
    this.root.classList.remove("app-theme-light", "app-theme-dark", "app-theme-midnight", "app-theme-high-contrast");
    if (theme === "dark") this.root.classList.add("app-theme-dark");
    else if (theme === "midnight") this.root.classList.add("app-theme-midnight");
    else if (theme === "high-contrast") this.root.classList.add("app-theme-high-contrast");
    else this.root.classList.add("app-theme-light");
  }

  toggleGrid() {
    this.canvasGrid.classList.toggle("visible");
  }

  toggleGuides() {
    this.canvasGuides.classList.toggle("visible");
  }

  updateGridSpacing() {
    const spacing = Math.max(4, Math.min(512, parseInt(this.gridSpacingInput.value, 10) || 32));
    this.gridSpacingInput.value = spacing.toString();
    this.canvasGrid.style.backgroundSize = spacing + "px " + spacing + "px";
  }

  updateZoom(zoom) {
    const percentage = Math.round(zoom * 100);
    this.zoomLabel.textContent = percentage + "%";
    this.statusZoom.textContent = percentage + "%";
  }

  updateToolStatus(tool) {
    this.statusTool.textContent = tool;
    if (this.screenReaderToggle.checked) {
      const dict = TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
      const key = this.toolLabelMap[tool];
      if (key && dict[key]) {
        this.statusHint.textContent = dict[key] + " active";
      }
    } else {
      this.statusHint.textContent = "";
    }
  }

  updatePosition(x, y) {
    this.statusPosition.textContent = "x: " + Math.round(x) + ", y: " + Math.round(y);
  }

  updateColorStatus(primary, secondary, fromEyedropper) {
    this.primaryColorInput.value = primary;
    this.secondaryColorInput.value = secondary;
    this.statusColor.textContent = primary.toUpperCase();
    if (fromEyedropper) {
      this.addRecentColor(primary);
      this.showNotification("Picked " + primary.toUpperCase(), "success");
    }
  }

  updateHistoryButtons(canUndo, canRedo) {
    this.historyUndoButton.disabled = !canUndo;
    this.historyRedoButton.disabled = !canRedo;
  }

  addPaletteColor(color) {
    if (!this.palette.includes(color)) {
      this.palette.push(color);
      this.renderPalette();
    }
  }

  addRecentColor(color) {
    this.recentColors = [color, ...this.recentColors.filter(c => c !== color)].slice(0, 12);
    this.renderRecentColors();
  }

  renderPalette() {
    this.paletteGrid.innerHTML = "";
    this.palette.forEach(color => {
      const div = document.createElement("div");
      div.className = "palette-swatch";
      div.style.background = color;
      div.addEventListener("click", () => {
        this.engine.setBrushSettings({ primaryColor: color });
        this.primaryColorInput.value = color;
        this.addRecentColor(color);
      });
      this.paletteGrid.appendChild(div);
    });
  }

  renderRecentColors() {
    this.recentColorsGrid.innerHTML = "";
    this.recentColors.forEach(color => {
      const div = document.createElement("div");
      div.className = "palette-swatch";
      div.style.background = color;
      div.addEventListener("click", () => {
        this.engine.setBrushSettings({ primaryColor: color });
        this.primaryColorInput.value = color;
      });
      this.recentColorsGrid.appendChild(div);
    });
  }

  updateLayersList() {
    this.layersList.innerHTML = "";
    this.engine.layers.forEach(layer => {
      const li = document.createElement("li");
      li.className = "layer-item";
      li.dataset.id = layer.id;
      if (this.engine.activeLayer.id === layer.id) li.classList.add("active");
      const visibility = document.createElement("input");
      visibility.type = "checkbox";
      visibility.checked = layer.visible;
      visibility.addEventListener("change", () => {
        this.engine.setLayerProperties(layer.id, { visible: visibility.checked });
      });
      const nameSpan = document.createElement("span");
      nameSpan.className = "layer-item-name";
      nameSpan.textContent = layer.name;
      const preview = document.createElement("div");
      preview.className = "layer-item-preview";
      li.appendChild(visibility);
      li.appendChild(preview);
      li.appendChild(nameSpan);
      li.addEventListener("click", evt => {
        if (evt.target === visibility) return;
        this.engine.setActiveLayerById(layer.id);
        this.updateLayersList();
        this.layerOpacityRange.value = layer.opacity.toString();
        this.blendModeSelect.value = layer.blendMode;
        this.layerEffectsSelect.value = layer.effects;
      });
      this.layersList.appendChild(li);
    });
  }

  scrollLayersTo(id) {
    const el = this.layersList.querySelector('[data-id="' + id + '"]');
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  configureAutosave() {
    if (this.autosaveTimer) {
      clearInterval(this.autosaveTimer);
      this.autosaveTimer = null;
    }
    if (!this.autosaveToggle.checked) return;
    const seconds = Math.max(10, Math.min(600, parseInt(this.autosaveIntervalInput.value, 10) || 60));
    this.autosaveIntervalInput.value = seconds.toString();
    this.autosaveTimer = setInterval(() => {
      this.saveProject(AUTOSAVE_KEY, true);
    }, seconds * 1000);
  }

  restoreAutosave() {
    const json = localStorage.getItem(AUTOSAVE_KEY);
    if (!json) return;
    try {
      const project = JSON.parse(json);
      this.engine.fromProjectJSON(project);
      this.showNotification("Restored autosaved project", "success");
    } catch (e) {
    }
  }

  saveProject(storageKey, silent) {
    const project = this.engine.toProjectJSON();
    localStorage.setItem(storageKey, JSON.stringify(project));
    this.addRecentProjectMeta({ id: storageKey, name: "Untitled", date: new Date().toISOString() });
    if (!silent) this.showNotification("Project saved", "success");
  }

  handleFileAction(action) {
    if (action === "file-new") {
      this.engine = new CanvasEngine(this.canvas, this.engine.statusCallbacks);
      this.updateLayersList();
      this.showNotification("New project", "success");
      return;
    }
    if (action === "file-save") {
      this.saveProject(AUTOSAVE_KEY, false);
      return;
    }
    if (action === "file-save-as") {
      const project = this.engine.toProjectJSON();
      const blob = new Blob([JSON.stringify(project)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sigma-project.sigma.json";
      a.click();
      URL.revokeObjectURL(url);
      this.showNotification("Project exported", "success");
      return;
    }
    if (action === "file-open") {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json,.sigma.json,application/json";
      input.addEventListener("change", async () => {
        const file = input.files[0];
        if (!file) return;
        const text = await file.text();
        const json = JSON.parse(text);
        await this.engine.fromProjectJSON(json);
        this.updateLayersList();
        this.addRecentProjectMeta({ id: file.name + "-" + Date.now(), name: file.name, date: new Date().toISOString() });
        this.showNotification("Project loaded", "success");
      });
      input.click();
      return;
    }
    if (action === "file-export-png") {
      this.exportImage("image/png", "sigma-export.png");
      return;
    }
    if (action === "file-export-jpg") {
      this.exportImage("image/jpeg", "sigma-export.jpg");
      return;
    }
    if (action === "file-export-svg") {
      const url = this.engine.exportSVG();
      const a = document.createElement("a");
      a.href = url;
      a.download = "sigma-export.svg";
      a.click();
      return;
    }
    if (action === "file-export-pdf") {
      const url = this.engine.exportPDFDataUrl();
      window.open(url, "_blank");
      this.showNotification("Opened PDF view in new tab", "progress");
      return;
    }
    if (action === "file-print") {
      const png = this.engine.exportImage("image/png");
      this.printPreviewImage.src = png;
      this.printPreviewDialog.showModal();
      return;
    }
    if (action === "file-recents") {
      this.renderRecents();
      this.recentFilesDialog.showModal();
      return;
    }
  }

  exportImage(mimeType, filename) {
    const dataUrl = this.engine.exportImage(mimeType, 0.95);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    a.click();
    this.showNotification("Exported " + filename, "success");
  }

  showContextMenu(x, y) {
    this.contextMenu.style.left = x + "px";
    this.contextMenu.style.top = y + "px";
    this.contextMenu.classList.add("open");
  }

  handleContextAction(action) {
    if (action === "context-duplicate-layer") {
      const layer = this.engine.duplicateLayer();
      this.updateLayersList();
      this.scrollLayersTo(layer.id);
    }
    if (action === "context-delete-layer") {
      this.engine.deleteLayer();
      this.updateLayersList();
    }
  }

  applyWorkspacePreset(name) {
    if (name === "default") {
      document.getElementById("colorPanel").classList.remove("panel-collapsed");
      document.getElementById("layersPanel").classList.remove("panel-collapsed");
      document.getElementById("textPanel").classList.add("panel-collapsed");
      document.getElementById("settingsPanel").classList.add("panel-collapsed");
    }
    if (name === "illustration") {
      document.getElementById("colorPanel").classList.remove("panel-collapsed");
      document.getElementById("layersPanel").classList.remove("panel-collapsed");
      document.getElementById("textPanel").classList.remove("panel-collapsed");
      document.getElementById("settingsPanel").classList.remove("panel-collapsed");
    }
    if (name === "minimal") {
      document.getElementById("colorPanel").classList.add("panel-collapsed");
      document.getElementById("layersPanel").classList.add("panel-collapsed");
      document.getElementById("textPanel").classList.add("panel-collapsed");
      document.getElementById("settingsPanel").classList.add("panel-collapsed");
    }
  }

  showNotification(message, kind) {
    const div = document.createElement("div");
    div.className = "notification";
    if (kind === "success") div.classList.add("notification-success");
    if (kind === "error") div.classList.add("notification-error");
    if (kind === "progress") div.classList.add("notification-progress");
    const indicator = document.createElement("div");
    indicator.className = "notification-indicator";
    const text = document.createElement("div");
    text.className = "notification-message";
    text.textContent = message;
    const close = document.createElement("button");
    close.textContent = "×";
    close.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(indicator);
    div.appendChild(text);
    div.appendChild(close);
    this.notificationContainer.appendChild(div);
    setTimeout(() => {
      div.classList.add("fade-out");
      div.addEventListener("transitionend", () => div.remove(), { once: true });
    }, kind === "progress" ? 4000 : 2500);
  }

  handleTextRequested(x, y) {
    this.genericDialogTitle.textContent = "Insert text";
    this.genericDialogBody.innerHTML = "";
    this.genericDialogFooter.innerHTML = "";
    const textarea = document.createElement("textarea");
    textarea.rows = 4;
    textarea.style.width = "100%";
    this.genericDialogBody.appendChild(textarea);
    const ok = document.createElement("button");
    ok.className = "primary";
    ok.textContent = "Apply";
    ok.addEventListener("click", () => {
      this.engine.applyText(textarea.value, x, y);
      this.genericDialog.close();
    });
    const cancel = document.createElement("button");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => this.genericDialog.close());
    this.genericDialogFooter.appendChild(cancel);
    this.genericDialogFooter.appendChild(ok);
    this.genericDialog.showModal();
  }

  openResizeDialog() {
    this.genericDialogTitle.textContent = "Resize canvas";
    this.genericDialogBody.innerHTML = "";
    this.genericDialogFooter.innerHTML = "";
    const widthInput = document.createElement("input");
    widthInput.type = "number";
    widthInput.min = "64";
    widthInput.max = "4096";
    widthInput.value = this.engine.width.toString();
    const heightInput = document.createElement("input");
    heightInput.type = "number";
    heightInput.min = "64";
    heightInput.max = "4096";
    heightInput.value = this.engine.height.toString();
    const methodSelect = document.createElement("select");
    ["nearest", "low", "medium", "high"].forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      methodSelect.appendChild(opt);
    });
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.gap = "8px";
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");
    const row3 = document.createElement("div");
    row1.textContent = "Width";
    row1.appendChild(widthInput);
    row2.textContent = "Height";
    row2.appendChild(heightInput);
    row3.textContent = "Interpolation";
    row3.appendChild(methodSelect);
    wrap.appendChild(row1);
    wrap.appendChild(row2);
    wrap.appendChild(row3);
    this.genericDialogBody.appendChild(wrap);
    const apply = document.createElement("button");
    apply.className = "primary";
    apply.textContent = "Apply";
    apply.addEventListener("click", () => {
      const w = parseInt(widthInput.value, 10);
      const h = parseInt(heightInput.value, 10);
      const method = methodSelect.value;
      this.engine.resizeCanvas(w, h, method);
      this.genericDialog.close();
    });
    const cancel = document.createElement("button");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => this.genericDialog.close());
    this.genericDialogFooter.appendChild(cancel);
    this.genericDialogFooter.appendChild(apply);
    this.genericDialog.showModal();
  }

  updateTextSettings() {
    this.engine.setTextSettings({
      family: this.fontFamilySelect.value,
      size: parseInt(this.fontSizeInput.value, 10) || 24,
      effect: this.textEffectsSelect.value
    });
  }

  toggleTextStyle(button, style) {
    const pressed = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", pressed ? "false" : "true");
    const settings = {};
    settings[style] = !pressed;
    this.engine.setTextSettings(settings);
  }

  updateSelectionOverlay(selection) {
    if (!selection) {
      this.canvasSelection.classList.remove("visible");
      return;
    }
    const x = Math.min(selection.startX, selection.endX);
    const y = Math.min(selection.startY, selection.endY);
    const w = Math.abs(selection.endX - selection.startX);
    const h = Math.abs(selection.endY - selection.startY);
    this.canvasSelection.style.left = 32 + x * this.engine.zoom + this.engine.panX + "px";
    this.canvasSelection.style.top = 32 + y * this.engine.zoom + this.engine.panY + "px";
    this.canvasSelection.style.width = w * this.engine.zoom + "px";
    this.canvasSelection.style.height = h * this.engine.zoom + "px";
    this.canvasSelection.classList.add("visible");
  }

  updateFreeSelectionOverlay(path) {
    if (!path || path.length === 0) {
      this.canvasSelection.classList.remove("visible");
      return;
    }
    const xs = path.map(p => p.x);
    const ys = path.map(p => p.y);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    const w = Math.max(...xs) - x;
    const h = Math.max(...ys) - y;
    this.canvasSelection.style.left = 32 + x * this.engine.zoom + this.engine.panX + "px";
    this.canvasSelection.style.top = 32 + y * this.engine.zoom + this.engine.panY + "px";
    this.canvasSelection.style.width = w * this.engine.zoom + "px";
    this.canvasSelection.style.height = h * this.engine.zoom + "px";
    this.canvasSelection.classList.add("visible");
  }

  loadRecents() {
    const json = localStorage.getItem(RECENTS_KEY);
    if (!json) return [];
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  }

  saveRecents() {
    localStorage.setItem(RECENTS_KEY, JSON.stringify(this.recentFiles));
  }

  addRecentProjectMeta(meta) {
    this.recentFiles = [meta, ...this.recentFiles.filter(r => r.id !== meta.id)].slice(0, 12);
    this.saveRecents();
  }

  renderRecents() {
    this.recentFilesList.innerHTML = "";
    if (this.recentFiles.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No recent files";
      this.recentFilesList.appendChild(li);
      return;
    }
    this.recentFiles.forEach(file => {
      const li = document.createElement("li");
      li.className = "recent-file-item";
      const info = document.createElement("div");
      info.textContent = file.name || "Untitled";
      const date = document.createElement("div");
      date.textContent = new Date(file.date).toLocaleString();
      li.appendChild(info);
      li.appendChild(date);
      this.recentFilesList.appendChild(li);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (!window.HTMLCanvasElement) {
    alert("This browser does not support canvas.");
    return;
  }
  new UI();
});
