import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('my-posts');
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', { path: 'posts/:post_id' });
});

export default Router;
