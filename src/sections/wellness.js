import SectionTemplate from "../components/SectionTemplate";

const Wellness = () => {
  return (
    <>
    <SectionTemplate title = "Wellness Resources" />
      <h2>Wellness Resources</h2>
      <p>
        All students and trainees are eligible for a free intake appointment at <strong>Student and House Staff Mental Health Services</strong>. Based on the intake, you may be further eligible for 12 free sessions a year. If it is determined we are unable to meet your needs, we will work to provide appropriate referrals outside our service. If you have already been evaluated for services and referred out, SHSMHS is unable to provide you with the type of mental health services that are recommended to meet your needs.
      </p>
      <p>
        Psychotherapy and/or psychopharmacology sessions are provided by Baylor College of Medicine doctoral level faculty psychiatrists and psychologists. These services, which include individual psychotherapy as well as relationship/couple’s therapy, are only available to Baylor students, residents and fellows, are confidential and are not reported to administrative personnel or anyone else at Baylor.
      </p>
      <ul>
        <li>
          <strong>To schedule an intake for psychotherapy and/or psychopharmacology:</strong> Call <a href="tel:7137984881">(713) 798-4881</a>
        </li>
        <li>
          <strong>To schedule an intake for psychotherapy only:</strong> Email <a href="mailto:student-help@bcm.edu">student-help@bcm.edu</a>
        </li>
      </ul>
      <img size = '100%' src="wellconnect.png" alt="Wellness Resources" />
      <p>
        When it comes to student life, no problem is too big or too small to need a little guidance. That’s why <strong>WellConnect</strong> offers confidential, voluntary counseling and resource referral services to students and their household members. This program is specifically designed to help students manage and improve their mental health as they work to achieve your academic and career goals. With a new online therapy service, support is more convenient than ever!
      </p>
      <ul>
        <li>
          Log in to <a href="https://www.WellConnectForYou.com" target="_blank" rel="noopener noreferrer">www.WellConnectForYou.com</a> and enter school code <strong>R347</strong> to start.
        </li>
      </ul>
    </>
  );
};

export default Wellness;
