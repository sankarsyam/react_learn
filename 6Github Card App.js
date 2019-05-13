// gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    console.log(this.state.userName);
    const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
    console.log(resp.data);
    this.props.onSubmit(resp.data);
    this.setState({
      userName:''
    });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addProfileData= (profileData) =>{
    this.setState(prevState =>({
      profiles:[...prevState.profiles,profileData],
    }));
  }
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addProfileData}/>
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);

/* Nerdy secret: You can use "less" below! Don't tell anybody... */

.github-profile {
	margin: 1rem;
  img {
    width: 75px;
  }
  .info {
    display: inline-block;
    margin-left: 12px;
		.name {
    	font-size: 1.25rem;
      font-weight: bold;
    }
  }
}

// form {
// 	border: thin solid #ddd;
//   background-color: #fbfbfb;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   display: flex;
//   justify-content: center;
// }

// .header {
// 	text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// }