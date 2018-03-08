import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  post: DS.belongsTo('post'),
  user_id: DS.attr('number'),
  editable: DS.attr('boolean'),
  post_id: DS.attr('number'),
  user: DS.belongsTo('user')
});
