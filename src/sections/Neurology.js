import SectionTemplate from '../components/SectionTemplate';
import React, { useState, useRef } from 'react';

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
      <>
        <h3>General HPI Note Template</h3>
        <p><strong>Patient:</strong></p>
        <p><strong>Date of Admission:</strong></p>
        <p><strong>Chief Complaint:</strong> “[Patient’s words for symptoms]”</p>
        <h4>History of Present Illness</h4>
        <p>
          [Name] is XX-year-old right/left-handed [male/female] with PMH of [insert PMH] who presents with [symptoms].<br />
          At patient’s baseline, patient is [independent/dependent on activities of daily living with minimal assistance].<br />
          Patient’s last known normal was [time]. [Story before ED].<br />
          On presentation to the ED, [story during ED with relevant ED physical exam findings, labs, and imaging].<br />
          [Relevant risk factors and medications]. The patient [relevant positive and negative ROS].
        </p>
        <ul>
          <li><strong>Past Medical History</strong></li>
          <li><strong>Past Surgical History</strong></li>
          <li><strong>Medications</strong></li>
          <li><strong>Allergies</strong></li>
          <li><strong>Family History</strong></li>
          <li><strong>Social History</strong></li>
        </ul>
        <h4>Review of Systems:</h4>
        <ul>
          <li>Constitutional</li>
          <li>Eyes</li>
          <li>Ears, nose, throat</li>
          <li>CV</li>
          <li>Respiratory</li>
          <li>GI</li>
          <li>Genito-urinary</li>
          <li>MSK</li>
          <li>Neurologic</li>
          <li>Skin</li>
          <li>Psych</li>
        </ul>
        <h4>Physical Examination</h4>
        <ul>
          <li>Vitals</li>
          <li>General</li>
          <li>Eyes</li>
          <li>ENT</li>
          <li>Cardiovascular</li>
          <li>Lungs</li>
          <li>Skin</li>
          <li>Abdomen</li>
          <li>Extremities</li>
          <li>Musculoskeletal</li>
        </ul>
        <h4>Neurological Examination</h4>
        <ul>
          <li>
            <strong>Mental Status</strong><br />
            Alert and Oriented:
            <ul>
              <li>Person</li>
              <li>Place (what was said)</li>
              <li>Situation/event (what was said)</li>
              <li>Time (what was said)</li>
            </ul>
          </li>
          <li><strong>Mood and Affect</strong></li>
          <li><strong>Language</strong></li>
          <li><strong>Follow commands</strong></li>
        </ul>
        <h5>Cranial Nerves</h5>
        <ul>
          <li>I—Not tested.</li>
          <li>II—Pupils equal and reactive bilaterally. Visual fields full in all 4 quadrants for left and absent on right even to motion.</li>
          <li>III, IV, VI—extraocular movements intact</li>
          <li>V motor—bilateral temporal and masseter strength intact 5/5, good bulk</li>
          <li>V sensory—intact to light touch symmetrically in V1, V2, V3 distribution bilaterally</li>
          <li>VII motor—No facial droop, symmetric nasolabial folds. Bilateral facial movements intact with normal orbicularis oris and orbicularis oculi strength 5/5</li>
          <li>VIII—hearing intact in each ear to finger rub within 5cm from the ear.</li>
          <li>IX, X—uvula elevation midline without deviation</li>
          <li>XI—strength of sternocleidomastoid and trapezius muscles 5/5 bilaterally</li>
          <li>XII—tongue midline without deviation</li>
        </ul>
        <p><strong>Motor:</strong> [Ab/normal] tone and bulk throughout</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>Deltoids</th>
              <th style={thStyle}>Biceps</th>
              <th style={thStyle}>Triceps</th>
              <th style={thStyle}>Wrist Ext</th>
              <th style={thStyle}>Wrist Fl</th>
              <th style={thStyle}>Finger Ext</th>
              <th style={thStyle}>Finger Fl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Right</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Left</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>Hip flex</th>
              <th style={thStyle}>Quads</th>
              <th style={thStyle}>Hams</th>
              <th style={thStyle}>Dorsiflex</th>
              <th style={thStyle}>Plantarflex</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Right</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Left</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
        <p><strong>Sensation:</strong> Temp/soft touch/pinprick: intact<br />Vibration: Normal</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>Biceps</th>
              <th style={thStyle}>Triceps</th>
              <th style={thStyle}>B'radialis</th>
              <th style={thStyle}>Knee</th>
              <th style={thStyle}>Ankle</th>
              <th style={thStyle}>Toes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Right</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={tdStyle}>Left</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
        <p><strong>Coordination:</strong> Finger to nose and heel to shin unremarkable. No tremors.</p>
        <p><strong>Proprioception:</strong> Negative Romberg sign.</p>
        <p><strong>Gait:</strong> Normal regular gait, tandem gait, heel walk, and toe walk.</p>
        <h4>Diagnostic Tests</h4>
        <ul>
          <li>Labs</li>
          <li>Imaging</li>
        </ul>
        <h4>Assessment</h4>
        <h4>Plan</h4>
        <p><strong>Problems (#):</strong></p>
        <ol>
          <li>Prophylaxis: Will begin Lovenox 40 mg sc qday for DVT prophylaxis</li>
          <li>Dispo: [Code Status]</li>
        </ol>
      </>
    ),
  },
  {
    title: "Physical Exam Findings",
    content: (
      <>
        <h3>Physical Exam Findings</h3>
        <ul>
          <li>
            <a href="https://youtu.be/D12DGUAwqNU?si=wMpx9Pr5QsWXdhYp&t=521" style={{ color: '#1976d2', textDecoration: 'underline' }}>Reflexes</a>
            <ul>
              <li>
                <strong>Hyperreflexia (3+ and 4+):</strong> upper motor neuron dysfunction = loss of inhibition of lower motor neuron function
                <ul>
                  <li>
                    <strong>Clonus:</strong> involuntary repetitive muscle contractions/relaxations in response to muscle stretching (Ex: stroke, multiple sclerosis)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Hyporeflexia (1+ and 0):</strong> lower motor neuron or peripheral nerve/junction dysfunction (Ex: diabetic neuropathy)
              </li>
            </ul>
          </li>
          <li>
            <a href="https://youtu.be/D12DGUAwqNU?si=owi8EQd83cAxgzP6&t=139" style={{ color: '#1976d2', textDecoration: 'underline' }}>Motor strength</a>
            <ul>
              <li>Ranges from 0-5</li>
              <ul>
                <li><strong>0:</strong> No movement, no visible or palpable contraction</li>
                <li><strong>1:</strong> Trace, slight visible contraction</li>
                <li><strong>2:</strong> Full range of movement with gravity eliminated (ex: unable to hold arm up against gravity when dropped)</li>
                <li><strong>3:</strong> Full range of movement against gravity (ex: able to hold arm up against gravity when dropped)</li>
                <li><strong>4:</strong> Full range of movement against moderate resistance</li>
                <li><strong>5:</strong> Full range of movement against full resistance</li>
              </ul>
              <li>
                <strong>Localization of weakness:</strong> Brain, spinal cord, anterior horn cell, peripheral neuropathy, radiculopathy, neuromuscular junction, muscle
              </li>
            </ul>
          </li>
          <li>
            <a href="https://youtu.be/D12DGUAwqNU?si=wxz6vOrT5Oi7Pj2H&t=79" style={{ color: '#1976d2', textDecoration: 'underline' }}>Romberg sign</a>: Patient closes their eyes, stands still; note swaying or significant leaning, but a positive Romberg is when they need to take a step
            <ul>
              <li>Proprioception/balance governed by dorsal column/medial lemniscus system</li>
              <li>Cerebellar disease will show positive sign with eyes both open and closed</li>
              <li>Possible causes: Vitamin B12 deficiency, tertiary syphilis, vestibular dysfunction, stroke, neuropathy</li>
            </ul>
          </li>
          <li>
            <strong>Meningeal signs:</strong> Presence of meningitis or subarachnoid hemorrhage
            <ul>
              <li><strong>Nuchal rigidity:</strong> passive flexion of neck → pain and resistance to movement</li>
              <li><strong>Kernig sign:</strong> While lying supine, passive knee extension and leg flexion → pain</li>
              <li><strong>Brudzinski sign:</strong> passive neck flexion → reflex knee flexion while supine</li>
            </ul>
          </li>
          <li>
            <a href="https://youtu.be/Ht1iQg3Kv3Q?si=sqwcsx6tyb3U2l31&t=43" style={{ color: '#1976d2', textDecoration: 'underline' }}>CN abnormalities/signs</a>
            <ul>
              <li>CN I- Anosmia</li>
              <li>CN II- Visual field defects, papilledema</li>
              <li>CN III, IV, VI- Ptosis, strabismus, diplopia</li>
              <li>CN V- Facial numbness, weakness</li>
              <li>CN VII- Facial asymmetry, weakness</li>
              <li>CN VIII- Hearing loss, vertigo</li>
              <li>CN IX and X- Dysphagia, hoarseness</li>
              <li>CN XI- Weakness in trapezius and SCM</li>
              <li>CN XII- Tongue deviation, atrophy</li>
            </ul>
          </li>
          <li>
            <strong>Additional signs:</strong>
            <ul>
              <li>
                <strong>Babinski Sign:</strong> Stroke anterior aspect of sole of foot; upward toe movement (extension) indicates UMN lesion
              </li>
              <li>
                <strong>Hoffman’s Reflex:</strong> flick nail of middle finger; thumb flexion indicates UMN lesion
              </li>
              <li>
                <strong>Lhermitte’s Sign:</strong> Flex neck, positive result = shock sensation down the spine; cervical spinal cord pathology (classically multiple sclerosis)
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Stroke",
    content: (
      <>
        <h3>Work-Up Algorithm (Emergency Department and Inpatient)</h3>
        <p>
          When a patient presents with suspected stroke, timely assessment and intervention are crucial. The work-up begins with a stroke alert. The following algorithm can be employed:
        </p>
        <h4>NIH Stroke Scale (NIHSS)</h4>
        <ul>
          <li>Download NIHSS App! Refer to General section under apps</li>
          <li>
            Total NIHSS score aids in triaging treatment decisions, such as eligibility for tPA/TNK or mechanical thrombectomy, and provides a baseline for monitoring recovery.
          </li>
        </ul>
        <h4>Relevant Neuro Exam Findings</h4>
        <ol>
          <li>
            <strong>Purely Cortical Findings in NIH Stroke Scale</strong>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Visual Field Loss</th>
                  <th style={thStyle}>Aphasia</th>
                  <th style={thStyle}>Neglect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Associated with large vessel occlusions (LVO) and embolic infarcts, often affecting the middle cerebral artery (MCA). Think of a VAN on the brain:</td>
                  <td style={tdStyle}>MCA: Lower face, arm weakness</td>
                  <td style={tdStyle}>ACA: Leg weakness<br />PCA: Homonymous visual field deficit</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <strong>Lacunar Syndromes</strong>
            <p>Associated with small vessel disease, usually due to chronic hypertension and diabetes.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Syndrome</th>
                  <th style={thStyle}>Localization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Pure Motor Hemiparesis</td>
                  <td style={tdStyle}>PLIC of brain</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Ataxic Hemiparesis</td>
                  <td style={tdStyle}>Both corticospinal tract & Cerebellum</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Pure Sensory Stroke</td>
                  <td style={tdStyle}>Thalamus</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Dysarthria-Clumsy Hand Syndrome</td>
                  <td style={tdStyle}>Basal ganglia or Pons</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Sensorimotor Stroke</td>
                  <td style={tdStyle}>Corona Radiata or Thalamus</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
        <h4>MRIs for strokes</h4>
        <p><em>*Need to see correlates between DWI and ADC for acute stroke</em></p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, textAlign: 'center' }}>Time</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>DWI</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>ADC</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>T2 Flair</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Purpose</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Highly sensitive for detecting acute ischemic strokes, identifying restricted diffusion in affected brain tissue.</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Used with DWI to confirm ischemia.</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Particularly helpful for visualizing chronic changes and ruling out other pathologies.</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Anomaly</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Hyperintense (white)</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Hypointense (dark)</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Hyperintense (white)</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Hyperacute &lt;6h</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>-</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>-</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Acute &lt;7d</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>-</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Subacute &lt;10-14d</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Pseudo normalization</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Chronic &gt;14d</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>-</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>+</td>
            </tr>
          </tbody>
        </table>
        {/* Anatomy Section */}
        <h4>Anatomy</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1em' }}>
          <div style={{ width: '30%', textAlign: 'center' }}>

            <img src="NeuroAnatomy1.png" alt="Anatomy Photo 1" style={{ maxWidth: '100%' }} />
          </div>
          <div style={{ width: '30%', textAlign: 'center' }}>

            <img src="NeuroAnatomy2.png" alt="Anatomy Photo 2" style={{ maxWidth: '100%' }} />
          </div>
          <div style={{ width: '30%', textAlign: 'center' }}>

            <img src="NeuroAnatomy3.png" alt="Anatomy Photo 3" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <h4>Rule of 4’s</h4>
        <ul>
          <li>
            <strong>Brainstem</strong>
            <ul>
              <li>4 cranial nerve nuclei (except midbrain)</li>
              <li>4 motor tracts</li>
              <li>4 sensory tracts</li>
              <li>4 general functions: Sensory, motor, cranial nerve, and arousal</li>
            </ul>
          </li>
          <li>
            <strong>Cranial nerves</strong>
            <ul>
              <li>CN III, VII, IX, X: Contain parasympathetic fibers</li>
            </ul>
          </li>
          <li>
            <strong>Blood supply</strong>
            <ul>
              <li>2 internal carotid arteries and 2 vertebral arteries</li>
            </ul>
          </li>
        </ul>
        <h4>Types of Strokes (Ischemic and Hemorrhagic)</h4>
        <h5>Ischemic Stroke (Peaks at onset and plateaus/improves over time)</h5>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, textAlign: 'center' }}>TOAST Criteria</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Large Vessel Occlusion (LVO)</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Cardioembolic (CE)</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Small Vessel Occlusion (SVO)</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Other Determined Etiology (ODE)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Etiology</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Atherosclerosis → Stenosis or occlusion of major brain arteries</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Emboli from heart → Strokes</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Hyaline arteriolosclerosis → Small vessel disease → Lacunar infarcts</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Other!</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Risk Factors</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>HTN, DM, HLD</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>A-fib, recent MI, and other CVD</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Chronic HTN, DM</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Nonatherosclerotic vasculopathies, Hypercoagulable states, Hematologic disorders</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Work-Up</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>1) MRI Brain<br />2) CTA/MRA head/neck</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>1) MRI Brain<br />2) Echo/Telemetry/loop monitor/Holter monitor</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>1) MRI Brain<br />2) CTA/MRA head/neck</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>1) MRI Brain<br />2) ESR<br />3) Hypercoagulability workup<br />4) CSF if concern for vasculitis</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>General Work-Up</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>HgbA1C, Lipid panel, RPR, TSH, Vitamin B12, HIV</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Secondary Prevention</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>For ≤90 days:<br />1) Aspirin (1st line)<br />2) Clopidogrel or Aspirin + Dipyridamole</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>For lifelong:<br />1) Warfarin or DOACs decide using CHA2DS2-VASc within 4-14 days</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>For 1-3 months:<br />1) Aspirin + Clopidogrel<br />2) Aspirin + Dipyridamole</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Depends on underlying condition but can usually start aspirin</td>
            </tr>
          </tbody>
        </table>
        <h5>Hemorrhagic Stroke (Has yet to peak and have progressively worse symptoms)</h5>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, textAlign: 'center' }}>Type</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Intracerebral Hemorrhage</th>
              <th style={{ ...thStyle, textAlign: 'center' }}>Subarachnoid Hemorrhage (SAH)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Definition</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Bleeding within the brain parenchyma</td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Bleeding into the subarachnoid space (between arachnoid and pia mater)</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Etiologies</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                • Hypertension (most common cause)<br />
                • Cerebral Amyloid angiopathy<br />
                • Trauma<br />
                • Hemorrhagic transformation of ischemic stroke
              </td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                • Ruptured berry aneurysms (most common cause)<br />
                • AVM<br />
                • Trauma<br />
                • Mycotic aneurysms
              </td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Location</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                • Deep brain structures (basal ganglia, thalamus, pons, cerebellum)<br />
                • Lobar regions (more common with cerebral amyloid angiopathy)
              </td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>Circle of Willis (common for aneurysms)</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Classic Presentation</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                Sudden onset of focal neurological deficits (e.g., hemiparesis) with Headache, nausea, vomiting and decreased level of consciousness (LOC)
              </td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                “Thunderclap headache” (sudden, severe, worst headache of life) with Photophobia, neck stiffness (meningismus) and possible LOC
              </td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Diagnostic Studies</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                1) Non-contrast CT: Hyperdense area in brain parenchyma<br />
                2) MRI (if needed): More detailed for chronic hemorrhages<br />
                3) CT Angiography: Identify underlying vascular malformations or aneurysms
              </td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                1) Non-contrast CT: Blood visible in the subarachnoid space (cisterns, fissures)<br />
                2) Lumbar puncture: Xanthochromia (if CT negative and high suspicion)<br />
                3) CT Angiography/MR Angiography: For aneurysm or AVM detection
              </td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }}><strong>Management</strong></td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                • Blood pressure control (e.g., IV labetalol or nicardipine)<br />
                • Reverse anticoagulation (if on anticoagulants)<br />
                • ICP management (mannitol, hypertonic saline)<br />
                • Elevate head of bed<br />
                • Neurosurgical consultation for possible evacuation
              </td>
              <td style={{ ...tdStyle, textAlign: 'center' }}>
                • Immediate neurosurgical consultation<br />
                • Manage BP (lower cautiously if SBP &gt; 160)<br />
                • Endovascular or surgical intervention for aneurysm (clipping/coiling)<br />
                • Nimodipine for vasospasm prophylaxis (will show in the next few days so it’s important to prevent!)
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors for Stroke</h4>
        <strong>Modifiable Factors</strong>
        <ul>
          <li>Hypertension (HTN)</li>
          <li>Diabetes Mellitus (DM)</li>
          <li>Hyperlipidemia (HLD)</li>
          <li>Smoking</li>
          <li>Obesity</li>
          <li>Sedentary Lifestyle</li>
        </ul>
        <strong>Non-Modifiable Factors</strong>
        <ul>
          <li>Age (Risk increases w/ age)</li>
          <li>Gender (higher in Males)</li>
          <li>FMHx of stroke</li>
          <li>Previous stroke or TIA</li>
        </ul>
        <h4>Post-Stroke Care</h4>
        <strong>Risk Factor Modification</strong>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Management of HTN</th>
              <th style={thStyle}>Management of DM</th>
              <th style={thStyle}>Management of HLD</th>
              <th style={thStyle}>Depression Screen</th>
              <th style={thStyle}>Carotid Stenosis</th>
              <th style={thStyle}>OSA</th>
              <th style={thStyle}>Dietary Modification</th>
              <th style={thStyle}>Physical Activity</th>
              <th style={thStyle}>Smoking cessation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>&lt;130/80</td>
              <td style={tdStyle}>Diabetes screening/Control</td>
              <td style={tdStyle}>LDL&gt;70</td>
              <td style={tdStyle}>Refer to Psych’s MDD Section</td>
              <td style={tdStyle}>Carotid endarterectomy for ≥70% stenosis w/ sx or ≥80% w/o sx</td>
              <td style={tdStyle}>Screening/Treatment</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
        <strong>Rehabilitation</strong>
        <p>
          Early and intensive rehabilitation involving physical, occupational, and speech therapy is essential based on the patient's deficits.<br />
          Multidisciplinary teams should work collaboratively to create personalized rehabilitation plans tailored to each patient's needs.
        </p>
      </>
    ),
  },
  {
    title: "Altered Mental Status",
    content: (
      <>
        <h3>MIST Acronym</h3>
        <p>
          This framework helps guide the differential diagnosis of altered mental status (AMS). Helpful for both Neuro and IM!
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>M<br />(Mental Status Changes)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>I<br />(Infections)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>S<br />(Structural Abnormalities)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>T<br />(Toxins)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                • Psychiatric disorders<br />
                • Cognitive decline<br />
                • Primary neurological issues (seizures)
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                • Meningitis<br />
                • Encephalitis<br />
                • Systemic infections (sepsis)
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                • Stroke<br />
                • Trauma<br />
                • Tumors
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <strong>Metabolic imbalances:</strong><br />
                • Hypoglycemia<br />
                • Electrolyte disturbances<br />
                <strong>Drug-related causes:</strong><br />
                • Overdose<br />
                • Withdrawal<br />
                Dementia
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Dementia</h3>
        <p>
          MoCA Score: The Montreal Cognitive Assessment (MoCA) is a brief 30-point test used to assess cognitive function. It screens for cognitive impairment and helps differentiate between normal aging, mild cognitive impairment, and dementia.
        </p>
        <h4>How to Differentiate Between Normal Aging, Mild Cognitive Impairment (MCI), and Dementia</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Normal Aging</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>MCI</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Dementia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Minor memory lapses (forgetting names but remembering them later) BUT daily functioning remains intact.
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Noticeable cognitive decline, but not severe enough to interfere with daily life.<br />
                <u>Patients at higher risk of progressing to dementia.</u>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Significant cognitive decline that interferes with daily activities and is associated with issues in memory, language, judgment, and problem-solving.
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>MOCA &gt; 26</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>18 ≤ MOCA ≤ 25</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>MOCA ≤ 17</td>
            </tr>
          </tbody>
        </table>

        <h4>Ddx for Dementia</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Timeline</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Rapidly Progressing</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Stepwise Progressing</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Gradually Progressing</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>EXTRAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Name</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>CJD<br />Autoimmune encephalitis</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Vascular Dementia</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Frontotemporal Dementia<br />Lewy Body Dementia<br />Alzheimer’s Disease</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Reversible Causes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Definition</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Rapid, fatal, incurable<br />
                Autoimmune condition causing brain inflammation
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Reduced blood flow to the brain
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Δ in behavior, personality, and/or language<br />
                A) Fluctuating cognition<br />
                B) Visual hallucination<br />
                C) Motor symptoms (Parkinsonism, REM Behavior Disorder)<br />
                A) Memory loss<br />
                B) Disorientation<br />
                C) Cognitive decline
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                A) Hypothyroidism<br />
                B) B12 deficiency<br />
                C) Normal Pressure hydrocephalus<br />
                Symptoms improve with Rx
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Etiology</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Misfolded prions<br />
                Immune system attacking CNS (Search for malignancy)
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Strokes<br />
                Chronic small vessel disease
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Degeneration of frontal and temporal lobes<br />
                Abnormal protein deposits (Lewy bodies) in brain<br />
                Amyloid plaques and neurofibrillary tangles
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Symptoms improve with Rx
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Coma</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Important Parts of the History</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>How to do a Physical Exam</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Brain Death Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Recent events<br />
                Trauma, seizures, drug use, alcohol, infections<br />


              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Assess level of consciousness using the Glasgow Coma Scale (GCS)<br />

              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Absent brainstem reflexes (pupillary, corneal, gag reflexes).<br />



              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <strong>Past medical history</strong><br />
                Stroke, seizures, metabolic disorders<br />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Pupillary reflexes, corneal reflexes, oculovestibular reflexes, and cough/gag reflex to assess brainstem function.<br />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Apnea test: Patient does not breathe when off the ventilator with a rise in CO2<br />
              </td>

            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Medications or toxic exposures<br />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Motor response: Posturing (decerebrate vs decorticate) can indicate level of brain injury
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                No motor responses to painful stimuli.<br />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Recent travel (Increase risk for certain infections)
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>

              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Confirmatory tests (cerebral blood flow study, EEG) may be used in certain cases.<br />
                Cerebral blood flow test is the best one.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Delirium</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th colSpan={6} style={{ border: '1px solid black', padding: '8px' }}>Definition</th>
            </tr>
            <tr>
              <td colSpan={6} style={{ border: '1px solid black', padding: '8px' }}>
                Delirium is an acute confusional state marked by a fluctuating course, inattention, disorganized thinking, and altered consciousness. It is often reversible if the underlying cause is addressed.
              </td>
            </tr>
            <tr>
              <th colSpan={6} style={{ border: '1px solid black', padding: '8px' }}>Risk Factors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Advanced Age</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Pre-Existing Cognitive Impairment (Dementia)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Infections (UTI/Pneumonia)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Polypharmacy</td>
              <th style={{ border: '1px solid black', padding: '8px' }}>Hospitalization (particularly ICU stays)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Metabolic disturbances (Electrolyte abnormalities, Hypoglycemia)</th>
            </tr>

            <tr>
              <td colSpan={6} style={{ border: '1px solid black', padding: '8px' }}><center><strong>Management</strong></center></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Identify and treat the underlying cause (infection, metabolic imbalance, etc.).</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Minimize medications that could contribute to confusion (e.g., sedatives, anticholinergics).</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Provide orientation cues, ensure adequate hydration, and maintain a regular sleep-wake cycle.</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Non-pharmacologic interventions (family visits, reorientation techniques).</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Medications such as antipsychotics (e.g., low-dose haloperidol) may be used cautiously if agitation is severe.</td>
            </tr>
          </tbody>
        </table>


        <h3>Pseudodementia</h3>
        <p>
          Pseudodementia refers to cognitive impairment that mimics dementia but is actually due to an underlying mood disorder, often depression (refer to psych’s MDD Section). Patients with pseudodementia are more aware of their cognitive decline compared to true dementia. Treatment involves addressing depression, which can result in the reversal of cognitive symptoms.
        </p>

        <h3>UTI (Urinary Tract Infection)</h3>
        <p>
          UTIs are a common cause of acute mental status changes, especially in the elderly, often presenting with confusion, agitation, or delirium instead of the classic symptoms of dysuria and fever. It is important to consider a UTI in the differential for altered mental status, particularly in elderly patients.
        </p>

        <h3>Normal Pressure Hydrocephalus (NPH)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Symptoms (Classic Triad)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Diagnostic Test</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Management</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Gait Disturbances (Magnetic gait)<br />
                Urinary Incontinence<br />
                Cognitive Dysfunction
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Suspected by imaging (MRI/CT showing enlarged ventricles without cortical atrophy)<br />
                Improvement in gait with large-volume lumbar puncture
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                Ventriculoperitoneal shunting
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Pro Tip: Observation over History</h4>
        <p>
          When patients are unable to communicate clearly, observation becomes key. Physical clues such as tremors, facial expressions, and involuntary movements (e.g., half- or whole-mouth opening) can help in diagnosing neurological conditions. Always assess for changes in physical activity even when a patient cannot provide a coherent history. The fine details of physical movement might reveal underlying neurological disorders even without a detailed verbal history.
        </p>
      </>
    ),
  },
  {
    title: "Headache",
    content: (
      <>
        <h3>Headache Evaluation & Treatment Table</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Step1: Rule out secondary headache</th>
              <th style={thStyle}>Step2: Distinguish headache type</th>
              <th style={thStyle}>Step3: Prescribe the right treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><br />Infection or Fever<br />• Fever, sore throat, runny nose?<br />• Recent respiratory/sinus infection?</td>
              <td rowSpan={2} style={tdStyle}><strong>Tension Headache</strong><br />• Tight band/rubber band feeling<br />• Neck/shoulder tension<br />• Lasts 30 min to several hours</td>
              <td rowSpan={2} style={tdStyle}><strong>Tension Headache</strong><br />Treatment: Tylenol + NSAIDs<br />Prevention: TCAs, SSRIs, treat underlying conditions</td>
            </tr>
            <tr>
              <td style={tdStyle}>Trauma<br />• Recent head injury/trauma?<br />• Headache after fall/accident?</td>



            </tr>
            <tr>
              <td style={tdStyle}>Medication/Substance Use<br />• New/changed medications?<br />• Caffeine, alcohol, drugs?<br />• Anticoagulants/antiplatelets?</td>
              <td rowSpan={2} style={tdStyle}><strong>Cluster Headache</strong><br />• Occurs repeatedly<br />• Near eye, redness, tearing, drooping<br />• Unilateral, periorbital pain</td>
              <td rowSpan={2} style={tdStyle}><strong>Cluster Headache</strong><br />• Severe, unilateral pain<br />• Associated with autonomic symptoms (tearing, nasal congestion)<br />• Occurs in clusters (weeks to months)</td>

            </tr>
            <tr>
              <td style={tdStyle}>Neurological Symptoms<br />• Weakness, numbness, vision changes, speech difficulty?<br />• Seizures or loss of consciousness?</td>


            </tr>
            <tr>
              <td style={tdStyle}>Systemic Symptoms<br />• Weight loss, night sweats, fatigue?<br />• Other new/unusual symptoms?</td>
              <td rowSpan={2} style={tdStyle}>Migraine<br />Ask POUND criteria (Needs 4/5):<br />Pulsatile, Photo/phonophobia, Onset 4-72h, Unilateral, Nausea/Vomiting, Disabling<br />Migraine with Aura/Aura alone: POUND + reversible neuro symptoms<br />Menstrual Migraine: POUND + timing with menses</td>
              <td rowSpan={2} style={tdStyle}><strong>Inpatient Treatment:</strong><br />
                STEP 1: IV fluids, NSAIDs, antiemetic<br />
                STEP 2: Add triptans & dihydroergotamine (DHE) + metoclopramide if needed<br />
                STEP 3: IV Magnesium (esp for aura), dexamethasone<br />
                <strong>Prevention:</strong><br />
                Antihypertensives (βB or CCB), Antidepressants (TCA or SNRI), Anticonvulsants (topiramate/valproic acid), CGRP monoclonal antibodies, Botox, Lifestyle modifications</td>

            </tr>
            <tr>
              <td style={tdStyle}>History of Medical Conditions<br />• High blood pressure, cancer, autoimmune disease?<br />• Brain tumor or aneurysm?</td>


            </tr>


            <tr>
              <td colSpan={3} style={tdStyle}><h4>Indications for CT/MRI</h4>
                <ul>
                  <li>Thunderclap headache: sudden and severe headache with focal deficits, altered mental status (AMS), or weight loss</li>
                  <li>New onset headache in patients age 50+</li>
                  <li>Unresponsive to standard treatments, sudden change in headache pattern, or focal neurological deficits</li>
                </ul></td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: "Seizures",
    content: (
      <>
        <h3>Classification of Seizures</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Type of Seizure</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Focal seizures</td>
              <td style={tdStyle}>Originate from one hemisphere or a specific area of the brain<br />May evolve into generalized seizures</td>
            </tr>
            <tr>
              <td style={tdStyle}>Focal aware (simple)</td>
              <td style={tdStyle}>Awareness preserved<br />Patient remains conscious</td>
            </tr>
            <tr>
              <td style={tdStyle}>Focal impaired awareness (complex)</td>
              <td style={tdStyle}>Awareness impaired<br />Patient has altered consciousness or confusion</td>
            </tr>
            <tr>
              <td style={tdStyle}>Generalized seizures</td>
              <td style={tdStyle}>Involves both hemispheres of the brain from onset<br />Patient has impaired or loss of consciousness</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tonic-clonic (grand mal)</td>
              <td style={tdStyle}>Muscle stiffening (tonic) followed by rhythmic jerking (clonic)<br />Sudden fall, loss of consciousness, post-ictal confusion</td>
            </tr>
            <tr>
              <td style={tdStyle}>Absence (petit mal)</td>
              <td style={tdStyle}>Brief periods of staring or loss of awareness, common in children, often unnoticed</td>
            </tr>
            <tr>
              <td style={tdStyle}>Myoclonic</td>
              <td style={tdStyle}>Sudden, brief jerks or twitches of muscles</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tonic</td>
              <td style={tdStyle}>Sudden muscle stiffening, may cause falling</td>
            </tr>
            <tr>
              <td style={tdStyle}>Clonic</td>
              <td style={tdStyle}>Rhythmic jerking</td>
            </tr>
            <tr>
              <td style={tdStyle}>Atonic</td>
              <td style={tdStyle}>Sudden loss of muscle tone causing collapse, “drop attacks”</td>
            </tr>
          </tbody>
        </table>
        <p><strong>NOTE:</strong> Most adult-onset generalized seizures are focal in onset with subsequent secondary generalization.</p>

        <h4>Common Causes (VITAMINS mnemonic)</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>Vascular</td><td style={tdStyle}>AVM, stroke, hemorrhage</td></tr>
            <tr><td style={tdStyle}>Infection</td><td style={tdStyle}>Meningitis, encephalitis</td></tr>
            <tr><td style={tdStyle}>Trauma</td><td style={tdStyle}>TBI, motor vehicle accident</td></tr>
            <tr><td style={tdStyle}>Autoimmune</td><td style={tdStyle}>Lupus, vasculitis</td></tr>
            <tr><td style={tdStyle}>Metabolic</td><td style={tdStyle}>Na, Ca, Mg, O2, glucose</td></tr>
            <tr><td style={tdStyle}>Ingestion/Idiopathic</td><td style={tdStyle}>Alcoholism, drug withdrawal, congenital</td></tr>
            <tr><td style={tdStyle}>Neoplasm</td><td style={tdStyle}>Brain tumor</td></tr>
            <tr><td style={tdStyle}>pSychiatric</td><td style={tdStyle}>Psychogenic nonepileptic seizure</td></tr>
          </tbody>
        </table>

        <h4>Diagnostic Workup</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Labs</th>
              <th style={thStyle}>EEG</th>
              <th style={thStyle}>Imaging</th>
              <th style={thStyle}>Lumbar Puncture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                CBC<br />
                Electrolytes<br />
                Calcium<br />
                Fasting glucose<br />
                LFTs<br />
                Renal panel<br />
                RPR<br />
                ESR<br />
                Toxicology screen
              </td>
              <td style={tdStyle}>
                Focal: Epileptogenic focus<br />
                Absence: 3 Hz spike-and-wave<br />
                Tonic-clonic: 10 Hz tonic, slow waves clonic<br />
                Infantile spasm: hypsarrhythmia<br />
                If normal → consider psychogenic nonepileptic seizure
              </td>
              <td style={tdStyle}>
                Concern for stroke, tumor, malformations, focal seizure<br />
                CT or MRI head
              </td>
              <td style={tdStyle}>
                If concerned for meningitis or encephalitis
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Antiseizure Medications</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em', fontSize: '0.95em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Medication</th>
              <th style={thStyle}>Focal</th>
              <th style={thStyle}>Generalized</th>
              <th style={thStyle}>Absence</th>
              <th style={thStyle}>Status Epilepticus</th>
              <th style={thStyle}>Mechanism</th>
              <th style={thStyle}>Major Side Effects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Carbamazepine</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Na+ channels</td>
              <td style={tdStyle}>SIADH, blood dyscrasias, diplopia, ataxia, DRESS, autoinduction, SJS</td>
            </tr>
            <tr>
              <td style={tdStyle}>Gabapentin</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Ca2+ channels</td>
              <td style={tdStyle}>Sedation, ataxia</td>
            </tr>
            <tr>
              <td style={tdStyle}>Lacosamide</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Na+ channels</td>
              <td style={tdStyle}>PR interval prolongation</td>
            </tr>
            <tr>
              <td style={tdStyle}>Oxcarbamazepine</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Na+ channels</td>
              <td style={tdStyle}>Blood dyscrasias, diplopia, ataxia, DRESS, hyponatremia, SJS (Han Chinese)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vigabatrin</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Increases GABA</td>
              <td style={tdStyle}>Permanent vision loss</td>
            </tr>
            <tr>
              <td style={tdStyle}>Phenytoin, fosphenytoin</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>Blocks Na+ channels</td>
              <td style={tdStyle}>Nystagmus, peripheral neuropathy, teratogenic, DRESS, osteopenia</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ethosuximide</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks T-type Ca2+ channels</td>
              <td style={tdStyle}>Fatigue, GI distress, headache, SJS</td>
            </tr>
            <tr>
              <td style={tdStyle}>Lamotrigine</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Na+ channels</td>
              <td style={tdStyle}>SJS (very slow titration)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Levetiracetam</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>SV2A receptor blocker</td>
              <td style={tdStyle}>Neuropsychiatric changes, drowsiness</td>
            </tr>
            <tr>
              <td style={tdStyle}>Phenobarbital</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>Increase GABAA action</td>
              <td style={tdStyle}>Sedation, cardiorespiratory depression</td>
            </tr>
            <tr>
              <td style={tdStyle}>Topiramate</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Blocks Na+ channels, increases GABA action</td>
              <td style={tdStyle}>Sedation, cognitive slowing, renal stones</td>
            </tr>
            <tr>
              <td style={tdStyle}>Valproate</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>Blocks Na+ channels, increases GABA concentration</td>
              <td style={tdStyle}>Hepatotoxicity, teratogenic, pancreatitis, GI distress, hyperammonemia</td>
            </tr>
            <tr>
              <td style={tdStyle}>Benzodiazepines</td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}></td>
              <td style={tdStyle}>X</td>
              <td style={tdStyle}>Increase GABAA action</td>
              <td style={tdStyle}>Sedation, respiratory depression</td>
            </tr>
          </tbody>
        </table>

        <h4>Nonpharmacologic Therapies</h4>
        <ul>
          <li>For refractory epilepsy, consider epilepsy surgery (resection of epileptogenic cortex).</li>
          <li>Other options: vagus nerve stimulation, responsive neurostimulation, deep brain stimulation.</li>
        </ul>

        <h4>Status Epilepticus</h4>
        <p>
          Epilepsy: recurrent, unprovoked seizures of any type.<br />
          <strong>Status epilepticus:</strong> continuous, prolonged seizures &gt;5 min or ≥2 seizures without return to baseline &lt;30 min. <span style={{ color: 'red' }}>Medical emergency!</span>
        </p>
        <h5>Treatment for Generalized Convulsive Status Epilepticus</h5>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>First Steps</th>
              <th style={thStyle}>0-10 Minutes</th>
              <th style={thStyle}>10-30 Minutes</th>
              <th style={thStyle}>&gt;30 Minutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Maintain ABC’s<br />Give supplemental O2 if needed</td>
              <td rowSpan={3} style={tdStyle}>Administer first-line agents<br />IV benzodiazepine (lorazepam or diazepam) within 0-5 min, repeat at 5-10 min</td>
              <td rowSpan={3} style={tdStyle}>Administer second-line agents<br />IV fosphenytoin, valproate, levetiracetam</td>
              <td style={tdStyle}>Begin IV anesthesia (propofol, pentobarbital, or midazolam) + different second-line agent<br /></td>
            </tr>
            <tr>
              <td style={tdStyle}>Obtain IV access, vital signs, seizure lab workup concurrently</td>
              <td rowSpan={2} style={tdStyle}>Intubate, transfer to ICU</td>
            </tr>
            <tr>
              <td style={tdStyle}>Administer IV thiamine and glucose</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
    {
    title: "Tips for Success",
    content: (
      
        <><h3>Tips for Success</h3><ul>
        <li>
          <strong>Nikita</strong>
          <ul>
            <li>VA Inpatient: Mostly strokes. Know the stroke algorithm and management research; often asked about this.</li>
            <li>VA Consults: Go on stroke alerts. Help by doing the NIHSS on Med Calc during PE exam. See a variety of conditions—important to come up with a differential. Learn brain death criteria.</li>
            <li>TCH Inpatient: Mostly seizures. Family-centered rounds—acknowledge everyone and share the plan. Explain the plan to teenagers for better outcomes and rapport.</li>
          </ul>
        </li>
        <li>
          <strong>Hasham</strong>
          <ul>
            <li>Overall advice: Practice reading MRIs and CTs; struggled and it would have helped. Review strokes, headaches, seizures (especially peds neuro), and neuro exam localizations.</li>
            <li>VA Inpatient: Patient load varies. Typical cases: stroke, vision problems, neuropathies, and sometimes psych patients. Physical exam is emphasized—tells you a lot. You’ll get the hang of it quickly.</li>
            <li>VA Consults: Similar to inpatient; teams may overlap. ICU calls common, some patients in comas. Neuro exam for comatose patients is difficult—ask your resident. Cases include meningitis, headaches, vision problems. Always start your presentation with the reason for consult.</li>
            <li>VA Clinic: Outpatient side—headaches and neuropathies. Quicker pace, lower acuity. Focus on what you can help most with during the visit.</li>
            <li>TCH Inpatient: No stroke or headache patients in peds neuro. Expect epilepsy, seizures (keep febrile seizures in mind), PNES, genetic disorders. Work with patients and parents. Ask for videos of seizures. Sit eye level with parents, joke/play with children. Reading EEGs could be a cool goal.</li>
          </ul>
        </li>
        <li>
          <strong>Tobi</strong>
          <ul>
            <li>General: Practice eliciting reflexes as much as possible; you’ll improve quickly. If unsure about a neuro exam finding, look for patients with those findings—attendings/residents will point them out, but be independent.</li>
            <li>St. Lukes ICU: Little patient interaction; focus on physical exam and labs. Patients are complicated—present by individual systems. Computers are limited; bring your own laptop for chart review if possible.</li>
          </ul>
        </li>
        <li>
          <strong>Jackie</strong>
          <ul>
            <li>General advice: Do a complete physical exam! Ask attendings to show you how to assess reflexes, especially Achilles. For suspected myasthenia gravis, assess fatiguability by repeating strength tests.</li>
            <li>VA Inpatient: Primarily strokes and rare autoimmune neuro disorders. Fewer patients, so more time with each patient and their families.</li>
            <li>VA Consults: Similar to inpatient. Start presentations with the consult reason and focus on it.</li>
            <li>TCH Consults: Saw seizures, rare genetic disorders, headache consults. For pediatric exams, ask residents for help. Be flexible—play with or observe children. Get collateral from parents about milestones, regression, or new concerns.</li>
          </ul>
        </li>
        <li>
          <strong>Luay</strong>
          <ul>
            <li>VA Inpatient: Low patient flow, but complex cases beyond strokes (e.g., neuropathies). Be prepared for psych patients—neurology and psych are closely related. Physical exam is an art, especially with altered mental status. Engage in uncommon exams.</li>
            <li>VA Consult: Mostly ICU patients with stroke or IM patients with headaches/diplopia. Learn headache red flags for management. Always include urgent causes in your differential and state if you can rule them out.</li>
            <li>TCH Consults: Lots of “spasm” consults—could be normal baby movements or seizures. Consider febrile seizures and spot EEG if concerned. Ask for videos—parents often record episodes. Be active and know when you’re no longer needed. Start presentations with WHY you’re consulted and focus on active management.</li>
          </ul>
        </li>
      </ul></>
    ),
  },
]

const Neurology = () => {
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
      title="Neurology"
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

export default Neurology;