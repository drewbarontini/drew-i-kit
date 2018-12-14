import React from 'react';
import { render } from 'react-testing-library';

import ThemeProvider from '..';

describe('<ThemeProvider />', () => {
  it('should render the default properly', () => {
    const { container } = render(
      <ThemeProvider>Hello, ThemeProvider!</ThemeProvider>
    );
    expect(container).toHaveTextContent('Hello, ThemeProvider!');
    const component = ThemeProvider({ children: 'Hello' });
    expect(component.props.theme).not.toBeNull();
  });

  it('should render with a custom theme object', () => {
    const theme = { colors: { primary: 'blue' } };
    const component = ThemeProvider({
      children: 'Hello',
      theme,
    });
    expect(component.props.theme).toEqual(theme);
  });

  it('should render with custom global styles', () => {
    const MyGlobalStyles = () => <p>My Global Styles!</p>;
    const { container } = render(
      <ThemeProvider GlobalStylesComponent={MyGlobalStyles}>
        Hello, ThemeProvider!
      </ThemeProvider>
    );
    expect(container).toHaveTextContent('Hello, ThemeProvider!');
    expect(container).toHaveTextContent('My Global Styles!');
  });
});
