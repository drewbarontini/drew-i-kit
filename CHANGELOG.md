# Change Log

This project adheres to [Semantic Versioning](https://semver.org/).

## v0.21.0 - 2018-12-21

### Added
- `theme` heading sizes
- `theme.border.l`

### Changed
- Made `Button` more customizable
- Moved `theme.fonts` to its own file

## v0.20.0 - 2018-12-21

### Added
- `fontFamily` prop to `typography()`

### Changed
- `A`, `Heading`, `Text` component prop types
- Global styles to set `font-family` and `line-height` on headings

## v0.19.0 - 2018-12-21

### Fixed
- Prop types in `Flex` and `Heading`

## v0.18.0 - 2018-12-18

### Added
- `typography()` prop function

### Changed
- `A`, `Heading`, `Text` components to include `typography()`

## v0.17.0 - 2018-12-18

### Added
- `spacing()` prop function

### Changed
- `Box` component to include `spacing()`

## v0.16.0 - 2018-12-18

### Added
- Better documentation

### Changed
- Updated `PropType` definitions

## v0.15.0 - 2018-12-18

### Added
- `textAlign` prop to `Box`

## v0.14.0 - 2018-12-18

### Changed
- `GlobalStyles` component now pulls in a separate `globalStyles` config
- Internal `import` and `export` calls don't pull from `index.js` loader(s)

## v0.13.0 - 2018-12-18

### Fixed
- Component sub-component exports

## v0.12.0 - 2018-12-18

### Added
- CI integration with CircleCI
- New documentation

### Changed
- `Card` accepts `overflow` prop

## v0.11.0 - 2018-12-17

### Added
- New color management!

## v0.10.0 - 2018-12-17

### Changed
- `microbundle` command to pass `--jsx React.createElement`

## v0.9.0 - 2018-12-17

### Added
- Responsiveness to components through `breakpoints` prop (and helpers)
- `microbundle` to manage the bundling of the package

### Changed
- Moved `styled-components` out of the bundle

## v0.8.0 - 2018-12-14

### Added
- `ThemeProvider` wrapper component

### Removed
- `withStyledComponents` component

## v0.7.0 - 2018-12-14

### Changed
- Updated `withStyledComponents` to be more customizable and exported
- Made the `icons` integrated to the `theme` for use in `ThemeProvider`

## v0.6.0 - 2018-12-14

### Added
- ESLint
- `prettier` and `.prettierrc`
- Additional `package.json` scripts

### Changed
- Updated `README`
- Better `index.js` loader files
- More customizable `Card` component

### Fixed
- ESLint errors

## v0.5.0 - 2018-12-13

### Changed
- `Heading` spacing

## v0.4.0 - 2018-12-13

### Added
- `Cell` component

## v0.3.0 - 2018-12-13

### Added
- New files to `.npmignore`

## v0.2.0 - 2018-12-13

### Changed
- Distribution and build process

## v0.1.0 - 2018-12-13

### Added
- Initial version