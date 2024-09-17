import React from 'react';
import './TeamSection.css';

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="team-member">
    <div className="team-member-avatar">
      <img src={image} alt={name} />
    </div>
    <div className="team-member-info">
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    { name: 'Adelin Johari', role: 'CEO & co-ounder', linkedIn: 'https://www.linkedin.com/in/adelin-johari-561a42256/', image: `${process.env.PUBLIC_URL}/adelin-img.png`},
    { name: 'Paraaga Raghavendra', role: 'co-founder', linkedIn: 'https://www.linkedin.com/in/paraaga-raghavendra-84ba3a255/', image: `${process.env.PUBLIC_URL}/paraaga-img.jpg`},
    { name: 'Wen Xin', role: 'Buiness Analyst', linkedIn: 'https://www.linkedin.com/in/wen-xin-foo-788911256/', image: `${process.env.PUBLIC_URL}/wenxin-img.jpg`},
    { name: 'Aqif Yeo', role: 'Product Designer', linkedIn: 'https://www.linkedin.com/in/aqif-yeo/', image: `${process.env.PUBLIC_URL}/aqif-img.jpg`},
    { name: 'Xie Jiacheng', role: 'Mechanical Engineer', linkedIn: 'https://www.linkedin.com/in/jiacheng-xie/', image: `${process.env.PUBLIC_URL}/jiacheng-img.jpg`},
    { name: 'Jignesh Motwani', role: 'Software Engineer', linkedIn: 'https://www.linkedin.com/in/jigneshmotwani/', image: `${process.env.PUBLIC_URL}/jignesh-img.jpg`},
  ];

  return (
    <div className="team-section">
      <h2 className="team-section-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} onClick={() => window.open(member.linkedIn)}>
            <TeamMember name={member.name} role={member.role} image={member.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
