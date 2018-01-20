import React from "react"
import "./SideMenu.css"

const SideMenu = ({
listItem,
})=> {
  const ListItem = listItem.map((item) => (<li key={item.id}>{item.name}</li>))
  return (
    <ul>
      {ListItem}
    </ul>
  )
}

export default SideMenu
