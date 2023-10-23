import '../../App.css'; 
const profilePic = "../../assets/me.jpeg";
const resume = "../../assets/resume.pdf"
export default function Home() {
  return (
    <div>
    <div className="resume-download">
    <a href='../../../public/assets/resume.pdf' download="resume.pdf">
  Download Temuulen's Resume
</a>
    </div>
  </div>
  );
}
