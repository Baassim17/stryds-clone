# Popup Spec

- Wrapper class: `pop-up`
- State: hidden by default, fullscreen fixed overlay
- Backdrop: dark translucent scrim with `backdrop-filter: blur(10px)`
- Shell:
- Border: `0.5px solid var(--stroke)`
- Background: `var(--dark-grey)`
- Radius: `40px`
- Initial view:
- Headline: `Let’s make Stryds 🙌`
- Two device selection pills: iPhone and Android
- Follow-up states:
- iPhone phone form
- Android phone form
- Email form (present in DOM, hidden by default)
- Submit buttons use the lime accent and pill radius
