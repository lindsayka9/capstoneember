import Component from '@ember/component';

export default Component.extend({
  classNames: ['postr'],
  classNameBindings: ['postDetailHidden'],
  postDetailHidden: Ember.computed.alias('post.hidden'),
  // newContent: {
  //   // content: 'whatever I want to write in'
  // },
  actions: {
    toggleDetail () {
      // this.toggleProperty('postDetailHidden');
      this.sendAction('toggleHide', this.get('post'))
    },
    delete (post) {
      console.log(post)
      this.sendAction('delete', this.get('post'))
    },
    edit (post) {
      console.log('inside blog-post edit')
      console.log(post)
      this.sendAction('edit', post)
    },

  },
});
