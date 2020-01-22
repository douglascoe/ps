import React, { Component } from "react";
//import "./App.css";

//GeAll  author, id , name , published

//TODOS userId , id, title, completed
class App extends Component {
  state = {
    todos: [],
    getall: []
  };

  componentDidMount() {
    fetch("https://powersales.herokuapp.com/getall")
      .then(res => res.json())
      .then(dadosGetAll => {
        this.setState({ getall: dadosGetAll });
        console.log(this.state.getall);
      })
      .catch(console.log);
    /* 
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(dadosTodos => {
        this.setState({ todos: dadosTodos });
        console.log(this.state.todos);
      })
      .catch(console.log);
      */
  }

  render() {
    return (
      <div>
        <h1>Book's</h1>
        {this.state.getall.map(todo => (
          <h5>
            {todo.id} : {todo.name} : {todo.author}
          </h5>
        ))}
      </div>
    );

    /*
      <div>
        <h1>My Todos's</h1>
        {this.state.todos.map(todo => (
          <h5>
            {todo.userId} : {todo.id} : {todo.title} : ({" "}
            {todo.completed && <span>Completed</span>}{" "}
            {!todo.completed && <span>Pending</span>} )
          </h5>
        ))}
      </div>
    );
       */
  }
}

export default App;
