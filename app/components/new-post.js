import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  classNames: ['newPost'],
  // classNameBindings: ['newHidden'],
  // newHidden: true,
  auth: service(),
  newPost: {
    title: null,
    content: null
  },
  message: null,
  actions: {
    createPost() {
      if ((this.get('newPost.title') !== null) && (this.get('newPost.content') !== null)) {
        this.sendAction('createPost', this.get('newPost'));
        this.set('newPost.title', null);
        this.set('newPost.content', null);
        this.set('message', null);
      } else {
        this.set('message', 'Both fields required');
      }
    },
    toggleNewHidden () {
      this.toggleProperty('newHidden');
      const button = document.getElementById("new-toggle-button")
      if (button.value == "New Post") {
        button.value = "Cancel"
      } else {
        button.value = "New Post"
      }
    }
  }
});
