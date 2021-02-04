import React from 'react';
import { Link } from 'react-router-dom';

class Animal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: this.props.location.state.preferencia,
      comida: this.props.location.state.comida,
      animal: 'cachorro'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const name = target.value.toLowerCase();
    this.setState({
      animal: name,
    })
  }

  render() {
    const { nome, preferencia, comida, animal } = this.state;
    return (
      <section className="container">
        <h1>Escolha um animal: </h1>
        <select onChange={ this.handleChange }>
          <option name="cachorro">Cachorro</option>
          <option name="gato">Gato</option>
        </select>
        <div className="next">
          <Link className="btn-next" to={{ pathname:"/manchete", state: { nome, preferencia, comida, animal } }}>PRÓXIMO</Link>
        </div>        
      </section>
    );
  }
}

export default Animal;
