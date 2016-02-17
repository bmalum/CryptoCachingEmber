import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	willRender() {
		var store = this.get('store');
			store.findRecord('cryptocache', 1);
},

actions: {
	toggleBody() {
		console.log(this.get('geocaches'));
	}
}
});
