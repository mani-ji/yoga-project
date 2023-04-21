import { useState,useEffect } from "react"
import { getStats,auth } from "../../firebase";
import './Stats.css'
import React from 'react';

export function Stats(){
    let poseList = [
        'Tree', 'Chair', 'Cobra', 'Warrior', 'Dog',
        'Shoulderstand', 'Traingle'
      ]
    const [stats, setStats] = useState([]);
    useEffect(() => {
       
        getStats(setStats) 
        
      }, [])
     

    return (<div>
      
      <div className="stats-content">
        <h2>{auth?.currentUser?.email && <>Welcome {auth?.currentUser?.email}</>}</h2>
        <h2>Your General Statistics of Yoga Asanas </h2>
        
        </div>
          <table className="tablestyles">
            <thead>
              <tr>
                <th>Yoga Asana</th>
                <th>Best Time (sec)</th>
                <th>Target Time(sec)</th>
              </tr>
            </thead>
            <tbody>
              {poseList.map((pose)=> (
                <tr key={pose}>
                  <td>{pose}</td>
                  <td>{stats[pose] || 0}</td>
                  <td>30-60 </td>
                </tr>
              ))}
            </tbody>
          </table>
        
    </div>)
}
