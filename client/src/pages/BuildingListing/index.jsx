import React, { Component } from 'react';
import { NavBar } from '../../components/Navbar';
import { Header } from '../../components/Header';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

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
          return (
          <div>
               <Header />
               <NavBar />
               <Gallery />
               <Footer />
          </div>
          )
     }

};