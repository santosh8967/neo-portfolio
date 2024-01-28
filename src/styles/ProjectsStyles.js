// // ProjectsStyles.js
// import styled from 'styled-components';

// export const ProjectsContainer = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 5px;
//   margin-bottom: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */

//   h2 {
//     font-size: 2rem; /* Increase font size for emphasis */
//     margin-bottom: 5px;
//     color: black; /* Darker text color */
//   }

//   p {
//     margin-bottom: 10px;
//     font-size: 1.2rem; /* Adjust font size */
//     color: #666; /* Slightly darker text color */
//   }

//   img {
//     width: 10%;
//     max-height: 100px;
//     object-fit: cover;
//     border-radius: 5px; /* Increase border-radius for rounded corners */
//     margin-bottom: 5px;
//     transition: transform 0.3s ease-in-out; /* Add smooth transition on hover */

//     &:hover {
//       transform: scale(1.05); /* Zoom in on hover */
//     }
//   }

//   div {
//     display: flex;
//     justify-content: space-around;

//     a {
//       padding: 5px;
//       border: 1px solid #007bff;
//       color: #007bff;
//       text-decoration: none;
//       border-radius: 5px; /* Increase border-radius for rounded corners */
//       transition: background-color 0.3s, color 0.3s; /* Add smooth transitions */

//       &:hover {
//         background-color: #007bff;
//         color: #fff;
//       }
//     }
//   }
// `;

// ProjectsStyles.js
// import styled from 'styled-components';

// export const ProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */

//   div {
//     width: 100%;
//     margin-bottom: 20px;

//     h2 {
//       font-size: 2rem; /* Increase font size for emphasis */
//       margin-bottom: 10px;
//       color: black; /* Darker text color */
//     }

//     p {
//       margin-bottom: 15px;
//       font-size: 1.2rem; /* Adjust font size */
//       color: #666; /* Slightly darker text color */
//     }

//     img {
//       width: 100%;
//       max-height: 150px;
//       object-fit: cover;
//       border-radius: 5px; /* Increase border-radius for rounded corners */
//       margin-bottom: 10px;
//       transition: transform 0.3s ease-in-out; /* Add smooth transition on hover */

//       &:hover {
//         transform: scale(1.05); /* Zoom in on hover */
//       }
//     }

//     div {
//       display: flex;
//       justify-content: space-around;

//       a {
//         padding: 10px;
//         border: 1px solid #007bff;
//         color: #007bff;
//         text-decoration: none;
//         border-radius: 5px; /* Increase border-radius for rounded corners */
//         transition: background-color 0.3s, color 0.3s; /* Add smooth transitions */

//         &:hover {
//           background-color: #007bff;
//           color: #fff;
//         }
//       }
//     }
//   }
// `;

// // ProjectsStyles.js
// import styled from 'styled-components';

// export const ProjectsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-start;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */

//   div {
//     width: calc(50% - 20px);
//     margin: 10px;
//     box-sizing: border-box;

//     h2 {
//       font-size: 2rem; /* Increase font size for emphasis */
//       margin-bottom: 10px;
//       color: black; /* Darker text color */
//     }

//     p {
//       margin-bottom: 15px;
//       font-size: 1.2rem; /* Adjust font size */
//       color: #666; /* Slightly darker text color */
//     }

//     img {
//       width: 100%;
//       max-height: 150px;
//       object-fit: cover;
//       border-radius: 5px; /* Increase border-radius for rounded corners */
//       margin-bottom: 10px;
//       transition: transform 0.3s ease-in-out; /* Add smooth transition on hover */

//       &:hover {
//         transform: scale(1.05); /* Zoom in on hover */
//       }
//     }

//     div {
//       display: flex;
//       justify-content: space-around;

//       a {
//         padding: 10px;
//         border: 1px solid #007bff;
//         color: #007bff;
//         text-decoration: none;
//         border-radius: 5px; /* Increase border-radius for rounded corners */
//         transition: background-color 0.3s, color 0.3s; /* Add smooth transitions */

//         &:hover {
//           background-color: #007bff;
//           color: #fff;
//         }
//       }
//     }
//   }
// `;

// ProjectsStyles.js
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for depth */

  div {
    width: calc(50% - 20px);
    margin: 10px;
    box-sizing: border-box;

    h2 {
      font-size: 2rem; /* Increase font size for emphasis */
      margin-bottom: 10px;
      color: black; /* Darker text color */
    }

    div {
      display: flex;
      justify-content: space-around;

      a {
        padding: 10px;
        border: 1px solid #007bff;
        color: #007bff;
        text-decoration: none;
        border-radius: 5px; /* Increase border-radius for rounded corners */
        transition: background-color 0.3s, color 0.3s; /* Add smooth transitions */

        &:hover {
          background-color: #007bff;
          color: #fff;
        }
      }
    }
  }
`;

