import React from 'react'
import './index.css'
import {data} from './data'
import logo from '../../img/DnD-Emblem-icon.png'

const index = () => {
  return (
    <header>
        <div className='container menu'>
            <a href='/'>
                <img src={logo}/>
            </a>
            <ul>
                {data.map((data) => {
                    const {id, url, text} = data
                    return <li key={id}>
                        <a href={url}>
                            {text}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    </header>
  )
}

export default index