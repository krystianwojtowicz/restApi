import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


        xhr.addEventListener('load', () => {
            console.log(xhr.status);
            if (xhr.status === 200) {
                const contacts = JSON.parse(xhr.response)
                console.log(contacts);
                this.setState({ contacts })
            }

        })

        xhr.send(null)
    }
}

export default App;
