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
    }
   //  toggleHide (post) {
   //    console.log(post)
   //    console.log('trying to togglehide a post')
   //    post.toggleProperty('hidden')
   //    return post.save()
   //  },
   //  deletePost (post) {
   //    console.log(post)
   //   return post.destroyRecord()
   // },
   // updatePost (post) {
   //    post.save();
   //  }
  }
});
