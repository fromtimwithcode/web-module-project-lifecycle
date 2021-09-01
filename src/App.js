import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    name: '',
    username: '',
    avatarSrc: '', 
    followingCount: 0,
    followCount: 0,
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/fromtimwithcode')
      .then(res => {
        console.log(res);
        this.setState({
          name: res.data.name,
          username: res.data.login,
          followingCount: res.data.following,
          followCount: res.data.followers
        });
      })
      .catch(err => {
        console.error(err);
      });

    axios.get('https://api.github.com/users/fromtimwithcode/followers')
      .then(res => {
        this.setState({
          followers: res.data.followers
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
