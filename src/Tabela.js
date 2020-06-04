import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => { props.removeAutor(index) }} 
                className="waves-effect waves-#00838f cyan darken-3 btn-small">Remover</button></td>
            </tr>
        );

    });

    return(
        <tbody>
            {linhas}
        </tbody>

    );
 
}
/*Aqui eu criei o component Tabela que e 
composto por dois sub componetes*/
class Tabela extends Component {

    render() {

        const { autores, removeAutor } = this.props;
        

        return (
            <table className= "centered highlight">
                <TableHead />
                <TableBody autores = { autores } removeAutor = { removeAutor } />

            </table>

        );
    }
}
export default Tabela;