import React from "react"
import CardList from "./CardList"
import SideMenu from "./SideMenu"
import "./Content.css"

const Content = (props) => {
  return (
    <div className="content-container">
      {
        !props.showSideBar &&
        <SideMenu {...props} />
      }
      <CardList {...props} />
    </div>
  )
}

export default Content
