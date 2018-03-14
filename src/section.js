import React from 'react';

const hobbies = ['cantar', 'bailar']
const Section = ({ hobies }) => (
  <div>
    <p>holaaaaa</p>
    <ul>
      {
        hobbies.map(hobbies => (
         <li key={hobbies}>{hobbies}</li>
        ))
      }
    </ul>
  </div>
)

export default Section