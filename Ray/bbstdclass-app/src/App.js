// import './App.css';
// import Testing from './component/helloworld';
// import React, { useState } from 'react';

// const test = 'test';

// const A = () => {
// 	return <h3>hallo!</h3>;
// };

// function App() {
// 	const [a, setA] = useState('hai aku string');
// 	return (
// 		<div>
// 			{test} {/* diambil dari const line 5*/}
// 			<A /> {/* diambil dari const line 7*/}
// 			<Testing />
// 			{/* diambil import line 2*/}
// 			<input type="text" onChange={(e) => setA(e.target.value)} />
// 			{/* diambil dari const line 12*/}
// 			{a} {/* diambil dari const line 12*/}
// 		</div>
// 	);
// }

// export default App;

// import './App.css';
// import React, { Component } from 'react';

// export default class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			nama: 'babastudio',
// 		};
// 	}

// 	handleNama = (event) => {
// 		this.setState({ nama: event.target.value });
//     console.log(this.setState({ nama: event.target.value }));
// 	};

// 	updateState = () => {
// 		this.setState({ nama: 'murid babastudio' });
// 	};

// 	handleSubmit = (event) => {
// 		alert(`nama yang tersimpan : ${this.state.nama}`);
// 		event.preventDefault();
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.handleSubmit}>
// 					<input
// 						type="text"
// 						value={this.state.nama}
// 						onChange={this.handleNama}
// 						placeholder="masukkan nama"
// 					/>
// 					<input type="submit" value="Submit" />
// 				</form>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Links = () => (
	<div className="list-group">
		<NavLink className="list-group-item" exact activeClassName="active" to="/">
			Home
		</NavLink>

		<NavLink className="list-group-item" activeClassName="active" to="/about">
			About
		</NavLink>

		<NavLink className="list-group-item" activeClassName="active" to="/content">
			Blogs
		</NavLink>
	</div>
);
const Blog = () => (
	<div className="list-group">
		<NavLink
			className="list-group-item"
			exact
			activeClassName="active"
			to="/content/city"
		>
			Kota
		</NavLink>

		<NavLink
			className="list-group-item"
			activeClassName="active"
			to="/content/sports"
		>
			Olahraga
		</NavLink>
		<Route path="/content/:contentName" component={BlogsDetail} />
	</div>
);

const BlogsDetail = (props) => (
	<div>
		{props.match.params.contentName}
		<div>
			<img
				src={
					'http://lorempixel.com/400/200/' +
					props.match.params.contentName +
					'/1/'
				}
			/>
		</div>
		: null
	</div>
);

// function Home() {
// 	return <h1>Home</h1>;
// }

// function About() {
// 	return <h1>About</h1>;
// }

// function Links() {
// 	return (
// 		<div>
// 			<NavLink className="list-group-item" exact activeClassName="active" to="/">
// 				Home
// 			</NavLink>

// 			<NavLink className="list-group-item" activeClassName="active" to="/about">
// 				About
// 			</NavLink>
// 		</div>
// 	);
// }

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="row">
					<section className="col-sm-4">
						<Links />
					</section>
					<section className="col-sm-8">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/content" component={Blog} />
					</section>
				</div>
			</Router>
		);
	}
}


/** Video 3.4 **/ 