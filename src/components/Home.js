import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Button({ children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}

const logo = 'Baylor_College_of_Medicine_Logo.png';

const sections = [
  { title: "General Topics", path: "/GeneralTopics" },
  { title: "Survival Guide for EMR", path: "/SurvivalGuideEMR" },
  { title: "Labs", path: "/Labs" },
  { title: "Imaging", path: "/Imaging" },
  { title: "Neurology", path: "/Neurology" },
  { title: "Psychiatry", path: "/Psychiatry" },
  { title: "Obstetrics and Gynecology", path: "/OBGYN Test" },
  { title: "Family and Community Medicine", path: "/family" },
  { title: "Pediatrics", path: "/Pediatrics" },
  { title: "Internal Medicine", path: "/im" },
  { title: "Surgery", path: "/surgery" },
  { title: "Metabolic Rounds", path: "/food" },
  { title: "Transportation Rounds", path: "/transportation" },
  { title: "Occupational Health Program", path: "/OHP" },
  { title: "Wellness Resources", path: "/wellness" },
  { title: "Feedback", path: "https://forms.office.com/Pages/ResponsePage.aspx?id=U7o9qE0SMk2I8LcoianpJmorG15APlpFnsjXeiP36-lUMzI3QlBCM0JGME9QOEJCRlJCM1ZHSU9OUy4u", external: true },
  { title: "About the Writers", path: "/writers" },

]

const buttonStyle = {
  width: '100%',
  padding: '14px 0',
  background: 'linear-gradient(90deg, #f5f5f5 0%, #e0e0e0 100%)',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: 12,
  fontSize: '1.1rem',
  fontWeight: 500,
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  marginBottom: 8,
  transition: 'background 0.2s, box-shadow 0.2s',
};

const buttonHoverStyle = {
  background: 'linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 100%)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
};

const Home = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #fff 55%, #e0e0e0 100%)',
        }}
      >
 <img
          src={logo}
          alt="Logo"
          style={{
            position: 'absolute',
            top: 24,
            right: 32,
            width: 80,
            height: 80,
            objectFit: 'contain',
            zIndex: 2,
          }}
        />

        <div
          style={{
            maxWidth: 500,
            margin: '0 auto',
            paddingTop: 80,
            paddingBottom: 40,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              color: '#222',
              fontWeight: 700,
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: 32,
              letterSpacing: '1px',
            }}
          >
            Welcome to the Gray Matter Website
          </h1>


      <div> 
     
        {sections.map((section) => (
              <div key={section.path} style={{ marginBottom: 16 }}>
                {section.external ? (
                  <a
                    href={section.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button>{section.title}</Button>
                  </a>
                ) : (
                  <Link to={section.path} style={{ textDecoration: 'none' }}>
                    <Button>{section.title}</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};



export default Home;