import SectionTemplate from '../components/SectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';



const sections = [
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



const Labor = ({openIndex, setOpenIndex, startIndex}) => {

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
    <SectionTemplate
      title="Labor and Delivery"
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

export default Labor;