// import styled from 'styled-components';

// export const ContactContainer = styled.section`
//   padding: 50px;
//   h2 {
//     font-size: 24px;
//     margin-bottom: 20px;
//   }
//   p {
//     font-size: 18px;
//     margin-bottom: 10px;
//     a {
//       color: #007bff;
//       text-decoration: none;
//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   }
// `;
// ContactStyles.js
import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 50px;
  background-color: #379683; /* Dark background color */
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */
  h2 {
    font-size: 2.5rem; /* Increase font size for emphasis */
    margin-bottom: 20px; /* Increase margin for spacing */
  }
  p {
    font-size: 1.5rem; /* Adjust font size */
    line-height: 1.5;
    margin-bottom: 10px; /* Increase margin for spacing */
    a {
      color: blue; /* Light green link color */
      text-decoration: none;
      font-weight: bold; /* Increase font weight for emphasis */
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
