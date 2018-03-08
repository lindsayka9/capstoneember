import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findAll('post');
    return this.get('store').findRecord('post', params.post_id, {include: 'comments'});
  },
  auth: service(),
  actions: {
    createPost(post) {
      let newPost = this.get('store').createRecord('post', post);
      newPost.save();
      this.get('flashMessages').success('Post Published!')
      this.toggleProperty('newpostformhidden');
    }
  }
});
