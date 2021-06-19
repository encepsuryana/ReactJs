import logo from './logo.svg';
import './App.css';
import Testing from './component/helloworld';
import React, { useState } from 'react';

const test = 'test';

const A = () => {
	return <h3>hallo!</h3>;
};

function App() {
	const [a, seta] = useState('hai aku string');
	return (
		<div>
			{test}
			<A />
			<Testing />
      <input type="text" name="" id="" onChange={(e)=>seta(e.target.value)} />
			{a}
		</div>
	);
}

export default App;
