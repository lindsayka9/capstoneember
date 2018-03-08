import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateComment(comment) {
      comment.save()
      .then(() => this.get('flashMessages').success('Comment Updated'));
      }
    }
});
