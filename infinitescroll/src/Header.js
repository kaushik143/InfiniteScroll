import React, { Component } from "react"
import SideMenu from "./SideMenu.js"

class Header extends Component {
  state ={
    showSideMenu: false,
  }
  toggleSideMenu = () => {
    this.setState({
      showSideMenu: !this.state.showSideMenu,
    })
  }
  render() {
    const { showSideMenu } = this.state
    return (
      <header className="App-header">
        {
          this.props.showSideBar &&
          <div className="side-menu">
            <button
              onClick={this.toggleSideMenu}
            >
              &#9776;
            </button>
            {
              showSideMenu &&
              <SideMenu
                listItem={this.props.listItem}
              />
            }
          </div>
        }

      </header>
    )
  }
}

export default Header
