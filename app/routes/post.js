import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log(params)
    const id = +params.post_id
    return this.get('store').findRecord('post', id)
  },
  actions: {
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
