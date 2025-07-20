import SubSectionTemplate from '../components/SubSectionTemplate';
import React, { useState, useRef } from 'react';
import { thStyle, tdStyle } from '../styles/styles';



const sections = [
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

];



const Gyn = ({openIndex, setOpenIndex, startIndex}) => {
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
      title="Gynecology"
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

export default Gyn;