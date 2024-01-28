// Project.js
// import React from 'react';

// const projectsData = [
//   {
//     title: 'Shoe Billing App(full stack)',
//     frontendLink: 'https://github.com/santosh8967/inventory-app-frontend',
//     backendLink: 'https://github.com/santosh8967/inventory-backend',
//   },
//   {
//     title: 'pricing table (React)',
//     frontendLink: 'https://github.com/santosh8967/pricing_table',
    
//   },
//   {
//     title: 'nodejs time (nodejs)',
//  backendLink: 'https://github.com/santosh8967/nodejs-filesystem',
//   },
//   {
//     title:'Auth backend(nodejs)',
    
//     backendLink: 'https://github.com/santosh8967/auth-backend-29',
//   },
// ];

// const Project = () => {
//   return (
//     <div>
//       {projectsData.map((project, index) => (
//         <div key={index} style={{ marginBottom: '20px', maxWidth: '600px', textAlign: 'center' }}>
//           <h2 style={{ marginBottom: '10px' }}>{project.title}</h2>
//           <div>
//             <a href={project.frontendLink} target="_blank" rel="noopener noreferrer">Frontend Code</a>
//             <a href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend Code</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Project;

// // Project.js
// import React from 'react';

// const projectsData = [
//   {
//     title: 'Shoe Billing App(full stack)',
//     frontendLink: 'https://github.com/santosh8967/inventory-app-frontend',
//     backendLink: 'https://github.com/santosh8967/inventory-backend',
//   },
//   {
//     title: 'Pricing Table (React)',
//     frontendLink: 'https://github.com/santosh8967/pricing_table',
//   },
//   {
//     title: 'Node.js Time (Node.js)',
//     backendLink: 'https://github.com/santosh8967/nodejs-filesystem',
//   },
//   {
//     title: 'Auth Backend (Node.js)',
//     backendLink: 'https://github.com/santosh8967/auth-backend-29',
//   },
// ];

// const Project = () => {
//   const containerStyle = {
//     background: `url('https://wallpapercave.com/wp/wp10167050.jpg') center/cover no-repeat`, // Adjust the image URL
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//   };

//   return (
//     <div style={containerStyle}>
//       {projectsData.map((project, index) => (
//         <div key={index} style={{ marginBottom: '20px', maxWidth: '600px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
//           <h2 style={{ marginBottom: '10px' }}>{project.title}</h2>
//           <div>
//             <a href={project.frontendLink} target="_blank" rel="noopener noreferrer">Frontend Code</a>
//             <a href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend Code</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Project;

// Project.js
import React from 'react';

const projectsData = [
  {
    title: 'Shoe Billing App (Full Stack)',
    frontendLink: 'https://github.com/santosh8967/inventory-app-frontend',
    backendLink: 'https://github.com/santosh8967/inventory-backend',
  },
  {
    title: 'Pricing Table (React)',
    frontendLink: 'https://github.com/santosh8967/pricing_table',
  },
  {
    title: 'Node.js Time (Node.js)',
    backendLink: 'https://github.com/santosh8967/nodejs-filesystem',
  },
  {
    title: 'Auth Backend (Node.js)',
    backendLink: 'https://github.com/santosh8967/auth-backend-29',
  },
];

const Project = () => {
  const containerStyle = {
    background: `url('https://wallpapercave.com/wp/wp10167050.jpg') center/cover no-repeat`, // Adjust the image URL
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: '0', // Remove default body margin
    overflow: 'hidden', // Prevent scrolling
  };

  return (
    <div style={containerStyle}>
      {projectsData.map((project, index) => (
        <div key={index} style={{ marginBottom: '20px', maxWidth: '600px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ marginBottom: '10px' }}>{project.title}</h2>
          <div>
            <a href={project.frontendLink} target="_blank" rel="noopener noreferrer">Frontend Code</a>
            <a href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend Code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
