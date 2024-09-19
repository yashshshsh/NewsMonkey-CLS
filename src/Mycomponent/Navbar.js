import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  componentDidMount(){
    document.body.style.height = "100%";
  }

  render() {
    let styles = {
        height: "10vh",
        backgroundColor : "black",
        color:"white",
        fontSize: "1rem",
      }

    return (
     <div className="navbar d-flex justify-content-start"style={styles}>
        <p style={{marginLeft:"1rem",fontSize: "1.5rem",fontWeight:"bold"}}>NewsMonkey</p>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/home">Home</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/buisness">Buisness</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/entertainment">Entertainment</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/healthcare">Healthcare</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/science">Science</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/sports">Sports</Link>
        <Link style={{marginLeft:"0.7rem",color:"white",textDecoration:"none"}} to="/technolgy">Technology</Link>
     </div>
    )
  }
}

export default Navbar
