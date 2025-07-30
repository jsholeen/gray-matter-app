import SectionTemplate from '../components/SectionTemplate';
import React, { useState, useRef } from 'react';

const sections = [
  {
    title: "X-Ray",
    content: (

      <div className='table-container'>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Modality</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>CXR</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>KUB</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Mammography</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Fluoroscopy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Function</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking the chest</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking abdomen<br />(Kidney, Ureter, and Bladder)</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking the breasts</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Similar to radiography, but Real-Time X-rays with Increased temporal resolution</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Terminology</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>White: Hyperdense (Bones, soft tissue)<br />Black: Hypodense (Air)</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Indications</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <strong>Symptoms:</strong> Cough, Fever, dyspnea, hemoptysis<br />
                Heart Failure: Cardiomegaly & Pulmonary congestion<br />
                Pneumonia<br />
                Pneumothorax<br />
                Rib fractures<br />
                Trauma Assessment
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <strong>Symptoms:</strong> Acute flank pain, hematuria<br />
                Nephrolithiasis<br />
                Suspected Bowel obstruction<br />
                Suspected Pneumoperitoneum<br />
                Assessment of foreign body ingestion<br />
                Severe constipation
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Baseline screening 40-74 y/o<br />
                Diagnostics for any suspicious breast cancer at any age<br />
                Palpable breast lumps, nipple discharge, skin changes, axillary masses<br />
                Post-Op follow-up: Monitoring after breast surgery/treatment<br />
                Guided biopsy
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                GI evaluation: Barium swallow for aspiration risk/enema<br />
                Cardiac Catheterization<br />
                Invasive procedures: Catheter insertion, contrast studies, stent placement<br />
                Ortho Surgeries Guidance: Joint replacement, fracture repair<br />
                Urography: IV pyelogram
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Pros</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Cheap and Fast</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Cheap and Fast</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                A) Spatial resolution and contrast resolution<br />
                B) Cheap and Fast
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Sufficient for Dx and therapy decisions</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Cons</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                A) Low Sensitivity compared to CT<br />
                B) Radiation
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                A) Low sensitivity compared to CT<br />
                B) Radiation<br />
                C) Radiolucent stones
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                A) Patient Discomfort<br />
                B) Radiation
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Low quality images than radiography</td>
            </tr>
          </tbody>
        </table>
        <img src="ABCD cxr.jpg" alt="Chest X-ray ABCDs" />

       <div className='table-container '>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem', margin: '24px 0' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Step</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>What to Assess</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quick Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>A – Airway</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Trachea midline? Carina, major bronchi</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Look for deviation / narrowing</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>B – Bones (and soft tissues)</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Count ≥ 9 posterior ribs; lytic lesions</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Compare clavicles ↔ posterior ribs for trauma</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>C – Cardiac</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Heart width &lt; ½ thoracic width on PA</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Enlarged silhouette suggests CHF or pericardial effusion</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>D – Diaphragms</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Costophrenic angles sharp? Free air?</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Flat hemidiaphragm → COPD; free air under right dome = perforation</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>E – Extras / Equipment</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>ET/NG/central lines, pacer leads, tubes</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Follow each line tip to its endpoint</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Q – Quality</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Penetration, inspiration, motion blur</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Spinous processes visible behind heart?</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>R – Rotation</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Medial ends of clavicles equidistant from spine</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>If rotated, heart size & mediastinum unreliable</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>S – Spine & Soft tissues</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Vertebral alignment, paraspinal lines</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Step-off ➔ fracture / spondylitis</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>I – Impression</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>One-sentence summary & next step</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>E.g., “Right middle-lobe pneumonia; start antibiotics”</td>
            </tr>
          </tbody>
        </table>
       </div>

      </div>
    ),
  },
  {
    title: "Magnetic Resonance Imaging (MRI)",
    content: (
      <div>
        <h3>Magnetic Resonance Imaging (MRI)</h3>
        <div className='table-container'>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', marginBottom: '1em' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Modality</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Head MRI</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Chest MRI</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Abdominal & Pelvic MRI</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>MSK MRI</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Spine MRI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Terminology</strong></td>
              <td colSpan={5} style={{ border: '1px solid #ccc', padding: '8px' }}><center>
                <strong>T1:</strong> Normal anatomy, fat-containing lesions<br />
                <strong>T2:</strong> Edema, inflammation, fluid collections (CSF bright)<br />
                <strong>T2 Flair:</strong> Highlights periventricular lesions, edema (MS)<br />
                <strong>Bright:</strong> Hyperintense<br />
                <strong>Dark:</strong> Hypointense
                </center>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Indications</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Main: Inflammation, infection, malignancy<br />
                New-onset seizures<br />
                Focal lesion identification<br />
                Ataxia, suspected intracranial processes<br />
                Acute neurological symptoms (stroke, tumors, demyelinating diseases)
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Mediastinal masses<br />
                Neurogenic tumors, thymic lesions<br />
                Infectious/inflammatory conditions (empyema)<br />
                Known/suspected malignancy (define extent)
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Diagnosis of acute lower abdominal/pelvic pain<br />
                Safe in pregnancy<br />
                Cancer staging<br />
                Evaluation of malignancies<br />
                Inflammatory bowel disease (Crohn's)
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Chronic knee pain (normal X-ray or joint effusion)<br />
                Assess meniscal tears, cartilage, bone marrow lesions<br />
                Soft tissue injuries (ligament, tendon, muscle)<br />
                Bone/joint infections (osteomyelitis, septic arthritis)
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Suspected spine infection (osteomyelitis, epidural abscess)<br />
                Spine trauma (soft tissue, ligament, cord involvement)<br />
                Back pain with neurological deficits
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Pros</strong></td>
              <td colSpan={5} style={{ border: '1px solid #ccc', padding: '8px' }}>
                1) No Radiation<br />
                2) Increased Contrast Resolution<br />
                3) Excellent visualization of soft tissue structures
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Cons</strong></td>
              <td colSpan={5} style={{ border: '1px solid #ccc', padding: '8px' }}>
                A) Long time<br />
                B) Expensive<br />
                C) Uncomfortable<br />
                D) Contraindicated in non-MRI approved pacemakers and claustrophobia<br />
                E) Gadolinium contrast risk for renal failure patients
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    ),
  },
  {
    title: "Computed Tomography (CT)",
    content: (  
      <div className='table-container'>  
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', marginBottom: '1em' }}>
      <thead>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Modality</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Head CT</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Chest CT</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Abdominal & Pelvic CT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Function</strong></td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking the head mainly for strokes, bleeds, and fractures</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking for masses, clots, and trauma</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>Checking for bleeds, masses, and trauma</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Terminology</strong></td>
          <td colSpan={3} style={{ border: '1px solid #ccc', padding: '8px' }}>
            Cross-sectional image of body<br />
            Images obtained in axial, sagittal, and coronal planes<br />
            Brighter → Hyperdense<br />
            Darker → Hypodense<br />
            Measured in Hounsfield Units: Air = -1000, Water = 0, Bone = +1000
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Indications</strong></td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>
            Acute Neurological Symptoms: Stroke, headache with red flags<br />
            Trauma: Traumatic Brain Injury<br />
            Suspected Intracranial Pathology: Brain lesions, hydrocephalus, VP Shunt malformation
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>
            Pulmonary embolism (CT PE protocol)<br />
            Lung Cancer Staging<br />
            Blunt chest trauma
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>
            Acute abdominal pain<br />
            Cancer Staging<br />
            Suspected physical abuse in children<br />
            Infectious or Inflammatory Conditions
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Pros</strong></td>
          <td colSpan={3} style={{ border: '1px solid #ccc', padding: '8px' }}>
            1) Not operator dependent<br />
            2) Fast<br />
            3) High spatial resolution and contrast resolution
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Cons</strong></td>
          <td colSpan={3} style={{ border: '1px solid #ccc', padding: '8px' }}>
            A) Radiation<br />
            B) Expensive<br />
            C) IV Contrast: Risk of renal injury (Contraindicated in CKD/ESRD/AKI) and allergic reaction risk<br />
            D) Can cause contrast-induced acute tubular necrosis
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    ),
  },
    {
    title: "Ultrasound (US)",
    content: (
      <div>
        <h3>Ultrasound (US)</h3>
      <div className='table-container'>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', marginBottom: '1em' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Modality</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Head US</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Lung US</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Echocardiogram</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>RUQUS</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Pelvic US</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Transvaginal US</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>FAST US</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Terminology</strong></td>
              <td colSpan={2} style={{ border: '1px solid #ccc', padding: '8px' }}>
                <u>Colors:</u><br />
                Bright → Hyperechoic (bone, air, dense tissues)<br />
                Dark → Hypoechoic (fluid, soft tissues)<br />
                Black → Anechoic (blood, bile, cysts)<br />
                Isoechoic
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <u>Doppler:</u><br />
                BART: Blue is Away, Red is Toward
              </td>
              <td colSpan={4} style={{ border: '1px solid #ccc', padding: '8px' }}>
                <u>Orientation:</u><br />
                Longitudinal/Sagittal: Top = Anterior<br />
                Transverse: Right = Patient's left<br />
                Probe marker aligned with anatomy
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Main Use</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Neonates/infants: open fontanelles as acoustic windows
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Rapid bedside thoracic evaluation, especially in critically ill
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Assess cardiac structure and function
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Hepatobiliary and upper abdominal structures
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Assess pelvic organs
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Detailed/closer look at pelvic structures for OB/GYN
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Rapid identification of free fluid in trauma patients
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Indications</strong></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Suspected hydrocephalus<br />
                Intracranial hemorrhage<br />
                Brain cysts/tumors<br />
                Neonatal intraventricular hemorrhage in preterm infants
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Pneumothorax<br />
                Pleural effusion<br />
                Pulmonary edema (HF)<br />
                Pneumonia/consolidation<br />
                Thoracic trauma
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Ejection fraction (heart failure)<br />
                Valve abnormalities (stenosis/regurgitation)<br />
                Cardiomyopathy/myocarditis<br />
                Congenital heart defects<br />
                Pericardial effusion/tamponade<br />
                Endocarditis (vegetations)<br />
                Pericardial tamponade
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Suspected cholecystitis/cholelithiasis<br />
                Biliary obstruction/cholangitis<br />
                Liver masses, cirrhosis, fatty liver<br />
                Hepatic abscess<br />
                Ascites evaluation
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Abnormal uterine bleeding<br />
                Suspected fibroids/ovarian cysts<br />
                Pelvic pain of gyn origin<br />
                Early pregnancy evaluation<br />
                Endometrial assessment (thickness/polyps)<br />
                Post-menopausal bleeding<br />
                Bladder masses<br />
                Pelvic inflammatory disease
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Early pregnancy complications (ectopic, miscarriage)<br />
                Ovarian cysts/masses<br />
                Infertility workup (follicular development)<br />
                Cervical length in pregnancy (risk of preterm labor)
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                Blunt or penetrating abdominal trauma<br />
                Suspected hemoperitoneum or hemothorax<br />
                Bedside triage of unstable trauma patients<br />
                Guiding the need for exploratory surgery
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    ),
  },
  {
      title: "ECG Interpretation",
      content: (
        
        <>
          <h2>ECG Interpretation Basics Quick Reference</h2>
        
          <img src="ECG1.png" alt="Arrythmia Decision Tree" style={{ width: '300px', height: 'auto' }} />
          <h3>Principles</h3>
          <ul>
            <li>Use a method (e.g., Rhythm-QI-ACS); rhythm & ischemia are most important.</li>
            <li>Computer is good at numbers, not qualitative interpretation.</li>
            <li>Only need to look at 1-2 leads (marked in red) for most components except ischemia.</li>
          </ul>
        
          <h3>Rhythm and Rate (Lead II, V1 if needed)</h3>
          <ul>
            <li>
              <strong>Rhythm:</strong> Look for sinus rhythm (P before each QRS, QRS after each P, P upright in lead II). Look half-way between obvious P-waves for hidden ones.
            </li>
            <li>
              If sinus, you’re done with rhythm. If not:
              <ul>
                <li>
                  <strong>Bradycardia:</strong> Find relationship of p-waves to QRS to determine type of block (or may be junctional brady if no P-waves at all).
                  <ul>
                    <li>Mobitz 1: PR prolongs then drops</li>
                    <li>Mobitz 2: drops without prolonging</li>
                    <li>Complete: Ps and QRSs completely unrelated</li>
                  </ul>
                </li>
                <li>
                  <strong>Tachycardia:</strong> Use tachycardia tree to narrow ddx. Then it’s pattern recognition (<a href="https://tinyurl.com/3sk4ektf" target="_blank" rel="noopener noreferrer">more info</a>)
                </li>
              </ul>
            </li>
            <li>
              <strong>Rate:</strong> Computer is very good at telling ventricular rate; if needed, count QRS complexes in 10 secs (one page), multiply by 6.
            </li>
            <li>
              <strong>Extras:</strong> There may be extra/premature beats (PAC if narrow, PVC if wide), pauses, etc.
            </li>
          </ul>
        
          <h3>QRS / Blocks (Lead V1 and I)</h3>
          <ul>
            <li>Normal QRS is &lt; 100ms wide (2.5 little boxes). If &gt; 120ms, likely a bundle branch block.</li>
            <li>
              <strong>RBBB:</strong> rSR’ in V1, wide S wave in I. If QRS 100-120 &amp; RBBB morphology = “incomplete RBBB”.
            </li>
            <li>
              <strong>LBBB:</strong> broad slurred S in V1 and R in I. If QRS 100-120, intraventricular conduction delay (IVCD).
            </li>
            <li>In any BBB, expect the T-wave to point opposite of the last part of the QRS.</li>
          </ul>
          <img src="ECG2.png" alt="BBB Examples" style={{ width: '300px', height: 'auto' }} />
          <img src="ECG3.png" alt="BBB Examples 2" style={{ width: '300px', height: 'auto' }} />
          <img src="ECG4.png" alt="BBB Examples 3" style={{ width: '300px', height: 'auto' }} />
        
          <h3>Intervals (Lead II for PR, longest/best visible for QT)</h3>
          <ul>
            <li>
              <strong>Short PR (&lt;120 ms):</strong> hypersympathetic state, WPW (look for delta wave), or congenital short PR/LGL.
            </li>
            <li>
              <strong>Long PR (&gt;200 ms):</strong> AV node dysfunction, from medications (bBL, amio, dig), sick AVN (degenerative, ischemia, aort root abscess).
            </li>
            <li>
              <strong>QTc:</strong> QT/√(R-R) = normal &lt;440 ms in men, &lt;460 ms in women.
              <ul>
                <li>If QRS prolonged, QT artificially prolonged. If this is the case, correct by using QTc = (QT-[QRS-100])/√(R-R).</li>
              </ul>
            </li>
          </ul>
        
          <h3>Axis (Leads I and F)</h3>
          <img src="ECG5.png" alt="Axis Example" style={{ width: '300px', height: 'auto' }} />
          <ol>
            <li>Draw a coordinate plane with x- and y-axes, just like in middle school.</li>
            <li>Estimate the net deflection in I. This will be the x-value.</li>
            <li>Estimate the net deflection in F. Since F points down, the opposite of that will be your y-value.</li>
            <li>Draw an arrow from the center to that point. Visually estimate the angle of that arrow based on the convention.</li>
          </ol>
          <p>
            <strong>Ddx:</strong> LAD: Old inferior MI (if Qs in inferior leads) vs. LAFB (if not). RAD: Old lateral MI vs. RVH vs. LPFB.
          </p>
          <img src="ECG6.png" alt="Axis Example 2" style={{ width: '300px', height: 'auto' }} />
        
          <h3>Chambers</h3>
          <ul>
            <li>Atrial enlargement/abnormality (leads II and V1)</li>
            <li>RVH (V1,V2): Voltage: R&gt;7 or &gt;S, in V1 or V2, supported by RAD and RAA</li>
            <li>
              LVH (many): Voltage: I &gt; 15 or aVL &gt; 11 or sum of S in V1/V2 + R in V5/V6 &gt; 35, or sum of S in V3 + R in aVL &gt; 24F, &gt;28M, supported by LAA, LAFB, IVCD, repolarization abnormality (lateral leads with slight STD + slow-down, quick up TWI)
            </li>
          </ul>
          <img src="ECG7.png" alt="Chambers Example" style={{ width: '300px', height: 'auto' }} />
          <img src="ECG8.png" alt="Chambers Example 2" style={{ width: 'auto', height: 'auto' }} />
        
          <h3>ST/T/Q (Ischemia) (all leads except aVR)</h3>
          <ul>
            <li>
              Must look for ischemia territorially, meaning looking at contiguous leads that point in similar directions:
              <ul>
                <li>Inferior leads II, III, aVF</li>
                <li>Septal leads V1,V2</li>
                <li>Anterior leads V3,V4</li>
                <li>Apical-lateral leads V5,V6,I,aVL</li>
              </ul>
            </li>
            <li>
              <strong>Q-waves:</strong> Pathologic ones represent necrosis or old scar.
              <ul>
                <li>A Q-wave is when the first deflection of a QRS complex is downward (R is the first upward deflection, an S is a downward deflection after there’s been an R, an R’ is a positive deflection after an S).</li>
                <li>Q-waves occur physiologically in lateral leads from depolarization of the septum.</li>
                <li>Pathologic Q-waves must be close to 40ms wide and deeper than 1/3 of subsequent R.</li>
              </ul>
            </li>
            <li>
              <strong>ST elevations or depressions:</strong> May suggest injury current from active ischemia.
              <ul>
                <li>Compare the ST segment 80ms after the end of the QRS with the T-P segment.</li>
                <li>ST elevations &gt; 1mm in frontal leads or &gt; 2mm in precordial leads are more specific for STEMI.</li>
              </ul>
            </li>
            <li>
              <strong>T-wave inversions:</strong> May suggest abnormal repolarization from active ischemia.
              <ul>
                <li>T-waves should generally align with the direction of the QRS in that lead (e.g. in V1,V2, often normal to be inverted).</li>
                <li>Common non-ischemic causes of T-wave inversions are BBB and repolarization abnormality from LVH.</li>
              </ul>
            </li>
          </ul>
          <img src="ECG9.png" alt="Ischemia Example" style={{ width: '300px', height: 'auto' }} />
          <img src="ECG10.png" alt="Ischemia Example 2" style={{ width: '300px', height: 'auto' }} />
        
          <h3>Miscellaneous</h3>
          <ul>
            <li>Look for low voltage, PRWP, electrolyte effects, U-waves, delta-waves, epsilon waves, RV overload (S1Q3T3, anteroinferior TWI).</li>
          </ul>

          
            <h3>Practice Resources</h3>
            <ul>
              <li>
                <a href="https://ecg.bidmc.harvard.edu/" target="_blank" rel="noopener noreferrer">
                  WaveMaven
                </a>
              </li>
              <li>
                <a href="https://litfl.com/ecg-library/" target="_blank" rel="noopener noreferrer">
                  LITFL ECG Library
                </a>
              </li>
              <li>
                <a href="http://hqmeded-ecg.blogspot.com" target="_blank" rel="noopener noreferrer">
                  Smith ECG Blog
                </a>
              </li>
            </ul>
          
        </>
      ),
  },


];

const Imaging = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const handleOpen = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
    setTimeout(() => {
      if (refs.current[idx]) {
        refs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  return (
    <SectionTemplate
      title="Imaging"
      content={
        <div>
          <h2>American College of Radiology (ACR): https://acsearch.acr.org/list </h2>
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
                  background: openIndex === idx ? '#e0e0e0' : '#f9f9f9',
                  border: '1px solid #ccc',
                  fontWeight: 'bold',
                }}
                onClick={() => handleOpen(idx)}
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

export default Imaging;