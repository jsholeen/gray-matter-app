import { Link } from 'react-router-dom';

const Preround = () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Link to="/GeneralTopics">
          <button>Back to General Topics</button>
        </Link>
      </div>
      <h2>General PreRound Checklist</h2>
      <ol>
        <li>
          <strong>Chart Review:</strong> Start writing your note as soon as you start chart-reviewing to help synthesize the information.
          <ul>
            <li>Check patient’s name, age, reason for admission (chief complaint/one-liner)</li>
            <ul>
              <li>On Epic, review the Handoff section for team summary and isolation precautions.</li>
            </ul>
            <li>Check for a team-specific HPI note. If not, read the ER HPI or previous encounter notes.</li>
            <li>Check for hospital admissions in the past 2 years.</li>
            <li>Review relevant specialists’ notes.</li>
            <li>Review PMHx, surgical history, medications, allergies with adverse effects.</li>
            <ul>
              <li>Ask the patient about their medications, as records may be outdated or refused.</li>
            </ul>
            <li>Check for overnight events: nurse notes, consulting notes, changes in plan.</li>
            <li>Check for acute overnight events (fever, vomiting, medications).</li>
            <li>Review vital signs and trend over 24 hours; record min/max and any abnormal patterns.</li>
            <li>Check new lab results and compare to previous ones.</li>
            <ul>
              <li>Synthesize and interpret results; summarize abnormal values by condition (e.g., anemia).</li>
              <li>Adapt your system to attending preferences.</li>
              <li>Monitor microbiology results, cultures, and sensitivities.</li>
            </ul>
            <li>Review imaging and procedures: note new, previous, and pending studies.</li>
            <ul>
              <li>Follow up on pending studies to stay involved.</li>
            </ul>
            <li>Review yesterday’s physical exam findings and plan your exam based on chief complaint and data.</li>
            <li>Review the current treatment plan and consider adjustments before and after seeing the patient.</li>
            <li>Additional items (as needed):
              <ul>
                <li>Medication changes: check MAR for administration and dosing.</li>
                <li>Patient’s input/output, fluids, and diet.</li>
                <li>Lines: check placement date and details.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>See the Patient:</strong> Allow 15-20 minutes for a full HPI. Focus on acute overnight events, symptom changes, ROS, physical exam, and answering patient questions.
        </li>
        <li>
          <strong>Update Your Note:</strong> Edit with new information. Use OpenEvidence/UpToDate for differential and management plans.
        </li>
      </ol>
    </>
  );
};

export default Preround;