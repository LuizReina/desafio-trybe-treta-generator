import React from 'react';
import { Link } from 'react-router-dom';

class Preferencia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      preferencia: target.value,
    })
  }

  render() {
    const { nome, preferencia } = this.state;
    return (
      <section className="container">
        <h1>Escolha o certo:</h1>
        <label>
          Biscoito
          <input type="radio" value="biscoito" name="preferencia" onChange={ this.handleChange } />
        </label>
        <label>
          Bolacha
          <input type="radio" value="bolacha" name="preferencia" onChange={ this.handleChange }/>
        </label>
        <div className="next">
          {
            preferencia === ''
            ? <p className="btn-next">PRÓXIMO</p>
            : <Link className="btn-next" to={{ pathname:"/comida", state: { nome, preferencia } }}>PRÓXIMO</Link>
          }
        </div>        
      </section>
    );
  }
}

export default Preferencia;
