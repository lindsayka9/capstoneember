import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log(params)
    console.log(user.id)
    console.log(post.editable)
    console.log(editable)
    const id = +params.post_id
    return this.get('store').findRecord('post', id)
  },
  actions: {
    delete(post){
      console.log('maybe')
      console.log('post is', post)
      return post.destroyRecord()
      .then(() => this.transitionTo('posts'))
    },
    edit (post) {
      console.log('in edit')
      console.log(post)
      return post.save()
    },
    toggleEdit () {

    }
  }
});
