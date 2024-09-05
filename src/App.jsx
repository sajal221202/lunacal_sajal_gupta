import React, { useState } from 'react';
import './App.css';
import { PiLineVerticalBold } from "react-icons/pi";
import { CiCircleQuestion } from "react-icons/ci";
import { BiLogoMicrosoft } from "react-icons/bi";


function App() {
  const [activeTab, setActiveTab] = useState('about-me');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddImage = () => {
    setImages([
      ...images,
      'https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>Here are the official instructions:</h2>
        <ol>
          <li>Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</li>
          <li>Focus on the two widgets on the right-hand side.</li>
          <li>The first widget has three tabs: "About Me," "Experiences," & "Recommended," which should be clickable.</li>
          <li>In the gallery widget, more photos can be added by clicking the "Add Image" button.</li>
        </ol>
        <h3>Assignment will be scored based on the below parameters:</h3>
        <ol>
          <li>Make the components responsive (for laptop screens; everything above 768px width).</li>
          <li>Replicate the exact UI; with exact paddings, margins, shadows, interactions (if any).</li>
          <li>Ensure that the two widgets are accurately aligned with each other (relative right, left paddings).</li>
        </ol>
      </div>
      <div className="right-section">
        <div className="widget">
          <div className='widget-top'>

        <div className='sideIcon'>
          <CiCircleQuestion/>
          <BiLogoMicrosoft/>
        </div>
          <div className="tab-container">
         
            <button 
              className={`tab ${activeTab === 'about-me' ? 'active' : ''}`}
              onClick={() => handleTabClick('about-me')}
              >
              About Me
            </button>
            <button 
              className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
              onClick={() => handleTabClick('experiences')}
              >
              Experiences
            </button>
            <button 
              className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => handleTabClick('recommended')}
              >
              Recommended
            </button>
          </div>
              </div>
          <div className="tab-content">
            {activeTab === 'about-me' && (
              <div>
                <p>Hello! I'm Dave, your sales rep here from Salesforce.</p>
              </div>
            )}
            {activeTab === 'experiences' && (
              <div>
                <p>Experiences content here</p>
              </div>
            )}
            {activeTab === 'recommended' && (
              <div>
                <p>Recommended content here</p>
              </div>
            )}
          </div>
        </div>
        <div className="widget">
          <div className="gallery-header">
          <div className='sideIcon-btm'>
          <CiCircleQuestion/>
          <BiLogoMicrosoft/>
        </div>
            <h3 className='gallery'>Gallery</h3>
            <button className="add-image-button" onClick={handleAddImage}>+ ADD IMAGE</button>
            <button className="navigation-button">&lt;</button>
            <button className="navigation-button">&gt;</button>
          </div>
          <div className="gallery-container">
            
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} className="gallery-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
