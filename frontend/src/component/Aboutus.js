import React from 'react';

function Aboutus() {
  const myImage = "https://th.bing.com/th/id/OIP.rqxcAWVcTv6qh4TH9BelJgHaHR?w=201&h=196&c=7&r=0&o=5&pid=1.7";
  const logo ="https://th.bing.com/th/id/OIP.HLiHqhu9HD8Z5lxFfF5bYAHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
   return (
    <div id="about" > 
       <div className='about1'>
          <img className='logo' src={logo} alt='icone' />
          <div id='about12' >
            <h1 >About  us</h1>
          </div>
       </div>
      <div className='divet' >
      <div className='photo'>
          <h1 id='titleph'>doctor </h1>
          <img src={myImage}  alt='myimage' />
          
      </div>
      <div id='text'>
        <h1 className='titre2' >
         specialités  
        </h1>
      <ul className='textul'>
        <li>Générale</li>
        <li> Chirurgie</li>
        <li>ORL</li>
        <li>Neurologie </li>
         <li>Dentaire</li>
         <li>Pédiatrie</li>
         <li>Ophtalmologie</li>
         <li>Cardiologie</li>
         <li>Orthopédie</li>


      </ul>

      </div>
      </div>
    </div>
  )
}

export default Aboutus ;

