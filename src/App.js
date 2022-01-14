import React, {Component} from 'react';
import api from './api/api';

class App extends Component {

  state = {
    categories: []
  }

  async componentDidMount() {
    const response = await api.get('');

    console.log(response);

    this.setState({categories: response.data});
  }

  render() {
    const {categories} = this.state;
    return (
      <div>
        <h1>Listar categorias</h1>
        <span>Listagem retornada do backend</span>
        {categories.map(category => (
          <div key={category.id}>
            <strong>Categoria:</strong>
            <span>{category.no_category}</span>
          </div>
        ))}
        <ul></ul>
      </div>
    );
  };
};

export default App;