# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve with live reload (recommended for development)
bundle exec jekyll serve --livereload

# Serve without live reload
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Site Access
- Local development: http://127.0.0.1:4000
- Production uses GitHub Pages deployment

## Architecture Overview

This is a Jekyll-based marketing website for Clarion Context Engine with a specialized multi-page structure:

### Content Architecture
- **Homepage** (`index.html`): Hero section with SVG logo animation, ICP navigation cards, and contact form
- **ICP Pages** (`ICP_Pages/`): Specialized content for different user personas (Managers, Engineers, GIS Experts)
- **About Page** (`about.md`): Company and product overview
- **Layout System**: Three main layouts in `_layouts/`:
  - `default.html`: Base layout with CSS loading order and knowledge graph animation system
  - `icp-page.html`: Specialized layout for persona-specific pages
  - `page.html`: Standard content pages

### Technical Architecture
- **CSS Modular System**: Organized into specific concerns (`base.css`, `hero.css`, `components.css`, etc.)
- **Neural Network Animation**: Complex D3.js-powered logo animation (`assets/js/neural-network.js`)
- **SVG Logo**: Inline SVG with gradient definitions and neural network visualization
- **Collections**: Jekyll collection for ICP pages with custom permalinks

### Key Technical Components

#### Neural Network Animation (`neural-network.js`)
- D3.js v7+ dependency required
- Breathing animation with organic motion
- Text rotation system with neural pulse propagation
- Network topology-based wave calculations
- Synapse travel effects along connection lines

#### Jekyll Configuration
- Collections for ICP pages (`_icp_pages` collection)
- Pretty permalinks enabled
- SEO and feed plugins configured
- Kramdown markdown processor with Rouge highlighter

#### CSS Architecture
Load order is critical (defined in `default.html`):
1. `base.css` - Foundation styles
2. `header.css` - Navigation
3. `hero.css` - Hero sections
4. `components.css` - Reusable components
5. `contact-form.css` - Form styling
6. `animations.css` - Animation definitions
7. `responsive.css` - Media queries
8. `utilities.css` - Helper classes

## Development Guidelines

### File Modifications
- Preserve CSS loading order in layouts
- Maintain SVG gradient definitions when editing logo
- Keep D3.js dependency for neural network animations
- Follow Jekyll front matter patterns for new pages

### Animation System
- Neural network requires D3.js v7+
- Animation timing is carefully calibrated for UX
- Network topology calculations use actual node connections
- Breathing animation excludes center node (node-7) for stability

### Content Structure
- ICP pages use specialized layout with persona-specific hero sections
- Contact form uses embedded iframe (meet.snowballsystems.ai)
- Navigation structure supports both mobile and desktop patterns

## Dependencies

### Ruby Gems
- Jekyll (static site generator)
- jekyll-feed (RSS/Atom feeds)
- jekyll-seo-tag (SEO meta tags)

### External JavaScript
- D3.js v7+ (loaded from CDN for neural network animations)

### Embedded Services
- Contact form iframe from meet.snowballsystems.ai domain