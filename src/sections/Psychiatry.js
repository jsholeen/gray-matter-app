import SectionTemplate from '../components/SectionTemplate';
import { thStyle, tdStyle } from '../styles/styles';

const Psychiatry = () => {
  return (
    
    <><SectionTemplate title="Psychiatry">

      </SectionTemplate><h2>General HPI Interview</h2><p>
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
          </ul><h3>Antidepressants</h3><table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                  <tr>
                      <th style={thStyle}>Medication</th>
                      <th style={thStyle}>Class</th>
                      <th style={thStyle}>Key Points</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td style={tdStyle}>Fluoxetine (Prozac)</td>
                      <td style={tdStyle}>SSRI</td>
                      <td style={tdStyle}>Longest half-life, activating, safe in pregnancy</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Sertraline (Zoloft)</td>
                      <td style={tdStyle}>SSRI</td>
                      <td style={tdStyle}>Good first-line, GI upset, fewer interactions</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Paroxetine (Paxil)</td>
                      <td style={tdStyle}>SSRI</td>
                      <td style={tdStyle}>Sedating, weight gain, withdrawal symptoms</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Bupropion (Wellbutrin)</td>
                      <td style={tdStyle}>NDRI</td>
                      <td style={tdStyle}>No sexual side effects, contraindicated in seizures/eating disorders</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Duloxetine (Cymbalta)</td>
                      <td style={tdStyle}>SNRI</td>
                      <td style={tdStyle}>Good for depression + chronic pain</td>
                  </tr>
              </tbody>
          </table><h3>Antipsychotics</h3><table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                  <tr>
                      <th style={thStyle}>Medication</th>
                      <th style={thStyle}>Class</th>
                      <th style={thStyle}>Side Effects / Comments</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td style={tdStyle}>Olanzapine</td>
                      <td style={tdStyle}>Second Gen</td>
                      <td style={tdStyle}>Weight gain, metabolic syndrome</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Risperidone</td>
                      <td style={tdStyle}>Second Gen</td>
                      <td style={tdStyle}>EPS at high doses</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Quetiapine</td>
                      <td style={tdStyle}>Second Gen</td>
                      <td style={tdStyle}>Sedating, weight gain</td>
                  </tr>
                  <tr>
                      <td style={tdStyle}>Haloperidol</td>
                      <td style={tdStyle}>First Gen</td>
                      <td style={tdStyle}>High EPS risk, less sedating</td>
                  </tr>
              </tbody>
          </table><h3>Emergency Psychiatric Medications</h3><table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
    </table></>
  );
};



export default Psychiatry;