import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

    listenables: [MenuActions],

    crearMenu: function(name, price, description, restaurant) {    
      $.ajax({
      	crossDomain: true,
      	cache: false,
      	context: this,
      	url: 'https://haskell-dojo.herokuapp.com/menus',
  		  method: 'POST',
  		  processData: false,
  		  data: '{\n\"restaurant\": 1,\n\"name\": \name\",\n\"price\": price,\n\"description\": \description\"\n}',
		    success: function(data) {
          console.log(data);     
        }
	    });
    }
});

export default MenuStore;