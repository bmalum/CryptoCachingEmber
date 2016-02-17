import DS from 'ember-data';

export default DS.Model.extend({
  validation_hash: DS.attr(),
  geocache_id:  DS.attr()
});
