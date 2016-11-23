import Reflux from 'reflux';
import $ from 'jquery';
import RestaurantActions from '../actions/RestaurantAction';

var RestaurantStore = Reflux.createStore({

    listenables: [RestaurantActions], 
    restaurantlist: [],

    init: function()
    {
      this.listarRestaurante();
    },

    listarRestaurante: function() {    
      $.ajax({
        async: true,
      	crossDomain: true,
        url: 'http://localhost:3000/restaurants',
        method: 'GET',
      	cache: false,
      	context: this,    	
		    success: function(data) {
          this.restaurantlist = data.slice(); 
          this.trigger(this.restaurantlist);        
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          console.log("Status: " + textStatus); 
          console.log("Error: " + errorThrown); 
        } 
	    });
    },
});

export default RestaurantStore;