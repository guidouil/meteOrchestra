Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  trackPageView: true
});

Router.route('/', {
  name: 'home'
});
