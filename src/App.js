import React, { Component } from 'react'
import Table from "./Table.js"
import Form from "./Form";
class App extends Component {
    state = {
        characters: [

        ]
    }
    componentDidMount() {
        const url =
            'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log('result', result)
                this.setState({
                    characters: result,
                })
                console.log('state', this.state)
            })
    }
    removeCharacter = (index) => {
        this.setState({
            characters: this.state.characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    render() {
        console.log('state day ne', this.state)
        const result = this.state.characters.map(data => {
            console.log(data)
            return <li>{data}</li>
        })
        return (
            <div className="App">
                <ul>{result}</ul>

            </div>
        )
        /*const state = this.state
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table characterData={state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )*/
    }


}


export default App