import Component from '@ember/component';

export default Component.extend({
  classNames: ['deletePost'],
  message: null,
  actions: {
      deletePost (post) {
        this.sendAction('deletePost', this.get('post'));
      }
    }
});
