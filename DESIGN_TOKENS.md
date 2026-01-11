# Design Tokens Documentation

This document outlines all design tokens used in the INVESTPRO web application for consistent styling across components.

## Token Structure

Design tokens are organized into categories:

### Color Tokens

**Primary Colors**
- `--color-accent: #d4af35` — Main brand color (gold)
- `--color-accent-light: #e8d97e` — Lighter variant
- `--color-accent-dark: #b59325` — Darker variant

**Neutral Colors (Dark Theme)**
- `--color-bg-primary: #171612` — Main background
- `--color-bg-secondary: #201d12` — Secondary background
- `--color-bg-tertiary: #23201a` — Tertiary background
- `--color-bg-overlay: #050505` — Text/overlay color
- `--color-border-primary: #37342a` — Primary borders
- `--color-border-secondary: #3a341f` — Secondary borders
- `--color-border-light: #4a4840` — Light borders

**Text Colors**
- `--color-text-primary: #ffffff` — Primary text
- `--color-text-secondary: #b6b1a0` — Secondary text
- `--color-text-tertiary: #6e6b62` — Tertiary text
- `--color-text-muted: #4a4840` — Muted text

### Spacing Tokens

Base spacing scale from 4px to 128px:
```
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
```

### Typography Tokens

**Font Family**
- `--font-family-sans: 'Montserrat'` — Primary font
- `--font-family-mono: 'Courier New'` — Monospace font

**Font Sizes**
```
--font-size-xs: 0.75rem (12px)
--font-size-sm: 0.875rem (14px)
--font-size-base: 1rem (16px)
--font-size-lg: 1.125rem (18px)
--font-size-xl: 1.25rem (20px)
--font-size-2xl: 1.5rem (24px)
--font-size-3xl: 1.875rem (30px)
--font-size-4xl: 2.25rem (36px)
--font-size-5xl: 3rem (48px)
```

**Font Weights**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

**Line Heights**
- Tight: 1.25
- Snug: 1.375
- Normal: 1.5
- Relaxed: 1.625
- Loose: 2

### Border Radius Tokens

```
--radius-sm: 0.375rem (6px)
--radius-base: 0.5rem (8px)
--radius-md: 0.75rem (12px)
--radius-lg: 1rem (16px)
--radius-xl: 1.5rem (24px)
--radius-2xl: 2rem (32px)
--radius-full: 9999px
```

### Shadow Tokens

**Standard Shadows**
- `--shadow-sm` — Small shadow
- `--shadow-base` — Base shadow
- `--shadow-md` — Medium shadow
- `--shadow-lg` — Large shadow
- `--shadow-xl` — Extra large shadow
- `--shadow-2xl` — 2XL shadow

**Accent Shadows**
- `--shadow-accent-sm` — Small accent shadow
- `--shadow-accent-md` — Medium accent shadow
- `--shadow-accent-lg` — Large accent shadow

### Transition Tokens

```
--transition-fast: 150ms ease-in-out
--transition-base: 200ms ease-in-out
--transition-slow: 300ms ease-in-out
--transition-slower: 500ms ease-in-out
```

### Z-Index Tokens

```
--z-dropdown: 1000
--z-sticky: 1020
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-popover: 1060
--z-tooltip: 1070
```

## Usage Examples

### In CSS
```css
.card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### In React/TypeScript
```tsx
<div style={{
  backgroundColor: 'var(--color-bg-secondary)',
  borderColor: 'var(--color-border-primary)',
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
}}>
  Content
</div>
```

### In Tailwind Classes
For tokens that need to be used in Tailwind, use the corresponding utility classes or inline styles:
```tsx
<div className="rounded-xl border border-[#37342a] bg-[#201d12] p-6 shadow-lg">
  Content
</div>
```

## Extending Tokens

To add new tokens:

1. Add the variable to `/app/styles/tokens.css` in the appropriate category
2. Use the new token throughout the application
3. Document the token in this file
4. Update components to use the new token instead of hardcoded values

## Migration Path

All hardcoded color values (#d4af35) have been replaced with `var(--accent-color)`. Future refactoring should:

1. Replace remaining hardcoded spacing with `var(--space-*)` tokens
2. Replace hardcoded border radius with `var(--radius-*)` tokens
3. Replace hardcoded shadows with `var(--shadow-*)` tokens
4. Replace hardcoded font sizes with `var(--font-size-*)` tokens

This ensures single-source-of-truth for all design values and simplifies future theme changes.
