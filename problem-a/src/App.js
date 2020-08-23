import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends Component {
	render() {
		let message = "US Senators 2019";
		let appClass = "container";
		return (
			<div className={appClass}>
				<h1>
					{message}
				</h1>
				<SenatorTable />
			</div>
		);
	}
}

export class SenatorTable extends Component {
	render() {
		let tableClass = "table table-bordered";
		return (
			<table className={tableClass}></table>
		);
	}
}