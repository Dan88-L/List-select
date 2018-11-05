import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {

  	onClick(){

    	alert("Hello World");
    }, 
    
    select: function(item) {
      var selected = this.get('selected');
      if(selected) {
        selected.set('isSelected', false);  
      }
      this.set('selected', item);
    },


  }
});