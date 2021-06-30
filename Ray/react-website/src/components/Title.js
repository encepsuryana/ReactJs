import React from 'react';
import { Row } from 'react-bootstrap';

export default function Title({ name, title }) {
	return (
		<Row>
			<div className="col-10 mx-auto text-center text-title">
				<h1 className="text-capitalize font-weight-bold">
					{name} <strong className="text-blue">{title}</strong>
				</h1>
			</div>
		</Row>
	);
}
