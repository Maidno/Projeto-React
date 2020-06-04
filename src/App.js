import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import ContaClicks from './ReactHooks';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Tenet',
        livro: 'React',
        preco: '100'
      },
      {
        nome: 'Muriel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Mari',
        livro: 'Design',
        preco: '350'
      },
      {
        nome: 'Bruny',
        livro: 'DevOps',
        preco: '400'
      },
      {
        nome: 'Fayu',
        livro: 'SI',
        preco: '800'
      }

    ],

  };

  removeAutor = index =>{

    const { autores } = this.state;

    this.setState(

      {
        autores: autores.filter((autor, posAtual) => {
          
          return posAtual !== index;
        }),

      }

    );

  }

  escutadorDeSubmit = autor => {
    this.setState({autores:[...this.state.autores, autor]})
  }

  render(){

    return(
      <Fragment>
        <Header/>
        <div className="container mb-10">
        <Tabela autores={ this.state.autores } removeAutor = { this.removeAutor } />
        <Form escutadorDeSubmit={ this.escutadorDeSubmit } />
        <ContaClicks/>
        </div>
        
        
      </Fragment>
    );

  }

  
}





export default App;
