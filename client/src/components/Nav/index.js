import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
  display: flex;
  margin-left: 32px;
`;

const Link = styled(NavLink)`
  margin-left: 32px;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.backgroundTextColor};

  &.active {
    color: ${props => props.theme.primaryColor};
  }
`;

const nav = [
  {
    name: 'Library',
    href: '/'
  },
  {
    name: 'Report',
    href: '/report'
  }
];

export default function Nav() {
  return (
    <NavWrapper>
      {nav.map(n => (
        <Link key={n.href} activeClassName="active" to={n.href}>
          {n.name}
        </Link>
      ))}
    </NavWrapper>
  );
}
