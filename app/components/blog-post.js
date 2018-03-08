import Component from '@ember/component';

export default Component.extend({
  classNames: ['newPost'],
  classNameBindings: ['editformhidden'],
  editformhidden: true,
  message: null,
  actions: {
    updateComment() {
      this.sendAction('updateComment', this.get('comment'));
    },
    updatePost() {
      if ((this.get('post.title').length > 0) && (this.get('post.content').length > 0)) {
        this.sendAction('updatePost', this.get('post'));
        return this.toggleProperty('editformhidden');
      } else {
        this.set('message', 'Both fields required');
      }
    },
    deletePost (post) {
      this.sendAction('deletePost', this.get('post'));
    },
    createComment(comment, post) {
      this.sendAction('createComment', comment, post);
    },
    toggleEditFormHide () {
      return this.toggleProperty('editformhidden');
    }
  }
});
