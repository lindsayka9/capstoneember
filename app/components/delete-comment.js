import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  auth: service(),
  actions: {
      deleteComment (comment) {
        comment.deleteRecord();
        comment.save()
        .then(() => this.get('flashMessages').success('Comment Deleted'));
      }
    }
});
