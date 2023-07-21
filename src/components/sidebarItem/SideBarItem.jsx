import React from 'react'
import styles from './sidebarItem.module.css'
const SideBarItem = ({labels, isSelected}) => {
  return (
    <li className={`${styles.item} ${isSelected && styles.isSelected}`}>
        {labels}
    </li>
  )
}

export default SideBarItem