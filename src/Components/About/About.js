import React from 'react';
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play_icon'/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tommorow's Leaders Today</h2>
            <p>History and Vision: Established with a vision to redefine education and cultivate future leaders, our university stands as a beacon of excellence in academia. Since its inception, we have remained committed to fostering an environment where innovation thrives, curiosity is encouraged, and intellect is celebrated. Our journey began with a profound belief in the transformative power of education to shape societies and change lives, and it continues to inspire us as we empower the leaders of tomorrow.</p>
            <p>
            Academic Excellence: At our university, we prioritize academic rigor and intellectual inquiry. Our distinguished faculty members are experts in their fields, dedicated to imparting knowledge and instilling critical thinking skills in our students. Through a diverse range of programs and interdisciplinary initiatives, we offer students the opportunity to explore their passions and pursue their academic interests. Whether in the classroom, laboratory, or community, we strive to provide an enriching educational experience that prepares students to excel in their chosen fields and make meaningful contributions to society.
            </p>
            <p>
            Student-Centered Approach: Central to our mission is a deep commitment to the holistic development of our students. Beyond academics, we provide a supportive and inclusive community where students can grow personally, professionally, and socially. From leadership opportunities to extracurricular activities, internships, and service-learning projects, we offer a wealth of experiences that foster character development, leadership skills, and a sense of global citizenship. At our university, we believe in nurturing not only the intellect but also the spirit, preparing students to lead with integrity, empathy, and purpose in an ever-changing world.
            </p>

        </div>
      
    </div>
  );
}

export default About;
