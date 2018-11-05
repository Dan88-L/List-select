import Ember from 'ember';



export default Ember.Component.extend({
  tagName: 'li',
  value: null,
  isSelected: false,

  click: function() {
    if(!this.get('isSelected')) {
      alert(this.get('isSelected'));
      this.set('isSelected', true);
      alert(this.get('isSelected'));
      this.sendAction('action', this);
    }
  }
});