import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['editHidden'],
  editHidden: true,
  actions: {
    edit (post) {
      console.log('inside blog-post edit');
      console.log(post);
      this.sendAction('edit', post);
    },
    toggleHidden: function () {
      this.toggleProperty('editHidden');
      const button = document.getElementById("edit-toggle-button")
      if (button.value == "Edit Post") {
        button.value = "Cancel"
      } else {
        button.value = "Edit Post"
      }
    }
  }
});
