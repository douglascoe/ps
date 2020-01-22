import React, { Component } from "react";
import axios from "axios";
//GeAll  author, id , name , published

class App extends Component {
  state = {
    title: "Oi, eu sou Douglas Coé",
    getall: []
  };

  changeTitle = () => {
    const newState = {
      title: "Agora sou José"
    };

    this.setState(newState);
  };

  componentDidMount() {
    // SÓ EXECUTA DEPOIS QUE O render() terminar.

    // Estudar: "axios"
    // https://www.npmjs.com/package/axios

    axios
      .get("https://powersales.herokuapp.com/getall")
      .then(function(dadosGetAll) {
        console.log(dadosGetAll);
        return this.setState({ getall: dadosGetAll });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.getall.map(todo => (
          <h5>
            {todo.id} : {todo.name} : {todo.author}
          </h5>
        ))}
      </div>
    );
  }
}
export default App;
