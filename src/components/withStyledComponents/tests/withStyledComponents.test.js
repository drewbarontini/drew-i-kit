import React from 'react';
import { render } from 'react-testing-library';

import withStyledComponents from '..';

describe('withStyledComponents()', () => {
  it('it should wrap the component in the correct elements', () => {
    const App = () => <p>My App!</p>;
    const ThemedApp = withStyledComponents({ component: App });
    const { container } = render(<ThemedApp />);
    expect(container.childNodes.length).toBe(1);
    expect(container.childNodes[0].tagName.toLowerCase()).toEqual('p');
    expect(container).toHaveTextContent('My App!');
  });

  it('should allow passing custom global styles', () => {
    const App = () => <p>My App!</p>;
    const MyGlobalStyles = () => <p>My Global Styles!</p>;
    const ThemedApp = withStyledComponents({
      component: App,
      globalStyles: MyGlobalStyles,
    });
    const { container } = render(<ThemedApp />);
    expect(container.childNodes.length).toBe(2);
    expect(container).toHaveTextContent('My App!');
    expect(container).toHaveTextContent('My Global Styles!');
  });

  it('should allow passing custom theme', () => {
    const App = () => <p>My App!</p>;
    const theme = {
      colors: {
        primary: 'blue',
      },
    };
    const ThemedApp = withStyledComponents({
      component: App,
      themeObject: theme,
    });
    const component = ThemedApp();
    expect(component.props.theme).toEqual(theme);
  });
});
