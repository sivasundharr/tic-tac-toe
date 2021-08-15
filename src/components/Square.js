import React, { Component } from 'react';

class Square extends Component {
    state = {  }
    render() { 
        return ( 
            <button onClick={this.props.onClick} style={btnStyle}>{this.props.btn}</button>
         );
    }
}

const btnStyle = {
    width:'75px',
    height:'75px',
    backgroundColor:'transparent',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize : '36px',
    fontWeight : 'bold',
    border:'1px solid black'
}
 
export default Square;