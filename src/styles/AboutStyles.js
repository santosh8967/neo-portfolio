// // ContactStyles.js
// import styled from 'styled-components';

// export const AboutContainer = styled.section`
//   padding: 50px;
//   background-color: #379683; /* Dark background color */
//   color: white;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */
//   h2 {
//     font-size: 2.5rem; /* Increase font size for emphasis */
//     margin-bottom: 20px; /* Increase margin for spacing */
//   }
//   p {
//     font-size: 1.5rem; /* Adjust font size */
//     line-height: 1.5;
//     margin-bottom: 10px; /* Increase margin for spacing */
//     a {
//       color: black; /* Light green link color */
//       text-decoration: none;
//       font-weight: bold; /* Increase font weight for emphasis */
//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   }
// `;

// AboutStyles.js
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const AboutContainer = styled.section`
  padding: 50px;
  background-color: #05386B; /* Dark blue background color */
  color: #5CDB95; /* Light green text color */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  animation: ${rotate} 20s linear infinite;

  h2 {
    font-size: 2.5rem; /* Increase font size for emphasis */
    margin-bottom: 20px; /* Increase margin for spacing */
  }

  p {
    font-size: 1.5rem; /* Adjust font size */
    line-height: 1.5;
    margin-bottom: 15px; /* Increase margin for spacing */
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(45deg, #379683, #05386B); /* Gradient from teal to dark blue */
    transform: rotateX(45deg);
    z-index: -1;
  }
`;
