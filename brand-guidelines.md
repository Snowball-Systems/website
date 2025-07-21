# Snowball Systems Brand Guidelines

**Version 1.0** | **Last Updated: January 2025**

---

## 🎯 **Brand Identity**

### **Mission Statement**
Snowball Systems helps small and mid-sized water utilities preserve & leverage institutional knowledge to modernize operations and enhance collaborative decision-making.

### **Brand Positioning**
- **Trusted Partner**: Not just a vendor - a collaborative partner
- **Practical Innovation**: Building on existing systems, not replacing them
- **Knowledge Preservation**: Solving the critical challenge of retiring expertise
- **Utility-Focused**: Grounded in real utility operations and needs

### **Core Values**
- **Transparency**: Open, honest communication
- **Collaboration**: Working with, not against existing systems
- **Iteration**: Rapid improvement and adaptation
- **Durability**: Long-term, maintainable solutions

---

## 🎨 **Color System**

### **Primary Palette**
```css
/* Snowball Blue Family - Our signature colors */
--primary-blue:     #6fa8dc    /* rgb(111, 168, 220) - Main brand color */
--primary-blue-dark: #4a90e2   /* rgb(74, 144, 226) - Darker variant */
--primary-blue-light: #60a5fa  /* rgb(96, 165, 250) - Clarion accent */

/* Supporting Blues */
--blue-hover:       #5a9bd1    /* Hover states */
--blue-active:      #3a7bc8    /* Active states */
--blue-glow:        #357abd    /* Glow effects (70% opacity) */
--blue-deep:        #2c5f94    /* Deep shadows (100% opacity) */
```

### **Background System**
```css
/* Dark Foundation - Professional utility aesthetic */
--bg-primary:       #0f172a    /* rgb(15, 23, 42) - Main background */
--bg-secondary:     #1e293b    /* rgb(30, 41, 59) - Secondary areas */
--bg-tertiary:      #334155    /* rgb(51, 65, 85) - Cards, elevated surfaces */
--bg-quaternary:    #475569    /* rgb(71, 85, 105) - Subtle highlights */
--bg-light:         #64748b    /* rgb(100, 116, 139) - Lightest variant */
```

### **Text & Content Colors**
```css
/* Text Hierarchy */
--text-primary:     #e2e8f0    /* rgb(226, 232, 240) - Headlines */
--text-secondary:   #cbd5e1    /* rgb(203, 213, 225) - Body text */
--text-muted:       rgba(255, 255, 255, 0.9)  /* Subtle text */
--text-soft:        rgba(255, 255, 255, 0.8)  /* Secondary content */
--text-subtle:      rgba(255, 255, 255, 0.6)  /* Hints, placeholders */
```

### **Interactive Elements**
```css
/* Glass & Transparency Effects */
--glass-subtle:     rgba(255, 255, 255, 0.03)  /* Soft nudge backgrounds */
--glass-light:      rgba(255, 255, 255, 0.08)  /* Hover states */
--glass-medium:     rgba(255, 255, 255, 0.1)   /* Card backgrounds */
--glass-strong:     rgba(255, 255, 255, 0.15)  /* Active states */

/* Border System */
--border-subtle:    rgba(255, 255, 255, 0.08)  /* Minimal borders */
--border-light:     rgba(255, 255, 255, 0.1)   /* Standard borders */
--border-medium:    rgba(255, 255, 255, 0.2)   /* Emphasized borders */
```

### **Usage Guidelines**
- **Primary Blue (`#6fa8dc`)**: Logo, primary CTAs, brand elements
- **Primary Blue Dark (`#4a90e2`)**: Gradients, hover states, emphasis
- **Clarion Blue (`#60a5fa`)**: Clarion logo text, animation effects
- **Background Dark (`#0f172a`)**: Main page backgrounds
- **Glass Effects**: Use for modern, professional transparency effects

---

## 📝 **Typography System**

### **Font Stack**
```css
/* Primary Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Logo Font (Clarion) */
font-family: 'Bahnschrift', Bahnschrift;
```

### **Hierarchy Scale**
```css
/* Headlines */
--h1-size: clamp(1.8rem, 5vw, 2.8rem);
--h1-weight: 300;
--h1-line-height: 1.2;

/* Body Text */
--body-size: 1rem;
--body-weight: 400;
--body-line-height: 1.6;

/* UI Elements */
--ui-small: 0.85rem;
--ui-standard: 0.95rem;
--ui-large: 1.1rem;
```

### **Typography Rules**
- **Headlines**: Use `white-space: nowrap` for brand consistency
- **Weight**: Prefer lighter weights (300-400) for sophisticated feel
- **Spacing**: Use `letter-spacing: 0.5-1px` for refined appearance
- **Shadow**: Add `text-shadow` for depth on dark backgrounds

---

## 🏗️ **Logo Guidelines**

### **Clarion Logo System**
- **Main Logo**: SVG-based with animated elements
- **Text Elements**: "Clarion" (large) + rotating subtitle
- **Animation**: D3.js breathing nodes + text cycling
- **Colors**: Primary blue for "Clarion", animated blue for subtitle

### **Snowball Systems Logo**
- **File**: `Snowball_Systems_Logo-removebg-preview.png`
- **Treatment**: Enhanced brightness/contrast with blue glow filter
- **Sizing**: 40px height for header, scalable for other uses

### **Logo Usage Rules**
1. **Maintain aspect ratios** - Never stretch or distort
2. **Clear space** - Minimum 20px padding around logos
3. **Color integrity** - Use original colors or approved alternatives
4. **Readability** - Ensure adequate contrast on all backgrounds

---

## 🧩 **Component Library**

### **Button System**

#### **Primary CTA**
```css
.primary-cta {
    background: linear-gradient(135deg, #6fa8dc, #4a90e2);
    padding: 1.2rem 2.5rem;
    border-radius: 30px;
    font-weight: 700;
    box-shadow: 0 6px 20px rgba(111, 168, 220, 0.4);
    /* Shimmer effect on hover */
}
```

#### **Soft Nudge CTA**
```css
.cta-card {
    opacity: 0.85;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    /* NO aggressive transforms or shadows */
    /* Gentle navigation guidance feel */
}
```

#### **Standard CTA**
```css
.cta-button {
    background: linear-gradient(135deg, #6fa8dc, #4a90e2);
    border-radius: 25px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(111, 168, 220, 0.3);
}
```

### **Card Components**
```css
.card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 2rem;
    transition: all 0.3s ease;
}
```

### **Navigation Elements**
```css
.nav-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #6fa8dc;
    background: rgba(111, 168, 220, 0.1);
    text-shadow: 0 0 8px rgba(111, 168, 220, 0.6);
}
```

---

## 📐 **Layout Principles**

### **Grid System**
- **Container**: `max-width: 1200px` with `margin: 0 auto`
- **Padding**: `clamp(1rem, 3vw, 4rem)` for responsive spacing
- **Gaps**: Use `1.5rem` standard, `2rem` for cards, `5rem` for CTAs

### **Responsive Strategy**
- **Mobile First**: Base styles for mobile, enhance for larger screens
- **Breakpoints**: 768px (mobile), 1024px (tablet), 1920px+ (large)
- **Scaling**: Progressive scaling with mathematical clearance
- **Text Wrapping**: Allow on mobile, prevent on desktop

### **Spacing Scale**
```css
/* Consistent spacing system */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px */
--space-xl: 2.5rem;    /* 40px */
--space-2xl: 3rem;     /* 48px */
```

---

## 🗣️ **Voice & Tone**

### **Brand Voice Characteristics**
- **Professional yet Approachable**: Expertise without intimidation
- **Collaborative**: "We work with you" not "We work for you"
- **Transparent**: Clear, honest communication
- **Solution-Focused**: Practical benefits over technical jargon
- **Respectful**: Acknowledge existing systems and knowledge

### **Tone Guidelines**

#### **Website Copy**
- Use active voice when possible
- Start with challenges customers face
- Focus on collaboration and partnership
- Avoid overly technical language initially
- Use "we" statements to show partnership

#### **Technical Documentation**
- Clear, step-by-step instructions
- Include context for why steps matter
- Provide alternatives when possible
- Acknowledge complexity honestly

#### **Marketing Materials**
- Lead with customer benefits
- Use case studies and real examples
- Show integration, not replacement
- Emphasize knowledge preservation

### **Messaging Framework**

#### **Core Messages**
1. **Knowledge Preservation**: "Don't lose what you've learned"
2. **Smart Integration**: "Build on what you have"
3. **Utility-First**: "Designed for your operations"
4. **Collaborative Partnership**: "We work with you, not against your systems"

#### **Value Propositions**
- **For Managers**: Operational insight and risk mitigation
- **For Engineers**: Better tools that integrate with existing workflows
- **For GIS Experts**: Enhanced spatial intelligence and connectivity

---

## 🎛️ **Animation & Effects**

### **Animation Principles**
- **Subtle Breathing**: 4-5 second gentle pulses for attention
- **Smooth Transitions**: 0.3-0.4 second easing for interactions
- **Performance First**: GPU-accelerated transforms only
- **Purpose-Driven**: Every animation serves a functional purpose

### **Standard Transitions**
```css
/* Default smooth transition */
transition: all 0.3s ease;

/* Button interactions */
transition: all 0.4s ease;

/* Complex effects */
transition: transform 0.3s ease, opacity 0.3s ease;
```

### **Effect Library**
```css
/* Subtle glow */
box-shadow: 0 0 20px 0 rgba(74, 144, 226, 0.1);

/* Glass blur */
backdrop-filter: blur(10px);

/* Text shadow for depth */
text-shadow: 0 2px 20px rgba(0,0,0,0.8);

/* Gentle lift */
transform: translateY(-2px);
```

---

## 📱 **Responsive Guidelines**

### **Mobile Considerations**
- **Touch Targets**: Minimum 48px height for interactive elements
- **Text Size**: Minimum 16px to prevent zoom on iOS
- **Spacing**: Increase padding for easier interaction
- **Navigation**: Collapsible mobile menu with clear hamburger

### **Desktop Enhancements**
- **Hover States**: Rich interactions for mouse users
- **Larger Spacing**: Take advantage of screen real estate
- **Typography**: Larger scales for better readability
- **Visual Effects**: More sophisticated animations and effects

---

## 🔧 **Implementation Guidelines**

### **CSS Organization**
```
assets/css/
├── base.css         # Typography, global styles, utilities
├── components.css   # Buttons, cards, reusable components
├── header.css       # Navigation and header styles
├── hero.css         # Homepage hero section
├── responsive.css   # Device-specific overrides
├── animations.css   # Animation and effect definitions
└── utilities.css    # Helper classes and utilities
```

### **File Naming Conventions**
- **Pages**: `about.md`, `product-overview.md`
- **Assets**: `logo-snowball-systems.svg`, `hero-background.jpg`
- **CSS**: `component-name.css`, `page-specific.css`

### **Code Standards**
- **Mobile First**: Base styles for mobile, enhance upward
- **BEM-like Naming**: `.component-name__element--modifier`
- **Comments**: Explain complex calculations and design decisions
- **Performance**: Minimize repaints, use GPU acceleration

---

## 📊 **Brand Applications**

### **Website Elements**
- **Hero Section**: Clarion logo with animated elements
- **Navigation**: Consistent blue hover states
- **CTAs**: Gradient blues with appropriate weight for context
- **Cards**: Glass morphism with subtle borders

### **Marketing Materials**
- **Color Palette**: Limit to 2-3 colors from brand palette
- **Typography**: Inter for body, Bahnschrift for headlines
- **Imagery**: Clean, professional, utility-focused
- **Layout**: Generous whitespace, clear hierarchy

### **Technical Documentation**
- **Consistent Formatting**: Use brand colors for code blocks
- **Clear Structure**: Hierarchical headings with proper spacing
- **Visual Aids**: Diagrams using brand color palette
- **Accessibility**: Maintain contrast ratios for readability

---

## ✅ **Brand Compliance Checklist**

### **Before Publishing Content**
- [ ] Colors match brand palette exactly
- [ ] Typography uses approved font stack
- [ ] Interactive elements follow component guidelines
- [ ] Responsive behavior tested on all breakpoints
- [ ] Animation timing follows brand standards
- [ ] Voice and tone appropriate for audience
- [ ] Logo usage follows guidelines
- [ ] Performance impact considered

### **Quality Assurance**
- [ ] Text wrapping follows brand rules
- [ ] CTA styling matches context (soft nudge vs primary)
- [ ] Mobile touch targets meet 48px minimum
- [ ] Hover states provide clear feedback
- [ ] Loading states maintain brand consistency
- [ ] Error messages use appropriate tone

---

## 🔄 **Maintenance & Updates**

### **Regular Reviews**
- **Quarterly**: Review color usage and consistency
- **Semi-annually**: Update component library with new patterns
- **Annually**: Full brand guideline review and refresh

### **When to Update Guidelines**
- New component patterns emerge
- User feedback indicates confusion
- Technical capabilities change
- Brand strategy evolves

### **Version Control**
- **Document all changes** with rationale
- **Test updates** across all applications
- **Communicate changes** to all stakeholders
- **Archive previous versions** for reference

---

## 📚 **Quick Reference**

### **Essential Colors**
- Primary Blue: `#6fa8dc`
- Primary Dark: `#4a90e2`
- Background: `#0f172a`
- Text Primary: `#e2e8f0`

### **Key Components**
- `.primary-cta` - Main action buttons
- `.cta-card` - Soft nudge navigation
- `.card` - Content containers
- `.nav-link` - Navigation elements

### **Critical Rules**
- Hero text: `white-space: nowrap`
- CTAs: "Soft nudge" styling for navigation
- Mobile: 48px minimum touch targets
- Typography: Lighter weights preferred

---

**This document serves as the definitive guide for all Snowball Systems brand applications. When in doubt, refer to these guidelines to ensure consistency across all touchpoints.** 