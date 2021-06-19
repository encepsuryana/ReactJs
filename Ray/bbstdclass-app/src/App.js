import './App.css';
import Testing from './component/helloworld';
import React, { useState } from 'react';

const test = 'test';

const A = () => {
	return <h3>hallo!</h3>;
};

function App() {
	const [a, setA] = useState('hai aku string');
	return (
		<div>
			{test} {/* diambil dari const line 5*/}
			<A /> {/* diambil dari const line 7*/}
			<Testing />
			{/* diambil import line 2*/}
			<input type="text" onChange={(e) => setA(e.target.value)} />
			{/* diambil dari const line 12*/}
			{a} {/* diambil dari const line 12*/}
		</div>
	);
}

export default App;
