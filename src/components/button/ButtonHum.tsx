import { useState } from 'react'
import  './buttonHum.css'



export const ButtonHum=()=>{

  const [active,setActive]=useState(false)

  const handleClickBtn=()=>{
   setActive(!active)
  }

    return(
      <>
      <button 
        className={ active ? 'active' : ''}
        onClick={handleClickBtn}>
          <span></span>
          <span></span>
          <span></span>
      </button>
      
        <div >
        <div className={ active ? 'menu active' : `menu`}>
        <ul className="menu__list">
                <li className="menu__item">home</li>
                <li className="menu__item">about</li>
            </ul>
        </div>
        </div>
      </>
    )
}