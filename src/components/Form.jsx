import React from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';
import MenuAction from '../actions/MenuAction.js';

var Form = React.createClass({

   mixins: [Reflux.connect(MenuStore, 'menustore')],

  //#region Definicion de propiedades
  getInitialState: function () {
    return {
      name: '',
      price: '',
      description: '',
    };
  },
  //#endregion

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
  //#endregion 

  render: function() {
    return (
      React.createElement('form', {className: 'form-group'},
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Nombre (required)',          
          onChange: this.nameChange,
        }),
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Price (required)', 
          onChange: this.priceChange.bind(this),         
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Descripción (required)',
          className: 'form-control',
          onChange: this.descriptionChange.bind(this), 
        }),
        React.createElement('select', 
          { value: this.state.selected,
           onChange: this.changeHandler,
           className: 'form-control',
         },
          React.createElement("option", { value: 0 }, "SELECCIONE UN RESTAURANTE"),
          React.createElement("option", { value: 1 }, "RESTAURANTE 1"),
          React.createElement("option", { value: 2 }, "RESTAURANTE 2"),
          React.createElement("option", { value: 3 }, "RESTAURANTE 3"),
        ),
        React.createElement('button', {
          type: 'submit',
          onClick: this.guardarClic,
          className: 'btn-primary',
        }, "GUARDAR") ,
      )
    )
  },
});

export default Form;