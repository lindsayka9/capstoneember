import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('post')
   },
   actions: {
    delete(post){
      console.log('maybe')
      console.log('post is', post)
      return post.destroyRecord()
    },
    edit (post) {
      console.log('in edit')
      console.log(post)
      return post.save()
    }
  }
});
