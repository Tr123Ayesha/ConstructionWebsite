import React from 'react';
import { Button } from '@mui/material';
import RohanConstructiondddd from '../assets/RohanConstructiondddd.png';

const Header = ({ activeSection }) => {
  const buttonStyle = {
    color: 'inherit',
    textTransform: 'none',
    height: '40px',
    minWidth: '80px',
    borderColor: 'transparent',
    fontFamily: 'Poppins, sans-serif',
    borderBottom: 'none',
    marginBottom: '0',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    borderBottom: '3px solid #0066b2',
  };

  return (
    <div style={headerContainerStyle}>
      <div style={logoContainerStyle}>
        <img style={logoStyle} src={RohanConstructiondddd} alt="RohanConstruction" />
      </div>
      <div style={buttonContainerStyle}>
        <Button
          variant="outlined"
          onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          style={activeSection === 'home' ? activeButtonStyle : buttonStyle}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          style={activeSection === 'services' ? activeButtonStyle : buttonStyle}
        >
          Services
        </Button>
        <Button
          variant="outlined"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          style={activeSection === 'projects' ? activeButtonStyle : buttonStyle}
        >
          Projects
        </Button>
        <Button
          variant="outlined"
          onClick={() => document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' })}
          style={activeSection === 'aboutus' ? activeButtonStyle : buttonStyle}
        >
          About Us
        </Button>
        <Button
          variant="outlined"
          onClick={() => document.getElementById('ContactUs').scrollIntoView({ behavior: 'smooth' })}
          style={activeSection === 'ContactUs' ? activeButtonStyle : buttonStyle}
        >
          Contact Us
        </Button>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          ${headerContainerStyle}
          flex-direction: column; /* Stack logo and buttons vertically */
          align-items: center;
          padding: 10px;
          height: auto; /* Adjust height for smaller screens */
        }
        @media (max-width: 500px) {
          ${buttonStyle}
          height: 30px; /* Adjust button height for very small screens */
          font-size: 0.8rem; /* Further reduce font size for very small screens */
          margin: 2px; /* Reduce margin to fit buttons better */
        }
      `}</style>
    </div>
  );
};

// Styles for the header container
const headerContainerStyle = {
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional shadow for better separation
  boxSizing: 'border-box', // Ensure padding does not affect width
  overflow: 'auto', // Ensure content is scrollable if it overflows
};

// Styles for the logo container
const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: 'auto',
};

// Styles for the logo
const logoStyle = {
  width: '55px',
  height: '55px',
};

// Styles for the button container
const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap', // Allow buttons to wrap onto a new line
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  maxWidth: '800px',
  marginLeft: '10px', // Add left margin to prevent overlap with logo
};

export default Header;
