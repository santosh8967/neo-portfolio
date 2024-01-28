// import styled from 'styled-components';

// export const NavbarContainer = styled.nav`
//   background-color: #333;
//   padding: 10px;
//   ul {
//     list-style: none;
//     display: flex;
//     justify-content: space-around;
//     li {
//       a {
//         text-decoration: none;
//         color: white;
//         &:hover {
//           border-bottom: 2px solid white;
//         }
//       }
//     }
//   }
// `;
// NavbarStyles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #05386B;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        color: #5CDB95;
        font-weight: bold; /* Increase font weight for emphasis */
        font-size: 1.2rem; /* Adjust font size */
        &:hover {
          border-bottom: 2px solid #5CDB95;
        }
      }
    }
  }
`;

