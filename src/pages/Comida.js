import React from 'react';
import { Link } from 'react-router-dom';

import './comida.css';

class Comida extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: this.props.location.state.preferencia,
      comida: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    this.setState({
      comida: target.name,
    })
  }

  render() {
    const { nome, preferencia, comida } = this.state;
    return (
      <section className="container">
        <h1>Qual é o pior: </h1>
        {
          comida === 'açaí'
          ? <button className="btn-selected" type="button" onClick={ this.handleClick } name="açaí">Açaí</button>
          : <button className="btn-option" type="button" onClick={ this.handleClick } name="açaí">Açaí</button>
        }
        {
          comida === 'sopa'
          ? <button className="btn-selected" type="button" onClick={ this.handleClick } name="sopa">Sopa</button>
          : <button className="btn-option" type="button" onClick={ this.handleClick } name="sopa">Sopa</button>
        }
        {
          comida === 'sushi'
          ? <button className="btn-selected" type="button" onClick={ this.handleClick } name="sushi">Sushi</button>
          : <button className="btn-option" type="button" onClick={ this.handleClick } name="sushi">Sushi</button>
        }
        <div className="next">
          {
            comida === ''
            ? <p className="btn-next">PRÓXIMO</p>
            : <Link className="btn-next" to={{ pathname:"/animal", state: { nome, preferencia, comida } }}>PRÓXIMO</Link>
          }
        </div>
      </section>
    );
  }
}

export default Comida;
