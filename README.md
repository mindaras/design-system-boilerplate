# Design System Boilerplate

## Development

<b>Commands</b>:

- Start: `npm start`
- Storybook: `npm run start:storybook`

<b>Architecture</b>

- Components: `lib/components`
- Storybook: `src/stories`
- Development environment: `src/App.tsx`

<b>Code</b>

- Styling: Use `@import "@styles";` at the top of the stylesheet to import variables, and mixins.
- Styling: Use `@include reset;` at the component's topmost element's style rule to include default styles.

## Publishing

1. Bump the version in `package.json`
2. Publish: `npm publish`
