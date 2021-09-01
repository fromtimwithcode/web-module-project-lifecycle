import React from 'react';
import axios from 'axios';

import GitCard from './components/GitCard';

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
        this.setState({
          ...this.state,
          name: res.data.name,
          username: res.data.login,
          avatarSrc: res.data.avatar_url,
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
          ...this.state,
          followers: res.data
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="App">
        <GitCard
          name={this.state.name}
          username={this.state.username}
          avatarSrc={this.state.avatarSrc}
          followingCount={this.state.followingCount}
          followCount={this.state.followCount} />
      </div>
    );
  }
}

export default App;
