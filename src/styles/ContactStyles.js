import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 50px;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
