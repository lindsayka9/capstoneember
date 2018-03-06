import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // create new empty post with no attributes
    return this.get('store').createRecord('post', {})
  },
  actions: {
    save(newPost) {
      console.log('god work please')
      return newPost.save()
        .then(() => this.transitionTo('posts'))
    }
  }
});
