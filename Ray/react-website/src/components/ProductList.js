import React, { Component } from 'react';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';
import Title from './Title';
import { detailProduct, storeProducts } from '../data';
import { ProductConsumer } from '../Context';

export default class ProductList extends Component {
	state = {
		products: storeProducts,
		detailProduct: detailProduct,
	};
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<Container>
						<Title name="our" title="products" />
						<Row>
							<ProductConsumer>
								{(value) => {
									console.log(value);
								}}
							</ProductConsumer>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
