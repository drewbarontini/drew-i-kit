export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/Box/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-box-box" */ 'components/Box/Box.mdx'),
  'components/Flex/Flex.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-flex-flex" */ 'components/Flex/Flex.mdx'),
  'components/Icon/Icon.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-icon-icon" */ 'components/Icon/Icon.mdx'),
  'components/Space/Space.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-space-space" */ 'components/Space/Space.mdx'),
}
