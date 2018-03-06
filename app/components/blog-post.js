// import Component from '@ember/component';
//
// export default Component.extend({
//   classNames: ['postr'],
//   classNameBindings: ['postDetailHidden'],
//   postDetailHidden: Ember.computed.alias('post.hidden'),
//   // newContent: {
//   //   // content: 'whatever I want to write in'
//   // },
//   actions: {
//     toggleDetail () {
//       // this.toggleProperty('postDetailHidden');
//       this.sendAction('toggleHide', this.get('post'))
//     },
//     deletePost (post) {
//       console.log(post)
//       this.sendAction('deletePost', this.get('post'))
//     },
//     save (post) {
//       console.log('inside blog-post edit')
//       console.log(post)
//       this.sendAction('save', post)
//     },
//     updatePost (post) {
//       console.log(post)
//       console.log('in blog post udpate')
//       return this.sendAction('updatePost', post)
//     }
//
//   },
// });
