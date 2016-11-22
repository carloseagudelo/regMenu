import React from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';
import RestaurantStore from '../stores/RestaurantStore.js';
import MenuAction from '../actions/MenuAction.js';

var Form = React.createClass({

  //#region Definicion de propiedades
  getInitialState: function () {
    return {
      name: '',
      price: '',
      description: '',
      listarestaurantes: [],
    };
  },
  //#endregion

  render: function() {
    return (
      React.createElement('form', {className: 'form-group'},

        React.createElement("label", {className: "label"}, 'Nombre del menú'), 
        React.createElement('input', {
          type: 'text',
          className: 'form-control',         
          onChange: this.nameChange,
        }),

        React.createElement("label", {className: "label"}, 'Precio'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control',
          onChange: this.priceChange.bind(this),         
        }),

        React.createElement("label", {className: "label"}, 'Descripción'),
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          onChange: this.descriptionChange.bind(this), 
        }),

        React.createElement("label", {className: "label"}, 'Seleccione un restaurante'),
        React.createElement('select', 
          { value: this.state.selected,
           onChange: this.changeHandler,
           onClick: this.listarRestaurantes.bind(this),
           className: 'form-control', 
          },
          React.createElement("option", { value: 0 }, ""),
          React.createElement("option", { value: 1 }, "RESTAURANTE 1"),
          React.createElement("option", { value: 2 }, "RESTAURANTE 2"),
          React.createElement("option", { value: 3 }, "RESTAURANTE 3"),       
        ),

        React.createElement('input', {
          type: 'submit',
          onClick: this.guardarClic,
          className: 'btn-primary',
        }) ,
      )
    )
  },


  //#region Metodos
  nameChange: function (e){  
    this.setState({
      name: e.target.value 
    })
  },

  priceChange: function(e){    
    this.setState({
      price: e.target.value 
    })
  },

  descriptionChange: function(e){    
    this.setState({
      description: e.target.value
    })
  },

  changeHandler: function(e) {
    this.setState({
      selected : e.target.value
    })
  },

  guardarClic: function() {
    if(this.state.name != '' && this.state.price !='' && this.state.description !=  '' && this.state.selected != 0){
      MenuAction.crearMenu(this.state.name, this.state.price, this.state.description, this.state.selected); // React Component instance
    }
    else
    {
      alert('No ha ingresado la información correctamente')
    } 
  },

  listarRestaurantes: function(){
    this.listarestau.rantes = RestaurantStore.listarRestaurante().slice();
    console.log(this.listarestaurantes[0])
  }
  //#endregion 


});

export default Form;