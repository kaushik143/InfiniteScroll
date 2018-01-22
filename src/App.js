import React, { Component } from 'react';
import Content from "./Content.js"
import Header from "./Header.js"
import './App.css';

const SideMenuList = [
  {id:1, name:"Item1", link:"#"},
  {id:2, name:"Item2", link:"#"},
  {id:3, name:"Item3", link:"#"},
  {id:4, name:"Item4", link:"#"}
]
class App extends Component {
  state = {
    sideBarInHeader: window.innerWidth <= 768,
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        sideBarInHeader: window.innerWidth <= 768,
      })
    })
  }
  componentWillUnMount() {
    window.removeEventListener("resize")
  }
  render() {
    const { sideBarInHeader } = this.state
    const allProps = {
      "listItem": SideMenuList,
      "showSideBar": sideBarInHeader
    }
    return (
      <div className="App">
        <Header
          {...allProps}
        />
        <Content
          {...allProps}
          threshold={500}
        />
      </div>
    );
  }
}

export default App;
