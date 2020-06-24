import React, { Component } from 'react';
import './Mainframe.css';
import Movie from '../../components/Movie';
class MainFrame extends Component {
  render() {
    return ( 
        <div className="container-fluid mainframe-wrapper">
            <Movie />
        </div>
    );
  }
}

export default MainFrame;