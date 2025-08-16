import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
      <header className="header">
        <img src="your-dp.jpg" alt="Raghuveer DP" className="profile-pic" />
        <h1>Raghuveer Goud Solipeta</h1>
        <p>"I write to make sense of the world, build to explore it, and play to stay human."</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Namaste! I’m <strong>Raghuveer</strong> — a writer, a curious learner, and someone who gets excited at the thought of picking up a brand-new skill — whether it’s building websites, decoding startup models, or crafting emotional arcs through characters.</p>
          <p>I’ve worn many hats – from startup strategist to scriptwriter, from club coordinator to radio storyteller. What connects all these? An urge to keep learning and building something meaningful.</p>
          <p><em>"Felt strings in coding were overrated. So I turned them down and started striking real guitar strings."</em></p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="card">
            <h3>Founder’s Office Associate – EnerG Solutions Pvt Ltd / I Am Ratan (Feb 2025 – Present)</h3>
            <ul>
              <li><strong>Navik Urjah:</strong> Contributed to research on plastic-to-fuel via pyrolysis.</li>
              <li><strong>28 Days:</strong> Wrote a well-received blog on menstrual health (unpublished).</li>
              <li><strong>Aadi:</strong> Worked on fashion trend reports, website themes, brand strategy, and ad content for a premium shirt brand.</li>
              <li>Designed and launched company website using Wix. Supported in branding, pitch decks, and investor communications.</li>
            </ul>
          </div>
        </section>

        <section id="writing">
          <h2>Writing Portfolio</h2>
          <div className="card">
            <h3>Feature Script – [Your Film Title]</h3>
            <p><strong>Genre:</strong> [Drama / Mystery]</p>
            <p><em>Logline:</em> A man discovers the truth about himself by running into the one lie he thought he buried.</p>
          </div>
          <div className="card">
            <h3>Radio Script – "Echoes of Silence"</h3>
            <p>Short fiction piece created for college radio. Themes of isolation and unspoken friendship.</p>
          </div>
          <div className="card">
            <h3>Ongoing Projects</h3>
            <ul>
              <li><strong>Mind Map</strong> – Psychological Drama – In Progress</li>
              <li><strong>Dhoop Mein Guitar</strong> – Slice-of-Life – Drafting</li>
              <li><strong>2 Rupees</strong> – Satire – Storyboard stage</li>
            </ul>
          </div>
          <div className="card">
            <h3>Just a Glimpse</h3>
            <ul>
              <li>Ad Concept: "If Men Had Periods" – satirical skit</li>
              <li>Social Campaign: #BehindTheShirt</li>
            </ul>
          </div>
          <div className="card">
            <h3>Stand-up Concepts</h3>
            <p><strong>Indian Dads & Their Love Language = Shouting</strong></p>
            <p>“You know your dad loves you when he says, ‘TV bandh kar aur so ja’ — which actually means I care about your future.”</p>
          </div>
        </section>

        <section id="activities">
          <h2>Activities & Clubs</h2>
          <ul>
            <li>Event Head – Google Developer Student Club</li>
            <li>Member – CSI, ACM</li>
            <li>Drama Club – Acting, Storytelling</li>
            <li>Radio Club – Scripted & Hosted content</li>
            <li>Organized Dussera cultural event with friends independently</li>
          </ul>
        </section>

        <section id="extracurricular">
          <h2>Extracurricular Activities</h2>
          <p>I enjoy most sports, but if it’s badminton, I’m in a different zone altogether.</p>
        </section>

        <section id="interests">
          <h2>Interests</h2>
          <ul>
            <li><strong>Films:</strong> I live and breathe cinema.</li>
            <li><strong>Travel:</strong> Love road trips and new food spots.</li>
            <li><strong>Chess:</strong> Whenever checking emails gets boring, I checkmate opponents in chess instead.</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>📧 raghuveergoudsolipeta1@gmail.com</p>
          <p>🔗 <a href="https://www.linkedin.com/in/raghuveergoud" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
          {/* <p>📄 <a href="/your-resume.pdf" target="_blank" rel="noreferrer">Download Resume</a></p> */}
        </section>
      </main>

      <footer>
        <p>© 2025 Raghuveer Goud Solipeta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
