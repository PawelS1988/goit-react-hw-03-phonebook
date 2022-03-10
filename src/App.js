import Phonebook from "./Components/Phonebook"
import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  
  }

  render() {
    return (
      <div className="App">
        <Phonebook {...this.state} />
      </div>
    )
  }
}

export default App
