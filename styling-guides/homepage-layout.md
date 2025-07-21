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
└── .hero-content-container (Content Area)
    ├── .hero-tagline (Hero Text)
    └── .icp-ctas (CTA Buttons)
```

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

## 🎯 **Progressive Clearance System**

### **Header Overlap Prevention**
The layout uses a **mathematical clearance system** that scales with screen size:

```css
/* Base clearance (laptop/desktop) */
.clarion-hero-content {
    top: 80px;
    transform: scale(1.3);
}

/* Large screens (1921px+) */
.clarion-hero-content {
    top: 100px; /* +20px more clearance */
    transform: scale(1.2); /* Less aggressive scaling */
}

/* Ultra-wide (2560px+) */
.clarion-hero-content {
    top: 120px; /* +40px maximum clearance */
    transform: scale(1.1); /* Conservative scaling */
}
```

### **Why Progressive Clearance Works**
- **Larger screens** = **Larger scaled logos**
- **Larger logos** = **More potential for overlap**
- **Progressive clearance** = **Guaranteed safety**
- **Mathematical approach** = **No guesswork**

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

## 🎯 **Current Hero Text Flexbox Setup**

### **Current Positioning:**
The hero text is currently **centered** in its container:

```css
.hero-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;  /* ← This centers ALL content vertically */
    align-items: center;
    gap: 2vh;
}
```

**Container Structure:**
```
┌─ .hero-content-container (centered) ─┐
│  1. .hero-tagline                     │
│  2. .cta-indicator-arrows             │  
│  3. .icp-ctas                         │
└───────────────────────────────────────┘
```

## 🔧 **Options to Move Hero Text Up**

### **Option 1: Independent Text Positioning (Recommended)**
Move just the hero text up without affecting other elements:

```css
<code_block_to_apply_changes_from>
```

### **Option 2: Container Layout Change**
Change the entire container to start from top, then adjust other elements:

```css
.hero-content-container {
    justify-content: flex-start; /* Start from top */
    padding-top: 1vh; /* Add some top spacing */
}

.cta-indicator-arrows {
    margin-top: auto; /* Push arrows down */
}
```

### **Option 3: Negative Margin (Clean)**
Use negative margin to pull text up specifically:

```css
.intelligence-hub-hero .hero-tagline {
    margin-top: -2vh; /* Pull up without affecting others */
}
```

## 💡 **My Recommendation**

**Option 1 (transform)** is cleanest because:
- ✅ Only affects the hero text
- ✅ Doesn't disturb other element spacing
- ✅ Easy to fine-tune with different values
- ✅ Maintains responsive behavior
- ✅ Won't interfere with CTA arrows or buttons

**Would you like me to implement Option 1 with `transform: translateY(-1.5vh)` to move the hero text up?** We can adjust the exact amount (maybe -1vh, -2vh, etc.) based on what looks best. 