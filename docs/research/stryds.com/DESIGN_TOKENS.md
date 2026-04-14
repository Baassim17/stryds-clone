# Stryds Design Tokens

## Colors

- `--black`: `#101010`
- `--dark-grey`: `#171717`
- `--stroke`: `#3d3d3d`
- `--grey`: `#6f6f6f`
- `--white`: `#fdfdfd`
- `--green`: `#a6ff00`
- Success state: `#21a86e`
- Error state: `#cc3b3b`
- Popup scrim: `#00000080`

## Typography

- Primary display/body family: `Sf Pro Display`
- Secondary family present in bundle: `PP Neue Montreal`
- Hero `h1`: `font-weight 600`, responsive `calc(6vw + 6vh + 0.5rem)` at desktop
- Hero secondary headlines: responsive `calc(3vw + 3vh + 0.5rem)` desktop
- CTA XXL headline: responsive `calc(7.5vw + 7.5vh + 0.5rem)` desktop
- Card XL headline: responsive `calc(4.5vw + 4.5vh + 0.2rem)` desktop
- Card/body large copy: responsive `calc(1.75vw + 1.75vh + 0.2rem)` desktop

## Radius / Shape

- Navbar and buttons: `100px`
- Cards and popup: `40px`
- Mobile card radius: `32px`
- Cursor gradient and cursor circle: `100%`

## Layout

- Body uses `display:flex`, column layout, centered children
- Navigation is fixed bottom-center with `z-index: 10`
- Hero is `350vh` with a sticky `100vh` viewport scene
- CTA is `375vh` with a sticky `100vh` viewport scene and `margin-top: -100vh`
- Cards stack as sticky `100vh` panels with staggered top offsets:
- Card 1 `top: 3rem`
- Card 2 `top: 4.5rem`
- Card 3 `top: 6rem`

## Effects

- Navbar shadow: `0 2px 20px #0003`
- Cursor glow blur: `150px`
- Popup backdrop blur: `10px`
- Card top overlay gradient: `linear-gradient(180deg, var(--dark-grey), #fff0)`
