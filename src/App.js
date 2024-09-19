import React, { Component } from 'react'
import Navbar from './Mycomponent/Navbar'
import News from'./Mycomponent/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<News key="general" pagesize={5} category="general"/>}/>
            <Route exact path="/buisness" element={<News key="buisness" pagesize={5} category="buisness"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={5} category="entertainment"/>}/>
            <Route exact path="/healthcare" element={<News key="healthcare" pagesize={5} category="healthcare"/>}/>
            <Route exact path="/science" element={<News key="science" pagesize={5} category="science"/>}/>
            <Route exact path="/technology" element={<News key="technology" pagesize={5} category="technology"/>}/>
            <Route exact path="/sports" element={<News key="sports" pagesize={5} category="sports"/>}/>
        </Routes>
      </Router>
      </>
    )
  }
}

export default App
