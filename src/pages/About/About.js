import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                 We, enthusiastic undergraduates have intended to come up with an idea of developing a realtime Yoga assistant which detects and
                 provides assessment for yoga asanas performed by the users and help them in becoming a divine YOGI.
                 This application initially detects keypoints (coordinates) of different parts of the body. Then it forms a skeleton structure of user for 
                 pose detection and assessment.  
                 This project is developed under the guidance of Mr. K P Sai Ramakrishna Sir.

                </p>
                <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">K.V.Manikanta Vara Prasad<br></br>
                    K.Sri Darshan<br></br>
                    K.Vennela<br></br>
                    K.Revanth Raghunadh
                    </p>
                </div>
            </div>
        </div>
    )
}
