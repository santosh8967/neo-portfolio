import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        color: white;
        &:hover {
          border-bottom: 2px solid white;
        }
      }
    }
  }
`;

