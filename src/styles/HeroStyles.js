// import styled from 'styled-components';

// export const HeroContainer = styled.section`
//   text-align: center;
//   padding: 50px;
//   background-color: #f0f0f0;
//   h1 {
//     margin-bottom: 10px;
//   }
//   p {
//     font-size: 18px;
//     margin-bottom: 5px;
//   }
// `;
// // HeroStyles.js
// import styled from 'styled-components';

// export const HeroContainer = styled.section`
//   text-align: center;
//   padding: 50px;
//   background-color: #379683; /* Teal background color */
//   color: white;
//   h1 {
//     margin-bottom: 20px; /* Increase margin for spacing */
//     font-size: 2.5rem; /* Increase font size for emphasis */
//   }
//   p {
//     font-size: 1.5rem; /* Adjust font size */
//     margin-bottom: 20px; /* Increase margin for spacing */
//   }
// `;

// HeroStyles.js
// import styled, { keyframes } from 'styled-components';

// const flipFlop = keyframes`
//   0%, 100% {
//     transform: rotateX(0deg);
//   }
//   50% {
//     transform: rotateX(180deg);
//   }
// `;

// const boldAnimation = keyframes`
//   0%, 100% {
//     font-weight: normal;
//   }
//   50% {
//     font-weight: bold;
//   }
// `;

// export const HeroContainer = styled.section`
//   text-align: center;
//   padding: 50px;
//   background-color: #379683; /* Teal background color */
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh; /* Full height of the viewport */

//   h1 {
//     margin-bottom: 20px; /* Increase margin for spacing */
//     font-size: 2.5rem; /* Increase font size for emphasis */
//     animation: ${flipFlop} 3s ease-in-out infinite; /* Flip-flop animation */
//   }

//   p {
//     font-size: 1.5rem; /* Adjust font size */
//     margin-bottom: 20px; /* Increase margin for spacing */
//     animation: ${boldAnimation} 3s ease-in-out infinite; /* Bold animation */
//   }
// `;

// HeroStyles.js
import styled, { keyframes } from 'styled-components';

const flipFlop = keyframes`
  0%, 100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(180deg);
  }
`;

const boldAnimation = keyframes`
  0%, 100% {
    font-weight: normal;
  }
  50% {
    font-weight: bold;
  }
`;

export const HeroContainer = styled.section`
  text-align: center;
  padding: 50px;
  background: url('https://wallpapercave.com/wp/wp10167050.jpg') center/cover no-repeat; /* Adjust the image URL */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the viewport */

  h1 {
    margin-bottom: 20px; /* Increase margin for spacing */
    font-size: 2.5rem; /* Increase font size for emphasis */
    animation: ${flipFlop} 3s ease-in-out infinite; /* Flip-flop animation */
  }

  p {
    font-size: 2rem; /* Adjust font size */
    margin-bottom: 20px; /* Increase margin for spacing */
    animation: ${boldAnimation} 3s ease-in-out infinite; /* Bold animation */
  }
`;
