import '../../App.css'; 
import profilePic from '../../../public/assets/me.jpeg'
export default function Home() {
  return (
    <div>
      <div className="card">
        <img src={profilePic} alt="Temuulen Tsengel Picture" className="profile-pic"/>
        <h1>Temuulen Tsengel</h1>
        <p>
          Temuulen Tsengel is a full stack web developer with expansive knowledge in JavaScript, Node JS, Express, SQL, MongoDB, and React. She is currently a student in the University of Toronto Edx Full Stack Web Development Bootcamp. She is due to graduate in November 2023, and looks to diversify her portfolio in continuing to build applications and is always looking to learn new skills and technologies. </p>
      </div>
      <div className="card">
        <ul>
          <li><a href="https://github.com/temuts">Github</a></li>
          <li><a href="https://www.linkedin.com/in/temuulen-t-0b53a8116/">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/lunemute/">Instagram</a></li>
          <li><a href="https://www.facebook.com/temuulen.tsengel">Facebook</a></li>
        </ul>
      </div>
    </div>
  );
}
