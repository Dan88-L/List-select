import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {

  	onClick(){

    	alert("Hello World");
    }, 

    select: function(item) {

      alert(this.get('selected'));
      var selected = this.get('selected');
      if(selected) {
        selected.set('isSelected', false);  
      }

      this.set('selected', item);
      alert(this.get('selected'));
      alert(this.get('selected.value'));

    },


  }
});