import React, { Component } from 'react';
import { NavBar } from '../../components/Navbar';
import { Header } from '../../components/Header';

export default class Listing extends Component {
     constructor(props) {
          super(props)
          this.state = {
               user: props.user,
               styleProp: 'absolute'
          }
     }

     componentDidMount() {
          
     }

     render() {
          if (this.props.user) {
               return (
                    <div className="listing">
                         <NavBar styleProp={this.state.styleProp} />
                         <Header user={this.state.user} />
                         <h1> Gallery </h1>
                    </div>
               )
          } else {
               return (
                    <div className="listing">
                         <NavBar styleProp={this.state.styleProp} />
                         <Header user={this.state.user} />
                         <h1> Gallery </h1>
                    </div>
               )
          }
     }

}