import Component from '@ember/component';

export default Component.extend({
  classNames: ['updateform'],
  classNameBindings: ['updateformhidden'],
  updateformhidden: true,
  actions: {
    updateComment() {
        if (this.get('comment.text').length > 0) {
          this.sendAction('updateComment', this.get('comment'));
          return this.toggleProperty('updateformhidden');

        } else {
          this.set('message', 'Field Required');
        }
      },
      toggleFormHide () {
        return this.toggleProperty('updateformhidden');
      }
    }
});
