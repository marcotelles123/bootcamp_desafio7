import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Link to="/import">
        Importar
        <img src={Logo} alt="GoFinances"></img>
      </Link>
      <nav>{<Link to="/import" />}</nav>
    </header>
  </Container>
);

export default Header;
