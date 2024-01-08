import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  p {
    color: white;
    margin: 0;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

