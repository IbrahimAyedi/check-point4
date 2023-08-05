import React, { Component } from 'react';
import './App.css'; // Import the CSS file
import Person from './Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'mohamed salah',
        bio: 'A brief bio mohamed salah.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg',
        profession: 'Footballeur',
      },
      show: true,
      lastMountedTime: null,
    };
  }

  componentDidMount() {
    this.setState({ lastMountedTime: new Date() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  handleName = (name) => {
    alert(`The name of the Image player is ${name}`);
  };

  render() {
    const { person, show, lastMountedTime } = this.state;

    return (
      <div className="App">
        {show && <Person data={person} handleName={this.handleName} />}
        <button onClick={this.toggleShow}>Toggle Show</button>
        {lastMountedTime && (
          <p>Last component mounted: {lastMountedTime.toLocaleTimeString()}</p>
        )}
      </div>
    );
  }
}

export default App;
