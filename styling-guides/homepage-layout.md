# Homepage Layout Architecture

## Overview
This document explains the complete layout architecture of the Clarion homepage, including the flexbox-based responsive design, positioning logic, and component relationships implemented in our modular CSS system.

---

## 🏗️ **Layout Structure**

### **Main Container Hierarchy**
```
.intelligence-hub-hero (100vh container)
├── .clarion-hero-content (Logo Area)
│   └── .clarion-logo-container
│       └── SVG Logo + D3 Animation
└── .hero-content-container (Content Area - flexbox)
    └── .hero-main (Absolutely positioned hero text)
        ├── .hero-headline (Main headline)
        └── .hero-subheadline (Subtitle)
└── .scroll-indicator (Fixed positioned at bottom)
    ├── .scroll-text (Explore text)
    └── .scroll-arrow (Down arrow)
```

### **CRITICAL POSITIONING APPROACH**
- **Logo**: Uses flexbox with relative positioning (`top` values)
- **Hero Text**: Uses absolute positioning (`top: 20vh`)  
- **Scroll Arrow**: Uses fixed positioning (`bottom: 2vh`)

---

## 📐 **Flexbox Layout System**

### **Main Hero Container**
```css
.intelligence-hub-hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Changed from space-between for better control */
    padding: 0; /* No padding - elements manage their own spacing */
}
```

### **Logo Area (Flexible Space)**
```css
.clarion-hero-content {
    flex: 2; /* Takes 2/3 of available space */
    position: relative;
    top: 80px; /* Progressive: 80px → 100px → 120px based on screen size */
    height: calc(100vh - 160px); /* Dynamic height calculation */
    justify-content: center; /* Centers logo within its space */
    align-items: center;
}
```

### **Content Area (Flexible Space)**
```css
.hero-content-container {
    flex: 1; /* Takes 1/3 of available space */
    /* Contains hero text and CTA buttons */
}
```

---

## 🎯 **Progressive Logo Positioning System**

### **UPDATED: Screen-Specific Logo Positioning**
The layout uses a **progressive positioning system** that moves the logo down more on larger screens:

```css
/* Base clearance (all screens) */
.clarion-hero-content {
    top: 140px; /* Base positioning */
    transform: scale(1.5); /* Prominent logo size */
}

/* Large desktop screens (1600px+) */
@media (min-width: 1600px) {
    .clarion-hero-content {
        top: 280px; /* Much lower on large screens */
        height: calc(100vh - 560px);
    }
}

/* Ultra-wide screens (2560px exactly) */
@media (min-width: 2560px) and (max-width: 2560px) {
    .clarion-hero-content {
        top: 250px !important; /* Optimized for 2560x1440 screens */
        height: calc(100vh - 500px) !important;
        transform: scale(1.1) !important; /* Conservative scaling */
    }
}
```

### **Why Progressive Positioning Works**
- **Larger screens** = **More vertical space available**
- **Logo positioned lower** = **Better visual balance**  
- **Screen-specific optimization** = **Perfect positioning for each resolution**
- **Mathematical approach** = **Consistent, predictable results**

---

## 🔄 **Responsive Scaling Strategy**

### **Viewport-Based Sizing**
```css
.clarion-logo-container svg {
    /* Size constrained to never overlap header */
    width: min(90vw, 100%);
    height: min(calc(100vh - 240px), 100%);
    /* Progressive scaling by screen size */
    transform: scale(1.3); /* Base scaling */
}
```

### **Screen-Specific Adjustments**
| Screen Size | Container Top | Logo Scale | Height Constraint | Text Wrapping |
|-------------|---------------|------------|-------------------|---------------|
| Mobile Portrait | Special Layout | 1.1 | 30vh | **Wraps** |
| Mobile Landscape | Special Layout | 1.1 | 30vh | No wrap |
| Laptop | 80px | 1.3 | 100vh - 240px | No wrap |
| Large (1921px+) | 100px | 1.2 | 100vh - 300px | No wrap |
| Ultra-wide (2560px+) | 120px | 1.1 | 100vh - 360px | No wrap |

---

## 📱 **Mobile Layout Strategy**

### **Special Mobile Approach (≤768px)**
Mobile uses a **completely different layout** with strict 1/3 divisions:

```css
/* Portrait: Allow text wrapping */
@media (max-width: 768px) {
    .intelligence-hub-hero {
        justify-content: space-between; /* Even distribution */
    }

    .clarion-hero-content {
        flex: 1 1 0;
        max-height: 33.33vh; /* Exactly 1/3 of viewport */
    }

    .hero-tagline h2 {
        white-space: normal !important; /* Allow wrapping */
        font-size: 1.1rem;
        line-height: 1.3;
    }
}

/* Landscape: Prevent wrapping */
@media (max-width: 768px) and (orientation: landscape) {
    .hero-tagline h2 {
        white-space: nowrap !important;
        font-size: 1rem;
    }
}
```

### **Mobile Optimizations**
- ✅ **Touch targets**: 48px minimum height for buttons
- ✅ **Readable text**: 1.1rem font size with proper line height
- ✅ **Logo presence**: 90vw width with 1.1x scaling
- ✅ **Smart wrapping**: Text wraps in portrait, not landscape

---

## 🎨 **Logo Component Architecture**

### **Logo Elements**
1. **SVG Container**: Static structure with optimized viewBox
2. **Text Elements**: "Clarion" (large) + "context engine" (small, animated)
3. **D3 Nodes**: 8 animated circles/ellipses with breathing effects
4. **D3 Links**: 10 connecting lines between nodes

### **SVG Optimization Benefits**
- **Optimized ViewBox**: Cropped to minimize whitespace
- **Content Area**: ~349x184px actual logo content (vs 402x267 original)
- **Aspect Ratio**: ~1.5:1 (width:height)
- **Result**: 30%+ larger apparent logo size

---

## ⚡ **Animation System**

### **D3 Breathing Animation**
```javascript
nodes.forEach(node => {
    // Breathing animation with phase offsets
    breathingPhase: 0-1.4 (staggered timing)
});
```

### **Text Cycling Animation**
```javascript
const phrases = [
    'context engine',
    'knowledge retention', 
    'asset management',
    'digital twin'
];
// Cycles every 4 seconds with smooth transitions
```

---

## 🔧 **Modular CSS Architecture**

### **File Organization**
```
assets/css/
├── hero.css          # Main layout and logo positioning
├── animations.css    # D3 and visual effects
├── responsive.css    # Device-specific overrides
├── components.css    # CTA buttons and UI elements
├── base.css         # Typography and global styles
├── header.css       # Navigation and header
└── utilities.css    # Helper classes
```

### **CSS Features**
- **Flexbox-based**: Modern, flexible layout system
- **Viewport units**: Responsive by design (`vw`, `vh`, `calc()`)
- **Progressive enhancement**: Mobile-first with desktop optimizations
- **Mathematical constraints**: Guaranteed boundaries and clearances

---

## 🎯 **Design Principles**

### **1. Safety First**
- **Header never overlaps**: Progressive clearance system
- **CTAs always visible**: Flexible space allocation
- **Content never cuts off**: Conservative height calculations
- **Touch accessibility**: Proper mobile targets

### **2. Maximum Impact**
- **Logo maximizes space**: Uses all available area within safe constraints
- **Responsive scaling**: Larger screens = larger logos (safely)
- **Visual hierarchy**: Logo primary, text secondary, CTAs tertiary
- **Smart text handling**: Wraps when needed, stays single-line when possible

### **3. Universal Compatibility**
- **No hardcoded breakpoints**: Dynamic calculations adapt to any screen
- **Progressive enhancement**: Works on all devices and browsers
- **Future-proof**: Scales to new screen sizes automatically
- **Performance optimized**: GPU acceleration and minimal repaints

---

## 📊 **Space Allocation Formula**

### **Viewport Height Distribution**
```
100vh = Header Buffer + Logo Space + Content Space + Safety Margins

Where:
- Header Buffer: 80-120px (progressive clearance)
- Logo Space: ~60-70% of remaining height (flex: 2)
- Content Space: ~30-40% of remaining height (flex: 1)
- Safety Margins: Built into height calculations
```

### **Calculation Examples**
```
Laptop (1366x768):
100vh (768px) = 80px buffer + 480px logo + 160px content + margins

2560px Screen (2560x1440):
100vh (1440px) = 120px buffer + 960px logo + 280px content + margins

Mobile (375x667):
100vh (667px) = 222px logo + 222px text + 222px CTAs (strict 1/3)
```

---

## 🚀 **Performance Considerations**

### **Layout Performance**
- ✅ **No layout thrashing**: Relative positioning with mathematical constraints
- ✅ **GPU acceleration**: Transform-based scaling and animations
- ✅ **Efficient animations**: D3 with optimized render cycles
- ✅ **Minimal repaints**: Static layout with isolated effect zones

### **Responsive Performance**
- ✅ **CSS-based responsiveness**: No JavaScript layout calculations
- ✅ **Viewport unit optimization**: Native browser performance
- ✅ **Progressive loading**: Critical CSS inline, animations deferred

---

## 🔄 **Maintenance Guidelines**

### **Making Layout Changes**
1. **Test progressive clearance**: Verify header spacing on all screen sizes
2. **Validate CTA visibility**: Check bottom space allocation
3. **Test mobile orientations**: Verify both portrait and landscape
4. **Check text wrapping**: Ensure mobile wrapping works properly

### **Adding New Breakpoints**
1. **Follow progressive pattern**: Increase clearance for larger screens
2. **Reduce scaling conservatively**: Larger screens need less aggressive scaling
3. **Test boundary conditions**: Verify no overlap at breakpoint edges
4. **Update documentation**: Add new breakpoint to reference tables

### **Modifying Components**
1. **Respect flex ratios**: Logo area (flex: 2), Content area (flex: 1)
2. **Maintain clearance math**: Update calculations if header height changes
3. **Test mobile layout**: Ensure 1/3 divisions remain intact
4. **Verify animations**: Check D3 positioning after layout changes

---

## 📝 **Quick Reference**

### **Key CSS Selectors**
```css
/* Main containers */
.intelligence-hub-hero           # 100vh flex container
.clarion-hero-content           # Logo area (flex: 2)
.hero-content-container         # Content area (flex: 1)

/* Logo components */
.clarion-logo-container         # Logo wrapper
.clarion-logo-container svg     # SVG with progressive scaling

/* Content components */
.hero-tagline h2               # Hero text with smart wrapping
.cta-grid                      # CTA button container
.cta-card                      # Individual CTA buttons
```

### **Critical Measurements**
```css
/* Progressive clearance */
top: 80px | 100px | 120px

/* Logo sizing */
width: min(90vw, 100%)
height: min(calc(100vh - 240px), 100%)
transform: scale(1.3 | 1.2 | 1.1)

/* Mobile constraints */
max-height: 33.33vh (mobile only)
min-height: 48px (touch targets)
```

### **Responsive Breakpoints**
- **Mobile**: ≤768px (special 1/3 layout)
- **Tablet**: 769px-1024px (transition scaling)
- **Desktop**: 1025px-1920px (standard scaling)
- **Large**: 1921px-2560px (conservative scaling)
- **Ultra-wide**: ≥2561px (maximum conservative)

---

## 🎯 **CURRENT Hero Text Positioning System (UPDATED)**

### **IMPLEMENTED: Absolute Positioning Approach**
The hero text now uses **absolute positioning** for precise control:

```css
.hero-main {
    position: absolute; /* Take out of flexbox flow */
    top: 20vh; /* Position at 20% down the viewport */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    width: 100%;
    gap: 0rem; /* No gap between headline and subline */
}

.hero-subheadline {
    margin: -1rem 0 0 0 !important; /* Negative margin pulls text closer */
}
```

### **Current Layout Structure:**
```
┌─ .intelligence-hub-hero (100vh) ─────────────┐
│  ┌─ .clarion-hero-content (logo area) ─────┐ │
│  │  Logo positioned with relative + top    │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌─ .hero-main (absolutely positioned) ────┐ │
│  │  • top: 20vh                            │ │  
│  │  • Hero headline                        │ │
│  │  • Hero subheadline (negative margin)   │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌─ .scroll-indicator (fixed position) ────┐ │
│  │  • bottom: 2vh                          │ │
│  │  • Explore text + down arrow            │ │
│  └─────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

## 🔧 **EDITING GUIDE: How to Adjust Positions**

### **To Move Logo Up/Down:**
```css
.clarion-hero-content {
    top: 140px; /* Increase = move down, decrease = move up */
}

/* For specific screen sizes, add media queries */
@media (min-width: 2560px) and (max-width: 2560px) {
    .clarion-hero-content {
        top: 250px !important; /* Screen-specific positioning */
    }
}
```

### **To Move Hero Text Up/Down:**
```css
.hero-main {
    top: 20vh; /* Increase = move down, decrease = move up */
}
```

### **To Move Scroll Arrow Up/Down:**
```css
.scroll-indicator {
    bottom: 2vh; /* Increase = move up, decrease = move down */
}
```

### **To Adjust Text Spacing:**
```css
.hero-subheadline {
    margin: -1rem 0 0 0 !important; /* More negative = closer together */
}

.scroll-indicator {
    gap: 0rem !important; /* Spacing between text and arrow */
}
```

## ⚠️ **TROUBLESHOOTING TIPS**

### **If Logo Won't Move:**
1. **Check for conflicting media queries** - Search for your screen width in CSS
2. **Look for `!important` rules** that override your changes
3. **Use browser dev tools** to see which CSS rule is actually being applied
4. **Try adding `!important`** to your rule if needed

### **If Text Overlaps Logo:**
1. **Increase hero text `top` value** (e.g., `top: 25vh`)
2. **Or decrease logo positioning** (e.g., reduce logo `top` value)
3. **Check logo scale** - large logos extend further down

### **Common Screen Resolutions to Test:**
- **Laptop**: 1366x768, 1920x1080
- **Desktop**: 2560x1440, 3440x1440  
- **Mobile**: 375x667, 414x896

### **Quick Debug Method:**
Add temporary colored borders to see element boundaries:
```css
.clarion-hero-content { border: 2px solid red !important; }
.hero-main { border: 2px solid blue !important; }
.scroll-indicator { border: 2px solid green !important; }
```

## 🎛️ **CSS VARIABLES FOR EASY EDITING**

### **NEW: Centralized Control Variables**
All key positioning values are now controlled by CSS custom properties at the top of the file:

```css
:root {
    /* Logo Positioning Variables */
    --logo-base-top: 140px;           /* Base logo position (all screens) */
    --logo-large-desktop-top: 280px;  /* Large desktop screens (1600px+) */
    --logo-ultra-wide-top: 250px;     /* Ultra-wide screens (2560px) */
    --logo-scale: 1.5;                /* Logo scale factor */
    
    /* Hero Text Positioning Variables */
    --hero-text-top: 20vh;            /* Hero text vertical position */
    --hero-text-gap: 0rem;            /* Gap between headline/subline */
    --hero-subline-margin: -1rem;     /* Negative margin to pull closer */
    
    /* Scroll Indicator Variables */
    --scroll-bottom: 2vh;             /* Distance from screen bottom */
    --scroll-text-size: 0.9rem;       /* Text size */
    --scroll-arrow-size: 1.2rem;      /* Arrow size */
}
```

### **🎯 QUICK EDIT METHOD:**
**To make changes, just edit the CSS variables at the top of hero.css:**

```css
/* Want logo higher on large screens? Change this: */
--logo-ultra-wide-top: 200px;  /* Was 250px */

/* Want hero text lower? Change this: */
--hero-text-top: 25vh;  /* Was 20vh */

/* Want scroll arrow higher? Change this: */
--scroll-bottom: 5vh;  /* Was 2vh */
```

### **🚀 BENEFITS OF THIS APPROACH:**
- ✅ **Single point of control** - Change one variable, affects all responsive breakpoints
- ✅ **No hunting for media queries** - All key values are centralized
- ✅ **Consistent calculations** - Heights auto-adjust based on positioning
- ✅ **Easy experimentation** - Quick tweaks without CSS conflicts
- ✅ **Future-proof** - New screen sizes just need variable overrides

### **📊 SCREEN SIZE REFERENCE:**
```
Mobile:      320px - 768px   (uses base variables)
Tablet:      769px - 1024px  (uses base variables) 
Desktop:     1025px - 1599px (uses base variables)
Large:       1600px - 2559px (overrides --logo-base-top to 280px)
Ultra-wide:  2560px exactly  (overrides --logo-base-top to 250px)
```

---

## 📝 **FINAL SUCCESS METRICS**

### **✅ COMPLETED IMPROVEMENTS:**
- [x] Logo positioned optimally for all screen sizes
- [x] Hero text never overlaps logo nodes
- [x] Scroll arrow disappears when scrolling
- [x] Text spacing is compact and readable
- [x] Screen-specific optimizations for 2560px displays
- [x] CSS variables for easy future editing
- [x] Comprehensive documentation updated

### **🎯 FUTURE EDITING IS NOW SIMPLE:**
1. **Edit CSS variables** at top of hero.css
2. **Test on your screen** - refresh and check
3. **Document changes** in this file for reference
4. **Done!** No more hunting through media queries or fighting CSS conflicts

This layout system is now maintainable, scalable, and documented for future developers.