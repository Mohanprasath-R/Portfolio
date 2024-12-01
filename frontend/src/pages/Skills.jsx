import React, { useEffect, useState } from 'react';
import 'boxicons'

const skills = [
  { name: 'JavaScript',icon:"javascript" ,color:"yellow" , level  : 90 },
  { name: 'React',icon:"react" ,color:"skyblue" , level  : 80 },
  { name: 'Node.js',icon:"nodejs" ,color:"green" , level  : 60 },
  { name: 'MongoDB',icon:"mongodb" ,color:"lightgreen" , level  : 60 },
  { name: 'Express.js',icon:"jsfiddle" ,color:"black" , level  : 60 },
  { name: 'Bootstrap',icon:"bootstrap" ,color:"purple" , level  : 80 },
  { name: 'Python',icon:"python",color:"skyblue" , level  : 90 },
  { name: 'PHP',icon:"php" ,color:"#474A8A" , level  : 60 },
];

const Skills = () => {
  const [progress, setProgress] = useState(
    Array(skills.length).fill(0) // Initialize progress for each skill at 0
  );

  useEffect(() => {
    // Animate progress for each skill
    skills.forEach((skill, index) => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          if (updatedProgress[index] < skill.level) {
            updatedProgress[index] += 1; // Increment progress
          } else {
            clearInterval(interval); // Stop incrementing when the target is reached
          }
          return updatedProgress;
        });
      }, 20); // Adjust interval duration for smoother/slower animations
    });
  }, []);
  return (
    <div className="container-fluid vh-100 pt-5 px-5 bg-dark" id="skills">
      <h2 className="text-light text-center m-2">My Skills</h2>
      <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="m-3 col-12 col-md-4 my-3">
              <box-icon type='logo' size="lg" name={skill.icon} color={skill.color}></box-icon><span className=" text-light text-start ">{skill.name}</span>
              <div className="progress" style={{ height: "1.5rem" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  role="progressbar"
                  style={{ width: `${progress[index]}%` }}
                  aria-valuenow={progress[index]}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {progress[index]}%
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
