import React, { Component } from 'react';
import Property from '../../components/Property';

export default class Property extends Component {
     constructor(props) {
          super(props)
          this.state = {
               data: props.data,
               styleProp: 'absolute'
          }
     }

     componentDidMount() {

     }

     render() {
          return (
          <div>
               

               <Property />
               
          </div>
          )
     }

};