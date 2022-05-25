import React from 'react'
import './Services.scss'

const Services = (props) => {
    const data = props.data;
  return (
      
    <div className='service-list-container app__flex'>
        <img src={props.image} alt='service1'/>
        <h3>{props.heading}</h3>
        <hr style={{
            color: 'black',
            backgroundColor: 'black',
            width: '100%',
            height: 3
        }}/>
        <p >{props.text}</p>
        <h5>Our Services are :</h5>
        <ul className="service-list ">
            {data.map((item)=>(
                <li  key={`link-${item}`}><span>{item}</span></li>
            ))}
            
            
        </ul>
        {console.log(props.data)}
    </div>
  )
}

export default Services