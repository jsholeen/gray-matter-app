import SubSectionTemplate from '../components/SubSectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';

const sections = [
  {  title: "Family-Centered Rounds (FCR)",
  content: (
    <>
      <h2>Family-Centered Rounds (FCR)</h2>
      <p>
        <strong>Quick Tip:</strong> If you ever get confused on how to present, always remember families want to answer these 3 questions:
      </p>
      <ol>
        <li><strong>Why is my child here?</strong> (What is the diagnosis?)</li>
        <li><strong>What are we actively doing now?</strong></li>
        <li><strong>How long are we here for?</strong></li>
      </ol>
      <p>
        <a href="http://www.cincinnatichildrens.org/professional/referrals/patient-family-rounds/videos/" target="_blank" rel="noopener noreferrer">
          Cincinnati Children's FCR Videos
        </a>
      </p>
      <h3>What is FCR?</h3>
      <ul>
        <li>Occurs with the patient, family, physicians, and ancillary staff in the same room.</li>
        <li>Includes discussion/presentation of the patient’s story, test results, treatment outcomes, and developing a plan of care.</li>
      </ul>
      <h3>How to Do FCR</h3>
      <ol>
        <li>
          <strong>Before entering the patient room:</strong>
          <ul>
            <li>Start with a one-liner outside the room:
              <ul>
                <li>If &lt;10 years old: “Patient X is a [stable/unstable] # (days OR years months) who was admitted for ‘X’ and [quickly mention hospital course]”</li>
                <li>If &gt;10 years old: “Patient X is a [stable/unstable] # years old and # months who was admitted for ‘X’ and [quickly mention hospital course]”</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>During rounds:</strong>
          <ul>
            <li>Verify that the patient/family still wants to participate in FCR. Explain rounds during pre-rounding so families are prepared.</li>
            <li>Introduce the team (key 4-5 members) to the patient/family.</li>
            <li>Summarize the purpose: “We would like your input in taking care of your child. We are the medical experts, but you are the expert on your child. Together, we can do a better job.”</li>
          </ul>
        </li>
        <li>
          <strong>Start talking TO THE PARENT/PATIENT (not the team):</strong>
          <ul>
            <li>Review pre-rounding info: “This morning you told me ... has anything changed since then?”</li>
            <li>Present the case in SOAP format, using language families understand (e.g., “elevated liver values” for transaminitis).</li>
            <li>Perform any missing physical exam tests as needed.</li>
            <li>Invite input: “Before I summarize your child’s case and discuss the treatment options and plan, I want to see if anyone else has anything to add?”</li>
          </ul>
        </li>
        <li>
          <strong>Present assessment and plan:</strong>
          <ul>
            <li>Summarize the case with a brief one-liner for the family.</li>
            <li>Describe next steps for treatment. If unsure, present options and invite attending input.</li>
            <li>Formulate the plan with family and team input. Invite questions before finalizing.</li>
            <li>End by saying: “Mr. X, I know we talked about a lot of things. To make sure I was clear, can you summarize for me what the plan for today is?”</li>
          </ul>
        </li>
      </ol>
    </>
  )
},
{
  title: "URI vs. Bronchiolitis vs. Asthma vs. Pneumonia",
  content: (
    <>
      <h2>URI vs. Bronchiolitis vs. Asthma vs. Pneumonia</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Condition</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Definition</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Etiology</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Symptoms</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Diagnosis</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Treatment</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Prevention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>URI</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Seasonal (fall/winter). Involves structures at or above the vocal cords (nasal cavity, sinuses, pharynx, larynx).
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              • Rhinovirus<br />
              • Acute rhinosinusitis<br />
              • Pharyngitis<br />
              • Laryngitis<br />
              • Influenza<br />
              • Croup<br />
              • COVID-19
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              • Rhinorrhea<br />
              • Nasal congestion<br />
              • Sore throat<br />
              • Cough
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Clinical; nasopharyngeal swabs can identify cause
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Self-limited; supportive care. Resolves within 14 days.<br />
              Antibiotics not indicated unless bacterial infection.
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              —
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Bronchiolitis</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Lower respiratory tract infection; inflammation of bronchioles in children &lt;2 y/o.
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              RSV
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              • URI symptoms (low-grade fever, nasal congestion) → cough, wheezing → ARDS (severe)<br />
              • Peaks 3-5 days after onset<br />
              • Cough/wheezing can persist 3-4 weeks
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Clinical
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Self-limited; supportive (nasal suction, monitoring).<br />
              Severe: IV fluids, respiratory/nutritional support, close monitoring.
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              RSV vaccine for pregnant mothers in 3rd trimester
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Pneumonia</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Mostly January-April. Infection of pulmonary parenchyma.
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <strong>Viruses (&lt;5 y/o):</strong> RSV most common in &lt;3 y/o<br />
              <strong>School-age:</strong> Mycoplasma pneumoniae, Chlamydia pneumoniae<br />
              <strong>Parapneumonic effusion:</strong> Staphylococcus aureus
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <strong>Constitutional:</strong> Fever, cough, tachypnea, malaise, poor feeding, vomiting/diarrhea<br />
              <strong>Respiratory:</strong> Dyspnea, retractions, nasal flaring, grunting, wheezing<br />
              <strong>Other:</strong> Cyanosis, pallor/mottling, hypoxemia, tachycardia
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Clinical (H&P, respiratory distress symptoms); CXR if planning admission
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Supportive care; empiric antibiotics if bacterial suspected
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              —
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Asthma</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Acute asthma exacerbations (“asthma attacks”): episodes of progressive SOB, cough, wheezing, chest tightness.
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Infection, stress, allergies →<br />
              1) Bronchoconstriction<br />
              2) Airway hyperresponsiveness<br />
              3) Airway inflammation (edema, mucus plugging)
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              • End-expiratory wheezing<br />
              • Dyspnea<br />
              • Persistent dry cough (worse at night/exposure)
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              PFTs: ↓FEV1, ↓FEV1/FVC ratio
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Combination of ICS, SABA, and/or LABA
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Avoidance of triggers; manage comorbidities
            </td>
          </tr>
        </tbody>
      </table>
      </>
      )
      },
      {  title: "Neonatal Fever",
  content: (
    <>
      <h2>Neonatal Fever</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Category</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", background: "#F4FBFC" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Definition</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Any neonate who develops a fever &gt;100.4°F. Workup changes based on age groups: 0-21 days, 22-28 days, and 29-60 days.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>General Questions to Ask Family</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Any changes in the baby’s behavior? (Lethargy, fussiness/irritability, tracking eyes/playing)</li>
                <li>Any changes in baby’s color?</li>
                <li>Any changes in breathing? (Increased work of breathing: nasal flaring, grunting, head bobbing, wheezing, apnea)</li>
                <li>Are you breastfeeding or formula feeding? Any changes in feeding?</li>
                <li>Any rash, ill contacts, immunization status, or recent antibiotics?</li>
                <li>Any cough? Productive?</li>
                <li>Vomiting/diarrhea and foul-smelling urine?</li>
                <li>Any changes in number of diapers per day and color?</li>
                <li>Any changes in baby sleeping patterns?</li>
                <li>Rhinorrhea (nasal discharge)/congestion?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Main Causes</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>
                  <strong>UTI:</strong> Ask for number of wet diapers, foul-smelling urine, and if male, circumcision status.
                </li>
                <li>
                  <strong>Bacteremia/Sepsis:</strong> Ask for mother’s delivery complications (GBS, other infections), number of wet diapers.
                </li>
                <li>
                  <strong>Meningitis:</strong> Ask for high-pitched cry, bulging fontanelle.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}><strong>Management</strong></td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Admit patient</li>
                <li>Obtain UA, CBC with diff, blood cultures, and LP</li>
                <li>Give LR fluids and start broad-spectrum antibiotics</li>
                <li>Closely monitor patient</li>
              </ul>
              <a href="https://www.texaschildrens.org/sites/default/files/uploads/documents/outcomes/standards/FWLS_0-60_days_Guideline_82023.pdf" target="_blank" rel="noopener noreferrer">
                Texas Children's Neonatal Fever Guideline
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )},
  {
    title: "Antibiotic Coverage",
    content: (
<table style={{ width: "100%", borderCollapse: "collapse", margin: "1em 0" }}>
      <thead style={{ color: "white" }}>
        <tr>
          <th colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", background: "#2e394fff" }}>Gram-positive cocci</th>
          <th colSpan={4} style={{ border: "1px solid #ccc", padding: "8px", background: "#932c1cff" }}>Gram-negative bacilli</th>
          <th rowSpan={2} style={{ border: "1px solid #ccc", padding: "8px", background: "#587e38ff" }}>Anaerobes</th>
        </tr>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#8497bcff" }}>MRSA</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#4f6390ff" }}>MSSA</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#3e4e6fff" }}>Streptococci</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#e2674eff" }}>E. coli, <br />Klebsiella</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#c0726fff" }}>Proteus</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#c03824ff" }}>Pseudomonas</th>
          <th style={{ border: "1px solid #ccc", padding: "8px", background: "#973d38ff" }}>Gram negatives with inducible beta-lactamase activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff"}}>Penicillin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td> 
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d7ced9ff" }}>Amoxicillin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td> 
          <td colSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff" }}>Flucloxacillin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d7ced9ff"  }}>Cefazolin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td colSpan={3}style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff" }}>Clindamycin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff" }}>Clindamycin</td>
        </tr>
        <tr>
          <td rowSpan={2} colSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff" }}>Rifampicin/fusidic acid</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>Metronidazole</td>
        </tr>
        <tr>
          <td colSpan={3} rowSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#e6ebf4ff" }}>Vancomycin/teicoplanin, linezolid, daptomycin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffb4a8ff" }}>Trimethoprim</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={6} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d2a0bfff" }}>Ciprofloxacin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={4} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffb4a8ff" }}>Gentamicin/tobramycin, aztreonam</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Moxifloxacin</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Moxifloxacin</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d7ced9ff"  }}>Cefuroxime</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={4} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d7ced9ff"  }}>Ceftriaxone</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffb4a8ff" }}>Ceftazidime</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={6} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#d2a0bfff" }}>Cefepime</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={3} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Amoxicillin-Clavulanate</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Amoxicillin-Clavulanate</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={5} rowSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Ticarcillin-Clavulanate, Piperacillin-Tazobactam</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Ticarcillin-Clavulanate, Piperacillin-Tazobactam</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={7} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Meropenem, Imipenem</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={4} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Ertapenem</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
          <td colSpan={2} style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#ffe3a8ff" }}>Ertapenem</td>
        </tr>
      </tbody>

  </table>
    )
  },
    // Add this section to your sections array in phm.js
  
  {
    title: "Tips for Success",
    content: (
      <div>
        <h3>Tips for Success</h3>
        <ul>
          <li>Master the skill of family-centered rounds!</li>
          <li>After you're done with your work, check in with your patients and talk with them. These children are often alone in a completely foreign setting. Help them feel comfortable!</li>
          <li>Read up on your patients by looking at admission reason, ER course, current management, and writing down their medications and when was the last time PRN meds were given.</li>
          <li>When talking to the families during pre-rounds, give the plan and discuss your thoughts comfortably with them. If you are unsure, do not worry as the team will come together and consolidate that information.</li>
          <li>In the afternoon after rounds, offer to provide consults, check up on patients, and repeat some physical exam findings that may have changed over time.</li>
          <li>During noon conference, push yourself to shout out differentials you are considering as it is a way for you to not only actively engage but also learn a lot which can be translated to the patients you see during rounds!</li>
        </ul>
      </div>
    )
  }

]

export {sections};

const PHM = ({ openIndex, setOpenIndex, startIndex }) => {
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
      title="Pediatric Hospital Medicine"
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

export default PHM;

