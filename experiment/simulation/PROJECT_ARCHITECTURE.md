# Simple Harmonic Motion Simulator - Project Architecture & Overview

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [Technology Stack](#technology-stack)
5. [Physics Model](#physics-model)
6. [UI Components](#ui-components)
7. [Features](#features)
8. [Dependencies](#dependencies)
9. [Current Version Status](#current-version-status)
10. [Development Notes](#development-notes)

---

## Project Overview

**Project Name**: Simple Harmonic Motion Simulator - DEI VLAB  
**Type**: Web-based Physics Simulation  
**Purpose**: Interactive educational simulation for studying Driven Damped Harmonic Motion  
**Institution**: DEI (Dayalbagh Educational Institute) Virtual Labs  
**Version**: 1.0 (Current)

### Description
This project provides an interactive web-based simulation for exploring Simple Harmonic Motion (SHM) with damping and driving forces. It allows students to visualize and understand the behavior of oscillatory systems through real-time animations and graphs.

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Client                           │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   HTML/UI    │  │  JavaScript   │  │     CSS      │     │
│  │  (index.html)│  │  (main1.js)   │  │  (Multiple)  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           EJSS Framework (Simulation Engine)          │  │
│  │  - EJSS.js                                            │  │
│  │  - ejsS.v1.min.js                                     │  │
│  │  - ODE Solvers (Runge-Kutta 4)                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Visualization Layer                       │  │
│  │  - SVG Graphics (Spring, Mass, Graphs)                │  │
│  │  - Plotting Panel (Position/Velocity vs Time)         │  │
│  │  - Drawing Panel (Spring-Mass Animation)              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
index.html
├── Head Section
│   ├── Meta Tags
│   ├── External Libraries (MathJax, EJSS)
│   └── Stylesheets (style.css, main1.css, custom-styles.css, enhanced-styles.css)
│
├── Body Section
│   ├── SVG Definitions (Gradients)
│   ├── Main Section
│   │   ├── Animation Panel (Damping Controls)
│   │   ├── Plots Panel
│   │   │   ├── Plotting Panel (Graph Area)
│   │   │   └── Drawing Panel (Spring-Mass Visualization)
│   │   └── Control Panel
│   │       ├── Button Panel (Play/Pause/Step/Reset)
│   │       ├── Displacement Slider
│   │       └── Parameter Panel (b, v₀, ω, F₀)
│   │
│   ├── Experiment Info Section
│   └── Footer
│
└── Scripts
    ├── EJSS Initialization
    ├── Model Creation (T06_SHO2)
    └── View Creation (T06_SHO2_View)
```

---

## File Structure

```
simulation/
│
├── index.html                          # Main HTML file
├── main1.js                            # Core simulation logic (~1100 lines)
│
├── style.css                           # Base stylesheet
├── main1.css                           # Component-specific styles
├── custom-styles.css                   # Custom enhancements
├── enhanced-styles.css                 # Additional styling
├── ejss.css                            # EJSS framework styles
├── ejss(1).css                         # Additional EJSS styles
│
├── common_script.js.download           # Common utilities
├── EJSS.js.download                    # EJSS framework core
├── ejsS.v1.min.js.download             # EJSS minified library
├── ga.js.download                      # Google Analytics
├── textresizedetector.js.download      # Text resize detection
│
├── eq55.png                            # Equation image
│
└── Driven Damped Harmonic Motion_files/
    ├── common_script.js.download
    ├── ejss.css
    ├── EJSS.js.download
    ├── ejsS.v1.min.js.download
    ├── ejss(1).css
    ├── ga.js.download
    ├── T06_SHO2.png
    └── textresizedetector.js.download
```

### File Descriptions

#### Core Files

- **`index.html`** (652 lines)
  - Main HTML structure
  - UI layout and controls
  - SVG definitions
  - Experiment information
  - Footer with contact info

- **`main1.js`** (~1100 lines)
  - `T06_SHO2()` - Main model constructor
  - `T06_SHO2_View()` - View constructor
  - ODE solver implementation
  - Physics calculations
  - Event handlers
  - UI bindings

#### Stylesheets

- **`style.css`** - Base layout, navigation, footer styles
- **`main1.css`** - Font icons and component styles
- **`custom-styles.css`** - Custom UI enhancements, animations
- **`enhanced-styles.css`** - Canvas sizing, gradient definitions

#### External Libraries

- **EJSS Framework** - Simulation engine
- **MathJax** - Mathematical equation rendering
- **Google Analytics** - Usage tracking

---

## Technology Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | 5.0 | Structure and markup |
| CSS3 | 3.0 | Styling and layout |
| JavaScript | ES5/ES6 | Core logic and interactivity |
| SVG | 1.1 | Graphics and animations |
| MathJax | 2.x | Mathematical notation rendering |

### Frameworks & Libraries

| Library | Purpose |
|---------|---------|
| EJSS (Easy Java Simulations) | Physics simulation framework |
| ejsS.v1.min.js | EJSS core library (minified) |
| EJSS.js | EJSS interface components |
| Google Analytics | Usage analytics |

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly controls

---

## Physics Model

### Equation of Motion

The simulation models a **Driven Damped Harmonic Oscillator**:

```
m(d²x/dt²) + b(dx/dt) + kx = F₀cos(ωt)
```

Where:
- **m** = Mass (kg) - Default: 1.0 kg
- **b** = Damping coefficient (Ns/m) - Default: 0.0 Ns/m
- **k** = Spring constant (N/m) - Default: 2.0 N/m
- **F₀** = Driving force amplitude (N) - Default: 0.0 N
- **ω** = Driving frequency (rad/s) - Default: 1.41 rad/s
- **x** = Displacement (m)
- **v** = Velocity (m/s)
- **t** = Time (s)

### State Variables

```javascript
// Parameters
m = 1.0;      // Mass
k = 2.0;      // Spring constant
b = 0.0;      // Damping coefficient
v0 = 0.0;     // Initial velocity
F0 = 0.0;     // Driving force amplitude
w = 1.41;     // Driving frequency
x0 = 0.0;     // Initial displacement
tmax = 50.0;  // Maximum simulation time

// Dynamic Variables
x = x0;       // Current position
v = v0;       // Current velocity
t = 0.0;      // Current time
dt = 0.1;     // Time step
Fdrive;       // Driving force
Fdamp;        // Damping force
```

### Numerical Integration

- **Method**: Runge-Kutta 4th Order (RK4)
- **Time Step**: dt = 0.1s (desktop), 0.2s (mobile)
- **Frame Rate**: 20 FPS (desktop), 10 FPS (mobile)
- **Tolerance**: 1e-05

### Damping Modes

1. **Manual Damping** (b = 0.5 Ns/m)
   - User-controlled damping
   - All parameters adjustable

2. **Under-Damped** (b = 0.2 Ns/m, x₀ = 10.0 m)
   - Oscillatory decay
   - b < 2√(mk)

3. **Over-Damped** (b = 10.0 Ns/m, x₀ = 10.0 m)
   - Slow, non-oscillatory decay
   - b > 2√(mk)

4. **Critically Damped** (b = 2√(mk), x₀ = 10.0 m)
   - Fastest return to equilibrium
   - b = 2√(mk)

---

## UI Components

### 1. Animation Panel

**Location**: Top of simulation area

**Components**:
- Damping mode selector (Radio buttons)
  - Manual
  - Under-damped
  - Over-damped
  - Critically damped

### 2. Plots Panel

**Dimensions**: 975px × 600px (1.5x scaled)

**Sub-components**:

#### Plotting Panel (80% height)
- **Purpose**: Position and velocity vs. time graphs
- **Features**:
  - Auto-scaling axes
  - Grid lines
  - Trail plotting (xTrail, vTrail)
  - Current position indicators (xDot, vDot)
  - Axis labels and titles

#### Drawing Panel (20% height)
- **Purpose**: Visual spring-mass system
- **Components**:
  - Wall (fixed point)
  - Spring (animated, 25 loops)
  - Mass/Bob (rounded rectangle with gradient)
  - Velocity arrow (optional, blue)
  - Cursor (for dragging mass)

### 3. Control Panel

#### Button Panel
- **Play/Pause**: Toggle simulation
- **Step**: Advance one time step
- **Reset Time**: Reset to t=0
- **Reset**: Full simulation reset
- **Show Velocity**: Toggle velocity display

#### Parameter Controls

**Row 1**:
- **Initial Displacement (x₀)**: Number input (meters)
- **Damping Coefficient (b)**: Slider + input (0-10 Ns/m)
- **Initial Velocity (v₀)**: Slider + input (-12 to 12 m/s)

**Row 2**:
- **Driving Frequency (ω)**: Slider + input (0-5 rad/s)
- **Driving Force (F₀)**: Slider + input (-6 to 6 N)

### 4. Experiment Information Section

**Content**:
- Definition of SHM
- Examples
- Equation of motion (with image)
- Parameter descriptions
- Experiment features

### 5. Footer

**Sections**:
- Community Links
- Contact Information
- Social Media Links

---

## Features

### Core Features

1. **Real-time Simulation**
   - Continuous time evolution
   - Smooth animations
   - Adjustable frame rate

2. **Interactive Controls**
   - Drag mass to set initial position
   - Adjust all parameters in real-time
   - Multiple damping presets

3. **Visualization**
   - Position vs. time graph (purple)
   - Velocity vs. time graph (blue, optional)
   - Animated spring-mass system
   - Velocity vector arrow

4. **Parameter Adjustment**
   - Sliders with numeric inputs
   - Real-time parameter updates
   - Validation and constraints

5. **Multiple Damping Modes**
   - Quick access to common scenarios
   - Educational presets

### Advanced Features

1. **ODE Solver**
   - Runge-Kutta 4th order
   - Adaptive step size
   - Event detection (time limit)

2. **Responsive Design**
   - Mobile-friendly interface
   - Adaptive canvas sizing
   - Touch controls

3. **State Management**
   - Serialization support
   - Reset functionality
   - Parameter persistence

4. **Performance Optimization**
   - Efficient rendering
   - Trail management (max 1000 points)
   - Mobile performance tuning

---

## Dependencies

### External Dependencies

```html
<!-- MathJax for equation rendering -->
<script src="http://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=AM_CHTML"></script>

<!-- EJSS Framework -->
<script src="common_script.js.download"></script>
<script src="EJSS.js.download"></script>
<script src="ejsS.v1.min.js.download"></script>

<!-- Utilities -->
<script src="ga.js.download"></script>
<script src="textresizedetector.js.download"></script>
```

### Internal Dependencies

- `main1.js` depends on EJSS framework
- All CSS files are independent but complementary
- SVG definitions in `index.html`

### Font Dependencies

- **Google Fonts**: Poppins, Roboto (via CSS imports)
- **Custom Font**: wticons (embedded in main1.css)

---

## Current Version Status

### Version: 1.0

### Status: ✅ Functional

### Completed Features

- ✅ Core physics simulation
- ✅ Interactive controls
- ✅ Real-time graphing
- ✅ Multiple damping modes
- ✅ Parameter adjustment
- ✅ Responsive design
- ✅ Experiment documentation
- ✅ Visual animations

### Known Limitations

1. **File Naming**: Some files have `.download` extension (likely from browser download)
2. **External Dependencies**: Uses CDN for MathJax (requires internet)
3. **Browser Compatibility**: Optimized for modern browsers
4. **Mobile Performance**: Reduced frame rate on mobile devices

### Code Quality

- **Structure**: Well-organized, modular
- **Comments**: Minimal inline comments
- **Naming**: Consistent naming conventions
- **Size**: Main JS file is large (~1100 lines) but manageable

### Performance Metrics

- **Initial Load**: Fast (local files)
- **Simulation Speed**: 20 FPS (desktop), 10 FPS (mobile)
- **Memory Usage**: Moderate (trail management)
- **Rendering**: Smooth SVG animations

---

## Development Notes

### Code Organization

1. **Model-View Separation**
   - `T06_SHO2()` - Model logic
   - `T06_SHO2_View()` - View logic
   - Clear separation of concerns

2. **Event-Driven Architecture**
   - UI events trigger model updates
   - Model changes update view
   - Bidirectional data binding

3. **ODE Integration**
   - Custom ODE solver wrapper
   - State management
   - Event detection

### Styling Approach

1. **Multiple Stylesheets**
   - Base styles (style.css)
   - Component styles (main1.css)
   - Custom enhancements (custom-styles.css, enhanced-styles.css)
   - Framework styles (ejss.css)

2. **Responsive Design**
   - Media queries
   - Flexible layouts
   - Mobile adaptations

### Future Enhancement Opportunities

1. **Code Improvements**
   - Add more inline documentation
   - Refactor large functions
   - Improve error handling

2. **Feature Additions**
   - Export graph data
   - Save/load simulation states
   - Additional visualization modes
   - Phase space plots

3. **Performance**
   - Web Workers for calculations
   - Canvas optimization
   - Trail management improvements

4. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - High contrast mode

---

## Usage Instructions

### For Students

1. Open `index.html` in a web browser
2. Select damping mode or use Manual
3. Adjust parameters using sliders
4. Click Play to start simulation
5. Observe graphs and animation
6. Experiment with different parameter values

### For Developers

1. **Local Development**
   ```bash
   # Simply open index.html in browser
   # Or use a local server:
   python -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

2. **Modifying Parameters**
   - Edit default values in `main1.js` (lines 224-231)
   - Adjust UI ranges in `index.html` (slider min/max)

3. **Styling Changes**
   - Modify CSS files as needed
   - Test responsive design on multiple devices

---

## Technical Specifications

### Default Configuration

```javascript
// Model Parameters
m = 1.0;      // Mass (kg)
k = 2.0;      // Spring constant (N/m)
b = 0.0;      // Damping (Ns/m)
v0 = 0.0;     // Initial velocity (m/s)
F0 = 0.0;     // Driving force (N)
w = 1.41;     // Driving frequency (rad/s)
x0 = 0.0;     // Initial displacement (m)
tmax = 50.0;  // Max time (s)

// Simulation Settings
dt = 0.1;     // Time step (s)
FPS = 20;     // Frames per second
tol = 1e-05;  // Solver tolerance
```

### Canvas Dimensions

- **Plotting Panel**: 975px × 480px (80% of plots)
- **Drawing Panel**: 975px × 120px (20% of plots)
- **Total Plots**: 975px × 600px

### Color Scheme

- **Position Graph**: Purple (#9c27b0)
- **Velocity Graph**: Blue (#3f51b5)
- **Spring**: Cyan (#00bcd4)
- **Mass**: Purple-Teal gradient
- **Velocity Arrow**: Blue

---

## License & Credits

### Institution
- **DEI Virtual Labs** (Dayalbagh Educational Institute)

### Framework
- **EJSS** (Easy Java Simulations) - Open Source Physics

### External Services
- **MathJax** - Mathematical notation
- **Google Analytics** - Usage tracking
- **Google Fonts** - Typography

---

## Contact & Support

- **Phone**: 011-26582050
- **Email**: support@vlabs.ac.in
- **Portal**: https://www.vlab.co.in

---

**Document Version**: 1.0  
**Last Updated**: Current  
**Maintained By**: DEI Virtual Labs Team

---

*This document provides a comprehensive overview of the Simple Harmonic Motion Simulator project architecture and current implementation status.*
