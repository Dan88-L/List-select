import Ember from 'ember';



export default Ember.Component.extend({
 tagName: 'li',
  value: null,
  isSelected: false,
  classNameBindings: ['isSelected'],
  click: function() {
    if(!this.get('isSelected')) {
      this.set('isSelected', true);
      this.sendAction('action', this);
    }
  }
});