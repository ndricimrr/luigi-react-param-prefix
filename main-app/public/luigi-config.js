Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'budget',
        label: 'Budget',
        viewUrl: 'http://localhost:5001',
        loadingIndicator: { enabled: false },
        virtualTree: true,
        icon: 'home',
        hideFromNav: false,
        anonymousAccess: true,
        isExternal: false,
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
