import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  post: DS.belongsTo('post'),
  editable: DS.attr('boolean')
});
