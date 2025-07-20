import { Link } from 'react-router-dom';

const sections = [
  { title: "General Topics", path: "/GeneralTopics" },
  { title: "Survival Guide for EMR", path: "/SurvivalGuideEMR" },
  { title: "Labs", path: "/Labs" },
  { title: "Imaging", path: "/Imaging" },
  { title: "Neurology", path: "/Neurology" },
  { title: "Psychiatry", path: "/Psychiatry" },
  { title: "Obstetrics and Gynecology", path: "/ObstetricsGynecology" },
  { title: "Labor and Delivery", path: "/Labor" },
  { title: "ObGyn: Labor & Delivery", path: "/labor" },
  { title: "ObGyn: Obstetrics", path: "/ob" },
  { title: "ObGyn: Gynecology", path: "/gyn" },
  { title: "Family and Community Medicine", path: "/family" },
  { title: "Pediatrics: Pediatric Hospital Medicine", path: "/PHM" },
  { title: "Pediatrics: Neonatology", path: "/neo" },
  { title: "Pediatrics: Community", path: "/peds" },
  { title: "Internal Medicine", path: "/im" },
  { title: "Surgery", path: "/surgery" },
  { title: "Feedback", path: "/Feedback" },
  { title: "ObGyn", path: "/OBGYN Test"}
]

const Home = () => {
  return (
    <>
      <div
        style={{
          padding: 20,
          minHeight: '100vh',
          backgroundImage: 'url("/Title Image.jpg")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >



        <h1 style={{ color: '#fff', textShadow: '2px 2px 4px #000' }}>Welcome to the Gray Matter Website</h1>
        <div style={{ marginTop: 500 }}>
        {sections.map((section) => (
          <div key={section.path} style={{  marginBottom: 10 }}>
            <Link to={section.path}>
              <button style={{
                width: '100%',
                padding: 10,
                backgroundColor: 'transparent',
                color: '#000',
                border: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                cursor: 'pointer',
                textShadow: '1px 1px 2px #000',
              }}>
                {section.title}
              </button>
            </Link>
          </div>
        
        ))}
        </div>
      </div>

    </>
  );
};

export default Home;