import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  comments: DS.hasMany('comment'),
  editable: DS.attr('boolean'),
  user_id: DS.attr('number'),
  user: DS.belongsTo('user')
});
