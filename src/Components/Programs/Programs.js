

import React from 'react';
import './programs.css'
import program_1 from '../../Assets/program-1.png'
import program_2 from '../../Assets/program-2.png'
import program_3 from '../../Assets/program-3.png'
import program_icon_1 from '../../Assets/program-icon-1.png'
import program_icon_2 from '../../Assets/program-icon-2.png'
import program_icon_3 from '../../Assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs container '>
        <div className="program">
            <img src={program_1}/>
            <div className="caption">
                <img src={program_icon_1}/>
                <p>Graduation Degree</p>
            </div>
            
        </div>
        <div className="program">
            <img src={program_2}/>
            <div className="caption">
                <img src={program_icon_2}/>
                <p>Masters Degree</p>
            </div>
            
        </div>
        <div className="program">
            <img src={program_3}/>
            <div className="caption">
                <img src={program_icon_3}/>
                <p>Post Graduation</p>
            </div>
            
        </div>
      
    </div>
  );
}

export default Programs;