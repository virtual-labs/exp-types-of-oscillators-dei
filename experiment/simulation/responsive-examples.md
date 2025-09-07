# Responsive Web Layout Examples

## 1. Mobile-First Navbar with Hamburger Menu

```html
<!-- HTML Structure -->
<header id="header">
  <nav class="navigation-bar">
    <h1>SHM Simulator</h1>
    <button class="nav-toggle" aria-label="Toggle navigation menu">☰</button>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#simulation">Simulation</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>
```

```css
/* Mobile-First Navigation */
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: wrap;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1rem;
}

/* Mobile styles */
@media (max-width: 767px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .nav-menu.active {
    display: flex;
  }
}
```

## 2. Responsive Grid Layout for Controls

```html
<!-- HTML Structure -->
<div class="control-grid">
  <div class="control-card">
    <h3>Damping Controls</h3>
    <div class="damping-options">
      <input type="radio" id="manual" name="damping">
      <label for="manual">Manual</label>
      <!-- More options -->
    </div>
  </div>
  
  <div class="control-card">
    <h3>Parameters</h3>
    <div class="slider-container">
      <label for="frequency">Frequency</label>
      <input type="range" id="frequency" min="0" max="10">
      <input type="number" id="freq-value">
    </div>
  </div>
</div>
```

```css
/* Responsive Grid Layout */
.control-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  
  /* Mobile: 1 column */
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .control-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .control-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
}

.control-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.control-card:hover {
  transform: translateY(-2px);
}
```

## 3. Responsive SVG/Canvas Container

```html
<!-- HTML Structure -->
<div class="simulation-container">
  <div class="plot-wrapper">
    <svg id="plottingPanel" class="responsive-svg">
      <!-- SVG content -->
    </svg>
  </div>
</div>
```

```css
/* Responsive SVG Container */
.simulation-container {
  width: 100%;
  max-width: 100%;
  margin: 1rem auto;
  padding: 0 1rem;
}

.plot-wrapper {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  /* Responsive height based on screen size */
  height: 250px; /* Mobile */
}

.responsive-svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Tablet and up */
@media (min-width: 768px) {
  .plot-wrapper {
    height: 400px;
  }
  
  .simulation-container {
    max-width: 900px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .plot-wrapper {
    height: 500px;
  }
  
  .simulation-container {
    max-width: 1200px;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .plot-wrapper {
    height: 600px;
  }
}
```

## 4. Responsive Button Groups

```html
<!-- HTML Structure -->
<div class="button-group">
  <button class="btn btn-primary">Play</button>
  <button class="btn btn-secondary">Pause</button>
  <button class="btn btn-secondary">Reset</button>
  <button class="btn btn-secondary">Step</button>
</div>
```

```css
/* Responsive Button Group */
.button-group {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  font-weight: 500;
  
  /* Minimum touch target size */
  min-width: 44px;
  min-height: 44px;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: #2196F3;
  color: white;
  border-color: #2196F3;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
}

/* Mobile adjustments */
@media (max-width: 480px) {
  .button-group {
    gap: 0.25rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
```

## 5. Responsive Slider Controls

```html
<!-- HTML Structure -->
<div class="slider-group">
  <div class="slider-item">
    <label for="amplitude">Amplitude</label>
    <div class="slider-controls">
      <input type="range" id="amplitude" min="0" max="10" step="0.1">
      <input type="number" id="amp-value" min="0" max="10" step="0.1">
      <span class="unit">m</span>
    </div>
  </div>
</div>
```

```css
/* Responsive Slider Controls */
.slider-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.slider-item label {
  font-weight: 600;
  color: #333;
}

.slider-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.slider-controls input[type="range"] {
  flex: 1;
  min-width: 120px;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.slider-controls input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: #2196F3;
  border-radius: 50%;
  cursor: pointer;
}

.slider-controls input[type="number"] {
  width: 60px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
}

.unit {
  font-size: 0.9rem;
  color: #666;
  min-width: 30px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .slider-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .slider-controls {
    flex-wrap: nowrap;
  }
  
  .slider-controls input[type="range"] {
    min-width: 150px;
  }
}

/* Mobile portrait - stack vertically */
@media (max-width: 480px) {
  .slider-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .slider-controls input[type="range"] {
    min-width: auto;
    width: 100%;
  }
}
```

## 6. Responsive Card Layout

```html
<!-- HTML Structure -->
<div class="card-container">
  <div class="info-card">
    <h3>Current Values</h3>
    <div class="value-grid">
      <div class="value-item">
        <span class="label">Position:</span>
        <span class="value">2.5 m</span>
      </div>
      <div class="value-item">
        <span class="label">Velocity:</span>
        <span class="value">1.2 m/s</span>
      </div>
    </div>
  </div>
</div>
```

```css
/* Responsive Card Layout */
.card-container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  
  /* Mobile: 1 column */
  grid-template-columns: 1fr;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2196F3;
}

.info-card h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.2rem;
}

.value-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.value-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.value-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 500;
  color: #666;
}

.value {
  font-weight: 600;
  color: #2196F3;
  font-family: monospace;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .value-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## Key Responsive Design Principles Used:

### 1. **Mobile-First Approach**
- Start with mobile styles as the base
- Use `min-width` media queries to enhance for larger screens
- Ensures optimal mobile experience

### 2. **Flexible Units**
- Use `rem`, `em`, `%`, `vw`, `vh` instead of fixed `px`
- Allows content to scale with user preferences and screen size

### 3. **Touch-Friendly Interactions**
- Minimum 44px touch targets for buttons and interactive elements
- Adequate spacing between interactive elements
- Hover states that work on both mouse and touch

### 4. **Progressive Enhancement**
- Core functionality works on all devices
- Enhanced features for larger screens and modern browsers
- Graceful degradation for older browsers

### 5. **Performance Considerations**
- Optimize images and assets for different screen densities
- Lazy loading for non-critical content
- Minimize layout shifts during responsive changes
