import React from 'react'





const skill = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];


const skills = () => {
  return (
    
    <section className='left' id="skills">
    <h2>Skills</h2>
    <ul>
      {skill.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>





    
  )
}

export default skills