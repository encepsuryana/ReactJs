import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart: [],
		modalOpen: true,
		modalProduct: detailProduct,
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach((item) => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getitem = (id) => {
		const product = this.state.products.find((item) => item.id === id);
		return product;
	};

	handleDetail = (id) => {
		const product = this.getitem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getitem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(() => {
			return { product: tempProducts, cart: [this.state.cart, product] };
		});
	};

	openModal = (id) => {
		const product = this.getitem(id);
		this.setState(() => {
			return { modalProduct: product, modalOpen: true };
		});
	};

	closeModal = (id) => {
		this.setState(() => {
			return { modalOpen: false };
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
				}}
			>
				{/* konfirmasi sekali lagi penggunaan props.children */}
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
