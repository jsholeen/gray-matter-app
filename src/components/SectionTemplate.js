import { Link } from 'react-router-dom';

const SectionTemplate = ({ title, content }) => (
  <div style={{ padding: 20 }}>
    <Link to="/">← Back to Home</Link>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default SectionTemplate;