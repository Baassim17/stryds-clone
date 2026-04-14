# Stryds Page Topology

## Order

1. Fixed full-screen preloader
2. Fixed bottom navigation pill with logo and Join CTA
3. Hero scene
4. Sticky card stack
5. CTA scene
6. Custom cursor layers
7. Hidden popup / waitlist modal

## Section Notes

- `preloader`
  Uses a full-screen Lottie animation over a lime background.
- `navigation`
  Fixed at bottom center. Contains logo, hidden hamburger, primary Join button, and hidden secondary in-nav button.
- `_01-hero`
  Sticky 100vh scene over a 350vh container. Text swaps through four states while a desktop/mobile Lottie animation runs behind it.
- `_02-cards`
  Three full-screen sticky cards. Each card has left copy, right or bottom-aligned Lottie art, and a dark bordered shell.
- `_03-cta`
  Sticky 100vh finale over a 375vh section with large centered typography, Join button, and background Lottie.
- `curser_gradient`, `curser_wrapper`, `curser_circle`
  Desktop-only custom cursor system layered above the page.
- `pop-up`
  Fixed fullscreen modal with blurred dark scrim. Includes device picker and separate iPhone / Android / email forms.

## Interaction Models

- Preloader: time-driven
- Hero: scroll-driven sticky scene with staged text opacity changes
- Cards: scroll-driven sticky stacking
- CTA: scroll-driven sticky scene with Lottie background
- Join CTA: click-driven modal open
- Device selection in modal: click-driven multistep form
- Cursor: pointer-tracking on desktop only
