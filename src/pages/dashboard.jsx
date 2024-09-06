import React, { useState, useEffect } from "react";
import Header from "../component/header";
import video from '../assets/video.mp4';
import Service from "./service";
import Project from "./projects";
import About from './about';
import Contact from './contact';
import FooterComponent from "../component/footer";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Header activeSection={activeSection} />
      <div id="home" style={{
      marginTop: '5%',
      height: '100vh', // Use full viewport height for better responsiveness
      overflow: 'hidden',
      position: 'relative',
      textAlign: 'center'
    }}>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1 // Ensure video is in the background
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          padding: '10px 20px',
          zIndex: 1 // Ensure text is above the video
        }}
      >
        <h3 style={{
          fontWeight: '700',
          color: 'black',
          fontSize: '2.5rem', // Responsive font size
          margin: '0',
          padding: '0'
        }}>Your Vision, Our Commitment</h3>
        <p style={{
          fontSize: '1.25rem', // Responsive font size
          margin: '10px 0',
          lineHeight: '1.6'
        }}>
          Rohan Construction Services Pvt Ltd is committed to delivering high-quality construction solutions while offering cost-effective services to our clients. Since 2014, we have been dedicated to transforming visions into reality by providing top-notch utilities and unmatched comfort in every project we undertake.
        </p>
      </div>
      </div>
      <div id="services">
        <Service />
      </div>
      <div id='projects'>
        <Project />
      </div>
      <div id='aboutus'>
        <About />
      </div>
      <div id='ContactUs'>
        <Contact />
      </div>
      <div style={{ marginTop: '10px' }}>
        <FooterComponent />
      </div>
    </div>
  );
};
<style jsx>{`
  @media (max-width: 768px) {
    #myVideo {
      height: auto;
      width: 100%;
    }
    .video-text {
      font-size: 4vw;
      padding: 15px;
    }
    .video-text h3 {
      font-size: 6vw;
    }
    .video-text p {
      font-size: 4vw;
    }
  }
  @media (max-width: 500px) {
    #myVideo {
      height: auto;
      width: 100%;
    }
    .video-text {
      font-size: 5vw;
      padding: 10px;
    }
    .video-text h3 {
      font-size: 5vw;
    }
    .video-text p {
      font-size: 3.5vw;
    }
  }
`}</style>
export default Dashboard;
