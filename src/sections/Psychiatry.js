import SectionTemplate from '../components/SectionTemplate';
import { thStyle, tdStyle } from '../styles/styles';
import React, { useState, useRef } from 'react';

const sections = [
    {
        title: 'General HPI Interview',
        content: (
            <div>
                <h2>General HPI Interview</h2><p>
                    The HPI is the same as the general medical HPI with the following additions for psychiatry:
                </p><h3>History of Psychological Trauma</h3><h3>Past Psychiatric History:</h3><ul>
                    <li>Inpatient Admissions:</li>
                    <li>Outpatient:</li>
                    <li>Suicide Attempt:</li>
                    <li>Rehabilitation:</li>
                    <li>Substance Use:</li>
                    <li>Psychotropics:</li>
                </ul><h3>Military History (more common at VA):</h3><ul>
                    <li>Period of Service:</li>
                    <li>Branch of Service:</li>
                </ul><h3>Psychiatry ROS:</h3><ul>
                    <li><strong>Depression:</strong> SIGECAPS</li>
                    <li><strong>Mania:</strong> DIGFAST</li>
                    <li><strong>Anxiety:</strong> Denies any anxiety that debilitates life.</li>
                    <li><strong>Psychosis:</strong> Denies auditory and visual hallucinations, thought insertion and broadcasting.</li>
                    <li><strong>Cognition:</strong> Denies any memory problems nor concentration.</li>
                    <li><strong>SI/HI:</strong> Denies any SI with plan and intent. Denies HI.</li>
                    <li><strong>PTSD:</strong> Denies flashbacks, hypervigilance, nor avoidance.</li>
                </ul><h2>Mental Status Exam</h2><ul>
                    <li><strong>Mental Status:</strong> Alert and oriented to time, person, place, and event. The mood is normal, and the affect is congruous. Speech is fluent.</li>
                    <li><strong>Appearance:</strong> Appeared stated age, dressed appropriately, NAD</li>
                    <li><strong>Attitude:</strong> Cooperative with interview</li>
                    <li><strong>Psychomotor Activity:</strong> No ties/tremors/involuntary movements; no psychomotor agitation or retardation</li>
                    <li><strong>Speech:</strong> Normal rate, volume, tone, prosody</li>
                    <li><strong>Affect:</strong> Full range</li>
                    <li><strong>Mood:</strong> Euthymic</li>
                    <li><strong>Thought Process:</strong> Linear, logical, goal-directed</li>
                    <li><strong>Thought Content:</strong> Denies SI/HI, no delusions or paranoia elicited</li>
                    <li><strong>Perceptions:</strong> Denies AVH, does not appear to respond to internal stimuli</li>
                    <li><strong>Cognition:</strong> Grossly intact</li>
                    <li><strong>Insight:</strong> Intact</li>
                    <li><strong>Judgment:</strong> Intact</li>
                </ul><p>Use the SIGECAPS mnemonic to evaluate depression symptoms:</p><ul>
                    <li><strong>S</strong> - Sleep disturbance</li>
                    <li><strong>I</strong> - Loss of Interest</li>
                    <li><strong>G</strong> - Guilt</li>
                    <li><strong>E</strong> - Energy loss</li>
                    <li><strong>C</strong> - Concentration problems</li>
                    <li><strong>A</strong> - Appetite changes</li>
                    <li><strong>P</strong> - Psychomotor symptoms</li>
                    <li><strong>S</strong> - Suicidal ideation</li>
                </ul><h3>SOAP (Inpatient)</h3><p>
                    This template is more relevant for inpatient psychiatry, where you'll see patients again daily. These questions can help guide the interview.
                </p><h3>General Questions</h3><ul>
                    <li>How are you doing today?</li>
                    <li>Sleep?</li>
                    <li>Energy today?</li>
                    <li>Groups?</li>
                    <li>How is everybody treating you?</li>
                    <li>Do you feel safe here?</li>
                    <li>How would you say your mood is today compared to yesterday?</li>
                    <li>Are you back to your normal self or have a way to go?</li>
                    <li>Future goals</li>
                </ul><h3>Discharge Planning</h3><ul>
                    <li>Where will you go after this?</li>
                    <li>Does anyone live with you?</li>
                    <li>Do you feel like the hospitalization has been helpful? How?</li>
                    <li>Any medication/side effects you're worried about?</li>
                    <li>Outpatient psych?</li>
                    <li>
                        <strong>Safety Planning:</strong>
                        <ul>
                            <li>What would you do if something difficult happens in your life?</li>
                            <li>What things would cause you to come back to the hospital?</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Coping Strategies:</strong>
                        <ul>
                            <li>Personal</li>
                            <li>Support groups/people</li>
                        </ul>
                    </li>
                </ul><h3>Review of Systems (ROS)</h3><ul>
                    <li>SI/HI, depression, anxiety</li>
                    <li>Thoughts/Voices/Seeing things</li>
                    <li>Feeling like someone is out to get you?</li>
                    <li>Special messages? Feeling like God?</li>
                </ul><h3>Medications</h3><ul>
                    <li>Do you take your medications consistently? If not, why?</li>
                    <li>Side effects?</li>
                </ul><h3>Substance Use</h3><ul>
                    <li>Are you taking any substances?</li>
                    <li>Cravings?</li>
                    <li>Withdrawal symptoms?</li>
                </ul><h3>Ending the Interview</h3><ul>
                    <li>What can we do for you here? Goals?</li>
                    <li>Any physical problems?</li>
                    <li>Any questions or concerns?</li>
                    <li>Date today</li>
                </ul><h3>Extra Considerations</h3><ul>
                    <li>Shower?</li>
                    <li>Legal problems</li>
                    <li>
                        <strong>Mental Status:</strong>
                        <ul>
                            <li>Person</li>
                            <li>Place</li>
                            <li>Time</li>
                            <li>Event</li>
                        </ul>
                    </li>
                    <li>Emphasize positives</li>
                    <li>Medication plans</li>
                    <li>Future appointments</li>
                    <li>Crisis calls / ER</li>
                </ul><h3>Capacity Assessment</h3><ul>
                    <li>Communicate a choice</li>
                    <li>Understand information given</li>
                    <li>Appreciate consequences</li>
                    <li>Give rationale for decision</li>
                </ul>


            </div>
        ),
    },



    {
        title: 'Mental Status Exam Findings',
        content: (
            <div>
                <h3>Mental Status Exam Findings</h3>

                <h4>Appearance & Behavior</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                General appearance (hygiene, grooming, attire)<br />
                                Physical signs (over/underweight, scars, tattoos, tremors, sweating)<br />
                                Alertness (alert, drowsy, or sedated?)<br />
                                Eye contact (good, poor, avoidant)<br />
                                Restlessness, psychomotor agitation, or retardation<br />
                                Posture (slumped, upright, rigid)<br />
                                Ability to engage (cooperative, guarded, evasive)
                            </td>
                            <td style={tdStyle}>
                                Poor self-care may indicate depression or severe mental illness.<br />
                                Weight changes could suggest eating disorders or medication effects.<br />
                                Scars or face tattoos may hint at self-injury, gang affiliation, or past trauma.<br />
                                Diaphoresis or tremors could suggest withdrawal or anxiety.<br />
                                Poor eye contact or guarded behavior could indicate paranoia or psychosis.<br />
                                Psychomotor agitation may indicate anxiety or withdrawal; retardation may suggest depression or severe psychosis.<br />
                                Uncooperative or evasive behavior may suggest personality disorders or severe psychopathology.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Speech</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Speed (normal, slow, pressured)<br />
                                Volume (loud, soft)<br />
                                Fluency & Rhythm (normal, slurred, monotone)<br />
                                Latency (delayed responses)<br />
                                Spontaneity (volunteers information vs. only responds when asked)
                            </td>
                            <td style={tdStyle}>
                                Pressured or loud speech often suggests mania.<br />
                                Slow or soft speech may indicate depression or severe anxiety.<br />
                                Slurred speech may point to intoxication or medication side effects.<br />
                                Decreased spontaneity and long latency can be signs of psychosis or severe depression.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Mood & Affect</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Mood (subjective): “How are you feeling?”<br />
                                Affect (objective): Observed emotional expression (flat, blunted, labile, or appropriate)<br />
                                Congruence: Is affect consistent with the stated mood?<br />
                                Intensity: Intense or reduced emotional expression?<br />
                                Reactivity: Can they respond appropriately to stimuli?
                            </td>
                            <td style={tdStyle}>
                                Flat affect may suggest schizophrenia, while a blunted or incongruent affect may suggest mood disorders or psychosis.<br />
                                A labile affect (rapidly shifting emotions) often points to bipolar disorder or borderline personality disorder.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Thought Process</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Coherence (organized vs. disorganized)<br />
                                Flow (linear, tangential, or circumstantial)<br />
                                Associations (normal vs. loosening)<br />
                                Presence of flight of ideas or thought blocking
                            </td>
                            <td style={tdStyle}>
                                Tangential or circumstantial thinking may indicate cognitive impairment or personality pathology.<br />
                                Disorganized thinking or flight of ideas suggests psychosis or mania.<br />
                                Thought blocking can be a sign of psychosis or severe depression.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Thought Content</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Suicidal or homicidal ideation (with or without a plan and intent)<br />
                                Hallucinations (auditory, visual, tactile)<br />
                                Delusions (paranoid, grandiose, persecutory, somatic)<br />
                                Obsessions or compulsions
                            </td>
                            <td style={tdStyle}>
                                Auditory hallucinations and delusions are common in psychotic disorders like schizophrenia.<br />
                                Suicidal or homicidal ideation may indicate severe mood disorders or personality pathology.<br />
                                Tactile hallucinations often suggest withdrawal or delirium.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Sensorium and Cognition</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Orientation: Ask the patient to state the date, location, and situation (A&O x3).<br />
                                Attention/Concentration: Spell “world” backward or perform serial 7s.<br />
                                Memory: Test immediate and delayed recall of 3 words.<br />
                                Language: Assess for aphasia, word-finding difficulty, or word salad.<br />
                                Abstraction: Ask the patient to interpret a proverb.<br />
                                Fund of Knowledge: Ask simple questions (Name 2 cities)
                            </td>
                            <td style={tdStyle}>
                                Impaired orientation, memory, or abstraction can indicate cognitive impairment (e.g., dementia, delirium).<br />
                                Difficulty with attention or concentration may suggest delirium, depression, or anxiety.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4>Insight and Judgment</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>What to Observe</th>
                            <th style={thStyle}>What it Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Insight: Does the patient understand their illness and the need for treatment?<br />
                                Judgment: Assess decision-making ability by asking, “What would you do if you found a stamped, addressed envelope on the ground?” or by evaluating their understanding of diagnosis, treatment plan, and impact of behavior.
                            </td>
                            <td style={tdStyle}>
                                Poor insight is common in psychotic disorders and some mood disorders.<br />
                                Impaired judgment may occur in substance use disorders, mania, or cognitive impairment.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    },

    {
        title: 'Psychiatry Medications',
        content: (
            <>
                <h3>Antidepressants</h3>
                <div className="table-container">


                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Generic</th>
                                <th style={thStyle}>Brand</th>
                                <th style={thStyle}>Class</th>
                                <th style={thStyle}>Side Effects</th>
                                <th style={thStyle}>Other Considerations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Fluoxetine</td>
                                <td style={tdStyle}>Prozac</td>
                                <td style={tdStyle}>SSRI</td>
                                <td rowSpan={4} style={tdStyle}>GI upset, insomnia, sexual dysfunction, +/- weight gain, can take 4-6 weeks for full effect</td>
                                <td style={tdStyle}>Longest half-life so no need to taper, safe in pregnancy</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Sertraline</td>
                                <td style={tdStyle}>Zoloft</td>
                                <td style={tdStyle}>SSRI</td>
                                <td style={tdStyle}></td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Paroxetine</td>
                                <td style={tdStyle}>Paxil</td>
                                <td style={tdStyle}>SSRI</td>

                                <td style={tdStyle}>Short half-life → Bad withdrawals and has more anticholinergic effects than other SSRIs</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Escitalopram</td>
                                <td style={tdStyle}>Lexapro</td>
                                <td style={tdStyle}>SSRI</td>

                                <td style={tdStyle}></td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Duloxetine</td>
                                <td style={tdStyle}>Cymbalta</td>
                                <td style={tdStyle}>SNRI</td>
                                <td rowSpan={2} style={tdStyle}>Similar to SSRIs</td>
                                <td style={tdStyle}>Also used for chronic pain</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Venlafaxine</td>
                                <td style={tdStyle}>Effexor</td>
                                <td style={tdStyle}>SNRI</td>

                                <td style={tdStyle}>Increases BP</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Bupropion</td>
                                <td style={tdStyle}>Wellbutrin</td>
                                <td style={tdStyle}>NDRI</td>
                                <td style={tdStyle}>Increased risk of seizures, less sexual side effects, anxiety</td>
                                <td style={tdStyle}>Contraindicated in patients with seizures or eating disorders</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Amitriptyline</td>
                                <td style={tdStyle}>Elavil</td>
                                <td style={tdStyle}>TCA</td>
                                <td rowSpan={2} style={tdStyle}>Cardiotoxicity (QT prolongation), anticholinergic effects (dry mouth, blurred vision, urinary retention, etc.)</td>
                                <td style={tdStyle}>Useful in chronic pain, migraines, and insomnia</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Imipramine</td>
                                <td style={tdStyle}>Tofranil</td>
                                <td style={tdStyle}>TCA</td>

                                <td style={tdStyle}></td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Trazodone</td>
                                <td style={tdStyle}>Desyrel</td>
                                <td style={tdStyle}>SARI</td>
                                <td style={tdStyle}>Priapism, nausea, dizziness</td>
                                <td style={tdStyle}>Useful for refractory MDD, and insomnia</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Mirtazapine</td>
                                <td style={tdStyle}>Remeron</td>
                                <td style={tdStyle}>A2ARA</td>
                                <td style={tdStyle}>Sedation, weight gain</td>
                                <td style={tdStyle}>Useful for refractory MDD</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <h3>Antipsychotics</h3>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Generic</th>
                                <th style={thStyle}>Brand</th>
                                <th style={thStyle}>Class</th>
                                <th style={thStyle}>Side Effects</th>
                                <th style={thStyle}>Other Considerations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Risperidone</td>
                                <td style={tdStyle}>Risperdal</td>
                                <td style={tdStyle}>Atypical</td>
                                <td rowSpan={6} style={tdStyle}>Prolonged QT, fewer EPS and anticholinergic side effects than typical antipsychotics, metabolic syndrome (weight gain, diabetes, hyperlipidemia)</td>
                                <td style={tdStyle}>Most likely to cause EPS and hyperprolactinemia</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Olanzapine</td>
                                <td style={tdStyle}>Zyprexa</td>
                                <td style={tdStyle}>Atypical</td>

                                <td style={tdStyle}>Most likely to cause weight gain</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Quetiapine</td>
                                <td style={tdStyle}>Seroquel</td>
                                <td style={tdStyle}>Atypical</td>

                                <td style={tdStyle}>Somnolence, good for insomnia</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Aripiprazole</td>
                                <td style={tdStyle}>Abilify</td>
                                <td style={tdStyle}>Atypical</td>

                                <td style={tdStyle}></td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Paliperidone</td>
                                <td style={tdStyle}>Invega</td>
                                <td style={tdStyle}>Atypical</td>

                                <td style={tdStyle}></td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Clozapine</td>
                                <td style={tdStyle}>Clozaril</td>
                                <td style={tdStyle}>Atypical</td>

                                <td style={tdStyle}>Agranulocytosis; requires regular CBC</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Haloperidol</td>
                                <td style={tdStyle}>Haldol</td>
                                <td style={tdStyle}>Typical</td>
                                <td colSpan={2} style={tdStyle}>Hyperprolactinemia, metabolic syndrome, EPS, antimuscarinic, sedation, QT prolongation, watch for NMS</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <h3>Emergency Psychiatric Medications</h3>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Medication</th>
                                <th style={thStyle}>Use</th>
                                <th style={thStyle}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Haloperidol + Lorazepam</td>
                                <td style={tdStyle}>Acute agitation</td>
                                <td style={tdStyle}>Common combo for rapid tranquilization</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Olanzapine ODT</td>
                                <td style={tdStyle}>Refusal of oral meds</td>
                                <td style={tdStyle}>Avoid with benzos due to respiratory depression risk</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Diphenhydramine</td>
                                <td style={tdStyle}>EPS prophylaxis</td>
                                <td style={tdStyle}>Used with antipsychotics</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        ),
    },

    {
        title: 'Major Depressive Disorder (MDD)',
        content: (
            <>
                <h3>SIG E CAPS</h3>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Symptom</th>
                                <th style={thStyle}>Screening Question</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Mood</td>
                                <td style={tdStyle}>"Over the past two weeks, have you often felt sad, depressed, or hopeless?"<br />"How would you describe your mood during this time? Is it mostly low?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Sleep disturbances</td>
                                <td style={tdStyle}>"How have you been sleeping recently? Do you find it hard to fall asleep or wake up too early?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Interest loss (anhedonia)</td>
                                <td style={tdStyle}>"Have you noticed that you’ve lost interest in activities you used to enjoy?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Guilt or worthlessness</td>
                                <td style={tdStyle}>"Have you been feeling guilty about things you’ve done or like you’re not good enough?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Energy loss or fatigue</td>
                                <td style={tdStyle}>"Have you been feeling more tired than usual, even if you’ve been resting?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Concentration problems</td>
                                <td style={tdStyle}>"Have you noticed it’s harder to concentrate or make decisions lately?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Appetite/weight changes</td>
                                <td style={tdStyle}>"Have you noticed any changes in your appetite or weight? Have you been eating more or less than usual?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Psychomotor changes</td>
                                <td style={tdStyle}>"Have you noticed feeling unusually slowed down or restless recently?"</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Suicidal thoughts</td>
                                <td style={tdStyle}>"Have you had thoughts of killing/harming yourself or ending your life?"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <img src='MDD 1.jpg' alt='MDD 1' style={{ width: '100%', marginBottom: '1em' }} />
                <img src='MDD 2.jpg' alt='MDD 2' style={{ width: '100%', marginBottom: '1em' }} />

                <h3>Screening Tools and Rating Scale</h3>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Tool/Scale</th>
                                <th style={thStyle}>Purpose</th>
                                <th style={thStyle}>Structure</th>
                                <th style={thStyle}>Scoring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}><strong>Beck Depression Inventory (BDI)</strong></td>
                                <td style={tdStyle}>Assesses the presence and severity of depressive symptoms</td>
                                <td style={tdStyle}>21 items that focus on SIGECAPS and physical symptoms</td>
                                <td style={tdStyle}>
                                    Total scores: 0-63<br />
                                    0-13: Minimal depression<br />
                                    14-19: Mild depression<br />
                                    20-28: Moderate depression<br />
                                    ≥29: Severe depression
                                </td>
                            </tr>
                            <tr>
                                <td style={tdStyle}><strong>Patient Health Questionnaire-9 (PHQ-9)</strong></td>
                                <td style={tdStyle}>Assesses severity of depression symptoms</td>
                                <td style={tdStyle}>9 items that focus on SIGECAPS</td>
                                <td style={tdStyle}>
                                    Total Score: 0-27<br />
                                    0-4: Minimal or no depression<br />
                                    5-9: Mild depression<br />
                                    10-14: Moderate depression<br />
                                    15-19: Moderately severe depression<br />
                                    20-27: Severe depression
                                </td>
                            </tr>
                            <tr>
                                <td style={tdStyle}><strong>Hamilton Depression Rating Scale</strong></td>
                                <td style={tdStyle}>Assess severity of depression in individuals already diagnosed with MDD</td>
                                <td style={tdStyle}>17-21 items focused on symptoms: SIGECAPS</td>
                                <td style={tdStyle}>
                                    Total scores: 0-52<br />
                                    0-7: Normal mood<br />
                                    8-13: Mild depression<br />
                                    14-18: Moderate depression<br />
                                    ≥19: Severe depression
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Past Medication Trials and Failures</h3>
                <p>Understanding past medication trials is crucial in MDD management! If a patient has failed multiple medications, they may be labeled as having treatment-resistant depression (TRD), which changes management.</p>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Overview of Options</th>
                                <th style={thStyle}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Review medication history</td>
                                <td style={tdStyle}>Assess why past medications were unsuccessful (side effects or lack of efficacy)</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Consider combination therapy</td>
                                <td style={tdStyle}>TRD may require augmentation with atypical antipsychotics or mood stabilizers</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Switch classes</td>
                                <td style={tdStyle}>Switch SSRIs → SNRIs OR add agents (e.g., bupropion)</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Non-pharmacologic interventions</td>
                                <td style={tdStyle}>Electroconvulsive therapy (ECT) for TRD or severe cases (psychotic features or suicidal ideation)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Past Medication Trials and Failures</th>
                                <th style={thStyle}>Implications</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>SSRIs (Fluoxetine, Sertraline)</td>
                                <td style={tdStyle}>First-line treatments; assess for efficacy and side effects.</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>SNRIs (Venlafaxine, Duloxetine)</td>
                                <td style={tdStyle}>Consider if SSRIs are ineffective; may address pain-related symptoms.</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Tricyclics (Amitriptyline)</td>
                                <td style={tdStyle}>Reserved for treatment-resistant cases; monitor for cardiac side effects.</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>MAOIs (Phenelzine)</td>
                                <td style={tdStyle}>Last-line treatment due to dietary restrictions and potential interactions.</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>ECT</td>
                                <td style={tdStyle}>Consider for severe or treatment-resistant MDD, especially if rapid response is required.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                                // Add this table where you want in your content (e.g., as a new section or after an existing section)

                <h3>What to Do When a Patient Starts Crying</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <tbody>
                        <tr>
                            <th style={thStyle}>Step</th>
                            <th style={thStyle}>Example/Explanation</th>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Be Empathetic</td>
                            <td style={tdStyle}>“It’s okay to cry. I’m here to listen.”</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Offer Tissues</td>
                            <td style={tdStyle}>Always provide tissues to show support.</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Pause</td>
                            <td style={tdStyle}>Give the patient space and time to regain composure.</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Continue with Gentle Questioning</td>
                            <td style={tdStyle}>“What’s on your mind right now?”</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Don’t Rush</td>
                            <td style={tdStyle}>Allow the patient to express their emotions fully before moving on.</td>
                        </tr>
                    </tbody>
                </table>


                <h3>Assessment and Plan with Differential</h3>

                <h4>Differential Diagnosis</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Diagnosis</th>
                            <th style={thStyle}>Key Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Major Depressive Disorder (MDD)</td>
                            <td style={tdStyle}>SIGECAPS</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Substance-induced mood disorder</td>
                            <td style={tdStyle}>Recent history of substance use</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Adjustment disorder</td>
                            <td style={tdStyle}>Clear stressor and symptoms partially meet criteria for MDD → Depressive episode ≤3 months</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Dysthymia (Persistent Depressive Disorder)</td>
                            <td style={tdStyle}>Chronic, low-grade depression ≥2 years with &lt;5 SIGECAPS</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Cyclothymic disorder</td>
                            <td style={tdStyle}>Fluctuating mood changes &gt;2 years with periods of hypomania and depression</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Plan</h4>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Medications</th>
                            <th style={thStyle}>Non-pharmacologic Interventions</th>
                            <th style={thStyle}>Acute Management for Active SI</th>
                            <th style={thStyle}>Safety Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Initiate or adjust antidepressants (SSRIs, SNRIs)<br />
                                If TRD → Augment
                            </td>
                            <td style={tdStyle}>
                                ECT<br />
                                For severe or TRD with SI<br />
                                Psychotherapy (CBT or DBT for SI)
                            </td>
                            <td style={tdStyle}>
                                EDO or transfer to psych unit<br />
                                Emergency medications<br />
                                Agitation → Sedatives or antipsychotics
                            </td>
                            <td style={tdStyle}>
                                Crisis hotline/contact information (988)<br />
                                Follow-up: Ensure psych follow-up within 48-72h
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h3>Suicidal Ideation</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th colSpan={2} style={thStyle}>SI Risk Factors</th>
                            <th style={thStyle}>Highest Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>S</strong></td>
                            <td style={tdStyle}><strong>Sex</strong></td>
                            <td style={tdStyle}>Male @ Higher risk</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>A</strong></td>
                            <td style={tdStyle}><strong>Age</strong></td>
                            <td style={tdStyle}>Younger adults (15-24) and older adults</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>D</strong></td>
                            <td style={tdStyle}><strong>Depression</strong></td>
                            <td style={tdStyle}>Major depressive disorder, bipolar disorder</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>P</strong></td>
                            <td style={tdStyle}><strong>Previous Attempts</strong></td>
                            <td style={tdStyle}>Hx of suicide attempts</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>E</strong></td>
                            <td style={tdStyle}><strong>Ethanol Abuse</strong></td>
                            <td style={tdStyle}>Substance Abuse esp. Alcohol</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>R</strong></td>
                            <td style={tdStyle}><strong>Rational thinking loss</strong></td>
                            <td style={tdStyle}>A. Psychosis <br /> B. Severe Mental Illness</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>S</strong></td>
                            <td style={tdStyle}><strong>Social supports lacking</strong></td>
                            <td style={tdStyle}>Lack of social supports</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>O</strong></td>
                            <td style={tdStyle}><strong>Organized plan</strong></td>
                            <td style={tdStyle}>Specific plan with means for suicide</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>N</strong></td>
                            <td style={tdStyle}><strong>No spouse or significant other</strong></td>
                            <td style={tdStyle}>Single/Divorced/Widowed</td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, backgroundColor: '#b8ffd1ff' }}><strong>S</strong></td>
                            <td style={tdStyle}><strong>Sickness</strong></td>
                            <td style={tdStyle}>A. Chronic Illness <br /> B. Severe Medical Conditions</td>
                        </tr>
                    </tbody>
                </table>

                                // Add this table where you want in your content (e.g., after the SI section)

                <h3>Suicidal Ideation Algorithm</h3>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Principle</th>
                                <th style={thStyle}>Screen for passive SI</th>
                                <th style={thStyle}>Determine intent</th>
                                <th style={thStyle}>Assess means and plan</th>
                                <th style={thStyle}>Establish time frame</th>
                                <th style={thStyle}>Evaluate protective factors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}><strong>Questions to Ask</strong></td>
                                <td style={tdStyle}>Have you ever felt like life is not worth living or wished you could just disappear?</td>
                                <td style={tdStyle}>Have you thought about how you might end your life?</td>
                                <td style={tdStyle}>Do you have access to things you might use to hurt yourself?</td>
                                <td style={tdStyle}>When was the last time you had these thoughts? Are you thinking about doing it now?</td>
                                <td style={tdStyle}>Is there anything stopping you from acting on these thoughts, like family or religious beliefs?</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Screening Tools</h4>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Tool</th>
                                <th style={thStyle}>Purpose</th>
                                <th style={thStyle}>Structure</th>
                                <th style={thStyle}>Scoring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Columbia-Suicide Severity Rating Scale (C-SSRS)</td>
                                <td style={tdStyle}>Assess suicidal ideation and behavior. Used across various populations and settings.</td>
                                <td style={tdStyle}>
                                    Suicidal Ideation: Assesses presence, frequency, and intensity of suicidal thoughts.<br />
                                    Suicidal Behavior: Assesses any past suicidal actions, such as attempts or preparatory behaviors.
                                </td>
                                <td style={tdStyle}>
                                    Suicidal Ideation: 0-5<br />
                                    Suicidal Behavior: 0-4
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Rating Scale</h4>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Scale</th>
                                <th style={thStyle}>Purpose</th>
                                <th style={thStyle}>Structure</th>
                                <th style={thStyle}>Scoring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Hamilton Depression Rating Scale</td>
                                <td style={tdStyle}>Assess severity of depression in individuals already diagnosed with MDD</td>
                                <td style={tdStyle}>17-21 items focused on symptoms: SIGECAPS</td>
                                <td style={tdStyle}>
                                    0-7: Normal mood<br />
                                    8-13: Mild depression<br />
                                    14-18: Moderate depression<br />
                                    ≥19: Severe depression
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Active SI (Emergency Protocol)</h4>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Immediate Action</th>
                                <th style={thStyle}>Ensure Safety</th>
                                <th style={thStyle}>Transfer to Secure Environment</th>
                                <th style={thStyle}>Emergency Medications</th>
                                <th style={thStyle}>Involve Psychiatry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Notify the team</td>
                                <td style={tdStyle}>
                                    A. Remove harmful objects<br />
                                    B. 1-to-1 Sitter
                                </td>
                                <td style={tdStyle}>
                                    If refusing voluntary admit:<br />
                                    Involuntary psychiatric hold (EDO) OR psychiatric unit admission
                                </td>
                                <td style={tdStyle}>
                                    If agitation present:<br />
                                    Use sedatives (lorazepam) OR antipsychotics (haloperidol)
                                </td>
                                <td style={tdStyle}>Call for immediate psychiatry consult</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        ),
    },

    {
        title: 'Bipolar Disorder/Manic Episode',
        content: (
            <>
                <h3>Symptoms of Manic Episode (DIGFAST)</h3>
                        // Example table for DIGFAST symptoms and screening questions

                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Symptom</th>
                            <th style={thStyle}>Screening Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Mood</td>
                            <td style={tdStyle}>"Have you felt especially energetic, confident, or invincible?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Distractibility</td>
                            <td style={tdStyle}>"Do you feel like your mind keeps jumping from one thing to another, making it difficult to finish what you start?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Indiscretion (engagement in risky behaviors)</td>
                            <td style={tdStyle}>"Have you been doing anything out of character, like spending a lot of money or driving recklessly?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Grandiosity (inflated self-esteem)</td>
                            <td style={tdStyle}>"Do you feel more powerful or important than usual, like you can accomplish anything, even unrealistic goals?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Flight of ideas (racing thoughts)</td>
                            <td style={tdStyle}>"Have your thoughts been racing? Do you find it hard to focus?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Activity increase (goal-directed or hyperactive behavior)</td>
                            <td style={tdStyle}>"When talking to others, do you feel like your mind jumps from one topic to another quickly?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Sleep deficit (reduced need for sleep)</td>
                            <td style={tdStyle}>"Do you find that you need much less sleep than usual but still have plenty of energy?"</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>Talkativeness (pressured speech)</td>
                            <td style={tdStyle}>"Have people mentioned that you’ve been speaking much faster than usual or that you jump from one topic to another when speaking?"</td>
                        </tr>
                    </tbody>
                </table>
                <img src='Mania.jpg' alt='Mania vs Hypomania' style={{ width: '100%', marginBottom: '1em' }} />

                        // Add this table where you want in your content (e.g., after the DIGFAST table)

                <h3>Bipolar I vs Bipolar II Disorders</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}></th>
                            <th style={thStyle}>Bipolar I Disorder</th>
                            <th style={thStyle}>Bipolar II Disorder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}><strong>Criteria</strong></td>
                            <td style={tdStyle}>&ge;1 manic episode +/- depressive episodes</td>
                            <td style={tdStyle}>&ge;1 episode of hypomania <strong>AND</strong> &ge;1 episode of major depressive disorder <strong>AND</strong> 0 manic episodes</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><strong>Ward Tip</strong></td>
                            <td style={tdStyle}>Often severe and requires hospitalization due to increased risk of self-harm d/t elevated mood!</td>
                            <td style={tdStyle}></td>
                        </tr>
                    </tbody>
                </table>

                <img src='bipolar 1.jpg' alt='Bipolar I Disorder' style={{ width: '100%', marginBottom: '1em' }} />
                <img src='bipolar 2.jpg' alt='Bipolar II Disorder' style={{ width: '100%', marginBottom: '1em' }} />

                        // Replace the "Bipolar I vs Bipolar II Disorders" table with the following content (not a table):

                // Example table for Mania vs Psychosis

                <h3>Mania vs Psychosis</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}></th>
                            <th style={thStyle}>Mania</th>
                            <th style={thStyle}>Psychosis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}><strong>Definition</strong></td>
                            <td style={tdStyle}>Mood state characterized by elevated, expansive, or irritable mood.</td>
                            <td style={tdStyle}>Break from reality. Occurs in various disorders (schizophrenia, schizoaffective disorder, substance use, etc.).</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><strong>Symptoms</strong></td>
                            <td style={tdStyle}>DIGFAST</td>
                            <td style={tdStyle}>Delusions, hallucinations, and disorganized thinking, regardless of mood state.</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><strong>Difference</strong></td>
                            <td style={tdStyle}>Mood disorder</td>
                            <td style={tdStyle}>Occurs independently of mood</td>
                        </tr>
                    </tbody>
                </table>

                                        // You can insert this JSX markdown into your section:

                <h3>What to Do When a Patient Has Pressured Speech or Flight of Ideas</h3>
                <ul>
                    <li><strong>Be patient:</strong> Don’t interrupt, but try to gently redirect.</li>
                    <li><strong>Repetition:</strong> Reiterate key points to help them focus.</li>
                    <li><strong>Breakdown topics:</strong> Ask short, focused questions.</li>
                    <li>
                        <strong>Example prompts:</strong>
                        <ul>
                            <li>“Can we go back to the question about your mood?”</li>
                            <li>“Can you tell me about your sleep pattern?”</li>
                        </ul>
                    </li>
                </ul>

                <h3>Medications in the ER for Sedation (Algorithm)</h3>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}></th>
                            <th style={thStyle}>Benzodiazepines</th>
                            <th style={thStyle}>Antipsychotics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}><strong>Drugs</strong></td>
                            <td style={tdStyle}>Lorazepam (Ativan), Midazolam (Versed)</td>
                            <td style={tdStyle}>Haloperidol (Haldol), Olanzapine (Zyprexa)</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><strong>Considerations</strong></td>
                            <td style={tdStyle}>Avoid benzodiazepines in patients with suspected substance use disorder.</td>
                            <td style={tdStyle}>Use caution with antipsychotics in patients with QT prolongation or cardiovascular conditions.</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><strong>Monitoring</strong></td>
                            <td colSpan={2} style={tdStyle}>Vital signs q15 minutes, airway assessment, level of consciousness</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h3>Counseling the Manic Patient</h3>
                <ul>
                    <li><strong>Education on Symptoms:</strong> Discuss early signs of mania (increased energy, less sleep, risky behaviors).</li>
                    <li><strong>Triggers:</strong> Identify and avoid triggers like substance use, sleep deprivation, or stress.</li>
                </ul>

                <h4>Safety Plan</h4>
                <ul>
                    <li><strong>Have a support system:</strong> Identify trusted people (family, friends) who can help monitor for early warning signs.</li>
                    <li><strong>Medication compliance:</strong> Stress the importance of taking medications as prescribed, even when feeling well.</li>
                    <li><strong>Crisis plan:</strong> Discuss what to do if symptoms worsen (contact a mental health provider, visit the ER).</li>
                    <li><strong>Limit risky behaviors:</strong> Avoid decisions like major purchases or driving if you feel impulsive.</li>
                </ul>

                <h3>Assessment and Plan with Differential</h3>
                <ul>
                    <li>
                        <strong>Assessment:</strong>
                        <ul>
                            <li>Bipolar I disorder with manic episode <strong>vs</strong> substance-induced mania <strong>vs</strong> schizoaffective disorder</li>
                            <li>Symptoms: Elevated mood, decreased sleep, grandiosity, and flight of ideas.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Differential Diagnosis</h4>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Primary mania (Bipolar I)</th>
                            <th style={thStyle}>Substance-induced mood disorder</th>
                            <th style={thStyle}>Schizoaffective disorder</th>
                            <th style={thStyle}>Thyrotoxicosis</th>
                            <th style={thStyle}>Other mood disorders</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Classic presentation, may have psychotic features.</td>
                            <td style={tdStyle}>Check for substance use (stimulants, steroids).</td>
                            <td style={tdStyle}>Psychotic symptoms with mood disorder.</td>
                            <td style={tdStyle}>Hyperthyroidism may mimic manic symptoms (check TSH levels).</td>
                            <td style={tdStyle}>Rule out unipolar depression with psychotic features.</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h4>Plan</h4>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Medications</th>
                            <th style={thStyle}>Acute management if agitated</th>
                            <th style={thStyle}>Psychiatric follow-up</th>
                            <th style={thStyle}>Safety Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Initiate mood stabilizers (Lithium, Valproate) or antipsychotics (Olanzapine, Risperidone)</td>
                            <td style={tdStyle}>Consider IM antipsychotics or benzodiazepines.</td>
                            <td style={tdStyle}>Ensure follow-up with psychiatry for ongoing management.</td>
                            <td style={tdStyle}>Discuss medication compliance, monitoring for manic/depressive symptoms, and crisis intervention.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </>

        ),
    },

    {
        title: 'Schizophrenia and Psychosis',
        content: (
            <>
                        // You can insert this JSX markdown into your Schizophrenia and Psychosis section:

                <h3>Schizophrenia vs Psychosis</h3>
                <div style={{ marginBottom: '1em' }}>
                    <strong>Schizophrenia:</strong>
                    <ul>
                        <li>
                            <strong>Definition:</strong> A chronic mental health disorder characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior.
                        </li>
                        <li>
                            <strong>Duration:</strong> Symptoms persist for ≥6 months, including ≥1 month of active symptoms (delusions, hallucinations).
                        </li>
                        <li>
                            <strong>Primary Symptoms:</strong>
                            <ul>
                                <li><strong>Hallucinations:</strong> False sensory perceptions (hearing voices)</li>
                                <li><strong>Delusions:</strong> Strongly held false beliefs (paranoia)</li>
                                <li><strong>Disorganized Thinking:</strong> Incoherent speech, jumping between topics</li>
                                <li><strong>Negative Symptoms:</strong> Apathy, lack of emotion, withdrawal from social interactions</li>
                            </ul>
                        </li>
                    </ul>
                    <strong>Psychosis:</strong>
                    <ul>
                        <li>
                            <strong>Definition:</strong> A symptom that may occur in various mental health conditions, characterized by a disconnection from reality.
                        </li>
                        <li>
                            <strong>Duration:</strong> Symptoms can be brief or prolonged, depending on underlying cause (substance use, severe stress).
                        </li>
                        <li>
                            <strong>Primary Symptoms:</strong> Hallucinations, delusions, disorganized thinking, negative symptoms (varies by cause).
                        </li>
                    </ul>
                </div>

                <h3>Screening Tools</h3>
                <ul>
                    <li>
                        <strong>Positive and Negative Syndrome Scale (PANSS):</strong>
                        <ul>
                            <li><strong>Purpose:</strong> For schizophrenia and other psychotic disorders. Evaluates treatment efficacy and monitors symptom changes over time.</li>
                            <li><strong>Structure:</strong> Distinguishes between positive symptoms, negative symptoms, and general psychopathology.</li>
                            <li><strong>Scoring:</strong> 30-50: Mild, 51-70: Moderate, 71-90: Severe, ≥91: Very Severe</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Brief Psychiatric Rating Scale (BPRS):</strong>
                        <ul>
                            <li><strong>Purpose:</strong> For assessing treatment responses for schizophrenia and other psychotic disorders.</li>
                            <li><strong>Structure:</strong> Items grouped into dimensions: Positive Symptoms, Negative Symptoms, Manic Symptoms, Depression, Anxiety.</li>
                            <li><strong>Scoring:</strong> Total scores: 18 to 126; 41-60: Moderate symptoms, ≥61: Severe symptoms</li>
                        </ul>
                    </li>
                </ul>

                <h3>Questions to Ask</h3>
                <ul>
                    <li><strong>Hallucinations:</strong> Are you seeing or hearing things that others do not?</li>
                    <li><strong>Delusions:</strong> Do you feel like people are out to get you?</li>
                    <li><strong>Thought Process:</strong> Can you tell me what you're thinking about right now?</li>
                </ul>

                <h4>How to Ask Questions</h4>
                <ul>
                    <li><strong>Use Simple Language:</strong> Avoid complex questions; keep them straightforward.</li>
                    <li><strong>Be Patient and Empathetic:</strong> Show understanding and support.</li>
                    <li><strong>Clarifying Questions:</strong> Can you explain what you mean by that?</li>
                    <li><strong>Non-Verbal Cues:</strong> Pay attention to body language and tone.</li>
                </ul>

                <h4>What to Do When Patient is Unresponsive or Hard to Communicate With</h4>
                <ul>
                    <li><strong>Stay Calm:</strong> Maintain a calm and supportive demeanor.</li>
                    <li><strong>Use Non-Verbal Communication:</strong> Use gestures or visual aids to communicate.</li>
                    <li><strong>Give Time:</strong> Allow the patient time to respond; don’t rush them.</li>
                    <li><strong>Reassurance:</strong> Provide reassurance that they are safe and that you are there to help.</li>
                    <li><strong>Engage Trusted Individuals:</strong> If appropriate, involve family or caregivers who may help facilitate communication.</li>
                </ul>

                <h3>Differential Diagnosis</h3>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Schizophrenia</th>
                            <th style={thStyle}>Substance-induced mood disorder</th>
                            <th style={thStyle}>Brief Psychotic Disorder</th>
                            <th style={thStyle}>Schizoaffective Disorder</th>
                            <th style={thStyle}>MDD w/ Psychotic Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                <strong>A)</strong> ≥2 of Delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms<br />
                                <strong>B)</strong> Needs to be active for ≥1 month and a total of ≥6 months
                            </td>
                            <td style={tdStyle}>Recent history of substance use</td>
                            <td style={tdStyle}>
                                <strong>A)</strong> ≥1 symptom: (1) Delusions (2) Hallucinations (3) Disorganized speech (4) Disorganized behavior AND needs to be one of the first 3<br />
                                <strong>B)</strong> Symptoms lasting ≤1 month, often triggered by stress
                            </td>
                            <td style={tdStyle}>
                                <strong>A)</strong> Delusions or hallucinations for ≥2 weeks in the absence of a major mood episode at some point during the illness.<br />
                                <strong>B)</strong> Major mood episodes are present for the majority of the total duration of the active and residual portions of the illness.
                            </td>
                            <td style={tdStyle}>Depressive symptoms with psychotic manifestations.</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h3>Plan</h3>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Medications</th>
                            <th style={thStyle}>Non-pharmacologic interventions</th>
                            <th style={thStyle}>Acute management for active SI</th>
                            <th style={thStyle}>Safety Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                Initiate or adjust antidepressants (SSRIs, SNRIs)<br />
                                If TRD → Augment
                            </td>
                            <td style={tdStyle}>
                                ECT<br />
                                For severe or TRD with SI<br />
                                Psychotherapy (CBT/DBT for SI)
                            </td>
                            <td style={tdStyle}>
                                EDO or transfer to psych unit<br />
                                Emergency medications<br />
                                Agitation → Sedatives or antipsychotics
                            </td>
                            <td style={tdStyle}>
                                Crisis hotline/contact information (988)<br />
                                Follow-up: Ensure psych follow-up within 48-72h
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <img src='psychotic disorders.jpg' alt='Schizophrenia and Psychosis' style={{ width: '100%', marginBottom: '1em' }} />

                
            </>
        ),
    },

    {
        title: 'Substance Use Disorder',
        content: (
            <>
            <h3>Substance Use/Induced Disorder</h3>
                <div className="table-container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Depressants</th>
                            <th style={thStyle}>Stimulants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                <strong>Common Substances:</strong>
                                <ul>
                                    <li>Alcohol</li>
                                    <li>Benzodiazepines</li>
                                    <li>Barbiturates</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <strong>Common Substances:</strong>
                                <ul>
                                    <li>Cocaine</li>
                                    <li>Methamphetamine</li>
                                    <li>Prescription stimulants (Adderall)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>
                                <strong>Clinical Presentation:</strong>
                                <ul>
                                    <li>↓ BP, HR, RR, temperature</li>
                                    <li>Slurred speech</li>
                                    <li>Ataxia</li>
                                    <li>Drowsiness</li>
                                    <li>Disinhibition</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <strong>Clinical Presentation:</strong>
                                <ul>
                                    <li>↑ BP, HR, RR, temperature</li>
                                    <li>Agitation, anxiety</li>
                                    <li>Insomnia</li>
                                    <li>Paranoia</li>
                                    <li>Hypervigilance</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>
                                <strong>Withdrawal:</strong>
                                <ul>
                                    <li>Tremors</li>
                                    <li>Anxiety</li>
                                    <li>Seizures</li>
                                    <li>Delirium tremens (alcohol)</li>
                                    <li>Can be life-threatening</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <strong>Withdrawal:</strong>
                                <ul>
                                    <li>Fatigue</li>
                                    <li>Depression</li>
                                    <li>Increased appetite</li>
                                    <li>Sleep disturbances</li>
                                    <li>Rarely life-threatening</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>
                                <strong>Emergency Management:</strong>
                                <ol>
                                    <li>ABCs</li>
                                    <li>Assess withdrawal risk</li>
                                    <li>CIWA protocol (alcohol)</li>
                                    <li>Benzodiazepines</li>
                                </ol>
                            </td>
                            <td style={tdStyle}>
                                <strong>Emergency Management:</strong>
                                <ol>
                                    <li>ABCs</li>
                                    <li>Benzodiazepines for agitation</li>
                                    <li>Cooling if hyperthermia</li>
                                    <li>Hydration</li>
                                </ol>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h4>Assessment Strategies</h4>
                <strong>Screening Questions:</strong>
                <ul>
                    <li>When was the last time you used [substance]?</li>
                    <li>How much do you typically use?</li>
                    <li>Have you ever tried to cut down?</li>
                </ul>
                <strong>When Patient is Unwilling to Share:</strong>
                <ul>
                    <li>Focus on building rapport</li>
                    <li>Discuss health impacts without judgment</li>
                    <li>Use motivational interviewing techniques</li>
                    <li>Consider objective testing (UDS)</li>
                </ul>
                <strong>Physical Exam Findings:</strong>
                <ul>
                    <li>Track marks</li>
                    <li>Nasal septum damage</li>
                    <li>Skin changes</li>
                    <li>Neurological symptoms</li>
                </ul>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Hallucinogens</th>
                            <th style={thStyle}>Opioids</th>
                        </tr>
                        <tr>
                            <th colSpan={2} style={thStyle}>Common Substances</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}> •	LSD
                                •	MDMA
                                •	PCP
                            </td>
                            <td style={tdStyle}> •	Heroin
                                •	Prescription opioids
                                •	Fentanyl (Adderall)</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} style={thStyle}>Clinical Presentation</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}> •	Perceptual disturbances
                                •	Anxiety/panic
                                •	Synesthesia
                                •	Autonomic instability
                            </td>
                            <td style={tdStyle}> •	Pinpoint pupils
                                •	Sedation
                                •	Euphoria
                                •	Respiratory depression
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} style={thStyle}>Withdrawal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}> •	Typically psychological
                                •	Rare physical symptoms
                                •	HPPD (flashbacks)

                            </td>
                            <td style={tdStyle}> •	Nausea, vomiting
                                •	Diarrhea, abdominal pain
                                •	Anxiety, agitation
                                •	Rarely life-threatening
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} style={thStyle}>Emergency Management</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}> 1.	Supportive care
                                2.	Benzodiazepines PRN
                                3.	Quiet environment
                                4.	Monitor for self-harm


                            </td>
                            <td style={tdStyle}> 1.	Naloxone for overdose
                                2.	Supportive care
                                3.	Consider buprenorphine
                                4.	Manage withdrawal symptoms

                            </td>
                        </tr>
                    </tbody>
                </table>
                                // Add this JSX where you want to display "General Principles" (e.g., after the substance tables)
                
                <h4>General Principles</h4>
                <div className='table-container'>   
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Assessment &amp; Planning</th>
                            <th style={thStyle}>Co-occurring Psychiatric Disorders</th>
                            <th style={thStyle}>Documentation Tips</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Universal urine drug screen (UDS)</li>
                                    <li>Consider confirmatory testing</li>
                                    <li>Assess for polysubstance use</li>
                                    <li>Screen for co-occurring disorders</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Common comorbidities: Depression, Anxiety, PTSD, Personality disorders</li>
                                    <li>Treat both conditions concurrently</li>
                                    <li>Consider interactions between treatments</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Use objective language</li>
                                    <li>Document vital signs</li>
                                    <li>Note mental status changes</li>
                                    <li>Include collateral information when available</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                                // Add this JSX where you want to display "High-Yield Points" (e.g., after General Principles)
                
                <h4>High-Yield Points</h4>
                <div className='table-container'>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Intoxication Management</th>
                            <th style={thStyle}>Withdrawal Management</th>
                            <th style={thStyle}>Long-term Planning</th>
                            <th style={thStyle}>Common UDS Findings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Focus on safety</li>
                                    <li>Treat symptoms</li>
                                    <li>Consider medical complications</li>
                                    <li>Document capacity</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Alcohol and benzos can be fatal</li>
                                    <li>Use appropriate protocols</li>
                                    <li>Monitor for complications</li>
                                    <li>Consider inpatient for severe cases</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul>
                                    <li>Refer to addiction specialists</li>
                                    <li>Consider MAT when appropriate</li>
                                    <li>Provide resources for support groups</li>
                                    <li>Address social determinants</li>
                                </ul>
                            </td>
                            <td style={tdStyle}>
                                <ul>
                                    <li>False positives/negatives</li>
                                    <li>Detection windows vary</li>
                                    <li>Confirmation testing may be needed</li>
                                    <li>Consider prescribed medications</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </>
        ),
    },

        {
        title: 'Applying Mental Health Skills to Other Rotations',
        content: (
            <div>
                <h3>Applying Mental Health Skills to Other Rotations</h3>
                <h4>The Importance of Comprehensive History Taking</h4>
                <p>
                    Taking a thorough history is a fundamental skill that carries across all rotations. It's easy to focus solely on physical symptoms and overlook mental health concerns. During every rotation, remember that emotional and psychological states play a major role in patient outcomes. Asking about stress, mood changes, or recent life events can reveal mental health conditions like anxiety or depression, which may otherwise go unnoticed.
                </p>
                <ul>
                    <li>
                        <strong>Internal Medicine:</strong> Inpatients often face significant emotional distress. Addressing their emotional needs is as important as treating their physical conditions.
                    </li>
                    <li>
                        <strong>Surgery:</strong> Post-operative patients may experience depression or anxiety. Assess their emotional well-being and ensure adequate social support during recovery.
                    </li>
                    <li>
                        <strong>Neurology:</strong> Chronic neurological conditions can lead to frustration or hopelessness. Check in on mental health and coping mechanisms.
                    </li>
                    <li>
                        <strong>OB/GYN:</strong> Pregnancy and postpartum periods are major transitions. Ensure expectant and new mothers have both physical and mental support.
                    </li>
                    <li>
                        <strong>Pediatrics:</strong> Children may struggle to understand their diagnoses. Inquire about Child Life services to provide emotional support and education.
                    </li>
                    <li>
                        <strong>Family Medicine:</strong> Outpatient settings are ideal for preventive care, including mental health screening and early intervention.
                    </li>
                </ul>
    
                <h4>Screening for MDD and SI in Critically Ill Patients</h4>
                <p>
                    On rotations like internal medicine, surgery, or critical care, patients recovering from severe illnesses (e.g., MI, cancer) are at high risk for major depressive disorder (MDD) or suicidal ideation (SI).
                </p>
                <ul>
                    <li>
                        Studies show that 19.8% of post-MI patients experience depression, which can negatively affect recovery and increase risk of recurrent cardiac events.
                    </li>
                    <li>
                        Early identification of MDD or SI can improve recovery; interventions like counseling or psychiatric referral may be needed.
                    </li>
                    <li>
                        Depression screening alone can’t identify all at-risk patients—direct questioning about suicidal thoughts is necessary.
                    </li>
                </ul>
    
                <h4>Screening for Intimate Partner Violence (IPV) in OB/GYN</h4>
                <p>
                    Intimate partner violence (IPV) affects 1 in 4 women in the US. During pregnancy, prevalence is 3.7–9.0%. IPV increases risk for preterm birth, low birth weight, depression, and PTSD. Use open-ended, nonjudgmental questions to screen for IPV and help initiate interventions.
                </p>
                <ul>
                    <li>"Can you tell me about your home environment? Do you feel safe at home?"</li>
                    <li>"How do you and your partner communicate during stressful times?"</li>
                    <li>"Have you ever felt uncomfortable or scared in your relationship? Can you share more about that?"</li>
                    <li>"What kind of support do you have at home from your partner or family?"</li>
                    <li>"How do you feel about your partner’s behavior towards you, especially during this pregnancy?"</li>
                </ul>
    
                <h4>Recognizing the Emotional Impact of Patients on Yourself</h4>
                <p>
                    Core rotations can be emotionally taxing, especially when working with patients facing serious mental health challenges. It's normal to feel the emotional weight of your patients’ experiences. Develop coping strategies to maintain your own well-being.
                </p>
                <ul>
                    <li>Talk to friends or family</li>
                    <li>Continue at least one hobby during cores</li>
                    <li>Take time to go outside</li>
                    <li>Journal</li>
                    <li>
                        <strong>Seek Professional Help if Needed:</strong> If the emotional toll becomes overwhelming, seek support from a mental health professional.
                    </li>
                </ul>
    
                <h4>Enhancing Communication with Diverse Patient Populations</h4>
                <p>
                    On every rotation, you'll encounter patients from diverse backgrounds. Practicing effective communication—especially with patients from different cultures and socioeconomic statuses—is key to becoming a well-rounded physician. Taking time to understand your patient’s mental health, even in brief interactions, builds trust and improves care.
                </p>
                <ul>
                    <li>Listen deeply and respond compassionately</li>
                    <li>Provide patient-centered care in any clinical setting</li>
                </ul>
            </div>
        ),
    },

        {
        title: 'Tips for Success (Student Perspectives)',
        content: (
            <div>
                <h3>Tips for Success (Student Perspectives)</h3>
                <ul>
                    <li>
                        <strong>Luay</strong>
                        <ul>
                            <li>
                                <strong>BT ER:</strong> You will see a lot of everything but mainly substance-use disorder, MDD, and SI. Most of the time when interviewing, your job is to listen and observe, ask questions regarding certain life events, abuse history (be comfortable with asking those questions), and suicide (asking those questions won’t prompt them to be suicidal as they already thought of it beforehand). <strong>SAFETY IS THE PRIORITY.</strong> Never give a final diagnosis as you are only looking at a snapshot in their life—always say unspecified [mood disorder or other condition].
                            </li>
                            <li>
                                <strong>VA Inpatient:</strong> You will see mainly mood disorders, schizophrenia, and substance use disorders. This is more focused on managing medications, titrating, and assessing mood throughout the hospital stay.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hasham</strong>
                        <ul>
                            <li>
                                <strong>BT ER:</strong> I saw almost everything here but mainly acute situations such as active SI, HI, psychosis, manic episodes, and MDD. The biggest thing is to ensure your safety but also ask questions that build rapport quickly. Sometimes patients will not be able to answer your questions—try asking in different ways. Asking about suicide and trauma can be difficult, but with practice and keeping in mind you are supporting your patient’s health and safety, you will get better. Be proactive; it’s a great learning experience on the acute side of psychiatry!
                            </li>
                            <li>
                                <strong>VA Inpatient:</strong> Very different from the ER—most patients are there for more than one day and you can have full conversations. You’ll see more chronic conditions and work on forming longer relationships, monitoring changes, and adjusting treatment. Both ER and VA require distinct skill sets.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Nikita</strong>
                        <ul>
                            <li>
                                <strong>BT ER:</strong> Good way to learn how to take a psych history with a variety of patients and different levels of cooperativity. You’ll learn the most important questions and how to get a history from manic or psychotic patients. With different attendings daily, it’s a great way to practice presentations and get feedback. You function independently and mostly observe for crisis interventions.
                            </li>
                            <li>
                                <strong>BT Inpatient:</strong> You see the same patients over multiple days, allowing for a more thorough history. Medical students lead interviews, so you can find your own style. Safety is key—end interviews early if uncomfortable. Great way to learn about medications and management.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Jacqueline</strong>
                        <ul>
                            <li>
                                <strong>BT ER:</strong> You have a lot of independence, seeing and interviewing patients alone from day one and presenting to attendings. Great practice for standardized patient exams and forming differentials, as patients may have first-break psychosis or unclear diagnoses. The workroom can feel overwhelming, but be proactive in seeing patients and asking for feedback. Use downtime to study or do UWorld questions.
                            </li>
                            <li>
                                <strong>VA Inpatient:</strong> You typically work 1-on-1 with your attending for two weeks, allowing you to observe and get feedback on your interview style. You’ll learn about voluntary vs. involuntary admissions and aspects of psychiatry not covered in First Aid. Different from ER, as you see patients over several days and appreciate the impact of treatment and medication.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        ),
    },
]


const Psychiatry = () => {

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
            title="Psychiatry"
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



export default Psychiatry;