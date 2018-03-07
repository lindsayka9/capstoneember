import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('post')
    console.log(this.get('store').findAll('post'))
   },
   actions: {
  }
});
