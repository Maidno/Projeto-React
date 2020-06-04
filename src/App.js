import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const autores = [
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

  ];
  return (
    <div className="App">
       <Tabela autores = { autores } />
    </div>
  );
}

export default App;
