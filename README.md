# drew-i-kit
> A collection of highly composeable React components.

⚠️ **This is also a highly combustable playground as I build it out. Things will break, and it's not really recommended to use this in a production environment until v1 is reached.** ⚠️

![Build Status][badge-build]
![Version][badge-version]

## Why?
After building several UIKits in React with Styled Components, I decided to build out my own little UIKit that I could start projects from. I'm calling it "drew-i-kit". Get it? 😜

## Dependencies
- `react`
- `prop-types`
- `normalize.css`
- `styled-components`
- `styled-tools`
- `lodash`

## Installing
```
yarn install drew-i-kit styled-components
```

## Testing
- `yarn storybook` to load up Storybook and view the components
- `yarn test` to run all of the unit tests

## Inspiration
[Reakit](https://reakit.io) and [Grommet](https://v2.grommet.io) are two _excellent_ React UI libraries built on top of Styled Components. Although they are great, I'm far too opinionated on styling to fully adopt another solution such as those. With that being the case, that's why I've built this, but I've learned a lot from how those great libraries are put together 🙏

## File Structure
Here is my (currently) preferred file structure for React apps (usually starts in a `src/` directory):

```
├── components
├── config
├── lib
├── styled
├── routes
├── index.js
```

### Components
The primary application-level components in your application.

```
├── ComponentName
│   └── tests
│   │   └── ComponentName.test.js
│   └── ComponentName.js
│   └── ComponentName.story.js
│   └── index.js
```

### Config
Configuration files: `theme.js`, `icons.js`, etc.

```
├── config
│   └── tests
│   │   └── icons.test.js
│   └── icons.js
│   └── theme.js
│   └── index.js
```

### Lib
Library files, such as utilities and helpers.

```
├── lib
│   └── tests
│   │   └── helpers.test.js
│   │   └── utils.test.js
│   └── helpers.js
│   └── index.js
│   └── utils.js
```

### Routes
Each route component.

```
├── routes
│   └── tests
│   │   └── Home.test.js
│   │   └── About.test.js
│   │   └── Contact.test.js
│   └── About.js
│   └── Contact.js
│   └── Home.js
│   └── index.js
```

### index.js
The entry point.

[badge-build]: https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=flat-square
[badge-version]: https://img.shields.io/npm/v/drew-i-kit.svg?style=flat-square