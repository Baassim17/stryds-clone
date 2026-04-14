# Stryds Behaviors

## Observed

- Preloader blocks the page on initial load and plays a desktop Lottie.
- Navigation stays fixed at the bottom of the viewport.
- Hero text advances through four stacked copy states while the sticky hero remains pinned.
- Cards remain sticky and stack with increasing top offsets.
- CTA remains pinned while its background animation plays.
- Clicking any `Join` CTA opens the popup overlay.
- Popup starts on device selection, then branches into iPhone or Android phone-number forms.
- Desktop shows a custom cursor icon, cursor circle, and blurred cursor glow.
- Tablet/mobile hide the custom cursor layers.
- Hero swaps from desktop to mobile Lottie at tablet/mobile breakpoints.
- Card 2 swaps from desktop to mobile Lottie at tablet/mobile breakpoints.

## Implementation Notes

- The local clone preserves Webflow’s original class names and interaction scripts so the same interaction model can initialize.
- Form submission is intentionally front-end only; the original page reload behavior after submit is preserved.
