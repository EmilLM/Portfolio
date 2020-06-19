import React from 'react';

const About = () => {
    return ( 
        <div className={'diagonal-box bgAbout'} id="about">
            <div className="content about">
                <h1 className="sectionTitle">About</h1>
                
                <div className="aboutCode">
                    <p><span>Name :</span> 'Luchian Emil Moise', </p>
                    <p><span>Specialization :</span> 'Full stack dev',</p> 
                    <p><span>Stack :</span> 'MERN',</p>
                    <p><span>Location :</span> 'Bucharest, Romania'</p>
                </div>
               
                <p>
                    Learned the ropes of front-end programming at <span>Coder's Lab</span>, an intensive coding program, <br/>then started 
                    learning the <span>MERN stack</span>, just in case I need to develop the app idea I'm going
                    to have, aaanytime now.
                </p>
                <p>
                    I'm eager to prove my coding skills and excited for new challenges.
                    Efficient and resourceful in achieving my objectives, in bringing code to life in amazing designs. 
                    <br/><span>(Now with a back-end, if needed)</span>
                </p>
                <div className="sub">Main tech stack:</div>
                <i>
                    HTML5, CSS, Javascript, Scss, ReactJs, Next.js, Node, Express, MongoDB
                </i>
                {/* <div className="sub">Current status: </div>
                <p>   
                    looking for opportunities to learn new technologies in a fulfilling job.
                </p> */}
            </div>
            
        </div>
    );
}
 
export default About;