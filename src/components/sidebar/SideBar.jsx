import React from 'react'
import styles from './sidebar.module.css'
import SideBarItem from '../sidebarItem/SideBarItem'
import { useState } from 'react'
const SideBar = () => {
  const actions = [{
    labels:'Home',
  },
  {
    labels:'Services',
  },
  {
    labels:'News',
  },
  {
    labels:'Blog',
  },
  {
    labels:'Contact',
  }]

  const [isOpen, setisOpen] = useState(false)
  return (
    <div class={`${styles.sidebar} ${!isOpen && styles.close}`}>
      <ul class={styles.actions}>
        {actions.map(item=>(<SideBarItem labels={item.labels} key={item.labels} isSelected={item.labels ==='Home'}/>))}
      </ul>
      <div className={styles.toggle} onClick={()=>setisOpen(p => !p)}>
        {!isOpen ? <img style={{width: '32px', height: '32px'}} alt='img' src='/menu.png'/> : <img style={{width: '32px', height: '32px'}} alt='img' src='/close.png'/>}
      </div>
    </div>
  )
}

export default SideBar