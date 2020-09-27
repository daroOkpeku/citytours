import React, { Component } from 'react'
import "./App.css"
/*Controllable form  */
export default class App extends Component {

  state = {
    firstName: "",
    lastName: "",
    people: []

  }
  /* word = (event) => {
      console.log(event.target.name);
      console.log(event.target.value);
      if (event.target.name === "firstName") {
        const text = event.target.value;
        this.setState({
          firstName: text,
        })
      }
  
    } */

  word = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }
  display = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {

      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""

      })
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.display}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.word} />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.word} />
          <button type="submit" >click me</button>
        </form>
        <span>
          people
        <section>{this.state.people}</section>
        </span>
      </div>
    )
  }
}
