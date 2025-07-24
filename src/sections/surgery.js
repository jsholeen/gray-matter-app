import SectionTemplate from '../components/SectionTemplate';
import { thStyle, tdStyle } from '../styles/styles';
import React, { useState, useRef } from 'react';

const sections = [
   {
    title: "General HPI Presentation",
    content: (
      <div>
        <h3>General HPI Presentation</h3>
        <p>
          Refer to General Section’s <strong>How to Structure a Problem-Based Oral Presentation in Clinic</strong> with the following changes:
        </p>
        <h4>History</h4>
        <ul>
          <li>
            If after a surgery, indicate the <strong>post-op day</strong> (POD) if within 1 month at the very start of the presentation so the surgeon can form a differential at the start.
          </li>
        </ul>
        <h4>Labs</h4>
        <ul>
          <li>Always present pertinent labs. Key ones for surgery:</li>
          <ul>
            <li><strong>Electrolytes:</strong> Potassium ≥ 4, Phosphate ≥ 3, and Magnesium ≥ 2</li>
            <li><strong>CBC:</strong> Check for leukocytosis, especially for post-op patients</li>
            <li><strong>Coag Panel:</strong> Check for INR elevation and thrombocytopenia</li>
          </ul>
        </ul>
        <h4>Imaging</h4>
        <ul>
          <li>
            Review the images yourself first, read the radiologist’s impressions, recheck, and have the images ready to show.
          </li>
        </ul>
        <h4>Assessment/Plan Template</h4>
        <p>
          Patient is a [age] year-old [M/F], POD # [if applicable], with [acute/subacute/chronic] [chief complaint] with [physical exam findings/pertinent diagnostic study findings].
        </p>
        <p><strong>Differential diagnosis:</strong></p>
        <p><strong>Plan:</strong></p>
        <ul>
          <li>Diet: NPO?</li>
          <li>IV fluids?</li>
          <li>Pain management</li>
          <li>Further diagnostic testing (imaging, labs)</li>
          <li>Consultations (neurosurgery, IR)</li>
          <li>Preparation/consideration for surgery</li>
          <li>Plan for post-op management</li>
        </ul>
      </div>
    ),
  },
    {
    title: "Tertiary Trauma Survey (BT ACS/Trauma Shift)",
    content: (
      <div>
        <h3>Tertiary Trauma Survey <span style={{ fontWeight: 400 }}>(Only for BT ACS and TRAUMA SHIFT but good to know for shelf purposes)</span></h3>
        <p>
          Patient is a [age] year-old [male/female] hospitalized with [admit diagnosis].
        </p>
        <h4>Mechanism of trauma:</h4>
        <h4>History of Present Illness:</h4>
        <ul>
          <li>Initial GCS:</li>
          <li>Past medical history:</li>
          <li>Past surgical history:</li>
          <li>Social history:</li>
          <li>Pre-injury medications:</li>
          <li>Allergies:</li>
          <li>ROS:</li>
          <ul>
            <li>Headache</li>
            <li>Neck pain</li>
            <li>Visual changes</li>
            <li>Change in hearing</li>
            <li>Difficulty speaking or swallowing</li>
            <li>Other HEENT</li>
            <li>Chest pain</li>
            <li>Shortness of breath</li>
            <li>Other cardiovascular/respiratory complaints</li>
            <li>Abdominal pain</li>
            <li>Nausea/vomiting</li>
            <li>Spine or flank pain</li>
            <li>Other GI/GU complaints</li>
            <li>Female patient</li>
            <li>Arm complaints</li>
            <li>Leg complaints</li>
            <li>Paresthesia</li>
            <li>Other complaints</li>
          </ul>
        </ul>
        <h4>Physical Exam:</h4>
        <ul>
          <li>Vital signs</li>
          <li>Patient intubated?</li>
          <li>Patient sedated/decreased mental status?</li>
          <li>Awake/alert/oriented x?</li>
          <li>GCS Total:
            <ul>
              <li>Eye opening</li>
              <li>Motor response</li>
              <li>Verbal response</li>
            </ul>
          </li>
          <li>Scalp</li>
          <li>Ears</li>
          <li>Eyes</li>
          <li>Nose</li>
          <li>Mouth/Oral Pharynx</li>
          <li>Face</li>
          <li>Soft Tissue Neck</li>
          <li>C-spine</li>
          <li>Chest Wall</li>
          <li>Chest tube</li>
          <li>Breath sounds</li>
          <li>Heart sounds</li>
          <li>Abdomen
            <ul>
              <li>OG/NG tube</li>
              <li>Incision/scar</li>
            </ul>
          </li>
          <li>Pelvis</li>
          <li>Rectal/vaginal
            <ul>
              <li>Foley</li>
            </ul>
          </li>
          <li>Arms/hands</li>
          <li>Legs/feet</li>
          <li>Pulses
            <ul>
              <li>RUE</li>
              <li>LUE</li>
              <li>RLE</li>
              <li>LLE</li>
            </ul>
          </li>
        </ul>
        <h4>Lab Results</h4>
        <ul>
          <li>Drug toxicology</li>
          <li>ETOH</li>
          <li>Pregnancy test</li>
          <li>CBC</li>
          <li>CMP</li>
          <li>PT/PTT/INR</li>
          <li>LFTs</li>
        </ul>

         <h4>Initial Trauma Radiographic Studies</h4>
      <ul>
        <li>EC CXR:</li>
        <li>CT head:</li>
        <li>CT C-spine:</li>
        <li>CT face:</li>
        <li>CT abdomen/pelvis:</li>
        <li>Other X-ray:</li>
      </ul>

      <h4>Procedures</h4>
      <p>(Look at the procedures tab to fill this out)</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Procedure</th>
            <th style={thStyle}>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. ***</td>
            <td>1. ***</td>
          </tr>
          <tr>
            <td>2. ***</td>
            <td>2. ***</td>
          </tr>
        </tbody>
      </table>

      <h4>Medical Problems</h4>
      <p>(Chronic illnesses and look for an HPI to collect that info)</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Problem</th>
            <th style={thStyle}>Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. ***</td>
            <td>1. ***</td>
          </tr>
          <tr>
            <td>2. ***</td>
            <td>2. ***</td>
          </tr>
        </tbody>
      </table>

      <h4>Injuries</h4>
      <p>(Acute injuries and look at latest progress note to collect that info)</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Injury</th>
            <th style={thStyle}>Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. ***</td>
            <td>1. ***</td>
          </tr>
          <tr>
            <td>2. ***</td>
            <td>2. ***</td>
          </tr>
        </tbody>
      </table>

      <h4>Diagnosis Injuries &gt; 24 hours</h4>
      <p>(Leave empty for the interns to fill out)</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Injury</th>
            <th style={thStyle}>Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. ***</td>
            <td>1. ***</td>
          </tr>
          <tr>
            <td>2. ***</td>
            <td>2. ***</td>
          </tr>
        </tbody>
      </table>
      </div>
    ),
  },

{
  title: "SOAP Note",
  content: (
    <div>
      <h3>SOAP Note</h3>
      <ul>
        <li>Differentiate between inpatient and clinic</li>
        <li>Keep short for morning report (2-3 minutes)</li>
      </ul>
      <h4>Subjective</h4>
      <ul>
        <li>
          XXX is an age-year old man/woman on our team POD (Post-Op Day) X presenting with XXX
        </li>
        <li>Changes since last check-up? Or overnight?</li>
        <ul>
          <li>Acute events overnight (Fever)</li>
          <li>Sleep</li>
          <li>Eating</li>
          <li>Drinking</li>
          <li>Moving</li>
        </ul>
        <li>POD changes</li>
        <ul>
          <li>POD 1 removing certain dressings</li>
          <li>POD 3 removing nerve block</li>
          <li>Changes in dressings</li>
        </ul>
        <li>Relevant ROS</li>
        <li>Medications</li>
        <li>New imaging results</li>
      </ul>
      <h4>Objective</h4>
      <ul>
        <li>Vitals</li>
        <li>Pertinent PE findings
          <ul>
            <li>How do the incisions look?</li>
            <li>If dressing in place, is it bloody/clean/dry/intact?</li>
          </ul>
        </li>
        <li>
          Presence of drains – Check for quality (serous, sanguineous, bilious), quantity (cc) of output, and location of drain (is it pelvic, subhepatic, etc? find in op note/brief op note)
        </li>
        <li>Pertinent Lab findings (usually only WBC, Hemoglobin, Creatinine)</li>
        <li>Pertinent Imaging</li>
      </ul>
      <h4>Assessment</h4>
      <ul>
        <li>
          One liner: XXX is an age-year old man/woman on our team POD (Post-Op Day) X presenting with XXX found to have XXX on labs and clinically stable/unstable
        </li>
        <li>Differential diagnosis (short or longer depending on new information)</li>
      </ul>
      <h4>Plan</h4>
      <ul>
        <li>Separated by problem</li>
        <li>PT/OT</li>
        <li>Outpatient follow-up</li>
      </ul>
      <h4>Sample SOAP Presentation</h4>
      <p>
        <em>
          One-liner to orient the team: XXX is an age-year old man/woman on our team POD (Post-Op Day) X presenting with XXX who is currently [stable/unstable].<br />
          Subjective: There were no acute events overnight, and the patient has tolerated soft foods and is hydrating well, with intake of 1L. They have not been moving yet, but are working with PT. They have no fevers, chills, nausea, vomiting, or abdominal pain.<br />
          Objective: Vital signs remain stable and physical exam is unchanged from yesterday.<br />
          Assessment and Plan: XXX is an age-year old man/woman on our team POD (Post-Op Day) X presenting with XXX who is currently [stable/unstable]. Will continue to monitor labs, recent WBC is down trending. Remains clinically stable and will continue routine wound care with removal of dressings and nerve block. Continue to work with PT and aim to discharge in X days.
        </em>
      </p>
    </div>
  ),
  },
{
  title: "SICU Notes",
  content: (
    <div>
      <h3>SICU Notes</h3>
      <ul>
        <li>
          SICU generally doesn’t have you write your own notes, so it is best to print out the most recent SICU note written by your team and update with changes (new vitals, labs, ins/outs, events overnight, updates from consults, plan, etc.).
        </li>
        <li>
          For each organ system you will present a brief SOAP.
        </li>
        <li>
          Important to state reason for ICU: hemodynamic monitoring only, high risk of bleed, post operative hypotension, respiratory failure, etc. Sometimes it is not that the patient is critically ill but requires higher level of nursing care (e.g., plastic flaps).
        </li>
      </ul>
      <h4>Example Note/Presentation Format:</h4>
      <p>
        ___ is an ___ year old man/woman POD (Post-Op Day) ___ s/p (status post) ___ currently in the ICU for ____.
      </p>
      <h5># Neuro</h5>
      <ul>
        <li><strong>Subjective:</strong> Reported pain scale (1-10), Sleep issues or concerns, Numbness, dizziness, etc, Neurological issues overnight or during the day</li>
        <li><strong>Objective:</strong> Neurological exam findings (Mental status, AAO, PERRLA, strength, reflexes, etc), Sedation drugs and levels, Pain drugs/treatments and levels</li>
        <li><strong>Plan:</strong> Changes to sedation or pain medications or levels, Necessary diagnostic procedures (CT, MRI, LP, biopsy, etc), Consults</li>
      </ul>
      <h5># CV</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> HR/BP (ranges), Heart or vessel related medications, Labs (cardiac enzymes, BNP, lipids, etc), Diagnostic study results (EKG, echo, etc)</li>
        <li><strong>Plan:</strong> Meds, imaging, treatment, consults</li>
      </ul>
      <h5># Pulm</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> RR, O2 sat, Chest tube output and description, Current vent settings, Labs (blood gas, acid/base, etc), Diagnostic results (chest x-ray, CT scan, etc), Relevant medications</li>
        <li><strong>Plan:</strong> Meds, imaging, treatment (bronch, chest tube, etc.), changes to ventilator, extubation/intubation, consults</li>
      </ul>
      <h5># GI and F/E/N</h5>
      <ul>
        <li><strong>Subjective:</strong> Oral intake, Flatus or BM, Abdominal pain</li>
        <li><strong>Objective:</strong> Ins/Outs, Abdominal drain output and description, NG output and description, Diet type, feeding rates, TPN rates, etc, Ostomy appearance, Labs (LFTs, amylase, lipase, etc), Imaging (x-ray, CT, etc), Relevant medications</li>
        <li><strong>Plan:</strong> Changes to meds, diet, procedures, treatments, imaging, consults</li>
      </ul>
      <h5># Renal</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> I/Os, Maintenance IV fluids type and rate, Electrolyte levels with comparison to previous day, Lab results (microbiology, UA), Relevant medications, Access lines</li>
        <li><strong>Plan:</strong> Changes to medications, Necessary electrolyte replacements, Insertion or removal of Foley or drains, imaging, treatment, consults</li>
      </ul>
      <h5># Heme</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> Amount and type of blood products given, Type of DVT prophylaxis and amount, Labs (HCT, HGB, PLT, INR, PTT, PT, etc), Relevant medications</li>
        <li><strong>Plan:</strong> Meds, imaging, treatment, consults</li>
      </ul>
      <h5># Endo</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> Blood glucose, TSH, cortisol, Endocrine medications and levels (insulin, thyroid, etc)</li>
        <li><strong>Plan:</strong> Meds, imaging, treatment, consults</li>
      </ul>
      <h5># ID</h5>
      <ul>
        <li><strong>Subjective:</strong></li>
        <li><strong>Objective:</strong> Max temperature over last 24hrs, WBCs, Microbiology results, Current antibiotics including amount and length of treatment</li>
        <li><strong>Plan:</strong> Meds, imaging, treatment, consults</li>
        <li>Each day you should note all the lines/catheters the patient has and determine what can be removed to limit infections.</li>
      </ul>
    </div>
  ),
},
{
  title: "Common Surgeries: Description and Tips",
  content: (
    <div>
      <h3>Lap Chole (Laparoscopic Cholecystectomy)</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <tbody>
          <tr>
            <th style={thStyle}>Indications</th>
            <td style={tdStyle}>Symptomatic cholelithiasis (gallstones), Acute cholecystitis, Biliary colic, Pancreatitis related to gallstones</td>
          </tr>
          <tr>
            <th style={thStyle}>Complications</th>
            <td style={tdStyle}>Bile duct injury, Bleeding, Infection, Conversion to open surgery</td>
          </tr>
          <tr>
            <th style={thStyle}>Relevant Anatomy</th>
            <td style={tdStyle}>Gallbladder, Cystic duct, Common bile duct, Hepatic arteries and portal vein</td>
          </tr>
          <tr>
            <th style={thStyle}>Questions you may be asked</th>
            <td style={tdStyle}>
              <strong>What are the contraindications for laparoscopic cholecystectomy?</strong><br />
              Absolute: uncorrected coagulopathy, severe cardiopulmonary disease, peritonitis with septic shock, suspected gallbladder cancer.<br />
              Relative: severe obesity, extensive adhesions, cirrhosis with portal hypertension.<br /><br />
              <strong>What is the significance of Calot's triangle?</strong><br />
              Calot's triangle (medial: common hepatic duct, lateral: cystic duct, superior: inferior surface of liver) is a critical landmark for identifying the cystic duct and artery, ensuring safe dissection.
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions to ask</th>
            <td style={tdStyle}>What does pain management look like for this patient?</td>
          </tr>
          <tr>
            <th style={thStyle}>Tips for being helpful</th>
            <td style={tdStyle}>
              Pre-op: Introduce yourself to patient and understand possible complications<br />
              During: Learn how to use the camera and close port sites<br />
              Post-op: Take patient back to PACU and follow up next day
            </td>
          </tr>
        </tbody>
      </table>
      <hr />

      <h3>Lap Appy (Laparoscopic Appendectomy)</h3>
      <div className="table-container">
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <tbody>
          <tr>
            <th style={thStyle}>Indications</th>
            <td style={tdStyle}>Acute appendicitis, Complicated appendicitis (abscess formation)</td>
          </tr>
          <tr>
            <th style={thStyle}>Complications</th>
            <td style={tdStyle}>Surgical site infection, Intra-abdominal abscess, Bowel obstruction, Injury to surrounding structures</td>
          </tr>
          <tr>
            <th style={thStyle}>Relevant Anatomy</th>
            <td style={tdStyle}>Appendix, Cecum, Terminal ileum, Mesenteric vessels</td>
          </tr>
          <tr>
            <th style={thStyle}>Questions you may be asked</th>
            <td style={tdStyle}>
              <strong>How do you differentiate between simple and complicated appendicitis?</strong><br />
              Simple: confined to appendix, no perforation/abscess/gangrene.<br />
              Complicated: perforation, gangrene, abscess, diffuse peritonitis, sepsis.<br /><br />
              <strong>What imaging studies are useful in diagnosing appendicitis?</strong><br />
              Ultrasound: first-line in children/pregnant; CT scan: more sensitive/specific, confirms diagnosis and complications.
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions to ask</th>
            <td style={tdStyle}>In ruptured/complicated appendicitis, how does abscess alter surgical strategy, and when is nonoperative management considered?</td>
          </tr>
          <tr>
            <th style={thStyle}>Tips for being helpful</th>
            <td style={tdStyle}>
              Pre-op: Introduce yourself to patient and understand possible complications<br />
              During: Learn how to use the camera and close port sites<br />
              Post-op: Take patient back to PACU and follow up next day
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <hr />

      <h3>Ex Lap (Exploratory Laparotomy)</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <tbody>
          <tr>
            <th style={thStyle}>Example procedure</th>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=G1bTIsAFWAw&ab_channel=FilmsBR" target="_blank" rel="noopener noreferrer">Part 1</a> | 
              <a href="https://www.youtube.com/watch?v=f6muYKIr1IQ&ab_channel=FilmsBR" target="_blank" rel="noopener noreferrer">Part 2</a>
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Indications</th>
            <td style={tdStyle}>Peritonitis, Trauma, Bowel obstruction, Intra-abdominal mass, Unexplained abdominal pain/symptoms, Hemoperitoneum</td>
          </tr>
          <tr>
            <th style={thStyle}>Complications</th>
            <td style={tdStyle}>Infection, Bleeding, Bowel injury, Incisional hernia, Anesthesia-related complications, Adhesions</td>
          </tr>
          <tr>
            <th style={thStyle}>Relevant Anatomy</th>
            <td style={tdStyle}>
              Peritoneal cavity, Major abdominal organs, Blood supply, Skin layers (superficial to deep): Skin → Subcutaneous fat → Camper’s fascia → Scarpa’s fascia → (anterolateral) external oblique, internal oblique, transverse abdominis; (midline) linea alba → transversalis fascia → extraperitoneal fat → parietal peritoneum
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions you may be asked</th>
            <td style={tdStyle}>
              <strong>What is the function of the omentum, and what role may it play during surgery?</strong><br />
              The omentum localizes infection/inflammation, may cover areas of infection or injury, forming a barrier.<br /><br />
              <strong>How do you differentiate between small bowel and large bowel intraoperatively?</strong><br />
              Small bowel: plicae circulares, central, no haustra/taenia coli.<br />
              Large bowel: haustra, taenia coli, peripheral, often fecal material.
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions to ask</th>
            <td style={tdStyle}>
              What findings would prompt urgent ex lap/surgical exploration?<br />
              How do we decide when the patient can begin oral intake postoperatively?
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Tips for being helpful</th>
            <td style={tdStyle}>
              Pre-op: Introduce yourself, help with prepping, positioning, draping<br />
              During: Hold retractors, suction<br />
              Post-op: Take patient back to PACU, follow up, assist with dressing changes
            </td>
          </tr>
        </tbody>
      </table>
      <hr />

      <h3>Incision and Drainage (I&D)</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <tbody>
          <tr>
            <th style={thStyle}>Procedure video</th>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=P30up31Jy_M&ab_channel=SkilledPhysiciansGroupISkilledWoundCare" target="_blank" rel="noopener noreferrer">Watch here</a>
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Indications</th>
            <td style={tdStyle}>Abscess, Furuncle/carbuncle, Pilonidal cyst, Bartholin gland abscess, Hidradenitis suppurativa</td>
          </tr>
          <tr>
            <th style={thStyle}>Complications</th>
            <td style={tdStyle}>Infection spread, Recurrence, Scarring, Damage to surrounding structures</td>
          </tr>
          <tr>
            <th style={thStyle}>Relevant Anatomy</th>
            <td style={tdStyle}>
              Skin layers (epidermis, dermis, subcutaneous tissue), Blood supply, nerves, lymphatics (e.g., avoid facial nerve/parotid duct in facial abscess)
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions you may be asked</th>
            <td style={tdStyle}>
              <strong>How do you differentiate between an abscess and cellulitis clinically?</strong><br />
              Abscess: localized, fluctuant, pus-filled, requires drainage.<br />
              Cellulitis: diffuse, firm, swollen, red, no fluctuation.<br /><br />
              <strong>What organisms are most commonly involved in skin abscesses?</strong><br />
              Staph aureus (MRSA!), strep pyogenes, anaerobes/polymicrobial (perineal/trauma)
            </td>
          </tr>
          <tr>
            <th style={thStyle}>Questions to ask</th>
            <td style={tdStyle}>What type of packing and postoperative care is needed?</td>
          </tr>
          <tr>
            <th style={thStyle}>Tips for being helpful</th>
            <td style={tdStyle}>
              Pre-op: Introduce yourself, help with positioning<br />
              During: Help with suction, holding instruments, knot tying<br />
              Post-op: Take patient back to PACU, assist with wound care
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
},
{
  title: "Surgical Skills: Scrubbing Techniques & Suture Knot Tying",
  content: (
    <div>
      <h3>Scrubbing Techniques</h3>
      <ul>
        <li><strong>Hand Washing:</strong> Begin with thorough hand washing using soap and water for at least 20 seconds, ensuring you clean between fingers and under nails.</li>
        <li><strong>Attire:</strong> Wear appropriate attire, including scrub suits, caps, masks, and shoe covers.</li>
        <li><strong>Nail Care:</strong> Keep nails short and clean to minimize harboring bacteria; nail polish is not allowed.</li>
        <li><strong>Gowning and Gloving:</strong> Practice proper gowning and gloving techniques to prevent contamination.</li>
        <li><strong>Sterile Field:</strong> Maintain a sterile field by avoiding unnecessary movements, keeping hands above the waist, and not touching non-sterile surfaces.</li>
        <li><strong>Scrubbing Technique:</strong> Follow the recommended scrubbing technique, typically involving a timed process to thoroughly clean hands and forearms up to the elbows.</li>
        <li><strong>Drying:</strong> Use a sterile towel or a designated method for drying hands and arms after scrubbing.</li>
        <li><strong>Post-Scrub Procedure:</strong> Proceed promptly to gowning and gloving after scrubbing to minimize recontamination.</li>
      </ul>
      <strong>Helpful Videos:</strong>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=Fmqtmb3h1IM&app=desktop" target="_blank" rel="noopener noreferrer">Gowning</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=pPfaUUiF_jo" target="_blank" rel="noopener noreferrer">Water-based scrubbing</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=3Pf9vclkITQ" target="_blank" rel="noopener noreferrer">Waterless scrubbing</a> <span style={{ fontWeight: 400 }}>(only if water-based scrubbing was done at least once in the day)</span>
        </li>
      </ul>
      <hr />
      <h3>Suture Knot Tying</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <tbody>
          <tr>
            <th style={thStyle}>Skill</th>
            <th style={thStyle}>Video Tutorial</th>
          </tr>
          <tr>
            <td style={tdStyle}>One Hand Tie</td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=2HC7zM3D59Q" target="_blank" rel="noopener noreferrer">Watch</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Two Hand Tie</td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=HTxT60u2Lj0" target="_blank" rel="noopener noreferrer">Watch</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Instrument Tie</td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=_lvQ2YJ0RjQ" target="_blank" rel="noopener noreferrer">Watch</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Simple Interrupted Sutures</td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=-smZKFnC-U8" target="_blank" rel="noopener noreferrer">Watch</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Suture Techniques Overview</td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=pGEJEUZFIEk&t=183s" target="_blank" rel="noopener noreferrer">Watch</a>
            </td>
          </tr>
        </tbody>
      </table>

      <img src="suturing tools.png" alt="Surgery" style={{ width: '100%', borderRadius: 8 }} />
      <h3>Laparoscopy Camera Driving</h3>
      <a href="https://www.youtube.com/watch?v=2I-Ll5So1_M" target="_blank" rel="noopener noreferrer">Watch</a>


      <h3>Common Wound Care Materials</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Typical Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Abdominal pads <img src="abd pads.png" alt="Abdominal pads" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Control bleeding, absorb drainage for large wounds</td>
          </tr>
          <tr>
            <td style={tdStyle}>Non-adherent dressing (4x4’s)<img src="4x4.png" alt="Non-adherent dressing" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Minor burns, incisions, abrasions</td>
          </tr>
          <tr>
            <td style={tdStyle}>Gauze rolls<img src="kerlix.png" alt="Gauze rolls" style={{ width: 50, height: 50, borderRadius: 8 }} /><img src="gauze wrap.png" alt="Gauze rolls" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Hold a dressing in place, apply pressure, limit swelling</td>
          </tr>
          <tr>
            <td style={tdStyle}>Xeroform<img src="xeroform.png" alt="Xeroform" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Burns, skin grafts</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hydrocolloid dressing<img src="hydrocolloid.png" alt="Hydrocolloid dressing" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Pressure ulcers</td>
          </tr>
          <tr>
            <td style={tdStyle}>Tegaderm<img src="tegaderm.png" alt="Tegaderm" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Protect IV sites, clean closed surgical incisions, enhance wound healing</td>
          </tr>
          <tr>
            <td style={tdStyle}>Medical tape<img src="medipore tape.png" alt="Medical tape" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Secure dressings, gauze</td>
          </tr>
          <tr>
            <td style={tdStyle}>Packing strips<img src="packing strips.png" alt="Packing strips" style={{ width: 50, height: 50, borderRadius: 8 }} /></td>
            <td style={tdStyle}>Used in wound packing</td>
          </tr>
        </tbody>
      </table>
            <h3>Common Types of Wound Care</h3>
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              ALWAYS TAKE PICTURES AND UPLOAD TO EPIC HAIKU BEFORE YOU PUT ON NEW DRESSING
            </p>
            <div className="table-container">
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Wound Care Type</th>
                  <th style={thStyle}>Used For</th>
                  <th style={thStyle}>Frequency of Change</th>
                  <th style={thStyle}>Materials</th>
                  <th style={thStyle}>Instructions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Dry dressing</td>
                  <td style={tdStyle}>Simple, clean wounds</td>
                  <td style={tdStyle}>1x Daily or PRN</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Sterile gauze</li>
                      <li>Non-adherent dressing</li>
                      <li>Tegaderm or tape</li>
                      <li>Normal saline</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Irrigate the wound gently with saline or sterile water</li>
                      <li>Pat the area dry with sterile gauze</li>
                      <li>Place a non-adherent dressing over the incision, followed by sterile gauze</li>
                      <li>Secure the dressing with Tegaderm or medical tape</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wet-to-dry dressing</td>
                  <td style={tdStyle}>Wounds needing debridement to remove dead tissue</td>
                  <td style={tdStyle}>1x/Day</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Saline-soaked gauze</li>
                      <li>Dry gauze</li>
                      <li>Medical tape or abdominal pad</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Soak sterile gauze in saline and place it directly into the wound</li>
                      <li>Cover the wet gauze with dry gauze</li>
                      <li>Secure the dressing with medical tape or an abdominal pad if large</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wet-to-moist dressing</td>
                  <td style={tdStyle}>Draining wounds (Abscesses, seromas, post-op drains)</td>
                  <td style={tdStyle}>2-3x/Day</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Saline gauze</li>
                      <li>Drain sponge</li>
                      <li>Hydrogel dressing</li>
                      <li>Tape</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Clean the wound with saline</li>
                      <li>Soak sterile gauze in saline and place into the wound</li>
                      <li>Apply cover hydrogel dressing over wet gauze and secure with tape</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wound VAC</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Diabetic foot ulcers</li>
                      <li>Pressure ulcers</li>
                      <li>Acute traumatic wounds</li>
                      <li>Severe burns</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    Usually<br />
                    <strong>A)</strong> Mon-Wed-Fri<br />
                    <strong>B)</strong> Tu-Th-Sat
                  </td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>VAC suction unit</li>
                      <li>Wound VAC sponge (black foam)</li>
                      <li>VAC suction tube with pad</li>
                      <li>Adhesive drape</li>
                      <li>Scissors</li>
                      <li>Saline and syringe for irrigation, and clean container for saline</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Close VAC suction tube clamp, turn off VAC suction unit</li>
                      <li>Remove old dressing and foam</li>
                      <li>Cut black foam to fit the wound size and shape</li>
                      <li>Foam is placed in the wound bed</li>
                      <li>Cut and place the transparent adhesive drape to cover the foam and wound</li>
                      <li>Cut a small quarter-sized hole in the drape above the foam</li>
                      <li>Apply the VAC pad with tubing over the hole in the drape</li>
                      <li>Connect tubing from dressing to tubing coming from VAC suction unit, lock the connectors together, open VAC suction tube clamp</li>
                      <li>Activate VAC suction unit and check for air leak</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wound packing</td>
                  <td style={tdStyle}>Wounds that cannot be stitched or stapled closed, deep wounds</td>
                  <td style={tdStyle}>1x/Day</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Gauze or packing strips material</li>
                      <li>Normal saline & clean container for saline</li>
                      <li>Tape</li>
                      <li>Scissors</li>
                      <li>Forceps</li>
                      <li>Cover dressing</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Remove the cover dressing and the old packing from wound</li>
                      <li>Moisten gauze or packing material with sterile normal saline, and use forceps to wring out gauze so it is damp, but not wet</li>
                      <li>Gently guide packing material into the wound using forceps to fill the wound dead space</li>
                      <li>Apply cover dressing, tape it down securely</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Staple removal</td>
                  <td style={tdStyle}>Surgical skin closure, an alternative to stitches</td>
                  <td style={tdStyle}>Removed ~7-14 days after procedure</td>
                  <td style={tdStyle}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Staple removal kit</li>
                    </ul>
                  </td>
                  <td style={tdStyle}>
                    <ol style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Slide the two prongs of staple remover under the middle of staple</li>
                      <li>Gently squeeze staple remover handles, and lift and remove staple out of the skin in a smooth, single motion</li>
                      <li>Clean the area with antiseptic</li>
                      <li>Apply Steri-strips or bandage if needed</li>
                    </ol>
                    <span style={{ color: 'red', fontWeight: 500 }}>
                      Watch the video because placing it the wrong way can cause lots of pain and loss of the staple itself.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
    </div>
  ),
},
{
  title: "Vascular Conditions",
  content: (
    <div>
      <h3>Vascular Conditions</h3>
      <div className='table-container'>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1em" }}>
        <thead>
          <tr>
            <th style={thStyle}>Condition</th>
            <th style={thStyle}>Signs</th>
            <th style={thStyle}>Symptoms</th>
            <th style={thStyle}>Plan</th>
            <th style={thStyle}>Additional Resources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Peripheral Artery Disease (PAD)</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Decreased or absent pulses</li>
                <li>Cool or cold skin</li>
                <li>Hair loss/reduced hair growth</li>
                <li>Atrophic skin changes</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Intermittent claudication</li>
                <li>Rest pain</li>
                <li>Non-healing wounds/ulcers on toes/feet</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <strong>Work-Up:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>ABI</li>
                <li>Duplex ultrasound</li>
                <li>Angiography if indicated</li>
              </ul>
              <strong>Medical Management:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Lifestyle changes</li>
                <li>Antiplatelet therapy</li>
                <li>Statins</li>
                <li>Cilostazol</li>
              </ul>
              <strong>Surgical:</strong> Revascularization
            </td>
            <td style={tdStyle}>
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK430745/#:~:text=Peripheral%20arterial%20disease%20(PAD)%20is,pain%20during%20walking%20or%20exertion" target="_blank" rel="noopener noreferrer">NCBI PAD Overview</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Compartment Syndrome<br /><span style={{ fontWeight: 500 }}>5P’s</span></td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Pain (1st sign)</li>
                <li>Pulselessness (late sign)</li>
                <li>Paresthesia</li>
                <li>Paralysis</li>
                <li>Pallor</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Pain with passive muscle stretching</li>
                <li>Paresthesia</li>
                <li>Muscle weakness</li>
                <li>Distended, firm musculature</li>
                <li>Decreased/absent pulses</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <strong>Immediate Action:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>If all signs present: <b>Fasciotomy</b></li>
                <li>If unsure: Check intracompartmental pressures (&gt;30mmHg is diagnostic)</li>
              </ul>
              <strong>Post-Op Care:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Monitor for complications</li>
                <li>Neurovascular status assessment</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK430745/" target="_blank" rel="noopener noreferrer">Surgical Fasciotomy - NCBI</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Wet/Dry Gangrene</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Dark discoloration/blackening (dry)</li>
                <li>Moist, foul-smelling necrotic tissue (wet)</li>
                <li>Surrounding erythema and swelling</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Severe pain (dry)</li>
                <li>Tenderness (wet)</li>
                <li>Systemic symptoms (fever, chills, malaise)</li>
                <li>Loss of sensation</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <strong>Assessment:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Identify cause (vascular, infection) → imaging</li>
              </ul>
              <strong>Surgical:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Debridement</li>
                <li>Urgent intervention for wet gangrene</li>
              </ul>
              <strong>Post-Op Care:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Monitor for infection</li>
                <li>Manage pain</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK560552/" target="_blank" rel="noopener noreferrer">NCBI Gangrene</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Amputation (AKA, BKA, Toe)</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Non-healing ulcers/wounds</li>
                <li>Evidence of ischemia (coldness, pallor)</li>
                <li>Necrosis of toes/foot</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Severe pain in ischemic areas</li>
                <li>Loss of function</li>
                <li>Possible systemic infection symptoms</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <strong>Pre-Op Assessment:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Evaluate health, comorbidities, function</li>
                <li>Determine amputation level</li>
              </ul>
              <strong>Surgical:</strong> AKA, BKA, or toe amputation
              <br />
              <strong>Post-Op:</strong> Pain management, rehabilitation
            </td>
            <td style={tdStyle}>
              <a href="https://www.mayoclinic.org/tests-procedures/amputation/about/pac-20385054" target="_blank" rel="noopener noreferrer">Mayo Clinic</a><br />
              <a href="https://www.amputee-coalition.org/" target="_blank" rel="noopener noreferrer">Amputee Coalition</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Above-Knee Amputation (AKA)</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Indicated after BKA stump infection</li>
                <li>Gas gangrene or necrotizing fasciitis</li>
              </ul>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <strong>Procedure:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Removal of femur and surrounding soft tissues</li>
                <li>Prepare for prosthetic fitting</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=wUQPY4-YL0k" target="_blank" rel="noopener noreferrer">AKA Procedure Video</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Through-the-Knee Amputation (TKA)</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Indicated after severe infection</li>
                <li>Advanced PAD</li>
              </ul>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <strong>Imaging:</strong> Evaluate for infection or vascular issues<br />
              <strong>Procedure:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Guillotine</li>
                <li>Quick cut in emergency infection scenarios</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=DZE2fEuGE-A&t=543s" target="_blank" rel="noopener noreferrer">TKA Procedure Video</a>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Below-Knee Amputation (BKA)</td>
            <td style={tdStyle}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Severe PAD</li>
                <li>Non-healing ulcers/gangrene</li>
                <li>Trauma</li>
              </ul>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <strong>Procedure:</strong>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Circumferential incision, tibia and fibula cut; preserve knee joint</li>
                <li>Guillotine</li>
                <li>Quick cut in severe infection/poor vascular supply</li>
              </ul>
            </td>
            <td style={tdStyle}>
              <a href="https://www.youtube.com/watch?v=7CR-j-3o27E" target="_blank" rel="noopener noreferrer">BKA Procedure Video</a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  ),
},
{
  title: "Ventilator Physiology & Airway Clearance",
  content: (
    <div>
      <h3>Ventilator Physiology</h3>
      <ul>
        <li>
          <strong>Airway resistance vs lung compliance</strong>
          <ul>
            <li>
              Represented as <b>peak airway pressure (PAP)</b> vs <b>plateau pressure (PP)</b>
              <ul>
                <li>↑ PAP: airway processes (asthma, bronchospasm, mucous plugging)</li>
                <li>↑ PP: alveolar/parenchymal processes (edema, ARDS, atelectasis, pneumonia)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Lung compliance</strong>
          <ul>
            <li>Change in volume over change in pressure (high compliance = lungs fill easily with little pressure)</li>
          </ul>
        </li>
        <li>
          <strong>TV (tidal volume) and RR (respiratory rate)</strong>
          <ul>
            <li>Determinants of CO<sub>2</sub> elimination → Minute Ventilation (TV x RR)</li>
            <li>Keep TV between 4-6 mL/kg (lung protective in ARDS)</li>
            <li>Some hypercapnia is acceptable to stay in this range</li>
            <li>RR can be increased, but effectiveness drops as you approach 30/min</li>
          </ul>
        </li>
        <li>
          <strong>FiO<sub>2</sub> (fraction of inspired oxygen) and PEEP (positive end expiratory pressure)</strong>
          <ul>
            <li>Ventilator determinants of oxygenation</li>
            <li>Wean FiO<sub>2</sub> to O<sub>2</sub> sat low of 92% (88% in COPD), high of 96% (avoid hyperoxygenation)</li>
            <li>Room air = 21% FiO<sub>2</sub></li>
            <li>PEEP = 5 is standard; can increase up to 18-20 in ARDS</li>
          </ul>
        </li>
        <li>
          <strong>ABG (arterial blood gases) and VBG (venous blood gases)</strong>
          <ul>
            <li>VBG gives pH and pCO<sub>2</sub> (not O<sub>2</sub> arterial)</li>
            <li>ABG needed for hypoxemia or if arterial line present</li>
          </ul>
        </li>
        <li>
          <strong>EtCO<sub>2</sub> (end tidal CO<sub>2</sub>)</strong>
          <ul>
            <li>Non-invasive CO<sub>2</sub> monitoring (normal: 35-45 mmHg)</li>
          </ul>
        </li>
        <li>
          <strong>Extubation</strong>
          <ul>
            <li>
              <b>Daily:</b> Spontaneous awakening trial ("sedation holiday")
              <ul>
                <li>If pass → spontaneous breathing trial (wean to pressure support)</li>
                <li>If pass both and original reason for intubation resolved, vitals/electrolytes stable → extubate</li>
                <li>Low phosphate: do not extubate (needed for ATP)</li>
                <li>Volume overload: increased edema, harder to protect airway</li>
              </ul>
            </li>
            <li>
              <b>Most important value:</b> Rapid shallow breathing index (RSBI) = RR (breaths/min) / TV (L/min)
              <ul>
                <li>RSBI &lt; 105: likely weaning success</li>
                <li>RSBI &gt; 105: likely weaning failure</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Airway Clearance (AWC)</h3>
      <ul>
        <li>
          <strong>Mucomyst and Hypertonic Saline (HTS)</strong>
          <ul>
            <li>Break up/thin mucous for easier clearance</li>
            <li>HTS: must be paired with bronchodilator (albuterol) to prevent bronchospasm</li>
            <li>Mucomyst: breaks disulfide bonds, foul smelling; must be paired with mechanical AWC if patient can't cough</li>
            <li>Can alternate between the two</li>
          </ul>
        </li>
        <li>
          <strong>Albuterol and Ipratropium (Duonebs)</strong>
          <ul>
            <li>Both promote bronchodilation (different mechanisms)</li>
            <li>Levalbuterol: less arrhythmogenic, but more expensive and controversial</li>
          </ul>
        </li>
        <li>
          <strong>Suction</strong>
          <ul>
            <li>Present in ETT for deep suctioning</li>
          </ul>
        </li>
        <li>
          <strong>Chest physiotherapy</strong>
          <ul>
            <li>Manual percussion (by RT with wand)</li>
            <li>Percussive vest</li>
            <li>IPV (intrapulmonary percussive ventilation)</li>
            <li>Cough-assist device (requires patient participation)</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
},
{
  title: "Advice for Specialty Consults in Surgery",
  content: (
    <div>
      <h3>Advice for Specialty Consults in Surgery</h3>
      <ul>
        <li>
          <strong>SICU:</strong>
          <ul>
            <li>Great choice if you’re not a fan of scrubbing in. Excellent for shelf prep and exposure to procedures (central lines, bronchoscopies, etc.).</li>
            <li>Lots of practice with long ICU presentations.</li>
            <li>Hours are team-dependent; St. Luke’s tends to be less busy due to a smaller patient cap.</li>
          </ul>
        </li>
        <li>
          <strong>Vascular Surgery:</strong>
          <ul>
            <li>Residents operate at Baylor St. Luke and the VA, with a good mix of OR and cath lab cases.</li>
            <li>Morning rounds usually start at 6:00 am sharp at Baylor St. Luke.</li>
            <li>Med students: keep the wound care bag stocked, cut knots, retract, sometimes cauterize in the OR.</li>
            <li>Surgeries: BKA, AKA, carotid endarterectomy, AV fistulas, more.</li>
            <li>Cath lab: peripheral angioplasty, stenting, venogram, and more.</li>
          </ul>
        </li>
        <li>
          <strong>Congenital Heart Surgery:</strong>
          <ul>
            <li>Rounds start on Zoom at 6:15AM, followed by education/M&amp;M at 7AM, then OR around 8AM (usually 1 major case/day).</li>
            <li>See rare, high-tech surgeries: Marfan syndrome repairs, ASDs, VSDs, heart transplants (sometimes with private jet/cars).</li>
            <li>Highly recommend reading about each condition—these show up on exams.</li>
            <li>Unique experience working with nurses, anesthesia, circulators, and learning suture types.</li>
          </ul>
        </li>
        <li>
          <strong>Transplant:</strong>
          <ul>
            <li>Popular for med students—opportunity to go on organ procurements (fly on a private jet!).</li>
            <li>Good ICU presentation practice, see central line placements.</li>
            <li>Cons: can be disorganized, on-call feel, little advance notice for procurements (which can happen any time).</li>
            <li>Hours are variable; surgeries include organ procurement, liver and kidney transplants.</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
},

{
  title: "Tips for Success",
  content: (
    <div>
      <h3>Tips for Success</h3>
      <ul>
        <li>
          <strong>Dr. Rojas:</strong>
          <ul>
            <li>It’s a two-way street. The more proactive and engaged you are, the more faculty and residents will involve you in patient care.</li>
          </ul>
        </li>
        <li>
          <strong>Nikita:</strong>
          <ul>
            <li>Always be prepared for general procedures by knowing the relevant anatomy, indications, and complications.</li>
            <li>You may be put in a surgery you weren’t prepared for, but you can still help during pre-op by getting to know the patient and assisting the OR staff, as well as post-op.</li>
            <li>Don’t be afraid to ask questions to better understand what is happening.</li>
          </ul>
        </li>
        <li>
          <strong>Jackie:</strong>
          <ul>
            <li>During your first few surgeries, observe what everyone in the OR does to help prepare a patient, and note when you can step in and help next time.</li>
            <li>Ask for a step stool (or two) if you cannot see in the OR!</li>
            <li>Emma Holliday and Divine Intervention videos are great for shelf studying!</li>
          </ul>
        </li>
        <li>
          <strong>Ashira:</strong>
          <ul>
            <li>Show up early to the OR and be first to scrub in so you can get help scrubbing and won’t need to bother anyone when the team gets busy.</li>
            <li>Most surgeons like presentations to be short—try to include only the most important details and have other pertinent information ready if they ask.</li>
          </ul>
        </li>
        <li>
          <strong>Piya:</strong>
          <ul>
            <li>Ask your resident/team on the first day for expectations. Practice knot-tying and sutures.</li>
            <li>Try to be proactive and take initiative—if they show you once, they often expect you to try the next time.</li>
            <li>Ask questions when you can.</li>
            <li>Taking care of the patient by giving company during pre-op is a great way to show patient care.</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
},
]

const Surgery = () => {
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
      title="Surgery"
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

export default Surgery;