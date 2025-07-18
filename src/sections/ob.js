import SectionTemplate from '../components/SectionTemplate';
import React, { useState } from 'react';

const thStyle = {
  border: '1px solid black',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid black',
  padding: '8px',
};

const sections = [
  {
    title: "General HPI Note",
    content: (  
      <div>
        <h3>HPI Note</h3>
        <p>
          Refer to general HPI note but add the following relevant ROS, relevant prenatal visit questions, Ob/Gyn history, and social history:
        </p>
        <ul>
          <li>
            <strong>Relevant ROS</strong>
            <ul>
              <li>Symptoms: Vaginal bleeding, abdominal pain, discharge</li>
              <li>Hemodynamic instability: Dizziness, fainting, headache, racing heart, pale skin</li>
            </ul>
          </li>
          <li>
            <strong>OB history</strong>
            <ul>
              <li>G’s and P’s (TPAL)</li>
              <li>When outcome occurred (what year or age of patient at time)</li>
              <li>Delivery Method (vaginal vs C/S) vs abortion (D&amp;C vs medication vs spontaneous)</li>
              <li>Approximate gestational age when outcome occurred for EACH</li>
              <ul>
                <li>Sex of infant, weight of infant, complications of pregnancy or delivery</li>
                <li>Type of vaginal delivery or C/S (SVD, VAVD, FAVD, LTCS, Classical C/S, unknown C/S)</li>
              </ul>
              <li>Blood Type</li>
            </ul>
          </li>
          <li>
            <strong>GYN history</strong>
            <ul>
              <li>LMP, age of menarche, how often menses occurs, length of bleeding, pads/day</li>
              <li>Are they sexually active, # of partners, sex of partners?</li>
              <ul>
                <li>Number of lifetime partners, age at coitarche, sexual practices (vaginal, oral, anal)</li>
                <li>Current contraceptive methods</li>
                <li>Any STI’s</li>
              </ul>
              <li>Any abnormal pap smears and date of last pap smear</li>
              <li>History of GYN problems (e.g., fibroids, ovarian cysts, PCOS, etc.)</li>
              <ul>
                <li>History: PID, IUD, IVF</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Social history</strong>
            <ul>
              <li>Tobacco, alcohol, drugs</li>
              <li>Do you feel safe at home?</li>
              <li>Has a partner ever hit, kicked, or frightened you?</li>
            </ul>
          </li>
          <li>
            <strong>General Prenatal Visit Questions</strong>
          </li>
        </ul>
         <h3>Prenatal Visit Questions Table</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <tbody>
          <tr>
            <td style={tdStyle}>If &gt;20 weeks, any fetal movements?</td>
            <td style={tdStyle}>Any vaginal bleeding (Color, Clots, and Timing)</td>
            <td style={tdStyle}>Any leakage of fluid?</td>
          </tr>
          <tr>
            <td style={tdStyle}>Any Contractions/Cramping?</td>
            <td style={tdStyle}>Any feeding plan?</td>
            <td style={tdStyle}>Any contraception plan?</td>
          </tr>
          <tr>
            <td colSpan={3} style={tdStyle}><center>If male baby, any desire for baby circumcision?</center></td>
          </tr>
          
        </tbody>
      </table>
      </div>
    ),

    
  },
]
const Ob = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionTemplate
      title="Neurology"
      content={
        <div>
          {sections.map((section, idx) => (
            <div key={section.title} style={{ marginBottom: 10 }}>
              <button
                style={{
                  width: '100%',
                  padding: 10,
                  fontSize: '1rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: openIndex === idx ? '#e0e0e0' : '#f9f9f9',
                  border: '1px solid #ccc',
                  fontWeight: 'bold',
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {section.title}
              </button>
              {openIndex === idx && (
                <div style={{ padding: '12px 8px', background: '#fafafa', border: '1px solid #eee', borderRadius: 8 }}>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Ob;