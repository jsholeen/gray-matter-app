import SectionTemplate from '../components/SectionTemplate';
import SubSectionTemplate from '../components/SubSectionTemplate';
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

const Labor = [
  {
    title: "Notes and Presentations",
    content: (
      <div>
        <h3>One-liner (IPASS)</h3>
        <ul>
          <li><strong>I</strong>llness severity: Stable, Improving, Watch closely, or Code Status.
            <ul>
              <li>Stable: Patients you are not worried about.</li>
              <li>Improving: Not acutely unstable but could deteriorate.</li>
              <li>Watch closely: Acutely ill or unstable.</li>
              <li>Code Status: Specify if applicable.</li>
            </ul>
          </li>
          <li><strong>P</strong>atient summary:
            <ul>
              <li>Summary statement in the form of a one-liner.</li>
              <li>Identification statement of the patient including pertinent history.</li>
              <li>Events leading to admission.</li>
              <li>Hospital course of admission.</li>
            </ul>
          </li>
          <li><strong>A</strong>ction list:
            <ul>
              <li>Specific action items for the next provider.</li>
              <li>What needs to be done, when, and what to do about it.</li>
              <li>Pending studies and/or pertinent results to follow up.</li>
            </ul>
          </li>
          <li><strong>S</strong>ituation awareness and Contingency planning:
            <ul>
              <li>Instructions for what may go wrong.</li>
              <li>List of interventions that have or have not worked.</li>
              <li>Contingency planning for problems before things go wrong.</li>
              <li>For stable patients, state no anticipation for things to go wrong.</li>
            </ul>
          </li>
          <li><strong>Synthesis</strong>:
            <ul>
              <li>Receiver restates essential information and demonstrates understanding. (Usually performed by incoming residents, not medical students.)</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Sample IPASS presentation:</strong><br />
          “[room number] is a [doctor/group name] patient G/P, [gestational age], that came in with contractions Q ** minutes, [reason for presentation]. Has a history of low transverse C-section due to non-assuring fetal heart tracing. Most recent check was [cervical dilation measurements] at [time]. Membrane is intact with bulging bag. GBS positive, started on penicillin. Cervical recheck at [time], and will do AROM at that time if unchanged. She has had elevated BP after epidural administration. Labs were sent which were normal. Will keep an eye on her BP. Not meeting criteria for hypertensive disorder at this time.”
        </p>
        <h3>HPI Notes</h3>
        <ul>
          <li><strong>Begin with identifying your patient in a one-liner format:</strong>
            <ul>
              <li>Name and Age</li>
              <li>Gravida (G: # pregnancies), Para (P), Term (T), Preterm (P), Abortion (A), Living (L) → GP(TPAL)</li>
              <li>Chief Complaint: Reason for current admission</li>
              <li>Gestational Age (weeks based on LMP or ultrasound)</li>
            </ul>
          </li>
          <li><strong>Onset and Course of Labor:</strong>
            <ul>
              <li>Onset of contractions: Time, frequency, duration, intensity</li>
              <li>Progression: Contraction pattern, cervical dilation, effacement, station</li>
              <li>Membrane rupture: SROM/AROM, color of amniotic fluid (clear, bloody, meconium)</li>
            </ul>
          </li>
          <li><strong>Previous Obstetric History:</strong>
            <ul>
              <li>Number of previous pregnancies and outcomes</li>
              <li>Complications in previous pregnancies</li>
            </ul>
          </li>
          <li><strong>Current Pregnancy Course:</strong>
            <ul>
              <li>Complications (gestational diabetes, hypertension, preeclampsia)</li>
              <li>Prenatal care: When/where, type of care</li>
              <li>Tests and screenings: Ultrasounds, blood tests, glucose tolerance, etc.</li>
            </ul>
          </li>
          <li>Relevant Medical/Surgical History, Medications, Vaccination status, Allergies, Social History</li>
          <li>Review of Systems: Focus on relevant systems due to fast-paced L&D</li>
          <li> <strong>Physical Exam Findings:</strong>
            <ul>
              <li>Vital signs (BP, pulse, temp, RR)</li>
              <li>Fetal heart rate monitoring</li>
              <li>Abdominal exam (fundal height, fetal position)</li>
              <li>Vaginal exam (cervical dilation, effacement, station, presentation)</li>
            </ul>
          </li>
          <li><strong>Assessment and Plan:</strong>
            <ul>
              <li>Summarize history and exam findings</li>
              <li>Plan for management of labor course</li>
              <li>Anticipated interventions (epidural, induction, C-section if indicated)</li>
            </ul>
          </li>
        </ul>
        <h3>Post-partum Notes</h3>
        <ul>
          <li><strong>Patient Information:</strong>
            <ul>
              <li>Name</li>
              <li>Age</li>
              <li>Date and Time of Delivery</li>
              <li>GP(TPAL)</li>
            </ul>
          </li>
          <li><strong>Delivery Information:</strong>
            <ul>
              <li>Type of Delivery</li>
              <li>Duration of Labor</li>
              <li>Delivery complications</li>
            </ul>
          </li>
          <li><strong>5 B’s:</strong>
            <ul>
              <li>Baby</li>
              <li>Breasts</li>
              <li>Bleeding</li>
              <li>Bottom (Perineum and Pelvic Area)</li>
              <li>Blues</li>
            </ul>
          </li>
          <li><strong>Pain Assessment:</strong>
            <ul>
              <li>Pain Level</li>
              <li>Location</li>
              <li>Quality</li>
              <li>Modifying factors</li>
            </ul>
          </li>
          <li><strong>Maternal Vital Signs and Physical Exam:</strong>
            <ul>
              <li>Blood Pressure</li>
              <li>Heart Rate</li>
              <li>Respiratory Rate</li>
              <li>Temperature</li>
              <li>General Appearance</li>
              <li>Heart and lungs</li>
              <li>Abdomen exam (Uterine tone and Fundal height)</li>
              <li>Incision site (if C/S): erythema, tenderness, edema</li>
              <li>Perineum exam</li>
              <li>Lochia: amount, odor, color</li>
              <li>Extremities: edema, DVT signs</li>
              <li>Breast exam</li>
            </ul>
          </li>
          <li><strong>Infant Information:</strong>
            <ul>
              <li>Name</li>
              <li>Sex</li>
              <li>Birth Weight and Length</li>
              <li>APGAR Scores</li>
              <li>Complications at birth</li>
              <li>Feeding method</li>
              <li>Relevant labs ordered for the newborn</li>
            </ul>
          </li>
          <li><strong>Assessment and Plan:</strong>
            <ul>
              <li>Pain management plan</li>
              <li>Lactation support as needed</li>
              <li>Treatment plan for complications</li>
              <li>Discharge plan with follow-up instructions</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },

    {
    title: "Indications for C/S and SVD & Complications",
    content: (
      <div>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/dRCDgmIetr4?si=HMiPsxY2ii7g9gEz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
        <h3>Indications for C/S and SVD & Complications</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Term</th>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>VBAC</td>
              <td style={tdStyle}>Vaginal birth after C-section: Successful vaginal delivery after a prior C-section</td>
              <td style={tdStyle}>All VBAC patients undergo TOLAC</td>
            </tr>
            <tr>
              <td style={tdStyle}>TOLAC</td>
              <td style={tdStyle}>Trial of Labor after C-section: Attempting vaginal delivery after a prior C-section</td>
              <td style={tdStyle}>TOLAC may be converted to C/S if indicated</td>
            </tr>
          </tbody>
        </table>
        <h4>C/S Indications</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Maternal</th>
              <th style={thStyle}>Uterine/Anatomical</th>
              <th style={thStyle}>Fetal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Pelvic deformity or cephalopelvic disproportion<br />
                History of prior C/S<br />
                Herpes simplex (active lesions) or HIV infection<br />
                Cardiac or pulmonary disease
              </td>
              <td style={tdStyle}>
                Abnormal placentation (previa, accreta)<br />
                Prior classical C/S (vertical incision)<br />
                Prior full thickness myomectomy<br />
                Permanent cerclage<br />
                Genital tract obstructive mass
              </td>
              <td style={tdStyle}>
                Non-reassuring fetal heart tones (late decelerations)<br />
                Abnormal umbilical cord Doppler<br />
                Malpresentation (breech, etc.)<br />
                Macrosomia
              </td>
            </tr>
          </tbody>
        </table>
        <h4>C/S Contraindications</h4>
        <ul>
          <li>Severe coagulopathy of mother</li>
          <li>Extensive history of abdominal surgery</li>
        </ul>
        <h4>C/S Complications</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Complication</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Excessive bleeding/post-partum hemorrhage</td>
              <td style={tdStyle}>May lead to Sheehan’s syndrome (pituitary ischemia, panhypopituitarism)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Infection</td>
              <td style={tdStyle}>Wound infection, endometritis (fever, pain, leukocytosis), concern for sepsis</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vertical (classical) incision</td>
              <td style={tdStyle}>Requires subsequent pregnancies to be C/S</td>
            </tr>
            <tr>
              <td style={tdStyle}>Adhesion formation & abnormal placentation</td>
              <td style={tdStyle}>Increased surgeries = increased risk (placenta accreta spectrum)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Uterine rupture risk</td>
              <td style={tdStyle}>Especially if TOLAC attempted in future; life threatening</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
    {
    title: "Induction of Labor (IOL): Indications and Meds",
    content: (
      <div>
        <h3>Induction of Labor (IOL): Indications</h3>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/9D3X5IqPsP4?si=IddycnKaBAShIiZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Maternal Indications</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Post-Term Pregnancy</td>
              <td style={tdStyle}>Pregnancy ≥ 41-42 weeks</td>
            </tr>
            <tr>
              <td style={tdStyle}>Pre-Eclampsia/Eclampsia</td>
              <td style={tdStyle}>Severe HTN or organ dysfunction</td>
            </tr>
            <tr>
              <td style={tdStyle}>Diabetes</td>
              <td style={tdStyle}>Poorly controlled GDM or pre-existing DM</td>
            </tr>
            <tr>
              <td style={tdStyle}>Premature Rupture of Membranes (PROM)</td>
              <td style={tdStyle}>ROM before onset of labor @ Term → Infection risk</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chorioamnionitis</td>
              <td style={tdStyle}>Infection of the amniotic fluid and membranes</td>
            </tr>
            <tr>
              <td style={tdStyle}>Intrahepatic Cholestasis of Pregnancy</td>
              <td style={tdStyle}>A. Bile Acid accumulation → Severe itching<br />B. Bile acid → Placental interference → Fetal risks including stillbirth</td>
            </tr>
          </tbody>
        </table>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Fetal Indications</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Fetal Growth Restriction (FGR)</td>
              <td style={tdStyle}>Poor fetal growth due to placental insufficiency</td>
            </tr>
            <tr>
              <td style={tdStyle}>Oligohydramnios</td>
              <td style={tdStyle}>Low amniotic fluid volume</td>
            </tr>
            <tr>
              <td style={tdStyle}>Non-Reassuring Fetal Status</td>
              <td style={tdStyle}>Abnormal FHT patterns or compromised fetal well-being</td>
            </tr>
            <tr>
              <td style={tdStyle}>Fetal Demise</td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
        <p><strong>Elective induction</strong> is only considered &gt;39 weeks of gestation to ensure fetal maturity and reduce risks associated with preterm birth.</p>
        <h3>IOL Medications</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Medications</th>
              <th style={thStyle}>Mechanism</th>
              <th style={thStyle}>Administration</th>
              <th style={thStyle}>Indication</th>
              <th style={thStyle}>Monitoring</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Prostaglandins<br />Misoprostol (Cytotec, PGE1)<br />Dinoprostone (Cervidil, Prepidil, PGE2)</td>
              <td style={tdStyle}>Ripen the cervix and stimulate uterine contractions</td>
              <td style={tdStyle}>Vaginal insert or PO (Misoprostol)<br />Vaginal insert or gel (Dinoprostone)</td>
              <td style={tdStyle}>Induction of cervical ripening</td>
              <td style={tdStyle}>Initial cervical check by physical exam</td>
            </tr>
            <tr>
              <td style={tdStyle}>Oxytocin (Pitocin)</td>
              <td style={tdStyle}>Stimulates uterine contractions</td>
              <td style={tdStyle}>IV</td>
              <td style={tdStyle}>Effective when cervix is favorable (Bishop score ≥6)</td>
              <td style={tdStyle}>Requires continuous fetal and uterine monitoring due to risk of hyperstimulation and fetal distress</td>
            </tr>
          </tbody>
        </table>
        <h3>IOL Physical Methods</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Purpose/Mechanism</th>
              <th style={thStyle}>Procedure</th>
              <th style={thStyle}>Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Mechanical Methods<br />Foley/Cook Balloon Catheter</td>
              <td style={tdStyle}>Less risk of uterine hyperstimulation compared to pharmacology</td>
              <td style={tdStyle}>Inserted into cervix and inflated to mechanically dilate; left ≤12 hours or until expelled</td>
              <td style={tdStyle}><ul><li>Best when cervix is unfavorable (Bishop score below 6)</li><li><strong>Contraindicated </strong>when vaginal birth would be unsafe (placenta previa, cord prolapse, etc.)</li></ul></td>
            </tr>
            <tr>
              <td style={tdStyle}>Membrane Stripping</td>
              <td style={tdStyle}>Releases natural prostaglandins → Promote cervical ripening and contractions</td>
              <td style={tdStyle}>Sweeps gloved finger around cervix to separate amniotic sac from uterine wall</td>
              <td style={tdStyle}>Requires an effaced and dilated cervix for provider to be able to touch the membranes</td>
            </tr>
            <tr>
              <td style={tdStyle}>Amniotomy (AROM)</td>
              <td style={tdStyle}>Facilitates labor by increasing rate of cervical dilation and strength of uterine contractions</td>
              <td style={tdStyle}>Small hook used to break amniotic sac</td>
              <td style={tdStyle}>Often used with other methods, requires continuous monitoring, risks: cord prolapse, infection</td>
            </tr>
          </tbody>
        </table>
        <h3>IOL Contraindications</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Contraindication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Placenta previa or vasa previa</td>
            </tr>
            <tr>
              <td style={tdStyle}>Transverse fetal lie</td>
            </tr>
            <tr>
              <td style={tdStyle}>Umbilical cord prolapse</td>
            </tr>
            <tr>
              <td style={tdStyle}>Active genital herpes infection</td>
            </tr>
            <tr>
              <td style={tdStyle}>Previous classical C/S delivery or extensive uterine surgery</td>
            </tr>
          </tbody>
        </table>
    
      </div>
    ),
  },

{
  title: "Fetal Heart Tracings",
  content: (
    <div>
      <h3>Fetal Heart Tracing Overview</h3>
      <center><iframe width="560" height="315" src="https://www.youtube.com/embed/ruBOnGByk38?si=hvLLcjEY1yCLt5OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
      <p>
        Fetal heart tracing is used to monitor fetal well-being during labor by relating fetal heart rate (FHR) to uterine contractions.
      </p>
      <h4>Fetal Heart Rate (FHR) Ranges</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr>
            <th style={thStyle}>Fetal Bradycardia</th>
            <th style={thStyle}>Normal Range</th>
            <th style={thStyle}>Fetal Tachycardia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>FHR &lt; 110 bpm</td>
            <td style={tdStyle}>FHR 110-160 bpm</td>
            <td style={tdStyle}>FHR &gt; 160 bpm</td>
          </tr>
        </tbody>
      </table>
      <h4>Variability (FHR Fluctuations from Baseline)</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr>
            <th style={thStyle}>Absent</th>
            <th style={thStyle}>Minimal</th>
            <th style={thStyle}>Moderate (Normal)</th>
            <th style={thStyle}>Marked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Undetectable variation</td>
            <td style={tdStyle}>FHR variation &lt; 5 bpm</td>
            <td style={tdStyle}>FHR variation of 6-25 bpm</td>
            <td style={tdStyle}>FHR variation &gt; 25 bpm</td>
          </tr>
        </tbody>
      </table>
      <h4>Accelerations</h4>
      <ul>
        <li>Indicate fetal well-being in most cases due to expected immature nervous system.</li>
        <li>&ge; 32 weeks: Increase of &ge; 15 bpm for &ge; 15 seconds</li>
        <li>&le; 32 weeks: Increase of &ge; 10 bpm for &ge; 10 seconds</li>
      </ul>
      <h4>Decelerations</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Benign or Not?</th>
            <th style={thStyle}>Etiology</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Early Deceleration</td>
            <td style={tdStyle}>Usually benign</td>
            <td style={tdStyle}>Head compression</td>
          </tr>
          <tr>
            <td style={tdStyle}>Late Deceleration</td>
            <td style={tdStyle}>Warrants further evaluation</td>
            <td style={tdStyle}>Uteroplacental insufficiency and fetal hypoxia</td>
          </tr>
          <tr>
            <td style={tdStyle}>Prolonged Deceleration</td>
            <td style={tdStyle}>Indicates fetal oxygenation interruption</td>
            <td style={tdStyle}>&ge; 15 bpm decrease lasting &ge; 2 min but &lt; 10 min</td>
          </tr>
          <tr>
            <td style={tdStyle}>Variable Deceleration</td>
            <td style={tdStyle}>Benign/problematic depending on severity and return to normal FHR</td>
            <td style={tdStyle}>Umbilical cord compression</td>
          </tr>
        </tbody>
        <h4>Early Decelerations</h4>
        <img src="https://www.aafp.org/content/dam/brand/aafp/pubs/afp/issues/1999/0501/p2487-f5.gif" alt="Early Deceleration" style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
        <p>Early deceleration in a patient with an unremarkable course of labor. Notice that the onset and the return of the deceleration coincide with the start and the end of the contraction, giving the characteristic mirror image.</p>
        <h4>Late Decelerations</h4>
        <img src="https://www.aafp.org/content/dam/brand/aafp/pubs/afp/issues/1999/0501/p2487-f6.gif" alt="Late Deceleration" style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
        <p>Nonreassuring pattern of late decelerations with preserved beat-to-beat variability. Note the onset at the peak of the uterine contractions and the return to baseline after the contraction has ended. The second uterine contraction is associated with a shallow and subtle late deceleration.</p>
        <h4>Variable Decelerations (without variabilitiy)</h4>
        <img src="https://www.aafp.org/content/dam/brand/aafp/pubs/afp/issues/1999/0501/p2487-f7.gif" alt="Variable Deceleration" style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
        <p>Late deceleration with loss of variability. This is an ominous pattern, and immediate delivery is indicated.</p>
      </table>
      <h4>FHR Categories</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr>
            <th style={thStyle}>Category I</th>
            <th style={thStyle}>Category II</th>
            <th style={thStyle}>Category III</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>
              Normal<br />
              No late or variable decelerations<br />
              Moderate variability
            </td>
            <td style={tdStyle}>
              Intermediate, warrants surveillance<br />
              Not category I or III<br />
              Minimal or marked variations<br />
              Absence of accelerations<br />
              Recurrent variable/prolonged decelerations
            </td>
            <td style={tdStyle}>
              Abnormal, warrants immediate evaluation/intervention<br />
              Absence of variability with recurrent late/variable decelerations or bradycardia<br />
              Sinusoidal pattern<br />
              Indicates fetal anemia or hypoxia
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Mnemonic: VEAL CHOP MINE</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr>
            <th style={thStyle}>FHT Pattern (VEAL)</th>
            <th style={thStyle}>Cause (CHOP)</th>
            <th style={thStyle}>Management (MINE)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Variable Deceleration</td>
            <td style={tdStyle}>Cord Compression</td>
            <td style={tdStyle}>Maternal Repositioning</td>
          </tr>
          <tr>
            <td style={tdStyle}>Early Deceleration</td>
            <td style={tdStyle}>Head Compression</td>
            <td style={tdStyle}>Identify Labor Progress</td>
          </tr>
          <tr>
            <td style={tdStyle}>Acceleration</td>
            <td style={tdStyle}>Okay!</td>
            <td style={tdStyle}>No interventions</td>
          </tr>
          <tr>
            <td style={tdStyle}>Late Deceleration</td>
            <td style={tdStyle}>Placental Insufficiency</td>
            <td style={tdStyle}>Execute Interventions</td>
          </tr>
        </tbody>
      </table>
      <h3>Bishop Score</h3>
      <img src="/Bishop score.png" alt="Bishop Score Table" style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
    </div>
  ),
},
{
  title: "Tips for Success",
  content: (
    <div>
      <h3>Tips for Success</h3>
      <h4>Ramtin</h4>
      <ul>
        <li>Get familiar with the floor plan of your unit and passkeys to storage areas. Before each vaginal delivery, you are often expected to grab your own gown and gloves. Know your glove size.</li>
        <li>Practice correct scrubbing and gown/glove techniques since you will participate in vaginal and C-section deliveries daily.</li>
        <li>Learn fetal heart rate monitoring interpretation techniques. This helps you anticipate when a C-section may occur. Residents may be busy and forget to inform you of a delivery, so being able to recognize when to attend is helpful.</li>
      </ul>
      <h4>Tobi</h4>
      <ul>
        <li>Ask to be assigned to a patient by your resident(s) or suggest a patient to follow at the start of your shift. This increases your involvement when something happens with that patient. Independence is important, so also follow Ramtin’s advice above.</li>
        <li>Go through your IPASS with your resident before presenting; this is good last-minute practice and ensures you don’t leave out anything important.</li>
        <li>Show willingness to help the team outside of the OR and deliveries. Getting histories, writing notes on patients receiving magnesium sulfate, and completing other tasks are helpful and good learning opportunities.</li>
      </ul>
      <h4>Luay</h4>
      <ul>
        <li>Pay attention to when Pitocin and misoprostol are given so you know when to check up on the patient.</li>
        <li>Use downtime productively:
          <ul>
            <li>Read up on your patients</li>
            <li>UWorld practice questions</li>
            <li>Practice suturing in the back at PFW</li>
            <li>Go to WAC at PFW</li>
            <li>Meet and stay with the nurses for your patient. This can be a valuable experience, especially if you follow a patient through SVD, non-reassuring FHTs, and C/S. Being present throughout is a great opportunity.</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  },

]

const Obstetrics = [
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

const Gynecology = [
  {
    title: "Abnormal Uterine Bleeding",
    content: (
      <div>
        <h3>Definition</h3>
        <p>
          Any deviation from the normal menstrual cycle in terms of regularity, frequency, duration, and volume.
        </p>

        <h2>Uterine Fibroids (Leiomyomas)</h2>
        <p>
          Benign smooth muscle tumors of the uterus: Intramural, Submucosal, Subserosal.<br />
          Affects up to 70-80% women by age 50.
        </p>
        <h4>Related Questions</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Have you experienced HMB or intermenstrual bleeding? Do you have any pelvic pain or pressure? Have you noticed any changes in your menstrual cycle?</td>
              <td style={tdStyle}>Do you experience frequent urination or difficulty emptying your bladder? Have you had any bowel issues like constipation?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Are you currently trying to conceive, or have you had any issues with infertility? Have you had any pregnancy complications or miscarriages?</td>
              <td style={tdStyle}>How are your symptoms affecting your daily life and activities? Are your symptoms impacting your work or social life?</td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Women in their childbearing years through menopause (Estrogen and progesterone promote fibroid growth)</td>
              <td style={tdStyle}>Postmenopausal women – lower risk</td>
              <td style={tdStyle}>AA women are at higher risk for developing fibroids</td>
              <td style={tdStyle}>Family Hx</td>
            </tr>
          </tbody>
        </table>
        <h4>Diagnosis</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Exam</th>
              <th style={thStyle}>Imaging</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Bimanual Pelvic Exam: enlarged or irregular uterus</td>
              <td style={tdStyle}>
                TVUS: Measure and map the location of fibroids<br />
                Hysterosonography: Better uterine cavity visualization<br />
                MRI
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Differential Diagnosis</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Endometrial polyp</td>
              <td style={tdStyle}>Endometrial hyperplasia</td>
              <td style={tdStyle}>Ovarian cyst</td>
              <td style={tdStyle}>Leiomyosarcoma</td>
            </tr>
          </tbody>
        </table>
        <h4>Complications</h4>
        <p>
          Potential to put pregnancy at risk for breech position from structural pressure.
        </p>

        <h2>Adenomyosis</h2>
        <p>
          Presence of endometrial tissue within myometrium → Enlarged uterus → heavy painful periods.<br />
          Common in women aged 40-50.
        </p>
        <h4>Related Questions</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Are your periods particularly heavy or painful?</td>
              <td style={tdStyle}>How many pads/tampons do you use per day? (also ask a description of the size of pad/tampon used)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Is there bleeding only during menstrual cycles? Is there intermenstrual bleeding?</td>
              <td style={tdStyle}>Have you had any uterine surgeries or procedures in the past? Any pregnancies in the past/Cesarean sections?</td>
            </tr>
          </tbody>
        </table>
        <h4>Risk Factors</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Women of childbearing age</td>
              <td style={tdStyle}>Multiparity</td>
              <td style={tdStyle}>Previous uterine surgery or C/S</td>
              <td style={tdStyle}>Elevated estrogen levels</td>
            </tr>
          </tbody>
        </table>
        <h4>Diagnosis</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Exam</th>
              <th style={thStyle}>Imaging</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Bimanual Pelvic Exam: enlarged or irregular uterus</td>
              <td style={tdStyle}>
                TVUS: Enlarged myometrium (Diffuse thickening of the uterine wall, no discrete mass)<br />
                MRI: Detailed images showing thickening junctional zone between endometrium and myometrium
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Differential Diagnosis</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Uterine Fibroids</td>
              <td style={tdStyle}>Endometriosis</td>
              <td style={tdStyle}>Endometrial Polyps</td>
              <td style={tdStyle}>Endometrial Cancer</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    title: "Contraceptives",
    content: (
      <div>
        <h3>Definition</h3>
        <p>
          Methods or devices used to prevent pregnancy. Variety of methods used and each should be considered based on their efficacy, comfort, and contraindications.
        </p>

        <h4>Hormonal Methods</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Questions</th>
              <th style={thStyle}>Indications</th>
              <th style={thStyle}>Contraindications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>Combined OCP</strong></td>
              <td style={tdStyle}>
                Have you ever used OCPs before?<br />
                Have you experienced any side effects from OCPs in the past?<br />
                Are you able to take a pill at the SAME TIME every day?<br />
                Do you have any medical conditions like HTN that might be affected by hormonal contraceptives?
              </td>
              <td style={tdStyle}>
                Highly effective contraception<br />
                Regulates menstrual cycles
              </td>
              <td style={tdStyle}>
                Hx thromboembolic disorders<br />
                Active liver disease<br />
                Hormone-sensitive cancers (breast)<br />
                Uncontrolled HTN<br />
                Smoking<br />
                Migraines
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Progestin-only pills</strong></td>
              <td style={tdStyle}>
                Have you ever used OCPs before?<br />
                Are you able to take a pill at the SAME TIME every day?
              </td>
              <td style={tdStyle}>
                Women breastfeeding (does not affect milk supply)<br />
                Unable to take estrogen (due to risk of blood clots)<br />
                Women preferring a pill with fewer hormonal side effects
              </td>
              <td style={tdStyle}>
                Active liver disease<br />
                Current breast cancer<br />
                History of CVD
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Transdermal Patch</strong></td>
              <td style={tdStyle}>
                Have you used the contraceptive patch before?<br />
                Do you have any skin sensitivities or allergies that might be affected by the patch?<br />
                Are you comfortable remembering to change the patch weekly?
              </td>
              <td style={tdStyle}>
                Women who prefer a weekly method over daily pills<br />
                Those seeking a method that combines estrogen and progestin
              </td>
              <td style={tdStyle}>
                Similar to combined OCPs<br />
                Skin conditions that may affect patch adhesion
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Depo-Provera (Injection)</strong></td>
              <td style={tdStyle}>
                Have you considered or used contraceptive injections like Depo-Provera?<br />
                Are you aware of the injection schedule (every three months)?<br />
                Do you have any concerns about weight gain or bone density loss with injections?
              </td>
              <td style={tdStyle}>
                Women seeking long-term contraception (every 3 months)<br />
                Those who have difficulty remembering daily pills<br />
                Women with conditions that could benefit from progestin (endometriosis)
              </td>
              <td style={tdStyle}>
                Current breast cancer<br />
                Osteoporosis or significant risk of bone density loss<br />
                Uncontrolled HTN<br />
                Hx depression
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Vaginal Rings</strong></td>
              <td style={tdStyle}>
                Have you used a vaginal ring like NuvaRing before?<br />
                Are you comfortable inserting and removing the ring yourself?<br />
                Do you have any concerns about the ring being in place during intercourse?
              </td>
              <td style={tdStyle}>
                Women preferring a monthly method<br />
                Those comfortable with self-insertion/removal
              </td>
              <td style={tdStyle}>
                Contraindications similar to combined OCPs
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Barrier Methods</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Questions</th>
              <th style={thStyle}>Indications</th>
              <th style={thStyle}>Contraindications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>Condoms (Male and Female)</strong></td>
              <td style={tdStyle}>
                Do you or your partner use condoms consistently during intercourse?<br />
                Have you experienced any issues with condom breakage or slippage?<br />
                Are you aware of both male and female condom options?<br />
                Do you have any allergies to latex or other materials used in condoms?
              </td>
              <td style={tdStyle}>
                Individuals seeking protection against STI and pregnancy<br />
                Prefer non-hormonal contraceptive method<br />
                Situations requiring occasional contraception without long-term commitment
              </td>
              <td style={tdStyle}>
                Latex allergy
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Diaphragms and Cervical Caps</strong></td>
              <td style={tdStyle}>
                Have you used a diaphragm or cervical cap before?<br />
                Do you know how to properly insert and remove these devices?<br />
                Are you comfortable with using spermicide with the diaphragm/cervical cap?<br />
                Have you had any issues with fitting or discomfort with these devices?
              </td>
              <td style={tdStyle}>
                Non-hormonal method<br />
                Occasional contraception
              </td>
              <td style={tdStyle}>
                Allergy to materials<br />
                Difficulty with fitting
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Permanent Methods</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Questions</th>
              <th style={thStyle}>Indications</th>
              <th style={thStyle}>Contraindications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>Tubal Ligation (Females)</strong></td>
              <td style={tdStyle}>
                Have you decided that you do not want any (more) children in the future?<br />
                Are you aware that tubal ligation is a permanent form of contraception?<br />
                Do you have any medical conditions that might affect the surgery?<br />
                Are you aware of the risks and benefits associated with tubal ligation?
              </td>
              <td style={tdStyle}>
                Those who are certain they do not want children<br />
                Couples seeking permanent, reliable contraception
              </td>
              <td style={tdStyle}>
                Uncertainty about future desire for children<br />
                Conditions preventing safe surgery
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Vasectomies (Males)</strong></td>
              <td style={tdStyle}>
                Have you discussed permanent contraception with your partner?<br />
                Are you aware of the vasectomy procedure and its permanence?<br />
                Do you and your partner have any concerns about the recovery period or potential complications?
              </td>
              <td style={tdStyle}>
                Couples seeking permanent, reliable contraception
              </td>
              <td style={tdStyle}>
                Uncertainty about future desire for children<br />
                Conditions preventing safe surgery
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Long-Acting Reversible Contraceptives (LARCs)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Questions</th>
              <th style={thStyle}>Indications</th>
              <th style={thStyle}>Contraindications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>IUDs (Hormonal & Non-Hormonal)</strong></td>
              <td style={tdStyle}>
                Are you looking for a long-term contraceptive solution?<br />
                Do you have any preferences between non-hormonal (copper) and hormonal IUDs?<br />
                Are you aware of the duration of effectiveness for each type of IUD?<br />
                Do you have any concerns about the initial side effects or adjustment period?
              </td>
              <td style={tdStyle}>
                <strong>Hormonal IUD:</strong><br />
                Long-term contraception (3-7 years depending on type)<br />
                Women with heavy menstrual bleeding (can reduce bleeding)<br />
                Those seeking a low maintenance option<br />
                Highly efficacious contraception<br />
                <strong>Non-Hormonal IUD:</strong><br />
                Long-term contraception (effective up to 10 years)<br />
                Prefer hormone-free method<br />
                Emergency contraception (within 5 days of unprotected intercourse)
              </td>
              <td style={tdStyle}>
                <strong>Hormonal IUD:</strong><br />
                Current or past breast cancer<br />
                Current PID or active STI<br />
                Uterine abnormalities<br />
                Undiagnosed vaginal bleeding<br />
                Active liver disease<br />
                Thromboembolic disease<br />
                <strong>Non-Hormonal IUD:</strong><br />
                Current PID or active STI<br />
                Uterine abnormalities<br />
                Heavy menstrual bleeding<br />
                Wilson’s disease or copper allergy
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Implants (Nexplanon)</strong></td>
              <td style={tdStyle}>
                Are you interested in a contraceptive method that requires minimal maintenance?
              </td>
              <td style={tdStyle}>
                Long term (3 years)<br />
                Low maintenance<br />
                Progestin only contraception benefits<br />
                Breastfeeding<br />
                Ideal for those who cannot take estrogen
              </td>
              <td style={tdStyle}>
                Allergy to Nexplanon components<br />
                Current or past breast cancer<br />
                Active liver disease<br />
                Undiagnosed vaginal bleeding
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Emergency Contraception</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Questions</th>
              <th style={thStyle}>Indications</th>
              <th style={thStyle}>Contraindications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><strong>Plan B</strong></td>
              <td style={tdStyle}>
                Are you aware of the different types of emergency contraception available?<br />
                Have you ever used emergency contraception before?<br />
                Do you know the time frame within which each type of emergency contraception is effective?
              </td>
              <td style={tdStyle}>
                Situations of unprotected intercourse or contraception failure within 5 DAYS of intercourse!
              </td>
              <td style={tdStyle}>
                Known or suspected pregnancy<br />
                Severe liver disease
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Ella</strong></td>
              <td style={tdStyle}>
                Are you aware of the different types of emergency contraception available?<br />
                Have you ever used emergency contraception before?<br />
                Do you know the time frame within which each type of emergency contraception is effective?
              </td>
              <td style={tdStyle}>
                Situations of unprotected intercourse or contraception failure within 5 DAYS of intercourse!
              </td>
              <td style={tdStyle}>
                Known or suspected pregnancy<br />
                Severe liver disease
              </td>
            </tr>
            <tr>
              <td style={tdStyle}><strong>Copper IUD</strong></td>
              <td style={tdStyle}>
                Are you aware that the copper IUD can also be used as emergency contraception?
              </td>
              <td style={tdStyle}>
                Situations of unprotected intercourse or contraception failure within 5 DAYS of intercourse!
              </td>
              <td style={tdStyle}>
                Known or suspected pregnancy<br />
                Severe liver disease<br />
                Wilson’s disease or copper allergy
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    title: "Sexually Transmitted Infections (STIs)",
    content: (
      <div>
        <h3>Questions to Ask Patients</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>General Questions</th>
              <th style={thStyle}>Diagnosis Questions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Are you currently sexually active? With how many partners? Men, women, both?</td>
              <td style={tdStyle}>Have you noticed any change in the color or consistency of your discharge recently?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Have you ever been tested for STIs in the past? Do you know if your partner(s) have ever been tested in the past?</td>
              <td style={tdStyle}>Have you noticed an increase in bleeding recently?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Do you regularly use condoms when you have sex?</td>
              <td style={tdStyle}>Have you had any pain or discomfort with urination recently? Have you noticed an increase in frequency of urination?</td>
            </tr>
            <tr>
              <td style={tdStyle}></td>
              <td style={tdStyle}>Have you noticed that sex has become more painful for you recently?</td>
            </tr>
          </tbody>
        </table>

        <h3>Vaginitis</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Organism</th>
              <th style={thStyle}>Symptoms</th>
              <th style={thStyle}>Diagnosis</th>
              <th style={thStyle}>Treatment</th>
              <th style={thStyle}>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Bacterial Vaginosis</td>
              <td style={tdStyle}>Grayish-white, thin discharge, fishy odor</td>
              <td style={tdStyle}>Amsel criteria (thin discharge, positive whiff test, clue cells on microscopy, vaginal pH &gt;4.5)</td>
              <td style={tdStyle}>Metronidazole (oral or vaginal), clindamycin (vaginal cream)</td>
              <td style={tdStyle}>BV is not sexually transmitted but is associated with sexual activity.</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vulvovaginal candidiasis</td>
              <td style={tdStyle}>Thick, white, "cottage cheese-like" discharge, itching, redness</td>
              <td style={tdStyle}>Microscopy (budding yeast/hyphae), vaginal pH &lt;4.5, clinical exam</td>
              <td style={tdStyle}>Fluconazole (oral), topical antifungals (clotrimazole, miconazole)</td>
              <td style={tdStyle}>Yeast infections are not STIs, and can be recurrent, especially in immunocompromised patients.</td>
            </tr>
          </tbody>
        </table>

        <h3>Cervicitis</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Organism</th>
              <th style={thStyle}>Symptoms</th>
              <th style={thStyle}>Diagnosis</th>
              <th style={thStyle}>Treatment</th>
              <th style={thStyle}>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Chlamydia Trachomatis</td>
              <td style={tdStyle}>Often asymptomatic; may have discharge, dysuria, bleeding after sex</td>
              <td style={tdStyle}>Nucleic Acid Amplification Test (NAAT)</td>
              <td style={tdStyle}>Azithromycin OR Doxycycline</td>
              <td style={tdStyle}>Screening for all sexually active women &lt;25; consider HIV screening if positive</td>
            </tr>
            <tr>
              <td style={tdStyle}>Neisseria gonococcus</td>
              <td style={tdStyle}>Purulent discharge, painful urination, pelvic pain</td>
              <td style={tdStyle}>NAAT, culture for gonorrhea</td>
              <td style={tdStyle}>Ceftriaxone w/ doxycycline or azithromycin for chlamydia co-infection</td>
              <td style={tdStyle}>Screening for all sexually active women &lt;25; consider HIV screening if positive</td>
            </tr>
            <tr>
              <td style={tdStyle}>Trichomonas vaginalis</td>
              <td style={tdStyle}>Frothy, greenish discharge, irritation, itching</td>
              <td style={tdStyle}>NAAT, wet mount microscopy</td>
              <td style={tdStyle}>Metronidazole</td>
              <td style={tdStyle}>Sexually transmitted; partners must also be treated</td>
            </tr>
          </tbody>
        </table>

        <h3>Syphilis</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Stage</th>
              <th style={thStyle}>Symptoms</th>
              <th style={thStyle}>Diagnosis</th>
              <th style={thStyle}>Treatment</th>
              <th style={thStyle}>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Primary Syphilis</td>
              <td style={tdStyle}>Painless chancre (ulcer) at infection site, lymphadenopathy</td>
              <td style={tdStyle}>RPR or VDRL with confirmation by treponemal tests (FTA-ABS)</td>
              <td style={tdStyle}>Benzathine penicillin G, single dose IM</td>
              <td style={tdStyle}>Test for HIV, as co-infection is common</td>
            </tr>
            <tr>
              <td style={tdStyle}>Secondary Syphilis</td>
              <td style={tdStyle}>Diffuse rash (including palms/soles), mucous patches, condylomata lata</td>
              <td style={tdStyle}>Same as primary; skin or lymph node biopsy may aid in diagnosis</td>
              <td style={tdStyle}>Benzathine penicillin G, 3 doses IM at 1-week intervals</td>
              <td style={tdStyle}>Follow up with RPR titer to monitor response to treatment</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tertiary Syphilis</td>
              <td style={tdStyle}>Gummas (granulomatous lesions), cardiovascular or neurologic involvement</td>
              <td style={tdStyle}>Same as above, also CSF evaluation for neurosyphilis</td>
              <td style={tdStyle}>IV Penicillin G for neurosyphilis or high-dose Benzathine penicillin G</td>
              <td style={tdStyle}>Long-term follow-up needed for late complications, especially neurosyphilis</td>
            </tr>
          </tbody>
        </table>

        <h3>HIV Screening</h3>
        <ul>
          <li>All patients 13-75 years of age should be screened once</li>
          <li>More consistent screening for patients who:
            <ul>
              <li>IV Drug users</li>
              <li>Sex with partners of unknown or known positive HIV status or inject drugs</li>
            </ul>
          </li>
          <li>Refer to OB document for specific information on HIV screening and treatment for pregnant patients</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Gynecologic & Breast Cancer",
    content: (
      <div>
        <h3>Pap Smear Screening (Outpatient Clinic)</h3>
        <p>
          <strong>Purpose:</strong> Cytological test to screen for cervical cancer and precancerous changes. Enables early detection and treatment.
        </p>
        <h4>UTPSTF Guidelines</h4>
        <ul>
          <li>21-29: Every 3 years (HPV testing not required; may be done if abnormal)</li>
          <li>30-65: Every 3 years (Pap alone) OR every 5 years (Pap + HPV co-testing)</li>
          <li>65+: Discontinue if no abnormal results in past 10 years and 3 consecutive negative Pap smears or 2 negative co-tests (most recent within 5 years). <br /> <strong>Exceptions:</strong> History of cervical cancer, CIN 2/3, immunocompromised.</li>
        </ul>
        <h4>Questions to Ask Patients</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Do you have any chronic medical conditions? Conditions that affect your immune system (HIV)?</td>
              <td style={tdStyle}>Have you ever had any surgeries, particularly gynecological procedures?</td>
              <td style={tdStyle}>When was your last menstrual period? Are your periods regular?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Have you experienced any unusual bleeding or discharge?</td>
              <td style={tdStyle}>Have you had a pap smear before? If so, when? Any abnormal results?</td>
              <td style={tdStyle}>Are you currently sexually active? Number of partners? Contraception?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Have you experienced any pain during intercourse?</td>
              <td style={tdStyle}>Any pelvic pain/discomfort, itching, burning, odor? STI history?</td>
              <td style={tdStyle}>Do you smoke? Packs/day? If quit, when?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Need info on other preventative screenings (HPV vaccine)?</td>
            </tr>
          </tbody>
        </table>
        <h4>Procedure</h4>
        <ul>
          <li>Patient in lithotomy position, draped for privacy</li>
          <li>Speculum insertion (lubrication per guidelines)</li>
          <li>Use cytobrush/spatula/broom to collect cells from ectocervix and endocervix</li>
          <li>Proper sanitation; refer to preceptor for guidance</li>
        </ul>
        <h4>Special Notes</h4>
        <ul>
          <li>Endometrial cells on pap smears in postmenopausal women are abnormal</li>
          <li>Atypical cells may indicate endometrial/cervical adenocarcinoma</li>
          <li>If found, do colposcopy/endocervical curettage/endometrial biopsy</li>
        </ul>

        <h3>Endometrial vs Cervical vs Ovarian Cancers</h3>
        <h4>General Questions to Assess for Cancer Recurrence</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <tbody>
            <tr>
              <td style={tdStyle}>Any vaginal bleeding?</td>
              <td style={tdStyle}>Any constipation/melena?</td>
              <td style={tdStyle}>Any fistulas (bladder/bowel)?</td>
              <td style={tdStyle}>Any CVA/flank pain?</td>
            </tr>
            <tr>
              <td style={tdStyle}>Any hematuria/dysuria?</td>
              <td style={tdStyle}>Any pelvic & leg pain?</td>
              <td style={tdStyle}>Any sacral backache/sciatic pain?</td>
            </tr>
          </tbody>
        </table>

        <h4>Endometrial Cancer</h4>
        <p><strong>Definition:</strong> Malignancy from uterine lining. Most common gynecologic cancer, usually post-menopause.</p>
        <h5>Symptoms</h5>
        <ul>
          <li>Abnormal vaginal bleeding (between periods or after menopause)</li>
          <li>Unusual vaginal discharge</li>
          <li>Pelvic pain or pressure</li>
          <li>Unexplained weight loss or fatigue</li>
        </ul>
        <h5>Risk Factors</h5>
        <ul>
          <li>PCOS or hormonal imbalances</li>
          <li>Tamoxifen for breast cancer</li>
          <li>Hormone replacement therapy</li>
          <li>Personal/family history of endometrial/colorectal cancer</li>
          <li>Overweight/obese</li>
        </ul>
        <h5>Family/Medical History</h5>
        <ul>
          <li>Lynch syndrome or hereditary cancer syndromes</li>
          <li>Previous gynecological surgeries/treatments</li>
          <li>Chronic health conditions</li>
        </ul>
        <h5>Screening & Diagnosis</h5>
        <ul>
          <li>TVUS (endometrial thickness)</li>
          <li>Endometrial biopsy (gold standard)</li>
          <li>Hysteroscopy (visualization/biopsy)</li>
          <li>Pelvic MRI/CT (staging/metastasis)</li>
        </ul>
        <h5>Management</h5>
        <ul>
          <li>Surgical: TH/BSO (hysterectomy + bilateral salpingo-oophorectomy)</li>
          <li>Radiation (advanced/local recurrence)</li>
          <li>Chemotherapy (carboplatin, paclitaxel)</li>
          <li>Hormone therapy (hormone receptor-positive, non-surgical candidates)</li>
        </ul>

        <h4>Cervical Cancer</h4>
        <p><strong>Definition:</strong> Cancer of cervix, usually from persistent high-risk HPV (16, 18).</p>
        <h5>Symptoms</h5>
        <ul>
          <li>Abnormal vaginal bleeding (after intercourse, between periods, or after menopause)</li>
          <li>Unusual vaginal discharge (watery, bloody, foul odor)</li>
          <li>Pelvic pain or pain during intercourse</li>
          <li>Unexplained weight loss or fatigue</li>
        </ul>
        <h5>Risk Factors</h5>
        <ul>
          <li>HPV infection</li>
          <li>Smoking</li>
          <li>Multiple sexual partners/early sexual activity</li>
          <li>Long-term oral contraceptive use</li>
          <li>Immunocompromised (HIV/AIDS)</li>
        </ul>
        <h5>Screening & Diagnosis</h5>
        <ul>
          <li>Pap smear</li>
          <li>HPV testing</li>
          <li>Colposcopy/biopsy (after abnormal Pap)</li>
          <li>Staging imaging (MRI, CT, PET)</li>
        </ul>
        <h5>Vaccination</h5>
        <ul>
          <li>HPV vaccine (ask age at vaccination)</li>
        </ul>
        <h5>Management</h5>
        <ul>
          <li>Early: LEEP, cone biopsy, radical hysterectomy</li>
          <li>Locally advanced: Radiation + cisplatin-based chemotherapy</li>
          <li>Advanced/metastatic: Chemotherapy +/- targeted therapy (bevacizumab)</li>
        </ul>

        <h4>Ovarian Cancer</h4>
        <p><strong>Definition:</strong> Malignancy from ovarian tissue, often advanced at diagnosis. Includes epithelial, germ cell, stromal tumors.</p>
        <h5>Symptoms</h5>
        <ul>
          <li>Persistent bloating, abdominal/pelvic pain</li>
          <li>Difficulty eating/full quickly</li>
          <li>Changes in bowel/bladder habits</li>
          <li>Unexplained weight loss or fatigue</li>
        </ul>
        <h5>Risk Factors</h5>
        <ul>
          <li>Personal/family history of ovarian, breast, colorectal cancer</li>
          <li>BRCA1/BRCA2 mutations</li>
          <li>Hormone replacement therapy</li>
          <li>Nulliparity/late menopause</li>
          <li>Fertility treatments</li>
        </ul>
        <h5>Screening & Diagnosis</h5>
        <ul>
          <li>Pelvic exam, TVUS, CA-125 blood test</li>
          <li>Biopsy/exploratory surgery</li>
          <li>CT/MRI for staging</li>
          <li>Surgical exploration/biopsy for confirmation</li>
        </ul>
        <h5>Management</h5>
        <ul>
          <li>Surgical debulking (removal of ovaries, uterus, tumor)</li>
          <li>Chemotherapy (platinum-based, taxane)</li>
          <li>Targeted therapy (PARP inhibitors for BRCA-mutated)</li>
          <li>Monitoring (CA-125, imaging)</li>
        </ul>

        <h3>Breast Cancer & Nodules</h3>
        <h4>General Questions</h4>
        <ul>
          <li>Any lumps or changes in breasts?</li>
          <li>Breast pain or tenderness?</li>
          <li>Nipple discharge?</li>
          <li>Family history of breast cancer?</li>
          <li>BRCA1/BRCA2 mutations?</li>
          <li>Age at menarche/menopause?</li>
          <li>Last mammogram?</li>
          <li>Do you perform regular self-exams?</li>
        </ul>
        <h4>Breast Cancer Pearls (Fixed)</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>DCIS</td>
              <td style={tdStyle}>No invasion; microcalcifications on mammography</td>
            </tr>
            <tr>
              <td style={tdStyle}>IDC</td>
              <td style={tdStyle}>Invasive, palpable mass, skin dimpling/nipple retraction</td>
            </tr>
            <tr>
              <td style={tdStyle}>ILC</td>
              <td style={tdStyle}>Found incidentally, loss of E-cadherin, possible bilateral cancer</td>
            </tr>
            <tr>
              <td style={tdStyle}>IBC</td>
              <td style={tdStyle}>Peau d’Orange, rapid swelling/erythema, needs biopsy</td>
            </tr>
            <tr>
              <td style={tdStyle}>Paget’s</td>
              <td style={tdStyle}>Eczematous, scaly, red nipple lesion, needs biopsy</td>
            </tr>
          </tbody>
        </table>
        <h4>Benign Breast Pearls (Mobile)</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Breast Cyst</td>
              <td style={tdStyle}>Mobile, round lump; aspiration yields non-serosanguinous fluid</td>
            </tr>
            <tr>
              <td style={tdStyle}>Fibrocystic Changes</td>
              <td style={tdStyle}>Lumpy, rope-like texture; changes with menstrual cycle</td>
            </tr>
            <tr>
              <td style={tdStyle}>Fibroadenoma</td>
              <td style={tdStyle}>Firm, rubbery, painless; hormone-sensitive</td>
            </tr>
            <tr>
              <td style={tdStyle}>Lipoma</td>
              <td style={tdStyle}>Soft, non-tender, mobile mass</td>
            </tr>
            <tr>
              <td style={tdStyle}>Intraductal Papilloma</td>
              <td style={tdStyle}>Unilateral bloody nipple discharge</td>
            </tr>
          </tbody>
        </table>
        <h4>Red Flags</h4>
        <ul>
          <li>Fixed mass</li>
          <li>Bloody nipple discharge</li>
          <li>Axillary lymphadenopathy</li>
          <li>Personal/family history of breast cancer</li>
        </ul>
        <h4>Diagnosis & General Treatments</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
          <thead>
            <tr>
              <th style={thStyle}>Diagnosis</th>
              <th style={thStyle}>Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <strong>&lt;30 y/o:</strong> Ultrasound<br />
                If benign cyst: FNA; if recurs, repeat FNA; if recurs again, core needle biopsy<br />
                If mass: core needle biopsy<br />
                <strong>&ge;30 y/o:</strong> Diagnostic mammogram +/- ultrasound<br />
                BI-RADS 1-3: Routine f/u (6 months) or core needle biopsy<br />
                BI-RADS 4-5: Core needle biopsy
              </td>
              <td style={tdStyle}>
                Surgery (lumpectomy, mastectomy)<br />
                Radiation, chemotherapy, hormonal therapy<br />
                Targeted therapy (HER2 inhibitors)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    title: "Tips for Success",
    content: (
      <div>
        <h3>Tips for Success</h3>
        <ul>
          <li><strong>Arman:</strong>
            <ul>
              <li>Pre-chart before surgeries and meet patients in advance (sometimes even before the resident) at BSLMC/TCH.</li>
              <li>Familiarize yourself with abdominal layers (epidermis, dermis, subQ fat, fascia, rectus abdominis, peritoneum) for C-section pimp questions.</li>
              <li>Learn how to place a catheter (watch YouTube videos, attend orientation training). Arrive early to help set up and stay after to assist with patient transfer.</li>
              <li>Common cases: Ovarian cystectomy, endometriosis (DaVinci), C-section, TAH/BSO.</li>
            </ul>
          </li>
          <li><strong>Ramtin:</strong>
            <ul>
              <li>Know various contraceptive types; many patients present with IUD complaints.</li>
              <li>Be prepared to perform pelvic exams; review exam steps before starting the rotation.</li>
              <li>At Ben Taub, expect to use translators frequently; practice using medical interpreters.</li>
            </ul>
          </li>
          <li><strong>Tobi:</strong>
            <ul>
              <li>At Ben Taub and Harris Health clinics, know how to use interpretation services (phone shortcut in each room).</li>
              <li>For each encounter, provide interpreter with patient’s name, MRN, and your Harris Health ID.</li>
              <li>Preface sensitive questions with “We ask all patients these questions during visits” to help patients feel comfortable.</li>
            </ul>
          </li>
          <li><strong>Luay:</strong>
            <ul>
              <li>Pre-charting before clinic and surgeries helps optimize learning and prepare questions.</li>
              <li>For chemo patients, ask about recurrence to ensure readiness for next infusion; keep clinic questions focused and efficient.</li>
              <li>Review surgical procedures (TAH/BSO, vaginal hysterectomy), gyn anatomy, vessel supply, and the phrase “water under the bridge!”</li>
              <li>Learn about patient positioning for surgeries; proper setup is crucial for long procedures.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },

]

const ObstetricsGynecology = () => {
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
    <>
    <SectionTemplate
      title="Obstetrics & Gynecology"/>
  
    <SubSectionTemplate
      title="Labor and Delivery"
       content={
        <div>
          {Labor.map((section, idx) => (
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

        <SubSectionTemplate
      title="Obstetrics"
       content={
        <div>
          {Obstetrics.map((section, idx) => (
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

        <SubSectionTemplate
      title="Gynecology"
       content={
        <div>
          {Gynecology.map((section, idx) => (
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
    </>
);
};

export default ObstetricsGynecology;