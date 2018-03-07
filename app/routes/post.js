import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    const id = +params.post_id
    return this.get('store').findRecord('post', id)
  },
  actions: {
    delete(post){
      return post.destroyRecord()
      .then(() => this.transitionTo('posts'))
    },
    edit (post) {
      return post.save()
      .then(() => this.transitionTo('posts'))
    },
    toggleEdit () {

    }
  }
});
