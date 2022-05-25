import React from 'react'
import './Home.scss'
import {Services} from '../../snippets'
import {images} from '../../constants'
const Home = () => {

  const service1_data = ['Console','Java Swing','JavaFX','GUI','Data-Structure and Algorithm','Desktop Application',
    'Bug Fixing','Network Programming','Game Design','Object-Oriented Programming (OOP)',
    'Rest Services','Multithreading'];
  const service1_text = "We are a team of professional developers working with various technology. We have over 6 years of experience working in the Java technology field.";
  const service2_data = ['PHP programming','PHP website','Custom PHP Scripts','JavaScript','JQuery','Ajax','CodeIgniter','Laravel',
  'Core Php','Database-MySQL'];
  const service2_text = 'We have a team of Full Stack Developers working on web design and development/Web applications development using HTML, CSS, Javascript, JQuery, AJAX, PHP, CodeIgniter, Laravel & WordPress.'

  const service3_data = ['WordPress Setup & Installation','E-Commerce ready(Standard & Golden package)',
    'WordPress Blog/Forum Setup',
    'SEO Optimisation(Golden package)',
    'Speed Optimised - Pingdom Tools*',
    'Setting up Google Analytics to track your site metrics',
    'Integration with Social media platforms',
    'Integration with Marketing platforms & CRM',
    'Facebook Customer Chat',
    'Online Contact Form',
    'Signup/Newsletter Forms',
    'Popups(Premium)']
  const service3_text = 'We have dedicated WordPress Developers team with proper efficiency in theme-plugin development . Here\'s what you would get:'

  const service4_data = ['ASP.Net Core / MVC',
  'E-Commerce ready(Standard & Golden package)',
  'Entity framework /Entity Framework Core',
  'Restful API',
  'Azure Functions/Triggers',
  'Server Less API',
  'Identity login with authentication and role management',
  'Azure Web Job',
  'Blazer C#',
  'Azure IoT Hub',
  'Azure Analytic Stream Job',
  'Design Pattern',
  'N-Tier Architecture',
  'Repository Pattern',
  'Dependency Injection',
  'Web API',
  'Soap API',
  'Dapper',
  'Bug Fixing',
  'Windows server'];
  const service4_text = 'We can develop ASP.net Core MVC or Blazor web application using standard best practices, HTML/CSS/JavaScript, SQL Server.'
  return (
    <>
    <div className="wrapper">
      <div className="container-first app__flex">
        <div className="first-image">
           <img src={images.home1} alt='home1'/>
        </div>
        <div className="first-heading app__flex">
           <h1>
             Dynamic Website + Free Android App in just 7000 Rs.
             & eCommerce Website + Free Android App in Just 12000 Rs.
           </h1>
        </div>
      </div>



      <div className="container-services app__flex">
         
         <h2 >OUR SERVICES</h2>
         <h1>We Provide Best Web Development</h1>
         <div className="services-one-two app__flex">
           <div className="services-one app__flex">
             <Services image={images.home_services1} data={service1_data} 
             text={service1_text} heading={"Java Development"}/>
             <Services image={images.home_services2} data={service2_data} 
             text={service2_text} heading={"PHP Development"}/>
           </div>
           <div className="services-two app__flex">
              <Services image={images.home_services3} data={service3_data} 
                text={service3_text} heading={"WordPress Development"}/>
              <Services image={images.home_services2} data={service4_data} 
                text={service4_text} heading={".NET Development"}/>
           </div>
         </div>
      </div>


      <div className="web-design-logo app__flex">
            <h2 >WEB DESIGN</h2>
      </div>
      <div className="web-design-container app__flex">
      
          <div className="web-design-header app__flex">
          
              <h1>
              Let us design your dream website
              </h1>
              <p>Your website is the face of your business. A well-designed website puts your best foot forward, establishing credibility and authority with your potential clients, furthermore communicating your most interesting values, messages, and mission statements. 
                We provide a professional, local, and hands-on experience to build your Kriworld website design, or redesign, from start to finish. Whether your current website could use a refresh, facelift, or your business needs an entirely assets_new site built from scratch.
                 We will craft the perfect design for your small to medium-sized business website.</p>
           </div>
           <div className="web-design-image app__flex">
              <img src={images.home_design1} alt='home1'/>
          </div>
      </div>
    
      <div className="stunning-logo app__flex">
       <h2>A STUNNING WEB-SITE DESIGNED FROM SCRATCH</h2>
      </div>
      <div className="stunning-container app__flex">
        
        <div className="stunning-image">
            <img src={images.home_stunning1} alt='home-stunning1'/>
        </div>
        <div className="stunning-header app__flex">
            <h1>
              Stand out from the crowd - get a polished, custom website that's 100% unique to your brand.
            </h1>
            <p>
            Every business needs to be online. Stand out from the competition 
            and make your brand look its best with stunning web page design. 
            With Kriworld web design services, you'll get thoughtful, effective 
            web page designs created by professionals.
            </p>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Home