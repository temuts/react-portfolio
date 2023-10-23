import React from 'react';
import '../../App.css'; 
// Importing images from the assets folder
import singAlongImage from '../../../public/assets/singalong.png';
import barkingBuddiesImage from '../../../public/assets/barkingbuddies.png';
import upcomingProject3Image from '../../../public/assets/upcomingproject1.png';
import upcomingProject4Image from '../../../public/assets/upcomingproject2.png';

export default function Projects() {
  const projectImages = [
    singAlongImage,
    barkingBuddiesImage,
    upcomingProject3Image,
    upcomingProject4Image
  ];

  const projects = [
    { title: 'Sing-Along', link: 'https://eric-k-smyth.github.io/sing-along/' },
    { title: 'Barking Buddies', link: 'https://barkingbuddies-6c4e2edae219.herokuapp.com/login' },
    { title: 'Upcoming Project 3', link: '' },
    { title: 'Upcoming Project 4', link: '' },
  ];

  return (
    <div className="container">
      {projects.map((project, index) => (
        <div key={index} className="project-card" style={{ backgroundImage: `url(${projectImages[index]})` }}>
          <a href={project.link}>
            <h1>{project.title}</h1>
          </a>
        </div>
      ))}
    </div>
  );
  
}
