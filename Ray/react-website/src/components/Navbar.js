import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default function Navbar() {
	return (
		<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						Product
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i className="fa fa-cart-plus" /> MY CART
					</span>
				</ButtonContainer>
			</Link>
		</NavWrapper>
	);
}

const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;