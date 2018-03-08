import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  auth: service(),
  model (params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post) {
      return post.save()
      .then(() => this.get('flashMessages').success('Post Updated'))
      this.toggleProperty('editformhidden')
    },
    deletePost (post) {
      return post.destroyRecord()
      .then(() => this.transitionTo('posts'))
      .then(() => this.get('flashMessages').success('Post Deleted'));
    },
    createComment(comment, post) {
      let newComment = this.get('store').createRecord('comment', comment);
      post.get('comments').pushObject(newComment);
      newComment.save()
      .then(() => this.get('flashMessages').success('Comment posted'));
    }
  }
});
