import React from 'react';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from './images/logo.svg';
import ilustration from './images/illustration-mockups.svg'
import growtogether from './images/illustration-grow-together.svg';
import flowingConversation from './images/illustration-flowing-conversation.svg'
import yourUser from './images/illustration-your-users.svg'
import location from './images/icon-location.svg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'
import footerLogo from './images/logo.svg'
function App() {

  const handleGetStartedClick = () => {
   
    window.open('https://github.com/ahmad-majid/huddle', '_blank');
  };

  
    const handleTryItFreeClick = () => {
      window.open('https://www.frontendmentor.io/profile/ahmad-majid', '_blank');
    };
  return (
    <div className="App">
    <header className="top" style={{display:'flex',flexDirection:'column'}}>
      <div className='a'style={{display:'flex',justifyContent:'space-between',marginBottom:'4rem'}}>
      <img src={logo} alt="Logo" style={{width:'130px',height:'26px'}} />
      <button style={{lineHeight:'2.3rem'}} onClick={handleTryItFreeClick} className="try-free-button">Try It Free</button>
      </div>
      <main> 
        <article className="principal">
          <section>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button onClick={handleGetStartedClick}>Get Started For Free</button>
          </section>
          <img src={ilustration} alt="Illustration" />
        </article>
      </main>
    </header>
      <div className="sub-main">
        <article>
          <section>
            <h2>Grow Together</h2>
            <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
          </section>
          <img src={growtogether} alt="Illustration" />
        </article>
        <article>
          <section>
            <h2>Flowing Conversations</h2>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </section>
          <img src={flowingConversation} alt="Illustration" />
        </article>
        <article>
          <section>
            <h2>Your Users</h2>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </section>
          <img src={yourUser} alt="Illustration" />
        </article>
        <div className="invitation">
          <h3>Ready To Build Your Community?</h3>
          <button onClick={handleGetStartedClick} >Get Started For Free</button>
        </div>
      </div>
      <footer>
        <div className="foot">
          <img style={{marginBottom:'2rem'}} src={footerLogo} alt="Logo" className='foot-image'/>
          <div className="central">
            <section className="first-column">
              <p style={{marginBottom:`2rem`,lineHeight:'2rem'}}><img src={location} alt="Location Icon" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <p style={{marginBottom:`2rem`}}><img src={phone} alt="Phone Icon" />+1-543-123-4567</p>
              <p style={{marginBottom:`2rem`}}><img src={email} alt="Email Icon" />example@huddle.com</p>
            </section>
            <section className="last-columns">
              <ul >
                <li>About Us</li>
                <li>What We Do</li>
                <li>FAQ</li>
              </ul>
            </section>
            <section className="last-columns">
              <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </section>
            <section className="social-media last-columns">
              <ul>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
              </ul>
            </section>
          </div>
        </div>
        <p style={{display:'flex',justifyContent:'flex-end',margin:'1rem',paddingBottom:'1.5rem'}}>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        <p className="attribution" style={{wordSpacing:'.8rem'}}>
          Challenge by <a style={{wordSpacing:'normal',marginLeft:'1rem',marginRight:'1rem',textDecoration:'none',color:'red',fontWeight:'bold'}} href="https://www.frontendmentor.io/profile/ahmad-majid" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
          Coded by <a href="/" style={{wordSpacing:'normal',marginLeft:'1rem',textDecoration:'none',color:'red',fontWeight:'bold'}}>  Ahmad Majid </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
