import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    this.setState({
      nome: target.value,
    })
  }

  render() {
    const { nome } = this.state;
    return (
      <section className="container">
        <h1>Digite um nome:</h1>
        <input type="text" onChange={ this.handleChange } />
        <div className="next">
          {
            nome === ''
            ? <p className="btn-next">PRÓXIMO</p>
            : <Link className="btn-next" to={{ pathname:"/preferencia", state: { nome } }}>PRÓXIMO</Link>
          }
        </div>
      </section>
    );
  }
}

export default Home;
