import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  hidden: DS.attr('boolean'),
  editable: DS.attr('boolean')
});
