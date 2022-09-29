import React, {Component} from "react"
import PersonsList from "./components/PersonsList"
import NewPerson from "./components/NewPerson"
//Styles
import './App.css'

class App extends Component {
  state = {
    data: [
      { name: 'John', job: 'Developer', gender: 'Male', id: 1 },
      { name: 'Arnold', job: 'Gamer', gender: 'Male', id: 2 },
      { name: 'Melania', job: 'Model', gender: 'Female', id: 3 }
    ]
  }

  insertNewPerson = person => {
    person.id = Math.floor(Math.random() * (10000 - 10) + 10)
    //let dataCopy = this.state.data.concat(person) or ECMA6-> let dataCopy = [...this.state.data,person]
    this.setState({
      data: [...this.state.data, person],
    })
  }

  deletePerson = id => {
    let filterData = this.state.data.filter(el=> {
      return el.id !== id
    })
    this.setState({
      data: filterData
    })
  }

  render() {
    return (
      <div>
        <PersonsList deletePerson={this.deletePerson} data={this.state.data} />
        <NewPerson insertNewPerson={this.insertNewPerson}/>
      </div>
    )
  }
}

export default App