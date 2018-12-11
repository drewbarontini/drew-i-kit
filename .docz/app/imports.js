export const imports = {
  'components/Box/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-box-box" */ 'components/Box/Box.mdx'),
  'components/Flex/Flex.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-flex-flex" */ 'components/Flex/Flex.mdx'),
  'components/Space/Space.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-space-space" */ 'components/Space/Space.mdx'),
}
