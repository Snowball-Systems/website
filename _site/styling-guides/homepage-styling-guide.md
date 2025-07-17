# Homepage Styling Guide

## Overview
This document explains how the Snowball Systems homepage is structured and styled. It serves as a reference for future edits and improvements.

---

## 🏗️ PAGE STRUCTURE

### HTML Layout (index.html)
```
<section class="intelligence-hub-hero">
  ├── <header class="hero-header"> - Fixed navigation
  ├── <div class="hero-background"> - Visual effects
  └── <div class="hero-content"> - Main content grid
      ├── <div class="hero-text"> - Left column: text content
      └── <div class="intelligence-visualization"> - Right column: animation
          └── <div class="clarion-brain"> - Orbital animation container
```

### CSS Grid System
- **Container**: `.hero-content` uses CSS Grid
- **Base Layout**: `grid-template-columns: 1fr 1fr` (equal columns)
- **Responsive**: Adjusts to asymmetric ratios on larger screens
- **Alignment**: Text stays left-aligned, animation centers

---

## 📱 RESPONSIVE SYSTEM

### Core Approach: CSS Custom Properties + Media Queries
Uses the proven pattern of CSS variables updated by media queries to avoid specificity conflicts.

### Breakpoints Strategy
```css
/* Base: up to 1600px */
/* 1600px+: Large screens */
/* 1800px+: Very large screens */  
/* 2200px+: Ultra large (4K, ultrawide) */
```

### Text Scaling
```css
/* Base */
.hero-headline { font-size: 3.2rem; }

/* Large screens */
@media (min-width: 1600px) {
    .hero-headline { font-size: 4.2rem; }
}

/* Very large screens */
@media (min-width: 1800px) {
    .hero-headline { font-size: 5rem; }
}

/* Ultra large screens */
@media (min-width: 2200px) {
    .hero-headline { font-size: 6rem; }
}
```

### Animation Scaling
```css
/* Base */
.clarion-brain {
    --connector-radius: 200px;
    --service-radius: 260px;
}

/* Transforms use variables */
.connector {
    transform: translateY(calc(-1 * var(--connector-radius)));
}

/* Media queries update variables */
@media (min-width: 1600px) {
    .clarion-brain {
        --connector-radius: 220px;
        --service-radius: 280px;
    }
}
```

---

## 🎯 LAYOUT & SPACING

### Grid Column Ratios
Prevents text from expanding toward center and cramping animation:

| Screen Size | Grid Columns | Text Space | Animation Space |
|-------------|--------------|------------|-----------------|
| Base        | `1fr 1fr`    | 50%        | 50%             |
| 1600px+     | `1.2fr 1fr`  | 55%        | 45%             |
| 1800px+     | `1.3fr 1fr`  | 57%        | 43%             |
| 2200px+     | `1.4fr 1fr`  | 58%        | 42%             |

### Container Max-Widths
Prevents content from stretching too wide on large monitors:

| Screen Size | Max-Width | Gap    |
|-------------|-----------|--------|
| Base        | 1400px    | 2rem   |
| 1600px+     | 1600px    | 4rem   |
| 1800px+     | 2000px    | 5rem   |
| 2200px+     | 2400px    | 6rem   |

### Text Constraints
```css
.hero-text {
    max-width: 750px; /* Prevents text from spreading too wide */
    justify-self: start; /* Keeps text left-aligned within column */
}

/* CRITICAL: Single-line text rules */
.hero-headline {
    white-space: nowrap; /* Main headline must never wrap to multiple lines */
}

.hero-subtitle {
    white-space: nowrap; /* "More Than..." must never wrap to multiple lines */
}

.rotating-text {
    white-space: nowrap; /* Rotating text must never wrap */
}
```

---

## 🧠 ORBITAL ANIMATION

### Structure
- **Central Core**: `.brain-core` - Fixed position brain icon
- **Inner Ring**: `.connector` - 6 blue data connectors
- **Outer Ring**: `.service` - 6 green intelligence services (animated)

### Positioning Logic
```css
.connector {
    transform: translate(-50%, -50%) 
               rotate(var(--angle)) 
               translateY(calc(-1 * var(--connector-radius))) 
               rotate(calc(-1 * var(--angle)));
}
```

### Interactive Features
- **Text Rotation**: Changes every 3 seconds with highlighting
- **Node Highlighting**: Uses `.highlighted` class for visual emphasis
- **Smooth Animation**: Outer ring rotates slowly (80s per revolution)

### Responsive Scaling
Animation orbits scale proportionally with screen size:
- **Small screens**: 90px/120px orbits
- **Medium screens**: 160px/210px orbits  
- **Large screens**: 220px/280px orbits
- **Ultra large**: 300px/380px orbits

---

## 🎨 VISUAL DESIGN

### Color Scheme
- **Background**: Dark gradient (`#0f1419` → `#2c3e50`)
- **Text**: White with green accent (`#69f0ae`)
- **Connectors**: Blue gradient (`#42a5f5` → `#1e88e5`)
- **Services**: Green gradient (`#69f0ae` → `#00c853`)
- **CTA Button**: Blue gradient with hover effects

### Typography
- **Font**: Apple system fonts stack for native feel
- **Headline**: Bold, large size with responsive scaling
- **Tagline**: Lighter weight, moderate size
- **Line Heights**: Optimized for readability at each size

### Effects
- **Header**: Frosted glass effect with backdrop blur
- **Nodes**: Gradient backgrounds with drop shadows
- **Hover**: Scale and glow effects on interactive elements
- **Text Animation**: Smooth fade transitions between rotating words

---

## ✅ LESSONS LEARNED

### What Works
1. **CSS Custom Properties**: Perfect for responsive scaling without conflicts
2. **Asymmetric Grid Ratios**: Prevents text from cramping animation
3. **Progressive Container Widths**: Maintains proportions across screen sizes
4. **Media Query Breakpoints**: 1600px, 1800px, 2200px catch most monitors
5. **Text Constraint + Left Alignment**: Keeps text positioned correctly
6. **Single-Line Text Rules**: `white-space: nowrap` on headlines prevents wrapping

### What Doesn't Work
1. **`clamp()` with `vw` units**: Scales with browser window, not monitor
2. **Direct transform overrides**: Creates CSS specificity conflicts
3. **Percentage-based orbits**: Results in tiny, clustered animations
4. **Equal grid columns on large screens**: Text expands toward center

---

## 🔧 MAINTENANCE GUIDELINES

### Adding New Breakpoints
1. Follow the CSS custom properties pattern
2. Update both text and animation scaling together
3. Maintain proportional relationships
4. Test on actual hardware, not just browser resize

### Modifying Animation
1. Always use CSS variables for orbit radii
2. Update variables in media queries, not transforms
3. Maintain ratio between inner/outer rings
4. Test highlighting functionality after changes

### Text Content Changes
1. Update rotating text in `_layouts/default.html`
2. Adjust `min-width` on `.rotating-text` if needed
3. **CRITICAL**: Test that `white-space: nowrap` prevents wrapping at all breakpoints
4. Verify highlighting still works with new content
5. **RULE**: Main headline and "More Than..." must ALWAYS stay single-line

### Layout Adjustments
1. Modify grid ratios in media queries if needed
2. Adjust gaps to prevent cramping
3. Update max-widths to maintain proportions
4. Always test left-alignment with `justify-self: start`

---

## 🚀 PERFORMANCE NOTES

### Optimizations
- **CSS Grid**: Efficient layout system
- **CSS Custom Properties**: Minimal JavaScript dependency
- **Transform Animations**: Hardware accelerated
- **Backdrop Filter**: Modern browser feature for header

### Browser Support
- **CSS Grid**: IE11+ (with prefixes)
- **CSS Custom Properties**: IE15+, Chrome 49+, Firefox 31+
- **Backdrop Filter**: Chrome 76+, Safari 9+ (graceful degradation)

---

## 📋 QUICK REFERENCE

### Key CSS Classes
- `.intelligence-hub-hero` - Main section container
- `.hero-content` - Grid container
- `.hero-text` - Text column
- `.clarion-brain` - Animation container with CSS variables
- `.connector/.service` - Orbital elements

### Important CSS Variables
- `--connector-radius` - Inner orbit size
- `--service-radius` - Outer orbit size

### JavaScript Dependencies
- Text rotation functionality in `_layouts/default.html`
- Node highlighting system
- Mobile menu toggle

---

## 🔄 UPDATE LOG

**Latest Changes:**
- ✅ Implemented responsive spacing system
- ✅ Fixed text cramping animation on large screens  
- ✅ Added asymmetric grid ratios for better proportions
- ✅ Documented CSS custom properties approach
- ✅ Created comprehensive styling guide
- ✅ **CRITICAL FIX**: Added `white-space: nowrap` to prevent text wrapping
- ✅ Updated hierarchy: Main headline → "More Than..." → Tagline → CTA

**Next Potential Improvements:**
- [ ] Add smooth transitions between breakpoints
- [ ] Optimize animation performance further
- [ ] Add reduced motion preferences support
- [ ] Consider container queries for future CSS support

**CRITICAL RULES TO MAINTAIN:**
- [ ] ⚠️ **NEVER remove `white-space: nowrap` from headlines**
- [ ] ⚠️ **Test single-line text at ALL screen sizes before deploying**
- [ ] ⚠️ **Main headline and "More Than..." must stay single-line always** 