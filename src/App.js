import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [], 
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(resp => {
        return resp.json()
    })
    .then(users => {
        this.setState({robots: users})
    });
}
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0)   {
            return <div className = "mv7" ><h3 className = "tc f1 loading">Loading</h3></div>
        } else{
        
        return(
            <div>
                <h1 className = 'tc f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        )
    }
    };
}

export default App; 






