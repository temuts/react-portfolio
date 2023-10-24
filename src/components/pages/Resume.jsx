import '../../App.css'; 
const profilePic = "../../assets/me.jpeg";
const resume = "../../assets/resume.pdf"

export default function Home() {
  return (
      <div className="resume-card">
          <img src={profilePic} alt="Profile" className="profile-pic"/>
          <div className="card-body">
              <h3>Would you like to learn more?</h3>
              <p>Please click below to download my resume.</p>
              <a href={resume} download="resume.pdf" className="download-btn">Download Temuulen's Resume</a>
          </div>
      </div>
  );
}