import React from 'react';
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play_icon' onClick={()=>
              {setPlayState(true)}}/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tommorow's Leaders Today</h2>
            <p>History and Vision: Established with a vision to redefine education and cultivate future leaders, our university stands as a beacon of excellence in academia. Since its inception, we have remained committed to fostering an environment where innovation thrives, curiosity is encouraged, and intellect is celebrated.</p>
            <p>
            Academic Excellence: At our university, we prioritize academic rigor and intellectual inquiry. Our distinguished faculty members are experts in their fields, dedicated to imparting knowledge and instilling critical thinking skills in our students. Through a diverse range of programs and interdisciplinary initiatives, we offer students the opportunity to explore their passions and pursue their academic interests.
            </p>
            <p>
            Student-Centered Approach: Central to our mission is a deep commitment to the holistic development of our students. Beyond academics, we provide a supportive and inclusive community where students can grow personally, professionally, and socially. From leadership opportunities to extracurricular activities, internships, and service-learning projects, we offer a wealth of experiences that foster character development, leadership skills, and a sense of global citizenship.
            </p>

        </div>
      
    </div>
  );
}

export default About;
