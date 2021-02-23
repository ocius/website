import styled from 'styled-components';
import DynamicLink from '../DynamicLink';

const NavLink = styled(DynamicLink)`
  outline: 2px solid transparent;
  outline-offset: -2px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: 0.16px;
  position: relative;
  display: flex;
  align-items: center;
  height: 3.2rem;
  min-height: 3.2rem;
  padding: 0 1.6rem;
  text-decoration: none !important;
  transition: color 0.11s, background-color 0.11s, outline 0.11s;
  font-weight: 400;

  &[data-active],
  :hover {
    color: ${(props) => props.theme.colors.themeDark};
    background-color: ${(props) => props.theme.colors.neutralLight};
  }

  &[data-active] :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background-color: ${(props) => props.theme.colors.themePrimary};
    content: '';
  }
`;

export default NavLink;
