import SectionTemplate from '../components/SectionTemplate';
import HPI from './GeneralTopics/HPI';
import Discharge from './GeneralTopics/Discharge';
import react, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';
import {sections as phmSections} from './phm';

const sections = [
  { title: "HPI", content: <HPI /> },
  { title: "Discharge Summary", content: <Discharge /> },
  {
    title: "Consult Service Tips",
    content: (
      <div>
        <h3>Consult Service Tips</h3>
        <div className="table-container">
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={thStyle}>Service</th>
              <th style={thStyle}>Key Symptoms/History</th>
              <th style={thStyle}>Physical Exam/Findings</th>
              <th style={thStyle}>Key Labs/Diagnostics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>Cardiology</strong></td>
              <td style={tdStyle}>
                Chest pain, palpitations, dyspnea (with exertion/at rest), orthopnea, paroxysmal nocturnal dyspnea, lower extremity edema, syncope
              </td>
              <td style={tdStyle}>
                Heart sounds, murmurs, peripheral edema, signs of HF (JVD, hepatojugular reflex)
              </td>
              <td style={tdStyle}>
                EKGs, echocardiograms, cardiac biomarkers (troponins, CK-MB, LDH)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Pulmonology/Critical Care</strong></td>
              <td style={tdStyle}>
                Cough, sputum production, hemoptysis, dyspnea, chest pain, wheezing, inhaler use, smoking history, occupational exposures, previous respiratory illnesses
              </td>
              <td style={tdStyle}>
                Respiratory exam findings
              </td>
              <td style={tdStyle}>
                CXR, PFTs, CT scans, ABGs
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Nephrology</strong></td>
              <td style={tdStyle}>
                Urine output, color, consistency, edema, hx of kidney stones, HTN, DM, BPH, use of nephrotoxic medications
              </td>
              <td style={tdStyle}>
                Edema, signs of fluid overload
              </td>
              <td style={tdStyle}>
                Serum creatinine, BUN, electrolytes, urinalysis
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Gastroenterology</strong></td>
              <td style={tdStyle}>
                Abdominal pain, nausea, vomiting, jaundice, weight loss, frequency/appearance of bowel movements, blood in stool, heartburn, NSAID use
              </td>
              <td style={tdStyle}>
                Focus on GI bleeding, liver disease, IBD, GI surgeries
              </td>
              <td style={tdStyle}>
                Endoscopy, colonoscopy, liver biopsy (understand indications)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Hematology/Oncology</strong></td>
              <td style={tdStyle}>
                Fatigue, weight loss, night sweats, bleeding, bruising, lymphadenopathy, splenomegaly, hyperbilirubinemia (scleral icterus)
              </td>
              <td style={tdStyle}>
                Signs of anemia or thrombocytopenia (conjunctival pallor, pallor of palmar creases, petechiae, purpura, ecchymoses)
              </td>
              <td style={tdStyle}>
                CBC, peripheral smears, bone marrow biopsy results
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Infectious Disease</strong></td>
              <td style={tdStyle}>
                Exposure history (travel, TB risk, sick contacts, immunization status), smoking history, occupational exposures, previous respiratory illnesses
              </td>
              <td style={tdStyle}>
                General ID: Past cultures/sensitivities, start/end date of antibiotics, WBC, Tmax<br />
                Immunocompromised ID/HIV: Last CD4 count and viral load
              </td>
              <td style={tdStyle}>
                Microbiology, cultures, sensitivities
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Rheumatology</strong></td>
              <td style={tdStyle}>
                Rashes, SICA, joint pain, Raynaud's, pain, stiffness, swelling, duration of symptoms, photosensitivity, oral ulcers
              </td>
              <td style={tdStyle}>
                Joint exam, rashes, Raynaud's phenomenon
              </td>
              <td style={tdStyle}>
                ANA, RF, Anti-CCP, other autoantibodies
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <h3>Consult Service Tips</h3>
        <h4>Cardiology</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Chest pain, palpitations, dyspnea (with exertion/at rest), orthopnea, paroxysmal nocturnal dyspnea, lower extremity edema, syncope</li>
          <li><strong>Physical Exam/Findings:</strong> Heart sounds, murmurs, peripheral edema, signs of heart failure (JVD, hepatojugular reflex)</li>
          <li><strong>Key Labs/Diagnostics:</strong> EKGs, echocardiograms, cardiac biomarkers (troponins, CK-MB, LDH)</li>
        </ul>
        <h4>Pulmonology/Critical Care</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Cough, sputum production, hemoptysis, dyspnea, chest pain, wheezing, inhaler use, smoking history, occupational exposures, previous respiratory illnesses</li>
          <li><strong>Physical Exam/Findings:</strong> Respiratory exam findings</li>
          <li><strong>Key Labs/Diagnostics:</strong> CXR, PFTs, CT scans, ABGs</li>
        </ul>
        <h4>Nephrology</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Urine output, color, consistency, edema, hx of kidney stones, HTN, DM, BPH, use of nephrotoxic medications</li>
          <li><strong>Physical Exam/Findings:</strong> Edema, signs of fluid overload</li>
          <li><strong>Key Labs/Diagnostics:</strong> Serum creatinine, BUN, electrolytes, urinalysis</li>
        </ul>
        <h4>Gastroenterology</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Abdominal pain, nausea, vomiting, jaundice, weight loss, frequency/appearance of bowel movements, blood in stool, heartburn, NSAID use</li>
          <li><strong>Physical Exam/Findings:</strong> Focus on GI bleeding, liver disease, IBD, GI surgeries</li>
          <li><strong>Key Labs/Diagnostics:</strong> Endoscopy, colonoscopy, liver biopsy (understand indications)</li>
        </ul>
        <h4>Hematology/Oncology</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Fatigue, weight loss, night sweats, bleeding, bruising, lymphadenopathy, splenomegaly, hyperbilirubinemia (scleral icterus)</li>
          <li><strong>Physical Exam/Findings:</strong> Signs of anemia or thrombocytopenia (conjunctival pallor, pallor of palmar creases, petechiae, purpura, ecchymoses)</li>
          <li><strong>Key Labs/Diagnostics:</strong> CBC, peripheral smears, bone marrow biopsy results</li>
        </ul>
        <h4>Infectious Disease</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Exposure history (travel, TB risk, sick contacts, immunization status), smoking history, occupational exposures, previous respiratory illnesses</li>
          <li><strong>Physical Exam/Findings:</strong> General ID: Past cultures/sensitivities, start/end date of antibiotics, WBC, Tmax. Immunocompromised ID/HIV: Last CD4 count and viral load</li>
          <li><strong>Key Labs/Diagnostics:</strong> Microbiology, cultures, sensitivities</li>
        </ul>
        <h4>Rheumatology</h4>
        <ul>
          <li><strong>Key Symptoms/History:</strong> Rashes, SICA, joint pain, Raynaud's, pain, stiffness, swelling, duration of symptoms, photosensitivity, oral ulcers</li>
          <li><strong>Physical Exam/Findings:</strong> Joint exam, rashes, Raynaud's phenomenon</li>
          <li><strong>Key Labs/Diagnostics:</strong> ANA, RF, Anti-CCP, other autoantibodies</li>
        </ul>
        <h3>How to Consult: Applying the 5 C's</h3>
      <ol>
        <li>
          <strong>Contact</strong>
          <ul>
            <li>Initiate communication: State your name, rank, service, supervising attending, and provide patient identifying info (MRN, Name, DOB).</li>
            <li>Identify the specialist: Address the consultant by name.<br />
              <em>Example:</em> "Dr. Smith, I’m reaching out regarding a 55-year-old male with unexplained abdominal pain and weight loss."
            </li>
          </ul>
        </li>
        <li>
          <strong>Communicate</strong>
          <ul>
            <li>Provide a thorough yet concise summary of the patient’s history and current condition.</li>
            <li>Speak clearly and confidently—you know your patient best!<br />
              <em>Example:</em> "The patient has had symptoms for 3 months, with no significant findings on initial workup."
            </li>
          </ul>
        </li>
        <li>
          <strong>Core Question</strong>
          <ul>
            <li>State a focused question for the consultant (diagnosis, management advice, or procedure).</li>
            <li>Specify the timeframe and provide call back information.<br />
              <em>Example:</em> "Could you provide further diagnostic evaluation and management suggestions?"
            </li>
          </ul>
        </li>
        <li>
          <strong>Collaborate</strong>
          <ul>
            <li>Work together with the consultant to develop a comprehensive care plan.</li>
            <li>Respect the consultant’s expertise and integrate their recommendations.<br />
              <em>Example:</em> "Let’s review your recommendations and see how we can integrate them into the current treatment plan."
            </li>
          </ul>
        </li>
        <li>
          <strong>Close the Loop</strong>
          <ul>
            <li>Review and implement the consultant’s recommendations, and monitor the patient’s progress.</li>
            <li>Provide feedback to the consultant about outcomes and any further needs.<br />
              <em>Example:</em> "We have started the patient on the recommended treatment and will follow up with you next week regarding his progress."
            </li>
          </ul>
        </li>
      </ol>
      </div>
    )
  },

// Add this as a new section in your sections array in im.js

{
  title: "Approach to Heart Failure (HF)",
  content: (
    <div>
      <h3>Approach to HF</h3>
      <ol>
        <li>
          <strong>Screen:</strong> Maintain high suspicion for new-onset HF based on symptoms (dyspnea, DOE, orthopnea, PND, fatigue, decreased exercise tolerance) and exam findings (JVD, HJR, pulmonary rales, peripheral edema).
          <ul>
            <li><strong>Risk Factors:</strong> Arrhythmia, HTN, CAD, DM, h/o MI, advanced age, Black, h/o ACHD</li>
          </ul>
        </li>
        <li>
          <strong>Work-up:</strong> ECG, BNP, BMP (+/- AKI), CXR, TTE
        </li>
        <li>
          <strong>Consult Cardiology</strong> for new-onset HF.
          <ul>
            <li>Determining the etiology of HFrEF is crucial for guiding treatment (Ischemic vs. Non-ischemic).</li>
          </ul>
        </li>
        <li>
          <strong>Classify:</strong> Type by LVEF, severity by NYHA, etiology by further work up.<br />
          <em>Example: HFrEF (&lt;20%, MM/YYYY) 2/2 ICM, NYHA III</em>
        </li>
      </ol>
      <h4>Acute Decompensated Heart Failure</h4>
      <ol>
        <li>
          <strong>Hemodynamic stabilization &amp; symptom relief</strong>
          <ul>
            <li>
              <strong>IV loop diuretics:</strong> For diuretic-naïve patients, start with 20-40 mg Lasix equivalents. If on preexisting oral dose, double it.
            </li>
            <li>
              <strong>Vasodilators:</strong> IV vasodilators can be used if hypertensive, to reduce preload and afterload.
            </li>
          </ul>
        </li>
        <li>
          <strong>Monitoring &amp; Adjustments</strong>
          <ul>
            <li>
              <strong>Diuretic response:</strong> Monitor UOP. Target &gt;100-150 cc/hr after 6 hours; increase diuretic dose as needed (consider Bumex).
            </li>
            <li>
              <strong>Daily BMP:</strong> Monitor lytes, Cr, BUN (avoid AKI).
            </li>
          </ul>
        </li>
        <li>
          <strong>Transition to chronic management…</strong>
          <ul>
            <li>Optimize GDMT and schedule outpatient Cardiology follow up.</li>
          </ul>
        </li>
      </ol>

      <h3>GDMT for HF (2022 AHA/ACC/HFSA Guidelines)</h3>
      <p><strong>Key medication classes for HFrEF (Heart Failure with Reduced Ejection Fraction):</strong></p>
      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>GDMT For HFrEF</th>
            <th style={thStyle}>Types of Drugs</th>
            <th style={thStyle}>Drugs</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3} style={tdStyle}><strong>Renin-Angiotensin System Inhibitors<br />(Choose 1)</strong></td>
            <td style={tdStyle}>ACE Inhibitors (ACEi)</td>
            <td style={tdStyle}>Enalapril</td>
            <td style={tdStyle}>Contraindicated: Patient develops dry cough or has C1 esterase inhibitor deficiency</td>
          </tr>
          <tr>
            <td style={tdStyle}>Angiotensin II Receptor Blockers (ARBs)</td>
            <td style={tdStyle}>Losartan</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>Angiotensin Receptor-Neprilysin Inhibitors (ARNIs)</td>
            <td style={tdStyle}>Sacubitril/Valsartan</td>
            <td style={tdStyle}>If NYHA II/III, needs 36h washout between ACEi and ARNI to avoid angioedema</td>
          </tr>
          <tr>
            <td rowSpan={2} style={tdStyle}><strong>Beta-Blockers<br />(Choose 1)</strong></td>
            <td style={tdStyle}>Cardioselective β1-blocker</td>
            <td style={tdStyle}>Metoprolol succinate</td>
            <td style={tdStyle}>Caution if recent wean from inotropes during hospital course</td>
          </tr>
          <tr>
            <td style={tdStyle}>Nonselective β/α1-blocker</td>
            <td style={tdStyle}>Carvedilol</td>
            <td style={tdStyle}>Added effect of decreasing BP due to α-blocker activity</td>
          </tr>
          <tr>
            <td rowSpan={2} style={tdStyle}><strong>Mineralocorticoid Receptor Antagonists (MRAs)<br />(Choose 1)</strong></td>
            <td style={tdStyle}>MRAs</td>
            <td style={tdStyle}>Spironolactone</td>
            <td style={tdStyle}>Ideal esp. if arrhythmias due to electrolyte imbalance</td>
          </tr>
          <tr>
            <td style={tdStyle}>MRAs</td>
            <td style={tdStyle}>Eplerenone</td>
            <td style={tdStyle}></td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>GDMT For HFrEF</th>
            <th style={thStyle}>Types of Drugs</th>
            <th style={thStyle}>Drugs</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Hydralazine/isosorbide dinitrate<br />(Choose 1)</strong></td>
            <td style={tdStyle}>Nitrates</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>Consider for African Americans with persistent NYHA III/IV despite optimal BB, ACEi/ARB, and MRAs</td>
          </tr>
          <tr>
            <td rowSpan={2} style={tdStyle}><strong>Diuretics<br />(Choose 1)</strong></td>
            <td style={tdStyle}>Loop diuretics</td>
            <td style={tdStyle}>Furosemide<br />Bumetanide<br />Torsemide</td>
            <td style={tdStyle}>Relieves symptoms of congestion</td>
          </tr>
          <tr>
            <td style={tdStyle}>Thiazide diuretics</td>
            <td style={tdStyle}>HCTZ<br />Metolazone</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td rowSpan={2} style={tdStyle}><strong>SGLT2 Inhibitors<br />(Choose 1)</strong></td>
            <td style={tdStyle}>SGLT2i</td>
            <td style={tdStyle}>Dapagliflozin<br />Empagliflozin</td>
            <td style={tdStyle}></td>
          </tr>
        </tbody>
      </table>
      </div>
      <h3>GDMT Drug Trials and All-Cause Mortality Benefit</h3>
      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Drug/Class</th>
            <th style={thStyle}>Trial (Year)</th>
            <th style={thStyle}>Mortality Reduction (%)</th>
            <th style={thStyle}>Inclusion Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>BB Carvedilol</strong></td>
            <td style={tdStyle}>COPERNICUS, 2001</td>
            <td style={tdStyle}>38%</td>
            <td style={tdStyle}>NYHA III/IV, LVEF &lt; 25%, on ACEI + diuretic</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Metoprolol succinate</strong></td>
            <td style={tdStyle}>MERIT-HF, 1999</td>
            <td style={tdStyle}>34%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt; 40%, on ACE + diuretic + digitalis</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Bisoprolol</strong></td>
            <td style={tdStyle}>CIBIS-II, 1999</td>
            <td style={tdStyle}>32%</td>
            <td style={tdStyle}>NYHA III/IV, LVEF &lt;35%, on ACEI + diuretic</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>MRA Eplerenone</strong></td>
            <td style={tdStyle}>EMPHASIS-HF, 2011</td>
            <td style={tdStyle}>37%</td>
            <td style={tdStyle}>NYHA II, LVEF &lt; 30%, on ACE (or ARB) + BB</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Spironolactone</strong></td>
            <td style={tdStyle}>RALES, 1999</td>
            <td style={tdStyle}>30%</td>
            <td style={tdStyle}>NYHA III/IV, LVEF &lt;35%, on ACEI + diuretic, Cr&lt;2.5</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>ARNI Sacubitril/Valsartan</strong></td>
            <td style={tdStyle}>PARADIGM-HF, 2014</td>
            <td style={tdStyle}>16%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt;35%, on ACE (or ARB) + diuretic, eGFR &gt; 30, SBP &gt; 100</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>ACE Captopril</strong></td>
            <td style={tdStyle}>SAVE, 1992</td>
            <td style={tdStyle}>19%</td>
            <td style={tdStyle}>21-79 y.o., recent MI (within 3-16 days), LVEF &lt; 40%</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Lisinopril</strong></td>
            <td style={tdStyle}>ATLAS, 1999</td>
            <td style={tdStyle}>12%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt;35%, on diuretic + digitalis</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Enalapril</strong></td>
            <td style={tdStyle}>SOLVD-Treatment, 1991</td>
            <td style={tdStyle}>11%</td>
            <td style={tdStyle}>NYHA II-III LVEF&lt;35%</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>ARB Losartan</strong></td>
            <td style={tdStyle}>Phase III-Int'l, 2000</td>
            <td style={tdStyle}>51%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt;35%, on ACE (or ARB) + BB</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Valsartan</strong></td>
            <td style={tdStyle}>Val-HeFT, 2001</td>
            <td style={tdStyle}>13%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt;40%, on ACE + diuretic + digitalis</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>SGLT2 Empagliflozin</strong></td>
            <td style={tdStyle}>EMPEROR-Reduced, 2020</td>
            <td style={tdStyle}>8%</td>
            <td style={tdStyle}>NYHA II-IV, LVEF &lt; 40%, on ACE (or ARB, ARNI) + BB + MRA</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p style={{ fontStyle: "italic" }}>*All-Cause Mortality Benefit</p>
    </div>
  )
},
// Add this as a new section in your sections array in im.js

{
  title: "ACS and Medications",
  content: (
    <div>
      <h3>Acute Coronary Syndrome (ACS) and Medications</h3>
      <h4>Definition</h4>
      <p>Narrowing/blockage of coronary arteries due to atherosclerosis</p>

      <h4>Symptom Characteristics</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Onset and Duration</th>
            <th style={thStyle}>Nature of Pain</th>
            <th style={thStyle}>Associated Symptoms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>When did the symptoms start, and how long have they lasted?</td>
            <td style={tdStyle}>Describe the pain (pressure, squeezing, burning). Is it only under your breastbone or radiating to the arms, neck, jaw, or back?</td>
            <td style={tdStyle}>Are there accompanying symptoms such as dyspnea, diaphoresis, nausea, vomiting, palpitations, or syncope?</td>
          </tr>
        </tbody>
      </table>

      <h4>Precipitating and Relieving Factors</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Triggers</th>
            <th style={thStyle}>Relief</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Did the symptoms occur at rest or with exertion? Triggered by emotional stress or physical activity?</td>
            <td style={tdStyle}>Does the pain improve with rest or nitroglycerin?</td>
          </tr>
        </tbody>
      </table>

      <h4>Past Medical History</h4>
      <ul>
        <li><strong>Cardiovascular History:</strong> Any history of CAD, MI, or previous episodes of angina?</li>
        <li>Any recent infections, surgeries, or other procedures?</li>
      </ul>

      <h4>Risk Factors</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Modifiable</th>
            <th style={thStyle}>Non-Modifiable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>
              Smoking<br />
              HTN<br />
              Hypercholesterolemia<br />
              Obesity<br />
              DM<br />
              Physical inactivity<br />
              Unhealthy diet
            </td>
            <td style={tdStyle}>
              Age<br />
              Gender<br />
              Family history
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Symptoms</h4>
      <ul>
        <li>Chest pain (angina)</li>
        <li>Shortness of breath</li>
        <li>Heart attacks</li>
      </ul>

      <h4>Diagnostic Tests</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Test</th>
            <th style={thStyle}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>ECG</td>
            <td style={tdStyle}>12-lead ECG</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stress testing</td>
            <td style={tdStyle}>Exercise or pharmacologic</td>
          </tr>
          <tr>
            <td style={tdStyle}>Coronary angiography</td>
            <td style={tdStyle}>Invasive</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cardiac biomarkers</td>
            <td style={tdStyle}>hsTnI, CK-MB, LDH</td>
          </tr>
          <tr>
            <td style={tdStyle}>Echocardiography</td>
            <td style={tdStyle}>TTE</td>
          </tr>
          <tr>
            <td style={tdStyle}>CT coronary angiogram</td>
            <td style={tdStyle}>Non-invasive</td>
          </tr>
        </tbody>
      </table>

      <h4>Management (Medications)</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Class</th>
            <th style={thStyle}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Antiplatelets</td>
            <td style={tdStyle}>Aspirin, Clopidogrel</td>
          </tr>
          <tr>
            <td style={tdStyle}>Statins</td>
            <td style={tdStyle}>Atorvastatin, Rosuvastatin</td>
          </tr>
          <tr>
            <td style={tdStyle}>Beta-blockers</td>
            <td style={tdStyle}>Metoprolol, Atenolol</td>
          </tr>
          <tr>
            <td style={tdStyle}>ACE Inhibitors/ARBs</td>
            <td style={tdStyle}>Lisinopril, Losartan</td>
          </tr>
          <tr>
            <td style={tdStyle}>Nitrates</td>
            <td style={tdStyle}>Nitroglycerin, Isosorbide mononitrate</td>
          </tr>
          <tr>
            <td style={tdStyle}>Calcium Channel Blockers</td>
            <td style={tdStyle}>Amlodipine, Diltiazem</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
},

// Add this as a new section in your sections array in im.js

{
  title: "Pulmonary/Respiratory Conditions: Oxygen Delivery Devices",
  content: (
    <div>
      <h3>Pulmonary/Respiratory Conditions</h3>
      <h4>Oxygen Delivery Devices</h4>
      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Device Type</th>
            <th style={thStyle}>General Description</th>
            <th style={thStyle}>Typical Use</th>
            <th style={thStyle}>Typical Settings</th>
            <th style={thStyle}>Pitfalls/Considerations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Nasal canula</td>
            <td style={tdStyle}>Basic nose prongs delivering the lowest needed amount of oxygen</td>
            <td style={tdStyle}>First-line oxygen delivery device, also used for home O2 therapy</td>
            <td style={tdStyle}>1-6 L/min<br />FiO2 = 21% + (4% × [L/min])</td>
            <td style={tdStyle}>Ensure prongs are in patient’s nose and they are breathing through their nose</td>
          </tr>
          <tr>
            <td style={tdStyle}>Non-Rebreather</td>
            <td style={tdStyle}>Full face mask that delivers high FiO2</td>
            <td style={tdStyle}>Used to stabilize patient with rapidly declining oxygen levels before transitioning to another type of O2 therapy</td>
            <td style={tdStyle}>15 L/min<br />100% FiO2</td>
            <td style={tdStyle}>Only short-term delivery before escalation to another form of oxygen delivery</td>
          </tr>
          <tr>
            <td style={tdStyle}>High-Flow Nasal Canula</td>
            <td style={tdStyle}>Nasal oxygen mask delivering higher FiO2 and flow rates than standard nasal canula</td>
            <td style={tdStyle}>Hypoxic respiratory failure refractory to nasal canula</td>
            <td style={tdStyle}>20-60 L/min<br />30-100% FiO2</td>
            <td style={tdStyle}>Flow rate is not related to FiO2 like simple nasal canula<br />If still hypoxic on high FiO2 and flow, may need intubation</td>
          </tr>
          <tr>
            <td style={tdStyle}>CPAP</td>
            <td style={tdStyle}>Delivers continuous pressure throughout respiratory cycle</td>
            <td style={tdStyle}>Treatment of OSA</td>
            <td style={tdStyle}>13-18 cm H<sub>2</sub>O<br />FiO2 21-100%</td>
            <td style={tdStyle}>If patient uses CPAP at home, ask if they know their home settings</td>
          </tr>
          <tr>
            <td style={tdStyle}>BiPAP</td>
            <td style={tdStyle}>Delivers two pressure levels: IPAP (higher inspiratory pressure) and EPAP (lower pressure during expiration)</td>
            <td style={tdStyle}>Treatment of hypercapneic respiratory failure (elevated pCO<sub>2</sub>), increased work of breathing, severe CHF exacerbation</td>
            <td style={tdStyle}>Initial: 10/5 (IPAP=10 cm H<sub>2</sub>O, EPAP=5 cm H<sub>2</sub>O)<br />FiO2 21-100%</td>
            <td style={tdStyle}>If mask has air leak (high-pitched hiss, Vt on machine 250 or less), not delivering desired pressure—ask RT to help adjust</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p>
        <strong>Abbreviations:</strong> FiO<sub>2</sub>: fraction of inspired oxygen; IPAP: inspiratory positive airway pressure; EPAP: expiratory positive airway pressure; pCO<sub>2</sub>: pressure of carbon dioxide (on arterial/venous blood gas); Vt: tidal volume; RT: respiratory therapy<br />
        <strong>*Common conditions for BiPAP:</strong> COPD exacerbation, OHS, neuromuscular conditions (e.g., myasthenia gravis, Guillain-Barré syndrome, ALS)
      </p>

      <h3>Chronic Obstructive Pulmonary Disease (COPD) Exacerbation</h3>
      <h4>Symptoms</h4>
      <ul>
        <li>Worsening or new productive cough</li>
        <li>New or worsening shortness of breath, often refractory to usual inhalers</li>
      </ul>

      <h4>Typical Triggers</h4>
      <ul>
        <li>Most commonly infections (viral &gt; bacterial)</li>
        <li>Environmental exposures (e.g., increase in smoking)</li>
        <li>Incorrect use of inhalers or not using inhalers</li>
      </ul>

      <h4>Diagnostic Tests</h4>
      <ul>
        <li>Basic labs: CBC, CMP</li>
        <li>CXR (may show narrowed mediastinum and hyperinflated lungs)</li>
        <li>EKG</li>
        <li>Troponin</li>
        <li>Venous blood gas (VBG): may show elevated pCO<sub>2</sub>; if pH is normal, this is more likely chronic than acute</li>
        <li>Respiratory viral testing (at minimum COVID/Flu/RSV)</li>
      </ul>

      <h4>Treatment</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>In Hospital</th>
            <th style={thStyle}>On Discharge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>
              • Albuterol/ipratropium (nebulized, scheduled q6h)<br />
              • Chest physiotherapy if thick secretions<br />
              • Prednisone (typically 20 mg daily for 5 days)<br />
              • Azithromycin (if QTc prolonged, replace with doxycycline)<br />
              • If acute hypercarbia, start BiPAP
            </td>
            <td style={tdStyle}>
              • Review inhaler use and proper technique<br />
              • Ensure that prescribed correct inhalers based on table below
            </td>
          </tr>
        </tbody>
      </table>
      <img src="/COPD medication pic.png" alt="COPD Inhalers" style={{ width: '100%', maxWidth: 600, marginBottom: 20 }} />


            <h3>Asthma Exacerbation</h3>
            <h4>Symptoms</h4>
            <ul>
              <li>Worsening cough (usually dry)</li>
              <li>Chest tightness</li>
              <li>Dyspnea</li>
            </ul>
      
            <h4>Typical Triggers</h4>
            <ul>
              <li>Most commonly environmental (e.g., allergens, smoke)</li>
              <li>Also respiratory infections, typically viral</li>
            </ul>
      
            <h4>Diagnostic Tests</h4>
            <ul>
              <li>Basic labs: CBC, CMP</li>
              <li>CXR (typically normal)</li>
              <li>EKG</li>
              <li>Troponin</li>
              <li>Venous blood gas (VBG)</li>
              <li>Respiratory viral testing (at minimum COVID/Flu/RSV)</li>
              <li>Have RT get a peak flow on spirometry (compare to outpatient peak flow if available to gauge severity)</li>
            </ul>
      
            <h4>Treatment</h4>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
              <thead>
                <tr>
                  <th style={thStyle}>In Hospital</th>
                  <th style={thStyle}>On Discharge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>
                    • Albuterol/ipratropium (nebulized, scheduled q6h)<br />
                    • Steroids (if mild/moderate: prednisone 40 mg daily; if severe: methylprednisolone 125 mg)<br />
                    • Consider IV magnesium sulfate (safe, but unclear benefit)<br />
                    • If increased work of breathing (accessory muscle use, RR &gt;30), BiPAP can be helpful
                  </td>
                  <td style={tdStyle}>
                    • Review inhaler use and proper technique<br />
                    • Ensure that prescribed correct inhalers based on table below
                  </td>
                </tr>
              </tbody>
            </table>
      <img src="/Asthma treatment.png" alt="Asthma Inhalers" style={{ width: '100%', maxWidth: 600, marginBottom: 20 }} />

             <h3>Pulmonary Embolism (PE)</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Symptoms</strong></td>
            <td style={tdStyle}>
              • Dyspnea, chest pain (typically pleuritic)<br />
              • Sinus tachycardia is most common vital sign abnormality, hypoxia
            </td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Typical Triggers</strong></td>
            <td style={tdStyle}>
              Prolonged immobility, Hx of DVT, Use of OCP or HRT, Smoking,<br />
              Recent surgery or trauma, Clotting disorders, Cancer
            </td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Diagnostic Tests</strong></td>
            <td style={tdStyle}>
              Basic labs: CBC, CMP<br />
              CXR (typically normal), EKG, Troponin, BNP<br />
              Imaging: CT PE protocol (contrast), V/Q scan if contrast allergy/AKI, Doppler US if LE swelling<br />
              ER/outpatient: Use Wells score; Inpatient: proceed to imaging if suspicion
            </td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Treatment</strong></td>
            <td style={tdStyle}>
              <strong>Anticoagulation:</strong> Start ASAP unless high bleeding risk/active bleeding<br />
              • If AC not possible, consult IR for IVC filter<br />
              <u>In hospital:</u> UFH if urgent procedure, LMWH (1 mg/kg q12h) if possible procedure, DOAC (apixaban preferred) if about to discharge<br />
              <u>Duration:</u> 3 months if provoked, lifelong if unprovoked or second provoked clot
            </td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Thrombophilia Work-Up</strong></td>
            <td style={tdStyle}>
              Not routinely performed inpatient (most tests altered by acute clot)<br />
              Only send for antiphospholipid antibody syndrome (lupus anticoagulant, anti beta-2 glycoprotein, anti-cardiolipin antibodies); if positive, anticoagulate for life
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
},

// Add this as a new section in your sections array in im.js

{
  title: "Kidney Conditions (CKD and AKI)",
  content: (
    <div>
      <h3>Acute Kidney Injury (AKI)</h3>
      <p>
        <strong>Definition:</strong> Sudden decline in kidney function, typically identified by an increase in serum creatinine, reduction in urine output, or both. Diagnosed by any of the following:
      </p>
      <ul>
        <li>Increase in serum creatinine by ≥0.3 mg/dL (≥26.5 μmol/L) within 48 hours</li>
        <li>Increase in serum creatinine to ≥1.5 times baseline (presumed to have occurred within prior 7 days)</li>
        <li>Urine volume &lt;0.5 mL/kg/h for 6 hours</li>
      </ul>
      <h4>Stepwise Workup for the Medical Student</h4>
      <ol>
        <li>
          <strong>History/Exam:</strong> 
          <ul>
            <li>Vitals, volume status</li>
            <li>Exposures (contrast, meds)</li>
            <li>Recent infections (IgA nephropathy 1-2d, post-strep GN in 10-14d)</li>
            <li>Active infection (sepsis)</li>
            <li>Trauma (rhabdo)</li>
            <li>Rashes (AIN, vasculitis)</li>
          </ul>
        </li>
        <li>
          <strong>Urinalysis</strong>
        </li>
        <li>
          <strong>Labs:</strong>
          <ul>
            <li><strong>CBC:</strong> Infection, anemia, thrombocytopenia (may suggest sepsis or HUS)</li>
            <li><strong>FENa:</strong> FENa &lt;1% c/w pre-renal AKI, &gt;2% c/w intrinsic</li>
            <li><strong>Urinalysis:</strong> Hematuria, proteinuria, casts or crystals to differentiate pre-renal, intrinsic, post-renal</li>
          </ul>
        </li>
        <li>
          <strong>Imaging:</strong> Renal US if obstruction suspected
        </li>
      </ol>

            // Add this table to your "Kidney Conditions (CKD and AKI)" section or wherever appropriate
      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Pre-Renal<br />(FENa &lt;1% or FEUrea &lt;35%)</th>
            <th style={thStyle}>Intrinsic<br />(FENa &gt;2%)</th>
            <th style={thStyle}>Post-Renal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle} valign="top">
              <strong>↓ Absolute volume</strong><br />
              - Bleeding<br />
              - GI or skin loss<br />
              - Diuretics<br />
              - Osmotic diuresis<br />
              - Cerebral salt wasting<br />
              <strong>↓ Effective volume</strong><br />
              - CHF/cardiorenal<br />
              - Cirrhosis/hepatorenal<br />
              - Nephrotic syndrome<br />
              - Sepsis/third-spacing<br />
              <strong>Δ Renal dynamics</strong><br />
              - NSAIDs/COX-2s<br />
              - ACEi/ARBs<br />
              - Abd compartment syndrome<br />
              <strong>Relative hypotension</strong>
            </td>
            <td style={tdStyle} valign="top">
              <strong>Glomerular</strong><br />
              Anti-GBM<br />
              ANCA+<br />
              - Microscopic polyangiitis<br />
              - Granulomatosis with polyangiitis (GPA)<br />
              - Eosinophilic GPA<br />
              - Drug-induced ANCA<br />
              <u>Immune complex</u><br />
              <em>Low complement:</em><br />
              - PSGN, SLE, cryo, MPGN, MGRS<br />
              <em>Normal complement:</em><br />
              - IgA nephropathy/HSP<br />
              - Fibrillary/immunotactoid<br />
              <strong>Tubulo-Interstitial</strong><br />
              ATN (ischemia, sepsis, toxic, contrast, rhabdo, aminoglycosides)<br />
              AIN<br />
              1) Meds (see below)<br />
              2) Infectious: CMV, leptospirosis, legionella<br />
              3) Autoimmune/infiltrative: TINU, IgG4 disease, sarcoid, Sjogren<br />
              Crystals: TLS, acyclovir, ethylene glycol<br />
              Proteins: MM, amyloid, Ig deposition<br />
              <strong>Vascular</strong><br />
              <u>Microvascular:</u><br />
              - TTP/HUS, APLAS, HELLP/eclampsia, scleroderma, meds (CNI, gemcitabine)<br />
              <u>Macrovascular:</u><br />
              - RAS (athero, FMD), dissection, renal artery/vein thrombosis, polyarteritis nodosa
            </td>
            <td style={tdStyle} valign="top">
              <strong>Urinary retention</strong><br />
              - BPH, meds, neurogenic<br />
              - Foley dysfunction<br />
              <strong>Urinary obstruction (bilateral)</strong><br />
              - Stones (single kidney/transplant)<br />
              - Malignancy<br />
              - Retroperitoneal fibrosis (radiation)<br />
              - IgG4 disease w/ retroperitoneal fibrosis<br />
              - Congenital anomalies
            </td>
          </tr>
        </tbody>
      </table>
      </div>

            // Add this to your CKD/AKI section or as a new section
      
        <h3>Chronic Kidney Disease (CKD)</h3>
        <p>
          <strong>Definition:</strong> GFR &lt;60 mL/min OR presence of kidney damage (albuminuria ≥30mg/d) for ≥3 months
        </p>
        <h4>Stages of CKD</h4>
        <ol>
          <li><strong>Stage 1:</strong> GFR ≥ 90 mL/min (normal or high)</li>
          <li><strong>Stage 2:</strong> GFR 60-89 mL/min (mild decrease)</li>
          <li><strong>Stage 3:</strong> GFR 30-59 mL/min (moderate decrease)</li>
          <li><strong>Stage 4:</strong> GFR 15-29 mL/min (severe decrease)</li>
          <li><strong>Stage 5:</strong> GFR &lt; 15 mL/min (kidney failure)</li>
        </ol>
        <h4>Etiology</h4>
        <ul>
          <li><strong>Diabetes Mellitus:</strong> Most common cause.</li>
          <li><strong>Hypertension:</strong> Second most common.</li>
          <li><strong>Glomerulonephritis:</strong> Includes IgA nephropathy, lupus nephritis, etc.</li>
          <li><strong>Polycystic Kidney Disease:</strong> Genetic condition.</li>
          <li><strong>Obstructive Uropathy:</strong> Due to stones, tumors, etc.</li>
          <li><strong>Chronic use of NSAIDs or nephrotoxic drugs.</strong></li>
        </ul>
        <h4>Management</h4>
        <ul>
          <li>
            <strong>Lifestyle Modifications:</strong>
            <ul>
              <li>Diet: Low protein, low sodium, control potassium and phosphorus.</li>
              <li>Weight management and exercise.</li>
            </ul>
          </li>
          <li>
            <strong>Pharmacotherapy:</strong>
            <ul>
              <li>Control Blood Pressure: ACE inhibitors or ARBs (especially with proteinuria).</li>
              <li>Diabetes Management: Optimize glycemic control.</li>
              <li>Anemia Management: Erythropoiesis-stimulating agents (ESAs), iron supplementation.</li>
              <li>Bone Health: Phosphate binders, vitamin D supplementation.</li>
            </ul>
          </li>
          <li>
            <strong>Dialysis and Transplantation:</strong> For end-stage renal disease (Stage 5).
          </li>
        </ul>
        <h4>When to Start Dialysis? <span style={{ fontWeight: 600 }}>AEIOU!</span></h4>
        <ul>
          <li><strong>A - Acidosis:</strong> Metabolic acidosis with low bicarbonate levels (&lt;15 mEq/L). <em>see AGMA</em></li>
          <li><strong>E - Electrolyte Imbalances:</strong> Hyperkalemia (K<sup>+</sup> &gt;5.5 mEq/L) is particularly critical.</li>
          <li><strong>I - Intoxications:</strong> Certain substances that require dialysis, such as: Salicylates, methanol, ethylene glycol, lithium.</li>
          <li><strong>O - Overload:</strong> Fluid overload can cause pulmonary edema; be alert for signs like dyspnea and bilateral crackles.</li>
          <li><strong>U - Uremia:</strong> Elevated BUN (&gt;100 mg/dL) can cause altered mental status (AMS), bleeding tendencies, and may lead to coma.</li>
        </ul>
        <h4>Anion Gap Metabolic Acidosis (AGMA) - MUDPILES</h4>
        <ul>
          <li><strong>M:</strong> Methanol</li>
          <li><strong>U:</strong> Uremia</li>
          <li><strong>D:</strong> Diabetic ketoacidosis</li>
          <li><strong>P:</strong> Propylene glycol</li>
          <li><strong>I:</strong> Ischemia/lactic acidosis</li>
          <li><strong>L:</strong> Lactate</li>
          <li><strong>E:</strong> Ethylene glycol</li>
          <li><strong>S:</strong> Salicylates</li>
        </ul>

    </div>
  )
},

{title: phmSections.find(s => s.title === "Antibiotic Coverage")?.title,
  content: (
  phmSections.find(s => s.title === "Antibiotic Coverage")?.content),},

    // Add this as a new section in your sections array in im.js
  
  {
    title: "Sepsis and Septic Shock",
    content: (
      <div>
        <h3>Sepsis</h3>
        <p>
          Life-threatening organ dysfunction caused by a dysregulated host response to infection.
        </p>
        <h4>Septic Shock</h4>
        <ul>
          <li>Persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg</li>
          <li>Serum lactate &gt;2 mmol/L despite adequate volume resuscitation</li>
        </ul>
        <h4>Organ Dysfunction Criteria</h4>
        <ul>
          <li><strong>SOFA (Sequential Organ Failure Assessment) score ≥ 2 points</strong></li>
        </ul>
        <h4>Quick SOFA (qSOFA) Criteria (≥ 2 points suggests higher risk):</h4>
        <ul>
          <li>RR ≥ 22/min</li>
          <li>Altered Mental Status</li>
          <li>SBP ≤ 100 mmHg</li>
        </ul>
        <h4>SIRS Criteria (≥2 required, historical but still used):</h4>
        <ul>
          <li>Temperature &gt;38°C or &lt;36°C</li>
          <li>Heart rate &gt;90/min</li>
          <li>Respiratory rate &gt;20/min or PaCO₂ &lt;32 mmHg</li>
          <li>WBC &gt;12,000/mm³, &lt;4,000/mm³, or &gt;10% bands</li>
        </ul>
  
        <h4>Common Sources and Pathogens</h4>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={thStyle}>Infectious Sources</th>
              <th style={thStyle}>Common Pathogens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Pneumonia<br />
                Intra-abdominal infections<br />
                Central line associated bloodstream infections<br />
                UTI<br />
                Skin/soft-tissue infections
              </td>
              <td style={tdStyle}>
                <strong>Gram-positive:</strong> Staphylococcus aureus, Streptococcus species<br />
                <strong>Gram-negative:</strong> E. coli, Klebsiella, Pseudomonas<br />
                <strong>Fungi:</strong> Candida (esp. immunocompromised)<br />
                <strong>Viruses:</strong> Influenza, COVID-19 (less common)
              </td>
            </tr>
          </tbody>
        </table>
  
        <h4>Diagnostic Work-Up</h4>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={thStyle}>Lab Studies</th>
              <th style={thStyle}>Imaging</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Complete blood count<br />
                Lactate level<br />
                Arterial blood gas<br />
                Blood cultures (before antibiotics if possible)<br />
                Comprehensive metabolic panel<br />
                Coagulation profile
              </td>
              <td style={tdStyle}>
                Chest X-ray<br />
                Abdominal ultrasound or CT (based on suspected source)<br />
                Echocardiogram (if endocarditis suspected)
              </td>
            </tr>
          </tbody>
        </table>
  
        <h4>Treatment</h4>
        <strong>Initial Management (Time-Sensitive):</strong>
        <ul>
          <li>Fluids: 30 mL/kg crystalloid bolus within 3 hours</li>
          <li>Vasopressors if fluid-refractory shock
            <ul>
              <li>First-line: Norepinephrine</li>
              <li>Second-line: Add Vasopressin</li>
            </ul>
          </li>
          <li>Source control: Identify and address infectious source</li>
        </ul>
        <strong>Empiric Antibiotics (within 1 hour of recognition):</strong>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
          <thead>
            <tr>
              <th style={thStyle}>Community-acquired</th>
              <th style={thStyle}>Hospital-acquired</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Ceftriaxone + Metronidazole<br />
                Piperacillin-tazobactam<br />
                Carbapenem
              </td>
              <td style={tdStyle}>
                Vancomycin + Piperacillin-tazobactam<br />
                Carbapenem
              </td>
            </tr>
          </tbody>
        </table>
  
        <h4>Differential Diagnosis</h4>
        <ul>
          <li>Pulmonary embolism</li>
          <li>Acute pancreatitis</li>
          <li>Trauma or severe burns</li>
          <li>Hemorrhagic shock</li>
          <li>Acute coronary syndrome</li>
        </ul>
  
        <h4>Monitoring and Follow-Up</h4>
        <ul>
          <li>Vital signs q1-2h or continuous</li>
          <li>Serial lactate measurements</li>
          <li>Urine output</li>
          <li>Mental status</li>
          <li>Organ function reassessment</li>
          <li>Response to treatment</li>
        </ul>
      </div>
    ),
  },
    // Add this as a new section in your sections array in im.js
  
  {
    title: "Anemia",
    content: (
      <div>
        <h3>Anemia</h3>
        <p>
          <strong>Definition:</strong> A decrease in the number of red blood cells or hemoglobin concentration below the normal range for age and sex.
        </p>
        <h4>Symptoms and Signs</h4>
        <ul>
          <li><strong>Oxygen delivery issues:</strong> Fatigue, dizziness, dyspnea on exertion (DOE), pallor, angina, claudication, palpitations</li>
          <li><strong>Compensatory mechanisms:</strong> Tachycardia, high-output heart failure, erythropoiesis (bone pain)</li>
          <li><strong>Other findings:</strong> Jaundice (hemolysis), glossitis (B12/folate deficiency), splenomegaly (hemolysis, infection, malignancy), abnormal bleeding (coagulopathy)</li>
        </ul>
        <h4>Initial Workup</h4>
        <ul>
          <li><strong>CBC:</strong> Check MCV, reticulocyte count</li>
          <li><strong>Reticulocyte index (RI):</strong>
            <ul>
              <li>RI &lt;2% suggests decreased RBC production (hypo-proliferative anemia)</li>
              <li>RI &gt;2% suggests increased RBC destruction or loss (hyper-proliferative or hemolytic anemia)</li>
            </ul>
          </li>
          <li>
            <strong>If RI &lt;2%:</strong>
            <ul>
              <li>Iron studies</li>
              <li>B12, folate</li>
              <li>Liver and kidney function, CRP</li>
            </ul>
          </li>
          <li>
            <strong>If RI &gt;2%:</strong>
            <ul>
              <li>LDH, bilirubin, haptoglobin, Coombs test (DAT), coags, UA</li>
            </ul>
          </li>
        </ul>

// Example tables for anemia types. Place these inside your Anemia section or wherever appropriate.

<h4>Microcytic Anemia (MCV &lt;80)</h4>
<div classNamer = "table-container">
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
  <thead>
    <tr>
      <th style={thStyle}>Type</th>
      <th style={thStyle}>Causes</th>
      <th style={thStyle}>Labs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Iron deficiency anemia</td>
      <td style={tdStyle}>Blood loss (GI, menstrual), pregnancy, poor diet</td>
      <td style={tdStyle}>↓ Iron, ↓ Ferritin, ↑ TIBC, ↓ Transferrin saturation</td>
    </tr>
    <tr>
      <td style={tdStyle}>Anemia of chronic disease</td>
      <td style={tdStyle}>Chronic infections, inflammation, cancer</td>
      <td style={tdStyle}>↓ Iron, normal/low TIBC, normal/high Ferritin</td>
    </tr>
    <tr>
      <td style={tdStyle}>Thalassemia</td>
      <td style={tdStyle}>Genetic, often family history (Mediterranean, Asian, African descent)</td>
      <td style={tdStyle}>Normal iron studies, ↓↓ MCV, normal RBC count, target cells on smear; Hb electrophoresis for diagnosis</td>
    </tr>
    <tr>
      <td style={tdStyle}>Sideroblastic anemia</td>
      <td style={tdStyle}>Lead poisoning, alcohol, drugs</td>
      <td style={tdStyle}>↑ Ferritin, normal iron and TIBC, basophilic stippling on smear, ringed sideroblasts on bone marrow biopsy</td>
    </tr>
  </tbody>
</table>
</div>

<h4>Normocytic Anemia (MCV 80-100 fL)</h4>
<div className="table-container">
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
  <thead>
    <tr>
      <th style={thStyle}>Type</th>
      <th style={thStyle}>Causes</th>
      <th style={thStyle}>Labs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Inflammation</td>
      <td style={tdStyle}>Early anemia of chronic disease or early iron deficiency anemia</td>
      <td style={tdStyle}>Often normal iron studies</td>
    </tr>
    <tr>
      <td style={tdStyle}>Organ-specific disease</td>
      <td style={tdStyle}>Chronic kidney disease, endocrine dysfunction (hypothyroidism, adrenal insufficiency)</td>
      <td style={tdStyle}>Depends on the underlying condition (e.g., ↓ Epo in CKD)</td>
    </tr>
    <tr>
      <td style={tdStyle}>Bone marrow disorders</td>
      <td style={tdStyle}>Aplastic anemia, myelofibrosis, MDS</td>
      <td style={tdStyle}>Pancytopenia, hypocellular bone marrow on biopsy</td>
    </tr>
  </tbody>
</table>
</div>

<h4>Macrocytic Anemia (MCV &gt;100 fL)</h4>
<div className="table-container">
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
  <thead>
    <tr>
      <th style={thStyle}>Type</th>
      <th style={thStyle}>Causes</th>
      <th style={thStyle}>Labs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Vitamin B12 deficiency</td>
      <td style={tdStyle}>Vegan diet, malabsorption (e.g., pernicious anemia, gastrectomy)</td>
      <td style={tdStyle}>↑ Homocysteine, ↑ MMA</td>
    </tr>
    <tr>
      <td style={tdStyle}>Folate deficiency</td>
      <td style={tdStyle}>Poor diet, alcoholism, pregnancy</td>
      <td style={tdStyle}>↑ Homocysteine, normal MMA</td>
    </tr>
    <tr>
      <td style={tdStyle}>Non-megaloblastic</td>
      <td style={tdStyle}>Alcoholism, liver disease, hypothyroidism</td>
      <td style={tdStyle}>MCV usually &lt; 110</td>
    </tr>
    <tr>
      <td style={tdStyle}>Myelodysplastic syndrome</td>
      <td style={tdStyle}>Older adults, chronic bone marrow disorders</td>
      <td style={tdStyle}>Macrocytosis, pancytopenia</td>
    </tr>
  </tbody>
</table>
</div>

<h4>Hemolytic Anemia (RI &gt;2%)</h4>
<h5>Extrinsic (to RBCs)</h5>
<div className="table-container">
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
  <thead>
    <tr>
      <th style={thStyle}>Type</th>
      <th style={thStyle}>Causes</th>
      <th style={thStyle}>Labs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Microangiopathic hemolytic anemia (MAHA)</td>
      <td style={tdStyle}>DIC, TTP, mechanical heart valves</td>
      <td style={tdStyle}>Schistocytes on smear, thrombocytopenia, ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin</td>
    </tr>
    <tr>
      <td style={tdStyle}>Immune hemolysis</td>
      <td style={tdStyle}>Warm autoimmune (CLL, SLE), cold autoimmune (EBV)</td>
      <td style={tdStyle}>Positive Coombs test (DAT), spherocytes on smear</td>
    </tr>
    <tr>
      <td style={tdStyle}>Non-immune hemolysis</td>
      <td style={tdStyle}>Infections (e.g., malaria), toxins, hypersplenism</td>
      <td style={tdStyle}>Negative Coombs test (DAT), ↑ LDH, ↓ haptoglobin</td>
    </tr>
  </tbody>
</table>
</div>

<h5>Intrinsic (to RBCs)</h5>
<div className="table-container">
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
  <thead>
    <tr>
      <th style={thStyle}>Type</th>
      <th style={thStyle}>Causes</th>
      <th style={thStyle}>Labs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Hereditary</td>
      <td style={tdStyle}>Sickle cell, thalassemia, G6PD deficiency, spherocytosis</td>
      <td style={tdStyle}>Abnormal RBC shape on smear, hemoglobin electrophoresis, enzyme tests</td>
    </tr>
    <tr>
      <td style={tdStyle}>Acquired</td>
      <td style={tdStyle}>Paroxysmal nocturnal hemoglobinuria (PNH)</td>
      <td style={tdStyle}>Flow cytometry for GPI anchor deficiency, hemoglobinuria</td>
        </tr>
        </tbody>
      </table>
      </div>
// Add this to your Anemia section under the tables, for example after the last table

<h4>Management / Treatments</h4>
<ul>
  <li>Iron (Fe), Vitamin B9 (folate), and Vitamin B12 supplements</li>
  <li>Treatment of underlying cause</li>
  <li>Blood transfusions in severe cases (Hgb &lt;7 or symptoms such as dyspnea,lethargy)</li>
</ul>
      </div>
      ),
  },

// Add this as a new section in your sections array in im.js

{
  title: "Tips for Success",
  content: (
    <div>
      <h3>BT Tips for Success</h3>
      <ul>
        <li>
          <strong>Nikita:</strong> Ben Taub is faster paced than the other sites and you will mostly have to form your own assessment and plan before checking in with the residents. For the patients you take care of, try to show initiative by meeting with them even after rounds and sharing the team’s thoughts.
        </li>
        <li>
          <strong>Piya:</strong> Make sure you do the 40q a day on UWorld. Start ANKI early. And be kind to yourself. It’s a tough rotation but you learn a bunch! Ben Taub is where you get to play a more active role in patient care with an extremely diverse patient population.
        </li>
        <li>
          <strong>Ashira:</strong> Stay engaged during rounds, even when patients you are not following are being discussed. Have UpToDate pulled up and help the team by looking something up as questions arise.
        </li>
        <li>
          <strong>Jacqueline:</strong> BT IM is genuinely one of the places as a medical student where you can feel most useful. Try to observe or even help in as many goals of care and family discussions as you can, as these were some of my most impactful experiences of all rotations. Make sure to save the translator phone number as many patients are Spanish speaking.
        </li>
      </ul>
      <h3>VA Tips for Success</h3>
      <ul>
        <li>
          <strong>Nikita:</strong> More slow-paced but you have more time to talk with patients to get a thorough history. Learning how to use CPRS is crucial and can help with your presentations.
        </li>
        <li>
          <strong>Ashira:</strong> Morning report is an amazing learning experience! Pay attention and ask questions!
        </li>
        <li>
          <strong>Piya:</strong> The VA is a great place to ask your attendings/residents for chalk talks if they are up for it, because there is more down time at the VA compared to other hospitals.
        </li>
        <li>
          <strong>Jacqueline:</strong> Even if it can be difficult to speak up as a medical student, try to come up with your own differential diagnosis in your mind as the morning report presenter goes through the history and lab findings as this is great practice! Try to keep up with your goal for UWorld and Anki, at least being caught up by the end of each weekend. Practice some UWorld tests or practice shelf tests timed, as timing was an issue for many people on the shelf exam.
        </li>
      </ul>
      <h3>St. Luke’s Tips for Success</h3>
      <ul>
        <li>
          <strong>Nikita:</strong> Because this is only a week, it can be difficult to adjust very quickly. However, if you follow 1-2 patients and give presentations, then it can be a better experience. Also helpful to learn more about sub-specialties.
        </li>
        <li>
          <strong>Piya:</strong> Ask for expectations for note writing, presentation style, and admissions early on.
        </li>
        <li>
          <strong>Ashira:</strong> Make friends with the PAs and NPs on your team and they will take you to the St. Luke’s physicians lounge for lunch!
        </li>
        <li>
          <strong>Jacqueline:</strong> Make sure to ask your resident the first day for help on presenting and seeing patients! Also let your attending/resident know about needing to see a procedure for the procedure log early on in the week.
        </li>
      </ul>
    </div>
  ),
},


];



const Im = () => {
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
      title="Internal Medicine"
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

export default Im;