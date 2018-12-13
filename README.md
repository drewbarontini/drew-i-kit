# drew-i-kit
> A collection of highly composeable React components.

## Why?
After building several UIKits in React with Styled Components, I decided to build out my own little UIKit that I could start projects from. I'm calling it "drew-i-kit". Get it? 😜

## Dependencies
- `react`
- `prop-types`
- `normalize.css`
- `styled-components`
- `styled-tools`
- `lodash`

## Testing
- `yarn storybook` to load up Storybook and view the components
- `yarn test` to run all of the unit tests

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