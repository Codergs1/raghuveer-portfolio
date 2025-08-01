import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="portfolio-container">
      <div className="portfolio-card">
        <h1 className="name">Raghuveer</h1>
        <p className="education">
          Completed Engineering in Information Technology from MVSR.
        </p>
        <div className="details">
          <p>
            I love <strong>writing</strong>, <strong>content creation</strong>, 
            and exploring <strong>business & entrepreneurship</strong>.
          </p>
          <p>
            Worked for <strong>6 months</strong> at 
            <span className="company"> Energ Solutions Pvt Ltd</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
