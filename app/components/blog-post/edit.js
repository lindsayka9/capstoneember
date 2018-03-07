import Component from '@ember/component';

export default Component.extend({
  actions: {
    edit (post) {
      console.log('inside blog-post edit')
      console.log(post)
      this.sendAction('edit', post)
    },
  }
});
