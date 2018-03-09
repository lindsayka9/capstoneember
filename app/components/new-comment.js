import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  auth: service(),
  newComment: {
    text: null
  },
  message: null,
  actions: {
  createComment() {
    if ((this.get('newComment.text') !== null) && (this.get('newComment.text').length > 0)) {
      this.sendAction('createComment', this.get('newComment'), this.get('post'));
      this.set('newComment.text', null);
      this.set('message', null);
    } else {
      this.set('message', 'Write comment');
    }
  },
  }
});
