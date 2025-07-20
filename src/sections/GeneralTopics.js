import SectionTemplate from '../components/SectionTemplate';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { thStyle, tdStyle, resourceImgStyle, resourceLinkStyle } from '../styles/styles';

const sections = [
  { title: "General HPI Template", path: "/HPI" },
  { title: "Discharge Summary", path: "/Discharge" },
  { title: "Review of Systems", path: "/ROS" },
  { title: "Normal Physical Exam", path: "/PE" },
  { title: "Oral Presentations", path: "/Presentation" },
];


const GeneralTopics = () => {
  const [showCardiac, setShowCardiac] = useState(false);
  const [showBrady, setShowBrady] = useState(false);
  const [showTachy, setShowTachy] = useState(false); // New state for tachycardia
  const [showACS, setShowACS] = useState(false);     // New state for ACS

  return (
    <><SectionTemplate title="General Topics" />
      {sections.map((section) => (
        <div key={section.path} style={{ marginBottom: 10 }}>
          <Link to={section.path}>
            <button style={{ width: '100%', padding: 10 }}>
              {section.title}
            </button>
          </Link>
        </div>
      ))}

      <p><strong>Welcome to the 37th Edition of Gray Matter!</strong></p><p>Hello, AMAZING MS2s! Welcome to the 37th edition of Gray Matter, a clinical handbook for Baylor College of Medicine students first conceived by Mark Edelman and David Savage in 1986. Once again, it is hoped that this collection of practical information will be useful during your clinical assignments. </p><p>
        We know the start of clinical rotations can be very daunting and all the memes you have seen of a medical student starting rotations and feeling lost are VERY REAL! But hey, that is the medical school tradition that everyone relates to. However, BCM does an amazing job of supporting one another and one of the supports that we have for you all is this document called Gray Matter. It was an annually updated document that started in the 1990s. You may even ask your attendings/residents who went to BCM if they have ever used this document as many carried it as their little pocket of medicine for quick references. This document’s appearance serves as a revival of the Gray Matter. The main object of the documents are as follows:</p><ul>
        <li>Serve as a guidebook for medical students for clinical rotations</li>
        <li>Supplementary resource guiding prerounding, presentations, and note-writing</li>
        <li>Anticipate HY conditions for each rotation</li>
        <li>Discussions of Tips for Success</li>
      </ul><p>This document has mainly been written by the following MS3s: Soham Datar, Ryan Chang, Adam Davis, Aydee Hinojosa, Isaac Miller, John Sholeen, Todd Snow, and Garrett Wortham, with additional guidance from Luay Boulahouache (MS4).  The document has been receiving plenty of oversight from the following attendings: Drs. Zaven Sargsyan, Lauren Rash, Anita Kusnoor, and Atul Maheshwari. Additionally, each director/main faculties of each clerkship has been involved to keep the materials relevant and helpful: Drs. Bellows and Anandan (Neurology), Drs. Han and Williams (Psychiatry), Dr. Harris (ObGyn), Dr. Sarkar (Family Med), Drs. Misra, McClure, Barak, Rueda and Clegg (attendings) and Dr. Bianca Gray (PGY3 resident) (Pediatrics), Drs. Rash and Sargsyan (attendings) and Drs. Lydia Glick and Trevor Jamison (Chief Resident and PGY3 resident) (Internal Medicine), and Dr. Rojas-Khalil (attending) and Dr. Nour Eddeen Bitar (PGY2 anesthesia resident) (Surgery). Lastly but not least, this could not have been done without the assistance and approval from Deans Poythress and Morrow (Student Affairs). Please if you ever see them, thank them as this required great dedication and coordination between all the faculties and students to get this final product.<p>
        This document however should not replace your CODs, didactics, UWorld, Anki, and other resources that your clerkship director will provide but rather a great supplement to those! We wish this document to be a great supplement to your many resources for you all to know expectations of each rotation and learn tricks to showcase your amazing skills on rotations.</p><p>
          Remember to always learn the best you can on each rotation as the knowledge/skills you learn in one rotation will translate to another rotation. Most of all in each of your rotation, show great passion in the care of your patients because they are yours. This is the part of medicine many of us have been waiting our whole lives for. Enjoy it and wish this Gray Matter can help form new synapses between your neurons!</p>
      </p><h2>Phone Directory References</h2><ul>
        <li>Ben Taub Interpreter: 713-873-7300 (*37300)</li>
        <li>BT Operator: 713-873-2010</li>
        <li>VA Directory: <a href="https://app.qgenda.com/landingpage/medvamc">https://app.qgenda.com/landingpage/medvamc</a></li>
        <li>TCH SpokWeb: <a href="https://tchspokweb.ad.texaschildrenshospital.org/amcom/amcomweb/">TCH Paging Directory</a></li><ul>
          <li>Click on the pager icon. In here, type your quick page: “[New/Return] consult for patient in [X] unit who is a [XX]-years old with [primary diagnosis] with concern for [insert new concern for their service]. Please call back at [insert ASCOM number]</li>
        </ul>
      </ul>

      <center> <img src="/VAEmergency.png" alt="VA Emergency Phone Directory" style={{ width: '50%', height: 'auto' }} /> </center>


      <h2>ACLS: Code Logistics</h2><p>Includes bradycardia/tachycardia decision tree, arrest algorithms, role assignments, and drug protocols.</p><p>
        <strong><a href="https://acls-algorithms.com/acls-algorithm-overview/">https://acls-algorithms.com/acls-algorithm-overview/</a></strong>
      </p>


      {/*ACLS buttons */}
      <div style={{ margin: '24px 0' }}>
        <button
          style={{
            width: '100%',
            padding: '20px 0',
            fontSize: '1.25rem',
            borderRadius: 8,
            cursor: 'pointer',
          }}
          onClick={() => setShowCardiac(!showCardiac)}
        >
          {showCardiac ? 'Hide Cardiac Arrest Algorithm' : 'Show Cardiac Arrest Algorithm'}
        </button>
        {showCardiac && (
          <div style={{ marginTop: 16 }}>
            <center>
              <img
                src="/aha-2021-cardiac-arrest-algorithm-diagram.jpg"
                alt="Cardiac Arrest Algorithm"
                style={{ width: '100%', height: 'auto' }}
              />
            </center>
          </div>
        )}
      </div>

      <div style={{ margin: '24px 0' }}>
        <button
          style={{
            width: '100%',
            padding: '20px 0',
            fontSize: '1.25rem',
            borderRadius: 8,
            cursor: 'pointer',
          }}
          onClick={() => setShowBrady(!showBrady)}
        >
          {showBrady ? 'Hide Bradycardia Algorithm' : 'Show Bradycardia Algorithm'}
        </button>
        {showBrady && (
          <div style={{ marginTop: 16 }}>
            <center>
              <img
                src="/aha-acls-2020-bradycardia-algorithm.jpg"
                alt="Bradycardia Algorithm"
                style={{ width: '100%', height: 'auto' }}
              />
            </center>
          </div>
        )}
      </div>

      {/* --- NEW: Tachycardia Dropdown --- */}
      <div style={{ margin: '24px 0' }}>
        <button
          style={{
            width: '100%',
            padding: '20px 0',
            fontSize: '1.25rem',
            borderRadius: 8,
            cursor: 'pointer',
          }}
          onClick={() => setShowTachy(!showTachy)}
        >
          {showTachy ? 'Hide Tachycardia Algorithm' : 'Show Tachycardia Algorithm'}
        </button>
        {showTachy && (
          <div style={{ marginTop: 16 }}>
            <center>
              <img
                src="/Website-Tachycardia-Algorithm-Diagram.jpg" // Make sure this image exists in public
                alt="Tachycardia Algorithm"
                style={{ width: '100%', height: 'auto' }}
              />
            </center>
          </div>
        )}
      </div>

      {/* --- NEW: ACS Dropdown --- */}
      <div style={{ margin: '24px 0' }}>
        <button
          style={{
            width: '100%',
            padding: '20px 0',
            fontSize: '1.25rem',
            borderRadius: 8,
            cursor: 'pointer',
          }}
          onClick={() => setShowACS(!showACS)}
        >
          {showACS ? 'Hide ACS Algorithm' : 'Show ACS Algorithm'}
        </button>
        {showACS && (
          <div style={{ marginTop: 16 }}>
            <center>
              <img
                src="/2022-Website-ACS-Algorithm-Diagram-s.jpg" // Make sure this image exists in public
                alt="ACS Algorithm"
                style={{ width: '100%', height: 'auto' }}
              />
            </center>
          </div>
        )}
      </div>

      {/* Etiologies (H’s and T’s) */}
      <h2>Etiologies (H’s and T’s)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={thStyle}>H’s (Avatar the Last Airbender)</th>
            <th style={thStyle}>T’s (Heart and Lungs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Hypoxemia (Air)</td>
            <td style={tdStyle}>Cardiac Tamponade (Obstructive)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hypothermia (Fire)</td>
            <td style={tdStyle}>Pneumothorax (Obstructive)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hypovolemia (Water)</td>
            <td style={tdStyle}>Pulmonary embolism (Thrombus)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hypo/Hyperkalemia (Earth)</td>
            <td style={tdStyle}>Myocardial infarction (Thrombus)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Acidosis (Odd man out)</td>
            <td style={tdStyle}>Toxins (Odd man out)</td>
          </tr>
        </tbody>
      </table>

      {/* Shockable vs Unshockable Rhythms */}
      <h2>Shockable vs Unshockable Rhythms</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={thStyle}>Shockable</th>
            <th style={thStyle}>Unshockable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pulseless V-tach</td>
            <td style={tdStyle}>Asystole</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pulseless V-fib</td>
            <td style={tdStyle}>Pulseless Electrical Activity</td>
          </tr>
        </tbody>
      </table>

      {/* Return of Spontaneous Circulation (ROSC) */}
      <h2>Return of Spontaneous Circulation (ROSC)</h2>
      <ul>
        <li>Recheck ABCs! → Check Goals</li>
      </ul>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={thStyle}>Airway Goals</th>
            <th style={thStyle}>Breathing Goals</th>
            <th style={thStyle}>Circulatory Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Consider early placement of endotracheal tube</td>
            <td style={tdStyle}>O2 sat: 92-98%</td>
            <td style={tdStyle}>SBP &gt;90mmHg</td>
          </tr>
          <tr>
            <td style={tdStyle}></td>
            <td style={tdStyle}>PET CO2: 35-45mmHg</td>
            <td style={tdStyle}>MAP &gt;65mmHg</td>
          </tr>
          <tr>
            <td style={tdStyle}></td>
            <td style={tdStyle}>RR: 10 breaths/min</td>
            <td style={tdStyle}>Failure → Fluids → Epi/NE/Dopamine</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Repeat EKG for disposition plan</li>
      </ul>



      <h2>Useful Websites & Apps</h2>

      {/* General Apps */}
      <h3>General Apps</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.uptodate.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.uptodate.com/favicon.ico" alt="UpToDate" style={resourceImgStyle} />
          <span>UpToDate</span>
        </a>
        <a href="https://openevidence.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://openevidence.com/favicon.ico" alt="OpenEvidence" style={resourceImgStyle} />
          <span>OpenEvidence</span>
        </a>
        <a href="https://www.drugs.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.drugs.com/favicon.ico" alt="Drugs.com" style={resourceImgStyle} />
          <span>Drugs.com</span>
        </a>
        <a href="https://www.mdcalc.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.mdcalc.com/favicon.ico" alt="MDCalc" style={resourceImgStyle} />
          <span>MDCalc</span>
        </a>
        <a href="https://www.humandx.org/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.humandx.org/favicon.ico" alt="Human Dx" style={resourceImgStyle} />
          <span>Human Dx</span>
        </a>
        <a href="https://apps.apple.com/us/app/the-chief-complaint/id969426649" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://play-lh.googleusercontent.com/qsSo6AC_a9HPIFbw6ixaa16QFqj2Gt4f89beXZp_FETKtZpbK8Ui24_D5wsoTXSL3k4=w240-h480-rw" alt="Chief Complaint App" style={resourceImgStyle} />
          <span>Chief Complaint</span>
        </a>
        <a href="https://www.acls.net/acls-algorithms.htm" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.acls.net/favicon.ico" alt="AHA ACLS" style={resourceImgStyle} />
          <span>AHA ACLS</span>
        </a>
      </div>

      {/* Shelf Studying */}
      <h3>Shelf Studying</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.uworld.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://img.icons8.com/?size=512&id=MKfz0p2st2O7&format=png" alt="UWorld" style={resourceImgStyle} />
          <span>UWorld</span>
        </a>
        <a href="https://openevidence.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://openevidence.com/favicon.ico" alt="OpenEvidence" style={resourceImgStyle} />
          <span>OpenEvidence</span>
        </a>
        <a href="https://www.humandx.org/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.humandx.org/favicon.ico" alt="Human Dx" style={resourceImgStyle} />
          <span>Human Dx</span>
        </a>
        <a href="https://aquifer.org/course/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41cBgPyBxMfOMST7-Mn3jd_wYiLhuMZ2BEA&s" alt="Aquifer" style={resourceImgStyle} />
          <span>Aquifer</span>
        </a>
      </div>

      {/* Neurology Apps */}
      <h3>Neurology Apps</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.mdcalc.com/calc/715/nih-stroke-scale-nihss" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.mdcalc.com/favicon.ico" alt="NIHSS Calc" style={resourceImgStyle} />
          <span>NIHSS Calc</span>
        </a>
        <a href="https://apps.apple.com/us/app/stroke-code/id1490019746?l=zh" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiltOgCfB73VfvIoYxSzBpgNmbRQj62i4jGw&s" alt="Stroke Code" style={resourceImgStyle} />
          <span>Stroke Code</span>
        </a>
      </div>

      {/* Psychiatry Apps */}
      <h3>Psychiatry Apps</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://apps.apple.com/us/app/psychref/id6476989971" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmOfyF2l6OELAl0JnVeXQTV-WFEG4tVwJPTxZHS6j7-LGiPmAfDBnnNI&s" alt="PsychRef" style={resourceImgStyle} />
          <span>PsychRef</span>
        </a>
      </div>

      {/* Family Medicine and Pediatrics Apps */}
      <h3>Family Medicine and Pediatrics Apps</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-a-and-b-recommendations" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.uspreventiveservicestaskforce.org/uspstf/sites/default/files/uspstf_bnr_logo_color.png" alt="Prevention TaskForce" style={resourceImgStyle} />
          <span>Prevention TaskForce</span>
        </a>
        <a href="https://www.aquifer.org/courses/aquifer-family-medicine/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.aquifer.org/favicon.ico" alt="Aquifer Cases" style={resourceImgStyle} />
          <span>Aquifer Cases</span>
        </a>
        <a href="https://www.cdc.gov/ncbddd/actearly/milestones-app.html" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://play-lh.googleusercontent.com/F_ey5NpRYgiEpYgT3Uexf6sSRhIl7l-gOXu_HSokDcWCpI2Dt89pkK_4JTqtKMheQk7U=w480-h960" alt="CDC Milestone Tracker" style={resourceImgStyle} />
          <span>CDC Milestone Tracker</span>
        </a>
        <a href="https://www.cdc.gov/vaccines/?CDC_AAref_Val=https://www.cdc.gov/vaccines/schedules/index.html" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.cdc.gov/favicon.ico" alt="CDC Vaccine Schedules" style={resourceImgStyle} />
          <span>CDC Vaccine Schedules</span>
        </a>
      </div>

      {/* Surgery Apps */}
      <h3>Surgery Apps</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.touchsurgery.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.touchsurgery.com/favicon.ico" alt="Touch Surgery" style={resourceImgStyle} />
          <span>Touch Surgery</span>
        </a>
        <a href="https://teachmesurgery.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://teachmesurgery.com/wp-content/uploads/2019/09/logo150x150-1.png.webp" alt="TeachMe Surgery" style={resourceImgStyle} />
          <span>TeachMe Surgery</span>
        </a>
      </div>

      {/* Other */}
      <h3>Other</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://www.visualdx.com/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://cdn.brandfetch.io/idk4BV2TfJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1711701976042" alt="VisualDx" style={resourceImgStyle} />
          <span>VisualDx</span>
        </a>
        <a href="https://www.idsociety.org/practice-guideline/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          <img src="https://www.idsociety.org/favicon.ico" alt="IDSA Guidelines" style={resourceImgStyle} />
          <span>IDSA Guidelines</span>
        </a>
      </div>

      <h2>Credentialing Contacts</h2><ul>
        <li>Ben Taub: medicalstaffservices@harrishealth.org</li>
        <li>Texas Children’s: phughes@bcm.edu</li>
        <li>OBGYN: Jessica.Reede-Lee@bcm.edu</li>
        <li>St. Luke’s: BSLMCMedEducation@stlukeshealth.org</li>
      </ul>

      {/* EPIC Ben Taub & CPRS VA SmartPhrase/DotPhrase Chart */}
      <h2>EPIC Ben Taub & CPRS VA SmartPhrase/DotPhrase Compilation</h2>
      <p>
        For the Smartphrases, look up <strong>“Boulahouache, Luay.”</strong><br />
        For DotPhrases, look up <strong>“Boulachouache, Luay.”</strong>
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>EPIC Ben Taub</th>
            <th style={thStyle}>CPRS VA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>General</td>
            <td style={tdStyle}>General HPI: .GeneralHPI<br />General SOAP: .GeneralSOAP<br />Discharge Summary: .DischargeSummary</td>
            <td style={tdStyle}>General HPI: .LBHPI<br />General SOAP: .LBSOAP<br />Discharge Summary: .LBDischargeSummary</td>
          </tr>
          <tr>
            <td style={tdStyle}>Neurology</td>
            <td style={tdStyle}>Neuro HPI: .NeuroHPI<br />Neuro SOAP: .NeuroSOAP</td>
            <td style={tdStyle}>Neuro HPI: .LBNeuroHPI<br />Neuro SOAP: .LBNeuroSOAP</td>
          </tr>
          <tr>
            <td style={tdStyle}>Psychiatry</td>
            <td style={tdStyle}>Inpatient HPI: .PSYCHINPATIENTHPI</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>OBGYN: L&D</td>
            <td style={tdStyle}>L&D H&P: .OBHPI</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>OBGYN: OB</td>
            <td style={tdStyle}>OB Clinic Visit: .OBCLINICVISIT<br />Post-Partum Visit: .OBCLINICVISIT</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>OBGYN: GYN</td>
            <td style={tdStyle}>Gyn Clinic: .GYNCLINICVISIT</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>Pediatrics: Neonatology</td>
            <td style={tdStyle}>Neonatology HPI: .NEWBORNHPI<br />Neonatology SOAP: .NEWBORNSOAP<br />Neonatology Discharge: .NEWBORNDISCHARGE</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>Internal Medicine</td>
            <td style={tdStyle}>IM HPI: .IMHPI<br />IM SOAP: .IMSOAP</td>
            <td style={tdStyle}>IM HPI: .LBIMHPI<br />IM SOAP: .LBIMSOAP</td>
          </tr>
          <tr>
            <td style={tdStyle}>Surgery</td>
            <td style={tdStyle}>Surgery SOAP: .BTACSSOAP<br />Tertiary Survey Exam: .TertiarySurveyLB</td>
            <td style={tdStyle}>Surgery SOAP: .LBSurgerySOAP</td>
          </tr>
        </tbody>
      </table>
      <p>
        On your PHM service, there is a medical student template that you MUST follow for Peds PHM! These templates are really there to assist you if you need additional tools and may consider pediatrics in the future as you do your electives!
      </p>

      {/* EPIC TCH SmartPhrase/DotPhrase Chart */}
      <h2>EPIC TCH SmartPhrase/DotPhrase Compilation</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>EPIC TCH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>General</td>
            <td style={tdStyle}>General HPI: .GeneralHPI<br />General SOAP: .GeneralSOAP<br />Discharge Summary: .DischargeSummary</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pediatrics: PHM</td>
            <td style={tdStyle}>PHM HPI: .PHMHPI<br />(A&P before subjective)<br />PHM SOAP: .PHMSOAP<br />(A&P before subjective)<br />General Discharge: .PHMDISCHARGE</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pediatrics: Community</td>
            <td style={tdStyle}>Check the Pediatrics: Community Section</td>
          </tr>
          <tr>
            <td style={tdStyle}>OBGYN: L&D</td>
            <td style={tdStyle}>L&D H&P: .OBHPI</td>
          </tr>
          <tr>
            <td style={tdStyle}>OBGYN: GYN</td>
            <td style={tdStyle}>Gyn Clinic: .GYNCLINICVISIT</td>
          </tr>
        </tbody>
      </table>


    </>
  );
};

export default GeneralTopics;



