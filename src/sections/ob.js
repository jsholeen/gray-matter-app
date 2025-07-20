import SubSectionTemplate from '../components/SubSectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';

const sections = [
  {
    title: "General HPI Note",
    content: (

      <div>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/14R4d7ERuIg?si=XtXJHFE6UTLPA3d9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>

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

  {
    title: 'Diagnosis of Gestational Diabetes Mellitus',
    content: (
      <div>

        <h3>Gestational Diabetes Mellitus (GDM)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>Fetal Considerations</th>
              <th style={thStyle}>Maternal Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Due to pancreatic β-cell dysfunction and/or insulin intolerance secondary to placental hormone release.<br />
                Classified as A1GDM (diet-controlled) or A2GDM (medication-controlled).
              </td>
              <td style={tdStyle}>
                High blood sugar from mom crosses placenta → fetal hyperinsulinemia → macrosomia (high birth weight) and neonatal hypoglycemia.<br />
                Can lead to polycythemia, hyperbilirubinemia, hypocalcemia.
              </td>
              <td style={tdStyle}>
                Increased risk of developing T2DM.<br />
                Increased risk of C/S delivery.<br />
                Increased risk of preeclampsia.<br />
                Increased risk of hypertension.
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Questions to Ask</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Have you experienced any symptoms of high blood sugar, such as increased thirst, frequent urination, or fatigue?</td>
              <td style={tdStyle}>How often do you check your blood sugar levels?</td>
              <td style={tdStyle}>What device do you use for blood glucose monitoring?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Have you been instructed on how to properly use your blood glucose monitor and log your results?</td>
              <td style={tdStyle}>Have you been given dietary recommendations or seen a dietitian?</td>
              <td style={tdStyle}>Can you describe a typical day's meals and snacks?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Are you incorporating any physical activity into your routine? If so, what type and how often?</td>
              <td style={tdStyle}>Always ensure to get up from bed every hour to reduce DVT risk.</td>
              <td style={tdStyle}>Are you taking any medications or insulin to manage your blood sugar levels?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Do you have any difficulties or concerns with taking your medications as prescribed?</td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>BMI &gt;25</td>
              <td style={tdStyle}>PMH of CVD</td>
              <td style={tdStyle}>Prior history of GDM or gestational hypertension</td>
              <td style={tdStyle}>Polycystic ovarian syndrome (PCOS)</td>
              <td style={tdStyle}>Markers of insulin resistance (Acanthosis Nigricans)</td>
            </tr>
          </tbody>
        </table>

        <h4>Diagnosis: </h4><p>Evaluated for @ 24-28 weeks</p><ul>
          <li>Glucose tolerance test (GTT): Give patient a certain amount of glucose and wait to see if their body can regulate it properly after a certain period of time</li>
        </ul>

        <div>
          <h3>Gestational Diabetes Mellitus Screening Algorithm</h3>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            {/* Step 1 */}
            <div style={{
              background: '#f77c2b',
              color: 'white',
              border: '2px solid #fff',
              borderRadius: 8,
              padding: 16,
              minWidth: 180,
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}>
              <strong>Give 50g 1hr GTT</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: 18 }}>
                <li>Move to next step if Glucose &gt; 140</li>
              </ul>
            </div>
            {/* Arrow */}
            <span style={{ fontSize: 30, fontWeight: 'bold', color: '#f77c2b' }}>&rarr;</span>
            {/* Step 2 */}
            <div style={{
              background: '#a6c94a',
              color: 'black',
              border: '2px solid #fff',
              borderRadius: 8,
              padding: 16,
              minWidth: 180,
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}>
              <strong>100g 3hr GTT<br />(≥2 abnormal values)</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: 18 }}>
                <li>1<sup>st</sup> hour: &gt; 180 mg/dL</li>
                <li>2<sup>nd</sup> hour: &gt; 155 mg/dL</li>
                <li>3<sup>rd</sup> hour: &gt; 140 mg/dL</li>
              </ul>
            </div>
            {/* Arrow */}
            <span style={{ fontSize: 30, fontWeight: 'bold', color: '#388e3c' }}>&rarr;</span>
            {/* Step 3 */}
            <div style={{
              background: '#20732e',
              color: 'white',
              border: '2px solid #fff',
              borderRadius: 8,
              padding: 16,
              minWidth: 180,
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}>
              <strong>If 3hr GTT has ≥2 abnormal values</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: 18 }}>
                <li>Patient has Gestational Diabetes Mellitus</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>Treatment:</h4><ul>
          <li><strong>Non-pharmacologic:</strong>Diet, aerobic exercise, glucose monitoring</li>
          <li><strong>Pharmacologic:</strong> <u>Insulin</u> (aspart, lispro), Metformin, Glyburide (last two are not approved by FDA for use in GDM)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Gestational Hypertension & Preeclampsia',
    content: (
      <div>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/ye0E5BeWRPY?si=kgfVWi_Usxi4HEpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
        <h1>Gestational Hypertension (gHTN)</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>Fetal Considerations</th>
              <th style={thStyle}>Maternal Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <strong>Chronic HTN:</strong> Elevated BP <u>before</u> 20 weeks<br />
                <strong>Gestational HTN:</strong> Elevated BP <u>after</u> 20 weeks
              </td>
              <td style={tdStyle}>
                Changes to placental spiral arteries &rarr; placental hypoperfusion and ischemia &rarr; fetal growth restriction
              </td>
              <td style={tdStyle}>
                Increased risk of developing preeclampsia, end organ damage (liver, kidney, etc.), stroke, placental abruption, increased risk of early/preterm delivery<br />
                <strong>Note:</strong> Patients with hypertension or PMH of hypertension should <u>NOT</u> receive methergine for treatment of post-partum hemorrhage
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Questions to Ask</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>How often do you check your blood pressure at home?</td>
              <td style={tdStyle}>What device do you use for blood pressure monitoring?</td>
              <td style={tdStyle}>Have you been instructed on how to properly use your blood pressure monitor and log your results?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Have you been given dietary recommendations, such as reducing salt intake or increasing potassium-rich foods?</td>
              <td style={tdStyle}>Can you describe a typical day's meals and snacks?</td>
              <td style={tdStyle}>Are you incorporating any physical activity into your routine? If so, what type and how often?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Are you taking any medications to manage your blood pressure?</td>
              <td style={tdStyle}>Do you have any difficulties or concerns with taking your medications as prescribed?</td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Obstructive sleep apnea</td>
              <td style={tdStyle}>Autoimmune disease</td>
              <td style={tdStyle}>&gt;35 y/o</td>
              <td style={tdStyle}>FMHx of gHTN</td>
              <td style={tdStyle}>BMI &gt;30</td>
            </tr>
          </tbody>
        </table>
        <h4>Diagnosis</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Option 1</th>
              <th style={thStyle}>Option 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>BP &gt; 140/90 on two separate occasions ≥4h apart from each other</td>
              <td style={tdStyle}>BP &gt; 160/110 with similar BP after a short time interval</td>
            </tr>
          </tbody>
        </table>
        <h4>Treatment</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Definitive Treatment</th>
              <th style={thStyle}>Pharmacologic Treatment</th>
              <th style={thStyle}>Contraindicated Medications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Delivery</td>
              <td style={tdStyle}>
                Always indicated for BPs &gt; 160/110 lasting at least 15 minutes apart<br />
                <strong>1st line:</strong> labetalol, hydralazine, nifedipine
              </td>
              <td style={tdStyle}>
                <strong>DO NOT use:</strong> ACE inhibitors, ARBs, mineralocorticoid receptor antagonists (teratogenic)<br />
                <ul>
                  <li>ACE inhibitors/ARBs: Oligohydramnios due to fetal renal damage &rarr; poor lung development &amp; craniofacial deformity</li>
                  <li>Mineralocorticoid receptor antagonists: Potent anti-androgenic effects &rarr; undervirilization of male infants</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h1>Preeclampsia</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>Fetal Considerations</th>
              <th style={thStyle}>Maternal Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                New onset hypertension &gt; 20 weeks <br />
                <strong>AND</strong> evidence of proteinuria or end organ damage (thrombocytopenia, renal insufficiency, impaired liver function, or new onset headache of unknown cause unresponsive to medications).<br />
                <strong>Preeclampsia with end organ damage = Preeclampsia with severe features (PreE w/ SF)</strong>
              </td>
              <td style={tdStyle}>
                Changes to placental spiral arteries &rarr; placental hypoperfusion and ischemia &rarr; fetal growth restriction
              </td>
              <td style={tdStyle}>
                Increased risk of developing preeclampsia<br />
                End organ damage (liver, kidney, etc.), stroke, placental abruption, increased risk of early/preterm delivery, seizures (transition to eclampsia)
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Questions to Ask (Cardinal 4)</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Any right sided abdominal pain?</td>
              <td style={tdStyle}>Any new headaches (outside of any usual migraines or headaches you have)?</td>
              <td style={tdStyle}>Any vision changes?</td>
              <td style={tdStyle}>Any new chest pain or shortness of breath?</td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Obstructive sleep apnea</td>
              <td style={tdStyle}>Autoimmune disease</td>
              <td style={tdStyle}>35 y/o</td>
              <td style={tdStyle}>FMHx of gHTN</td>
              <td style={tdStyle}>BMI &gt;30</td>
              <td style={tdStyle}>Prior hx of PreE</td>
            </tr>
          </tbody>
        </table>
        <h4>Diagnosis</h4>


        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Criteria</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Blood Pressure</td>
              <td style={tdStyle}>New onset BP &gt; 140/90</td>
            </tr>
            <tr>
              <td style={tdStyle}>Proteinuria</td>
              <td style={tdStyle}>
                UA w/ 2+ protein is diagnostic<br />
                Minimal/absent protein on UA &rarr; 24-hr urine collection for protein to establish dx (UA has high rate of false negatives vs. 24-hour collection)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Thrombocytopenia</td>
              <td style={tdStyle}>Platelets &lt; 100,000</td>
            </tr>
            <tr>
              <td style={tdStyle}>Renal insufficiency</td>
              <td style={tdStyle}>Elevated protein/creatinine level</td>
            </tr>
            <tr>
              <td style={tdStyle}>Elevated liver enzymes</td>
              <td style={tdStyle}>AST/ALT elevation</td>
            </tr>
          </tbody>
        </table>
        <h4>Treatment</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Definitive Treatment</th>
              <th style={thStyle}>Other Treatments</th>
              <th style={thStyle}>Prevention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Delivery</td>
              <td style={tdStyle}>
                Must weigh risk of preterm delivery against risk of severe complications from HTN sequelae<br />
                Magnesium sulfate for seizure prophylaxis and Rx in patients with PreE/eclampsia<br />
                Antihypertensives (nifedipine, labetalol, hydralazine)
              </td>
              <td style={tdStyle}>
                81 mg aspirin for patients with PMHx of pre-eclampsia or other risk factors
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },



  

  // Add this section to your sections array in ob.js

  {
    title: 'Pregnancy Care',
    content: (
      <div>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/ruBOnGByk38?si=QD9dCQtXTXKztz8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
        <h3>Prenatal Care by Trimester</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Trimester</th>
              <th style={thStyle}>Key Questions</th>
              <th style={thStyle}>Tests/Screenings/Procedures</th>
              <th style={thStyle}>Other Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>1st trimester<br />(0 – 14 6/7 weeks)</strong></td>
              <td style={tdStyle}>
                • Contraception Plan<br />
                • Desire for circumcision if male<br />
                • Vaginal bleeding (color, clots, timing)<br />
                • Leakage of fluid<br />
                • Contractions/Cramping<br />
                • Feeding Plan (breast/bottle)
              </td>
              <td style={tdStyle}>
                • Establish gestational age via LMP or ultrasound<br />
                • Rh(D) type and antibody screen<br />
                • Hemoglobin/hematocrit, MCV, ferritin<br />
                • HIV, syphilis (VDRL/RPR), HBsAg, anti-HCV Ab<br />
                • Rubella and varicella immunity<br />
                • Urine culture and dipstick<br />
                • Chlamydia PCR (if risk factors)<br />
                • Pap test (if indicated)
              </td>
              <td style={tdStyle}>
                • Assess for preeclampsia risks<br />
                • If Rh-negative, monitor for Rh alloimmunization, possible RhoGAM in future
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>2nd trimester<br />(15 – 28 6/7 weeks)</strong></td>
              <td style={tdStyle}>
                • PreE questions (if they have PreE)<br />
                • Fetal movement &gt;20 weeks<br />
                • Vaginal bleeding<br />
                • Leakage of fluid<br />
                • Contractions/Cramping<br />
                • Feeding Plan (breast/bottle)
              </td>
              <td style={tdStyle}>
                • 24-28 weeks: Hemoglobin/hematocrit<br />
                • Tdap vaccination<br />
                • Rh antibody screen (if Rh-negative)<br />
                • 1-hr 50 g Glucose Tolerance Test (GTT)<br />
                • Fundal height, fetal heart rate, blood pressure
              </td>
              <td style={tdStyle}>
                • RhoGAM at around week 28 for Rh-negative patients to prevent maternal antibodies to fetal antigens
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>3rd trimester<br />(≥29 weeks)</strong></td>
              <td style={tdStyle}>
                • PreE questions (if they have PreE)<br />
                • Fetal movement &gt;20 weeks<br />
                • Vaginal bleeding<br />
                • Leakage of fluid<br />
                • Contractions/Cramping<br />
                • Feeding Plan (breast/bottle)
              </td>
              <td style={tdStyle}>
                • 36-38 weeks: Rectovaginal culture for Group B streptococcus (GBS)<br />
                • Gonorrhea and chlamydia screening<br />
                • Hepatitis B screening<br />
                • HIV screening
              </td>
              <td style={tdStyle}>
                • Monitor for onset of labor or signs of complications such as preeclampsia
              </td>
            </tr>
          </tbody>
        </table>


        <h3>Intrapartum Management</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Condition</th>
              <th style={thStyle}>Risk Factors / Complications</th>
              <th style={thStyle}>Diagnosis</th>
              <th style={thStyle}>Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>GBS Positivity</strong><br />Group B Streptococcus colonizes vagina and GI tract of pregnant women</td>
              <td style={tdStyle}>
                <strong>Risk Factors:</strong> Prior infant with GBS infection, maternal age &lt; 20 years, PROM, etc.<br />
                <strong>Complications:</strong> pyelonephritis, bacteremia, endometritis, preterm birth, neonatal meningitis, etc.
              </td>
              <td style={tdStyle}>Rectovaginal culture, NAAT</td>
              <td style={tdStyle}>Intrapartum penicillin/ampicillin</td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>HIV Positivity</strong><br />Concern for vertical transmission from mother to fetus</td>
              <td style={tdStyle}>
                <strong>Complications:</strong> General HIV complications, vertical transmission
              </td>
              <td style={tdStyle}>1st and 3rd trimester HIV testing</td>
              <td style={tdStyle}>
                <strong>Viral load &gt; 1000 (or unknown):</strong> IV zidovudine + routine ART + C-section at 38 weeks<br />
                <strong>Viral load &lt; 1000:</strong> Continue routine ART + vaginal delivery (if otherwise indicated)
              </td>
            </tr>
          </tbody>
        </table>


        <h3>Postpartum Care</h3>
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                <thead>
                  <tr><th colSpan={4} style={thStyle}><center>Postpartum Hemorrhage</center></th></tr>
                  <tr>
                    <th style={thStyle}>Definition</th>
                    <th style={thStyle}>Risk Factors</th>
                    <th style={thStyle}>Complications</th>
                    <th style={thStyle}>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      &gt; 500 mL blood loss during vaginal delivery<br />
                      OR<br />
                      &gt; 1000 mL blood loss during C-section
                    </td>
                    <td style={tdStyle}>
                      Infection, prolonged labor, fibroids, uterine inversion, placenta accreta spectrum, uterine atony, etc.
                    </td>
                    <td style={tdStyle}>
                      Infection, pulmonary edema, infertility, Sheehan syndrome, etc.
                    </td>
                    <td style={tdStyle}>
                      Place 2 large bore IV catheters, type and screen, transfusion and IV fluids<br />
                      <strong>Atony:</strong> bimanual massage, oxytocin, methylergonovine vs carboprost, misoprostol<br />
                      <strong>Uterine inversion:</strong> manual replacement of the uterus<br />
                      <strong>Coagulopathy:</strong> blood transfusion and IV fluids
                    </td>
                  </tr>
                </tbody>
              </table>
        

              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                <thead>
                  <tr><th colSpan={5} style={thStyle}><center>Postpartum Blues</center></th></tr>
                  <tr>
                    <th style={thStyle}>Definition</th>
                    <th style={thStyle}>Risk Factors</th>
                    <th style={thStyle}>Complications</th>
                    <th style={thStyle}>Diagnosis</th>
                    <th style={thStyle}>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      Low mood, mild depressive symptoms, self-limited, resolve within 2 weeks of onset (2-3 days after childbirth)
                    </td>
                    <td style={tdStyle}>
                      Mood changes related to pregnancy, hx of MDD, prior pregnancies
                    </td>
                    <td style={tdStyle}>
                      Increased risk for development of postpartum depression, co-morbid anxiety
                    </td>
                    <td style={tdStyle}>
                      Symptoms (crying, dysphoric affect, irritability, insomnia, appetite changes, etc.) within 2-3 days of delivery<br />
                      Edinburgh postpartum depression scale
                    </td>
                    <td style={tdStyle}>
                      Usually self-limiting, but should be differentiated from postpartum depression and psychosis
                    </td>
                  </tr>
                </tbody>
              </table>
        

              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                <thead>
                  <tr><th colSpan={5} style={thStyle}><center>Postpartum Depression</center></th></tr>
                  <tr>
                    <th style={thStyle}>Definition</th>
                    <th style={thStyle}>Risk Factors</th>
                    <th style={thStyle}>Complications</th>
                    <th style={thStyle}>Diagnosis</th>
                    <th style={thStyle}>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      Similar symptoms to postpartum blues, present within one year of childbirth
                    </td>
                    <td style={tdStyle}>
                      Psychosocial stress, FHx, prior mood disorders, traumatic pregnancy
                    </td>
                    <td style={tdStyle}>
                      Risk for future episodes of MDD, learning/behavior difficulties in children of affected parents
                    </td>
                    <td style={tdStyle}>
                      Screening with Edinburgh postpartum depression scale and symptoms
                    </td>
                    <td style={tdStyle}>
                      Antidepressant medication and psychotherapy
                    </td>
                  </tr>
                </tbody>
              </table>
        

              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                <thead>
                  <tr><th colSpan={5} style={thStyle}><center>Postpartum Psychosis</center></th></tr>
                  <tr>
                    <th style={thStyle}>Definition</th>
                    <th style={thStyle}>Risk Factors</th>
                    <th style={thStyle}>Complications</th>
                    <th style={thStyle}>Diagnosis</th>
                    <th style={thStyle}>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>
                      Extreme confusion, paranoia, delusions, hallucinations within first 6 weeks of childbirth
                    </td>
                    <td style={tdStyle}>
                      Hx of bipolar disorder, prior PP psychosis, family hx, discontinuation of psych meds during pregnancy
                    </td>
                    <td style={tdStyle}>
                      Suicide, harm/death/neglect to/of baby
                    </td>
                    <td style={tdStyle}>
                      Edinburgh postpartum depression scale and Mood Disorder questionnaire<br />
                      Consider organic causes: order labs (electrolytes, LFTs, UDS), CT/MRI if indicated
                    </td>
                    <td style={tdStyle}>
                      <strong>Psychiatric emergency!</strong> Immediate hospitalization if risk to baby/self<br />
                      Pharmacologic: Mood stabilizers, atypical antipsychotics, anti-epileptics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          
      </div>
    ),
  },
    // Add this section to your sections array in ob.js
  
  {
    title: 'Tips for Success',
    content: (
      <div>
        <h3>Tips for Success</h3>
        <ul>
          <li>
            <strong>Tobi:</strong> Gestational diabetes and hypertensive disorders of pregnancy are important and common, so make sure you have a good handle on the questions you want to ask and what you would glean from specific answers from patients. Also, pay close attention to the lab findings considered normal in pregnancy (ex: anemia, thrombocytopenia, increased GFR), and at what levels you might be concerned about the patient.
          </li>
          <li>
            <strong>Ramtin:</strong> It is helpful to review information regarding appropriate prenatal care and common medical history items pertaining to pregnant women. Conditions such as asthma, hypertension, and diabetes are of significance to a medical provider taking care of pregnant women. Become familiarized with how to ultrasound the uterus of a pregnant woman, and subsequent interpretation of results at hand. Have full badge and EPIC access prior to starting your rotation. It could cause a huge headache for yourself and the team if you cannot badge in necessary rooms independently.
          </li>
          <li>
            <strong>Arman:</strong> Try to familiarize yourself with all things prenatal care. Try to get that HPI note down because you may have to write a few/it’ll be helpful for the SP exam as well. I would know some of the FHT, and usually there is a pretty good lecture on this provided by the clerkship. There are also practice websites if you just want more specific practice with different types. If you can read one, you’ll definitely impress many people on the rotation!
          </li>
          <li>
            <strong>Luay:</strong> This document summarizes the main complications of pregnancy which are gHTN and GDM. You will see it a lot! Make sure to be very familiar. Another condition that is common is round ligament pain, treatment is simply Tylenol! When they come with their logs, make sure to circle the abnormal values and upload it onto EPIC! It will be super handy! You will practice a lot doing fundal heights (Height in cm = Weeks of gestation) and FHT. Make sure to always think if medications need to be readjusted and any changes to diet or activities. Medications that are super helpful for mothers is TYLENOL!!! It is their best friend and always recommend appropriate hydration to prevent early deliveries.
          </li>
        </ul>
      </div>
    ),
  },
]
const Ob = ({openIndex, setOpenIndex, startIndex}) => {
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
      title="Obstetrics"
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

export default Ob;