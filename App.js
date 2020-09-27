import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class App extends Component {
  render() {
    return (
      <div>
        <Person />
      </div>
    )
  }
}



class Person extends Component {
  state = {
    people: [
      {  /* name: "john", img: "https://randomuser.me/api/portraits/thumb/men/69.jpg", */ age: 20, id: 1 },
      { name: "wick", img: "https://randomuser.me/api/portraits/thumb/men/90.jpg", age: 22, id: 2 },
      {/* img: "https://randomuser.me/api/portraits/thumb/men/41.jpg", */ name: "jack", age: 20, id: 3 }
    ]
  }

  render() {
    return (
      <div>
        {this.state.people.map((item) => <Persons name={item.name} img={item.img} age={item.age} key={item.id} />)}
      </div>
    )
  }
}

Persons.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

Persons.defaultProps = {
  name: "steve",
  age: 24,
  img: "https://randomuser.me/api/portraits/thumb/men/51.jpg",

}


function Persons({ name, img, age }) {
  return (
    <section>
      <img src={img} />
      <h2>{name}</h2>
      <h3>{age}</h3>
    </section>
  )
}
