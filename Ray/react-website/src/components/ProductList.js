import React, { Component } from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';
import Title from './Title';

export default class ProductList extends Component {
	state = {
		product: [],
	};
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<Container>
						<Row>
							<Title name="our" title="products" />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
