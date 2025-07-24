import SubSectionTemplate from '../components/SubSectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';



const sections = [
  {
    title: "Newborn Nursery Admission H&P Example",
    content: (
      <div>
        <h3>Medical Student Admission History and Physical</h3>
        <p><strong>Name:</strong> BG/BB “Name”</p>
        <p><strong>Medical Record Number:</strong></p>
        <p><strong>Date of Birth:</strong></p>
        <p><strong>Time of Birth:</strong></p>
        <p><strong>Admitting Attending:</strong></p>
        <p><strong>Service:</strong></p>
        <p><strong>Admission Diagnosis:</strong></p>
        <p><strong>Gestational Age:</strong> #w#d</p>
        <p><strong>Birth Weight:</strong> #g</p>
        <h4>Maternal / Pregnancy History</h4>
        <ul>
          <li>Mother's PMHx</li>
          <li>OB History: Gravida, Para, Term, Preterm, AB, Living</li>
          <li>Pregnancy complications</li>
          <li>Prenatal care adequate</li>
          <li>Maternal medications</li>
          <li>Prenatal labs: Blood Type/Screen, HIV, Hep B, Syphilis, Rubella, GBS, other infections</li>
          <li>Prenatal ultrasound at X gestation</li>
        </ul>
        <h4>Delivery History</h4>
        <ul>
          <li>Date/Time of Birth</li>
          <li>Born via SVD/C-S</li>
          <li>ROM # hours prior, fluid type</li>
          <li>Delivery anesthesia</li>
          <li>Neonatology present/not present</li>
          <li>Apgars # at 1 min, # at 5 min</li>
          <li>Maternal fever/infection</li>
          <li>Maternal Tmax</li>
        </ul>
        <h4>Physical Exam</h4>
        <ul>
          <li>Birth Weight, Length, Head Circumference (percentiles)</li>
          <li>Vitals (past 12 hrs)</li>
          <li>General Appearance, Head, Eyes, Ears, Nose, Oropharynx, Neck, Chest, Cardiac, Abdomen, Musculoskeletal, Back, Hip, Neurologic, Genitalia, Skin, Rectal</li>
        </ul>
        <h4>Labs and Results</h4>
        <ul>
          <li>Total Bilirubin, Direct Bilirubin, ABO and DAT</li>
        </ul>
        <h4>Medications</h4>
        <ul>
          <li>Erythromycin, Hep B Vax, Vitamin K</li>
        </ul>
        <h4>Problem List</h4>
        <ul>
          <li></li>
        </ul>
        <h4>Assessment</h4>
        <p>
          [Pre/Early/Full/Late/Post]-term infant born via (SVD/C-S) to a GP(TPAL) ## y/o female complicated by [pregnancy complications], but otherwise doing well.
        </p>
        <h4>Plan</h4>
        <ul>
          <li>Routine newborn care</li>
          <li>Obtain NB screening labs in 48 hours</li>
          <li>Medications: Hepatitis B Vaccine, Vitamin K, Erythromycin</li>
          <li>Feeding Plan: [Breast milk vs Formula vs Both]</li>
          <li>Obtain bilirubin levels after 24 hours</li>
          <li>Continue routine care</li>
        </ul>
      </div>
    )
  },
  {
    title: "Newborn Exam",
    content: (
      <div>
        <h3>Newborn Exam</h3>
        <p>
          <a href="https://med.stanford.edu/newborns/clinical-rotations/students/students-newborn-exam.html" target="_blank" rel="noopener noreferrer">
            Stanford Newborn Exam Guide
          </a>
        </p>
        <ul>
          <li>Start with heart and lungs while the baby is calm, then perform red reflex before the rest of the exam.</li>
          <li>
            <strong>Quick tip:</strong> When checking sucking reflex, babies may open their eyes quickly if no milk comes—best time to assess rapidly.
          </li>
          <li>OK to save eye exam for second day of life if erythromycin ointment is present (may obscure assessment).</li>
          <li>Perform head assessment: check for open fontanelles, suture lines, caput, cephalohematoma, and other abnormalities.</li>
          <li>Assess ears for pits and tags (consider family history of hearing loss if present).</li>
          <li>
            Assess abdomen for masses by lifting hips to relax abdominal muscles.
            <ul>
              <li>Liver is normal up to 1cm below costal margin; more is abnormal.</li>
              <li>Kidney palpation is abnormal—consider neuroblastoma or Wilms tumor if mass crosses midline.</li>
            </ul>
          </li>
          <li>Assess genitalia for ambiguous genitalia and virilization; in males, ensure both testicles are descended.</li>
          <li>Assess Barlow and Ortolani maneuvers for Developmental Dysplasia of Hip (see instructional videos).</li>
          <li>Check finger and toe counts.</li>
          <li>Assess reflexes: grasp, plantar, Babinski, and Moro reflex.</li>
        </ul>
        <p><strong>Now turn baby on back:</strong></p>
        <ul>
          <li>Assess for skin changes like congenital dermal melanocytosis nevus (CDMs) and erythema toxicum.</li>
          <li>Assess anus patency, dimples, and hair tufts.</li>
        </ul>
        <h3>APGARS</h3>
        <p>
          APGARs are repeated at 1 and 5 minutes from birth. If APGAR &lt; 7, repeat APGAR at 10 minutes.
        </p>
        <div className='table-container'>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>APGARS</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>0</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>1</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Heart Rate</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>&lt;00</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>&lt;100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Respiration</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>slow, irreg</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>good cry</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Muscle Tone</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>flaccid</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>floppy</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>active motion</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Color</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>blue</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>acrocyanotic</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>all pink</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Reflexe irritability</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>grimace</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>cry</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>A - appearance</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>blue</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>acryocyanotic</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>all pink</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>P - pulse</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>&lt;100</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>&lt;100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>G - grimace</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>grimace</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>cry</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>A - activity</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>flaccid</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>floppy</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>active</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>R - respiration</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>none</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>slow, irregular</td>
              <td style={{ border: "1px solid #ccc", padding: "8px  " }}>good cry</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h3>Primitive Reflexes of Infancy</h3>
        <div className='table-container'>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Reflex</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Age of Appearance</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Age of Disappearance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Moro</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Grasp</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Rooting</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Placing</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Crossed Extension</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Tonic Neck</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>4-6 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Trunk Incurvation</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Birth</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>6-9 months</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Landau</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>6-8 months</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>-15 mo-2 yrs</td>
            </tr>
          </tbody>
          </table>
        </div>

          <h3>Newborn Screening (NBS)</h3>
          <p>
            <a href="https://www.dshs.texas.gov/newborn-screening-program/about-us-newborn-screening-program" target="_blank" rel="noopener noreferrer">
              Texas Newborn Screening Program
            </a>
          </p>
          <ul>
            <li>
              Before leaving the hospital, the state of Texas requires that all babies complete the newborn screen (see above link for conditions tested).
            </li>
            <li>
              The optimal time for screening is <strong>24–48 hours after birth</strong>.
            </li>
          </ul>
          <div className='table-container'>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Condition</th>
                <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Recommended Ages</th>
                <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Method of Screening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Texas Newborn screen</strong></td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>Between 24–48 hours</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>Capillary heel stick</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Hyperbilirubinemia</strong></td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>&ge; 24 hours of age (or sooner if infant is Coombs positive) and prior to leaving the hospital</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>Bilirubin level: transcutaneous or serum (heel stick)</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Critical congenital heart defects (CCHD)</strong></td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>&ge; 24 hours of life and/or prior to nursery discharge</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>Simultaneous pulse oximetry of the right hand and foot (pre and post duct saturation)</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Congenital deafness</strong></td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>All newborns prior to hospital discharge</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>Otoacoustic emissions (OAE) or automated auditory brainstem response (AA BR)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
{
  title: "Level II NICU",
  content: (
    <div>
      <h3>Level II NICU</h3>
      <h4>Updating Families</h4>
      <ul>
        <li>
          Newborns in Level II NICU do not stay in the same room with their mom. It’s standard practice to call the family each day and update them on the baby’s progress, and you can help with this!
        </li>
        <li>
          <strong>Script:</strong> “Hi, my name is ___, and I am a member of the team caring for your child. I am calling with a [DAILY UPDATE (or) NON-URGENT update]. (Proceed to update family on how baby is doing and plan.)<br />
          <em>It’s essential to communicate that this call is NON-URGENT and ROUTINE. Parents are understandably anxious with their baby in the NICU, so it’s important to assure them that we’re not calling with any bad news.</em>
        </li>
      </ul>
      <h4>MR. SOPA: Systematic Approach for Newborn Resuscitation</h4>
      <ul>
        <li><strong>Mask Adjustment</strong> – ensure mask is properly fitted and sealed around infant’s mouth and nose.</li>
        <li><strong>Reposition</strong> – reposition airway.</li>
        <center><img src="/nicu resuscitation.jpg" alt="MR SOPA" style={{ width: '100%', maxWidth: '600px', marginBottom: '1em' }} /></center>
        <li><strong>Suction</strong> – suction mouth, then nose.</li>
        <li><strong>Open mouth</strong></li>
        <li><strong>Pressure</strong> – Increase pressure: PEEP: 5, PIP: 20–25</li>
      </ul>
      <img src="/neo resus algo.jpg" alt="MR SOPA" style={{ width: '100%', maxWidth: '600px', marginBottom: '1em' }} />
    </div>
  )
},

  {
    title: "Bilirubin Discussion",
    content: (
      <div>
        <h3>Bilirubin Discussion</h3>
        <ul>
          <li><strong>Critical to know causes of hyperbilirubinemia</strong></li>
          <img src="/Bilirubin.jpg" alt="Bilirubin Chart" style={{ width: '100%', maxWidth: '600px', marginBottom: '1em' }} />
          <li>Questions to ask mothers:</li>
          <ul>
            <li>Any yellow color in the whites of the eye?</li>
            <li>Any pale stools?</li>
          </ul>
          <li>Babies can appear yellow but not be jaundiced, but scleral icterus is a definite finding.</li>
          <li>Scleral icterus indicates decreased stercobilinogen in stool, suggesting indirect bilirubin is elevated.</li>
        </ul>
        <h4>Complications</h4>
        <ul>
          <li>Kernicterus (only risk factor for neurotoxicity – Nursery and Level 2)</li>
          <li>+ DAT</li>
          <li>Sepsis</li>
          <li>Hypoalbuminemia</li>
          <li>Clinical instability</li>
        </ul>
        <h4>Treatment</h4>
        <ul>
          <li>Use BiliTool and TCH algorithm to guide (relies on hours of life (HOL), Tbili, and Dbili)</li>
          <li>Observation</li>
          <li>Phototherapy</li>
          <li>Hemodialysis</li>
        </ul>
        <h4>How to Report Bilirubin in Your Presentation (High-Yield!)</h4>
        <p>
          Total bilirubin was [ ] with a direct bilirubin of [ ] at [ ] hours of life, which has a light up level of [ ] on the (Neurotox risk VS low/no risk) curve.
        </p>
      </div>
    )
  },
{
  title: "Checklist for Early Discharge (24–48 hrs)",
  content: (
    <div>
      <h3>Checklist for Early Discharge (24–48 hrs)</h3>
      <ul>
        <li>SVD</li>
        <li>Term (37 weeks and 0 days or greater)</li>
        <li>Not SGA</li>
        <li>GBS negative / GBS positive with adequate IAP</li>
        <li>Normal Physical exam</li>
        <li>All NBS Completed
          <ul>
            <li>NBS #1 Labs Drawn</li>
            <li>Pass CCHD</li>
            <li>Pass Hearing Screen</li>
            <li>Screening Bilirubin &gt;2 Below LUL</li>
          </ul>
        </li>
        <li>2 Day Follow Up Scheduled</li>
        <li>Did not need / Completed Glucose Protocol</li>
        <li>No Additional Studies Needed
          <ul>
            <li>Clavicle X-ray</li>
            <li>Echo</li>
            <li>Renal US</li>
          </ul>
        </li>
        <li>Identified clinic/provider for 2-week follow-up</li>
      </ul>
    </div>
  )
},

  {
    title: "Heart Murmurs",
    content: (
      <div>
        <h3>Benign Heart Murmurs</h3>
        <div className='table-container'>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Murmur Type</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Typical Age</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Characteristics</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Radiation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Still's murmur</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>2–6 years (can persist into adolescence)</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Early systolic, low/medium pitch, vibratory or musical; best at lower left sternal border</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Loudest supine, decreases standing</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Peripheral pulmonary stenosis</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>&lt;1 year (infants/neonates)</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Early/mid-systolic ejection, vibratory, low pitch, grade 1-2</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Axilla or back</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Pulmonary flow murmur</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Infancy-adulthood</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Early/mid-systolic soft ejection, best at left upper sternal border</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Loudest supine, decreases upright/holding breath</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Venous hum</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>3–8 years</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Continuous, more intense in diastole, varies, disappears supine/neck turn</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Low anterior neck, lateral to sternocleidomastoid</td>
            </tr>
          </tbody>
        </table>
        </div>

        <h3>Pathologic Heart Murmurs</h3>
        <div className='table-container'>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#FFE3E3" }}>Murmur Type</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#FFE3E3" }}>Characteristics</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#FFE3E3" }}>Common Associated Findings</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#FFE3E3" }}>Radiation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Aortic stenosis</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Systolic ejection crescendo-decrescendo, upper right sternal border, often with ejection click</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Bicuspid Aortic Valve, Rheumatic fever</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Carotid arteries</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Aortic regurgitation</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Early diastolic, high frequency, blowing, best at cardiac apex</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Rheumatic heart disease, Marfan syndrome</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Left upper sternal border</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Aortic coarctation</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Systolic ejection, best over interscapular region</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Bicuspid Aortic Valve, Turner syndrome</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Radiates to the back</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Pulmonary stenosis</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Systolic ejection, upper left sternal border, variable ejection click with respiration</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Noonan syndrome, William syndrome</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Radiates to the back</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Pulmonary regurgitation</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Low pitched diastolic, best at left parasternal border</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Tetralogy of Fallot</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Atrial septal defect</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Systolic ejection, upper left sternal border, wide/fixed splitting of S2</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Holt-Oram</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Ventricular septal defect</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Holosystolic, lower left sternal border, harsh</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Trisomy 21, Coarctation, Tetralogy of Fallot</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Prominent throughout sternal border</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Patent ductus arteriosus</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Continuous, undulating machine-like, upper left sternal border</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Prematurity</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Mitral valve prolapse</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Mid-systolic ejection click, high frequency holosystolic at apex, increases with Valsalva</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Marfan syndrome</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Axilla</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Hypertrophic cardiomyopathy</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Systolic ejection crescendo-decrescendo, left lower sternal border, increases with standing/Valsalva</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Noonan syndrome, Danon disease, Pompe disease</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  },



  {
    title: "Tips for Success",
    content: (
      <div>
        <h3>Tips for Success</h3>
        <ul>
          <li>Talk to parents as you examine the baby (e.g., "heart sounds normal," "baby is breathing well," etc.). For level 1, ask parents how they feel the baby is doing and how feeding is going. Ask if they have any concerns about the baby.</li>
          <li>
            How to report feeding over last 24 hours:
            <ul>
              <li>
                <strong>Level I:</strong>
                <ul>
                  <li>Intake: Record total ml of formula taken and number of breastfeeding attempts (e.g., "8 breastfeeding attempts and 60 ml of formula in last 24 hours").</li>
                  <li>Output: Record number of voids and stools (e.g., "5 stools and 1 void in last 24 hours").</li>
                </ul>
              </li>
              <li>
                <strong>Level II:</strong>
                <ul>
                  <li>Intake: Record as cc/kg/day (e.g., "200 ml in 24 hours and weight 2 kg = 100 cc/kg/day").</li>
                  <li>Output: Record number of stools and urine as cc/kg/hour.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Learn how to swaddle and how to change diapers.</li>
          <li>
            When discussing next steps or uncovering abnormal findings, read the <a href="https://www.texaschildrens.org/sites/default/files/uploads/documents/outcomes/standards/FWLS_0-60_days_Guideline_82023.pdf" target="_blank" rel="noopener noreferrer">Guidelines for Acute Care of the Neonate</a> (also present on EPIC).
          </li>
          <li>Be proactive in checking patients in the morning, thoroughly investigating the mother’s chart for any abnormal ultrasound findings or missed complications like HTN and DM, and ask about family history of cardiac, hearing, pulmonary, and renal diseases.</li>
        </ul>
      </div>
    )
  }
]

export { sections };

const Neo = ({ openIndex, setOpenIndex, startIndex }) => {
  //const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const handleOpen = (idx) => {
    const globalIdx = startIndex + idx;
    setOpenIndex(openIndex === globalIdx ? null : globalIdx);
    setTimeout(() => {
      if (refs.current[idx]) {
        refs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };


  return (
    <SubSectionTemplate
      title="Neonatology"
      content={
        <div>
          {sections.map((section, idx) => (
            <div
              key={section.title}
              style={{ marginBottom: 10 }}
              ref={el => refs.current[idx] = el}>
              <button
                style={{
                  width: '100%',
                  padding: 10,
                  fontSize: '1rem',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: openIndex === startIndex + idx ? '#e0e0e0' : '#f9f9f9',
                  border: '1px solid #ccc',
                  fontWeight: 'bold',
                }}
                onClick={() => handleOpen(idx)}
              >
                {section.title}
              </button>
              {openIndex === startIndex + idx && (
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

export default Neo;