# Hero Text Styling Guide

## Overview
This document provides comprehensive guidance for styling the hero text element (`.hero-tagline`) on the homepage. It covers responsive scaling, positioning, mobile text wrapping, and integration with the new flexbox layout system.

---

## 🎯 **CURRENT IMPLEMENTATION**

### **HTML Structure**
```html
<div class="hero-content-container">
    <div class="hero-tagline">
        <h2>Graph powered context ecosystem for Water Utility digital transformation</h2>
    </div>
    <div class="icp-ctas">
        <!-- CTA buttons -->
    </div>
</div>
```

### **Base CSS (Flexbox Layout)**
```css
.hero-content-container {
    flex: 1; /* Takes 1/3 of available space in flexbox layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.hero-tagline {
    margin-bottom: 2rem;
    text-align: center;
    max-width: 90vw;
}

.hero-tagline h2 {
    font-size: 1.8rem; /* Base size */
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.02em;
    margin: 0;
    text-align: center;
    white-space: nowrap; /* CRITICAL: Prevents text wrapping on desktop */
    transition: font-size 0.3s ease;
}
```

---

## 📱 **MOBILE TEXT WRAPPING SYSTEM**

### **CRITICAL UPDATE: Smart Mobile Wrapping**
The hero text now uses an **intelligent wrapping system** that allows text to wrap only on mobile portrait devices:

```css
/* Mobile Portrait: Allow text wrapping */
@media (max-width: 768px) and (orientation: portrait) {
    .hero-tagline h2 {
        white-space: normal !important; /* Allow wrapping */
        font-size: 1.1rem;
        line-height: 1.3;
        max-width: 90vw;
    }
}

/* Mobile Landscape: Prevent wrapping */
@media (max-width: 768px) and (orientation: landscape) {
    .hero-tagline h2 {
        white-space: nowrap !important; /* No wrapping in landscape */
        font-size: 1rem;
    }
}
```

### **Why Smart Wrapping?**
- ✅ **Portrait mobile**: Limited horizontal space → text wraps for readability
- ✅ **Landscape mobile**: Sufficient horizontal space → single line for impact
- ✅ **Desktop/tablet**: Always single line for professional appearance
- ✅ **Automatic**: No manual intervention required

---

## 📐 **FLEXBOX INTEGRATION**

### **New Layout Architecture**
The hero text is now part of the **flexbox layout system** rather than using absolute positioning:

```css
/* OLD APPROACH (Deprecated) */
.hero-tagline {
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translateX(-50%);
}

/* NEW APPROACH (Current) */
.hero-content-container {
    flex: 1; /* Automatically allocated space */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertical centering within allocated space */
}
```

### **Benefits of Flexbox Approach**
- ✅ **Automatic spacing**: No manual positioning calculations
- ✅ **Responsive by default**: Adapts to any screen size
- ✅ **Content protection**: Text never gets cut off or overlaps
- ✅ **Maintenance-free**: No breakpoint-specific positioning

---

## 🔄 **RESPONSIVE SCALING (Updated)**

### **Font Size Scaling with Flexbox**
```css
/* Base size (all devices) */
.hero-tagline h2 {
    font-size: 1.8rem;
}

/* Large Desktop (≥1921px) */
@media (min-width: 1921px) {
    .hero-tagline h2 {
        font-size: 2.4rem;
    }
}

/* Ultra-wide (≥2560px) */
@media (min-width: 2560px) {
    .hero-tagline h2 {
        font-size: 2.8rem;
    }
}

/* Mobile Portrait (wrapping enabled) */
@media (max-width: 768px) and (orientation: portrait) {
    .hero-tagline h2 {
        font-size: 1.1rem;
        line-height: 1.3;
    }
}

/* Mobile Landscape (no wrapping) */
@media (max-width: 768px) and (orientation: landscape) {
    .hero-tagline h2 {
        font-size: 1rem;
    }
}
```

### **Progressive Enhancement**
- **Base size**: Works for most screens (laptop, tablet)
- **Large screens**: Increased font size for better visual balance
- **Mobile portrait**: Smaller size + wrapping for readability
- **Mobile landscape**: Smallest size to fit on single line

---

## 🎨 **VISUAL HIERARCHY**

### **Typography Rules**
```css
.hero-tagline h2 {
    /* Font Properties */
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-weight: 500; /* Medium weight for readability */
    letter-spacing: 0.02em; /* Subtle spacing for premium feel */
    
    /* Color and Effects */
    color: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Depth and readability */
    
    /* Layout */
    text-align: center;
    margin: 0; /* Remove default margins */
    max-width: 90vw; /* Prevent overflow */
}
```

### **Color Contrast**
- **Text color**: `rgba(255, 255, 255, 0.9)` (90% white)
- **Background**: Dark hero background with logo
- **Contrast ratio**: >7:1 (WCAG AAA compliant)
- **Text shadow**: Ensures readability over complex backgrounds

---

## ⚡ **ANIMATION & TRANSITIONS**

### **Smooth Transitions**
```css
.hero-tagline h2 {
    transition: all 0.3s ease;
}

/* Smooth font size changes */
@media (prefers-reduced-motion: no-preference) {
    .hero-tagline h2 {
        transition: font-size 0.3s ease, line-height 0.3s ease;
    }
}

/* Respect accessibility preferences */
@media (prefers-reduced-motion: reduce) {
    .hero-tagline h2 {
        transition: none;
    }
}
```

### **Entrance Animations (Optional)**
For future enhancement, hero text can include subtle entrance effects:

```css
/* Future: Fade-in animation */
.hero-tagline {
    animation: fadeInUp 1.2s ease-out 0.5s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 🔧 **INTEGRATION GUIDELINES**

### **Working with CTA Buttons**
The hero text and CTA buttons are now in the same flex container:

```css
.hero-content-container {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Consistent spacing between text and buttons */
}

.hero-tagline {
    order: 1; /* Text appears first */
}

.icp-ctas {
    order: 2; /* Buttons appear second */
}
```

### **Spacing Rules**
- **Text-to-CTA gap**: 2rem minimum for visual separation
- **Container padding**: 2rem on all sides for touch accessibility
- **Mobile padding**: Reduced to 1rem for compact display

---

## 📱 **MOBILE OPTIMIZATIONS**

### **Touch Accessibility**
```css
/* Mobile: Ensure adequate touch targets around text */
@media (max-width: 768px) {
    .hero-tagline {
        padding: 1rem;
        min-height: 48px; /* Minimum touch target size */
    }
}
```

### **Readability on Mobile**
```css
/* Portrait: Optimized for reading */
@media (max-width: 768px) and (orientation: portrait) {
    .hero-tagline h2 {
        font-size: 1.1rem;
        line-height: 1.3; /* Improved line spacing for multi-line text */
        word-break: break-word; /* Prevent awkward line breaks */
        hyphens: auto; /* Enable hyphenation if needed */
    }
}

/* Landscape: Optimized for impact */
@media (max-width: 768px) and (orientation: landscape) {
    .hero-tagline h2 {
        font-size: 1rem;
        line-height: 1.2; /* Tighter for single line */
    }
}
```

---

## 🚨 **CRITICAL RULES & MAINTENANCE**

### **Text Wrapping Control** [[memory:3506475]]
**ABSOLUTELY CRITICAL**: Both hero headline and subtitle MUST maintain proper wrapping behavior:

```css
/* Desktop and landscape: NO WRAPPING */
.hero-tagline h2 {
    white-space: nowrap; /* Default behavior */
}

/* Mobile portrait ONLY: ALLOW WRAPPING */
@media (max-width: 768px) and (orientation: portrait) {
    .hero-tagline h2 {
        white-space: normal !important;
    }
}
```

**⚠️ WARNING**: Never remove `white-space: nowrap` from the base rule. This ensures text stays on single lines for professional impact on larger screens.

### **Testing Checklist**
When making changes to hero text:

1. ✅ **Test orientation changes**: Portrait → Landscape on mobile
2. ✅ **Verify wrapping behavior**: Text wraps ONLY in mobile portrait
3. ✅ **Check font scaling**: Sizes appropriate for each screen size
4. ✅ **Validate accessibility**: Color contrast and touch targets
5. ✅ **Test edge cases**: Very long text, small screens, large screens

### **Common Pitfalls to Avoid**
❌ **Don't**: Remove `white-space: nowrap` from base styles
❌ **Don't**: Use fixed pixel positioning (breaks flexbox)
❌ **Don't**: Set fixed heights (prevents text wrapping)
❌ **Don't**: Use `!important` unless specifically for mobile overrides

✅ **Do**: Use flexbox for positioning
✅ **Do**: Test on real devices, not just browser resize
✅ **Do**: Maintain consistent spacing with CTA buttons
✅ **Do**: Respect user accessibility preferences

---

## 📊 **Performance Considerations**

### **Efficient CSS**
- ✅ **Minimal repaints**: Text changes don't trigger layout recalculations
- ✅ **GPU acceleration**: Transform-based animations when needed
- ✅ **Optimized selectors**: Specific targeting without overqualification

### **Font Loading**
```css
/* Ensure system fonts as fallbacks */
.hero-tagline h2 {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 
                 'Helvetica Neue', Arial, sans-serif;
}

/* Optional: Preload custom fonts */
/* <link rel="preload" href="custom-font.woff2" as="font" type="font/woff2" crossorigin> */
```

---

## 📝 **Quick Reference**

### **Key Selectors**
```css
.hero-content-container    # Main flex container (1/3 of viewport)
.hero-tagline             # Text wrapper with spacing
.hero-tagline h2          # Actual text element with styling
```

### **Critical Properties**
```css
/* Wrapping control */
white-space: nowrap | normal

/* Flexbox integration */
flex: 1
display: flex
justify-content: center

/* Mobile responsiveness */
font-size: 1.8rem → 1.1rem (mobile portrait)
line-height: 1.4 → 1.3 (mobile portrait)
```

### **Responsive Breakpoints**
- **Mobile portrait**: ≤768px + `orientation: portrait`
- **Mobile landscape**: ≤768px + `orientation: landscape`  
- **Desktop**: 1025px-1920px
- **Large**: 1921px-2560px
- **Ultra-wide**: ≥2561px

---

This hero text styling system provides **professional typography**, **intelligent mobile behavior**, and **seamless integration** with the flexbox layout architecture while maintaining **accessibility** and **performance** across all devices. 