
import React, { Component } from 'react';



class Login extends Component {

    constructor() {
        super() 
        this.state = {
            userName: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    
    handleUsernameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }        

    handleClick(e) {
        alert(`Username is ${this.state.userName} and the Password is ${this.state.password}`)
        this.setState({
            userName: '',
            password: ''
        })
    }



    render() {
        return (
            <div className="App">
          <input onChange={this.handleUsernameChange} value={this.state.userName} />
          <input onChange={this.handlePasswordChange} value={this.state.password} />
          <button onClick={this.handleClick} >Click Me!!!</button>
      </div>
        )
    }
}

export default Login;



// ------------------------------------------------------------------------------------------------------------

// import React, { Component } from 'react';

// class Login extends Component {
//   constructor() {
//     super();

//     this.state = {
//       username: "",
//       password: ""
//     };

//     this.handleLogin = this.handleLogin.bind( this );
//   }

//   handleUsernameChange( name ) {
//     this.setState({ username: name });
//   }

//   handlePasswordChange( pass ) {
//     this.setState({ password: pass });
//   }

//   handleLogin() {
//     alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
//   }

//   render() {
//     return (
//       <div>
//         <input onChange={ (e) => this.handleUsernameChange( e.target.value ) } type="text"/>
//         <input onChange={ (e) => this.handlePasswordChange( e.target.value ) } type="text"/>
//         <button onClick={ this.handleLogin }>Login</button>
//       </div>
//     )
//   }
// }

// export default Login;