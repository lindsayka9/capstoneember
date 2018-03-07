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
      // .then(() => document.getElementById('edit-form'))
      .then(() => this.get('flashMessages').success('Post Updated'));
    },
    deletePost (post) {
      return post.destroyRecord()
      .then(() => this.transitionTo('posts'))
      .then(() => this.get('flashMessages').success('Post Deleted'));
    },
    // createComment(comment, post) {
    //   let newComment = this.get('store').createRecord('comment', comment);
    //   post.get('comments').pushObject(newComment);
    //   newComment.save();
    //   this.get('flashMessages').success('comment posted');
    // }
  }
});

// export default Route.extend({
//   model (params) {
//     const id = +params.post_id
//     return this.get('store').findRecord('post', id)
//   },
//   actions: {
//     delete(post){
//       return post.destroyRecord()
//       .then(() => this.transitionTo('posts'))
//     },
//     edit (post) {
//       return post.save()
//       .then(() => this.transitionTo('posts'))
//     },
//     toggleEdit () {
//
//     }
//   }
// });
