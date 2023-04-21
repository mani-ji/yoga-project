import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import homeimg from '../../utils/images/yoga_pose1.png'
export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
            
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
            </div>

            
            <div className="home-main">
            <div className="description">
                <h1 >A</h1>
                <h1>YOGA</h1>
                <h1>ASSISSTANT</h1>
                
                <div className="btn-section">
                    <Link to='/Login'>
                        <button
                            className="btn start-btn"
                        >Login</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>
                </div>
            </div>
            <div className='home-img'>
                <img src={homeimg}></img>
            </div>

            </div>
        </div>
    )
}
