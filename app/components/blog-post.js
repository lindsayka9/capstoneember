import Component from '@ember/component';

export default Component.extend({
  classNames: ['newPost'],
  // classNameBindings: ['editHidden'],
  // editHidden: true,
  message: null,
  actions: {
    // updateComment() {
    //   this.sendAction('updateComment', this.get('comment'));
    // },
    toggleHidden () {
      this.toggleProperty('editHidden');
      const button = document.getElementById("edit-toggle-button")
      if (button.value == "Edit Post") {
        button.value = "Cancel"
      } else {
        button.value = "Edit Post"
      }
    },
    updatePost() {
      if ((this.get('post.title').length > 0) && (this.get('post.content').length > 0)) {
        this.sendAction('updatePost', this.get('post'));
      } else {
        this.set('message', 'Both fields required');
      }
    },
    deletePost (post) {
      // return post.destroyRecord();
      this.sendAction('deletePost', this.get('post'));
    }
    // createComment(comment, post) {
    //   this.sendAction('createComment', comment, post);
    // }
  }
});

// export default Component.extend({
//   // classNames: ['postr'],
//   // classNameBindings: ['postDetailHidden'],
//   // postDetailHidden: Ember.computed.alias('post.hidden'),
//   // // newContent: {
//   // //   // content: 'whatever I want to write in'
//   // // },
//   actions: {
//     toggleDetail () {
//       // this.toggleProperty('postDetailHidden');
//       this.sendAction('toggleHide', this.get('post'));
//     },
//     delete (post) {
//       this.sendAction('delete', post);
//     },
//     edit (post) {
//       this.sendAction('edit', post);
//     },
//   },
// });
