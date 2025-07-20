import SectionTemplate from '../components/SectionTemplate';
import { thStyle, tdStyle } from '../styles/styles';


const Labs = () => (
  <SectionTemplate
    title="Labs"
    content={
      <div>
        <h2>CBC Interpretation</h2>
        <table>
          <thead>
            <tr>
              <th style={thStyle}>CBC w/o Differential</th>
              <th style={thStyle}>CBC w/ Differential</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Routine Screening</td>
              <td style={tdStyle}>Infection (Bacterial vs Viral)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Baseline evals prior to surg or meds (w/ effects on bone marrow)</td>
              <td style={tdStyle}>Hematologic disorders</td>
            </tr>
            <tr>
              <td style={tdStyle}>Basic monitoring for chronic illnesses whose WBC subtypes is not main concern</td>
              <td style={tdStyle}>Allergic Rxns &amp; Parasitic Infections</td>
            </tr>
            <tr>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Monitoring treatment like chemo</td>
            </tr>
          </tbody>
        </table>
        <h3>Quick Tips for Interpretation:</h3>
        <ul>
          <li>
            <strong>Look at trends:</strong> Compare with previous CBCs to see if there is a stable pattern or a significant change
          </li>
          <li>
            <strong>Clinical correlation:</strong> Always correlate CBC findings with clinical symptoms and other diagnostic results (Labs ≠ Patient Symptoms)
          </li>
          <li>
            <strong>Ask about medications and recent events:</strong> Recent infections, surgeries, and medications can influence CBC results
          </li>
        </ul>
        <img src="/Labs1.jpg" alt="Quick tips for interpretation" style={{ width: '100%' }} />

        <h2>BMP vs CMP Indications</h2>
        <table>
          <thead>
            <tr>
              <th style={thStyle}>BMP</th>
              <th style={thStyle}>CMP (adds LFTs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Routine Checkups<br />Assessing overall health status</td>
              <td style={tdStyle}>Nutritional Status Assessment<br />Evaluating total protein and albumin levels for malnutrition.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chronic Conditions<br />Monitoring patients with chronic conditions such as hypertension or kidney disease.</td>
              <td style={tdStyle}>Chronic Disease Monitoring<br />Ex: Diabetes, Liver disease, and Chronic kidney disease</td>
            </tr>
            <tr>
              <td style={tdStyle}>Postoperative Monitoring<br />Particularly in patients with known comorbidities like diabetes or chronic kidney disease, where electrolyte and renal function monitoring is crucial.</td>
              <td style={tdStyle}>Preoperative Assessments<br />To evaluate overall metabolic health and liver function before surgery.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Emergency Situations<br />Used in emergency settings to quickly assess kidney function, electrolyte balance, and blood glucose levels.</td>
              <td style={tdStyle}>Evaluating Systemic Illnesses<br />To assess metabolic derangements in various illnesses.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Kidney Function Assessment<br />To evaluate BUN and creatinine levels in patients with renal issues.</td>
              <td style={tdStyle}>Liver Disease<br />To evaluate liver function through tests like ALT, AST, ALP, and bilirubin levels.<br />Symptoms: Jaundice, RUQ pain, hepatomegaly, or suspected liver disorders</td>
            </tr>
            <tr>
              <td style={tdStyle}>Diabetes Management<br />To monitor glucose levels in diabetic patients.</td>
              <td style={tdStyle}>Monitoring Medication Effects<br />Especially drugs that affect liver or kidney function.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Dehydration<br />Monitoring electrolyte levels in patients with suspected dehydration.</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrolyte Imbalances<br />Symptoms: Muscle weakness, fatigue, or arrhythmias.</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Acid-Base Disorders<br />To evaluate bicarbonate levels in cases of metabolic acidosis or alkalosis.</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Monitoring Patients on Diuretics<br />To check for electrolyte changes.</td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>

        <img src="/Labs2.jpg" alt="BMP vs CMP Indications" style={{ width: '100%' }} />

        <h2>Electrolyte Basic Interpretation</h2>
        <p>
          Etiologies for each electrolyte deficiencies: <a href="https://clinicalproblemsolving.com/reasoning-content/dx-schema-electrolytes/" target="_blank" rel="noopener noreferrer">clinicalproblemsolving.com</a>
        </p>

        <img src="/Labs3.jpg" alt="Electrolyte Basic Interpretation" style={{ width: '100%' }} />

        <img src="/Labs4.jpg" alt="Electrolyte Basic Interpretation" style={{ width: '100%' }} />

        <h2>LFTs Basic Interpretation</h2>
        <img src="/Labs5.png" alt="LFTs Hepatocellular" style={{ width: '100%' }} />
        <img src="/Labs6.png" alt="LFTs Cholestatic" style={{ width: '100%' }} />
        {/* Add your LFTs interpretation content here */}

        <h2>Hemodynamic Interpretation</h2>
        <img src="/Labs8.png" alt="Hemodynamic Interpretation" style={{ width: '100%' }} />
        <h3>Clinical Integration:</h3>
        <ul>
          <li>
            <strong>Clinical Contextual Interpretation:</strong> Consider clinical context (e.g., trauma, sepsis) when interpreting hemodynamic data
          </li>
          <li>
            <strong>Monitoring and Treatment:</strong> Hemodynamic monitoring guides fluid resuscitation, vasopressor use, and other interventions to optimize perfusion and cardiac function
          </li>
        </ul>
        <img src="/Labs7.png" alt="Hemodynamic Interpretation" style={{ width: '100%' }} />
      </div>
    }
  />
);

export default Labs;