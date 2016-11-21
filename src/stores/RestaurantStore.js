import Reflux from 'reflux';
import $ from 'jquery';
import RestaurantActions from '../actions/RestaurantAction';

var RestaurantStore = Reflux.createStore({

    listenables: [RestaurantActions],
    restaurantlist: [],

    listarRestaurante: function() {    
      $.ajax({
        async: true,
      	crossDomain: true,
        url: 'https://restaurants-udea-soft.herokuapp.com/restaurants',
        method: 'GET',
      	cache: false,
      	context: this,    	
		    success: function(data) {
          console.log(data);
          this.restaurantlist = data.slice();
          this.trigger(this.restaurantlist);     
        }
	    });
    }
});

export default RestaurantStore;