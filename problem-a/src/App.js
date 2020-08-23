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
		let senatorsElem = this.prop.senators;
		return (
			<div className={appClass}>
				<h1>{message}</h1>
				<SenatorTable senators={this.prop.senators} />;
			</div>
		);
	}
}

export class SenatorTable extends Component {
	render() {
		let tableClass = "table table-bordered";
		let senatorsElem = {this.prop.senators.map((senator) => (<SenatorRow senator={senator} />))}
		return (
			<table className={tableClass}>
				<TableHeader cols=['Name', 'State', 'Phone', 'Twitter'] />
				<tbody>{senatorsElem}</tbody>
			</table>
		);
	}
}

export class TableHeader extends Component {
	render() {
		let colElements = this.prop.cols;
		return (
			<thead>
				<tr>
					{colElements.map((head) => (<th key={head}>{head}</th>))}
				</tr>
			</thead>
		);
	}
}

export class SenatorRow extends Component {
	render() {
		let SenatorElem = this.prop.senator;
		return (
			<tr key={SenatorElem.id}>
				<td>{SenatorElem.name}</td>
				<td>{SenatorElem.party[0] + " - " + SenatorElem.state}</td>
				<td><a href={"tel:" + SenatorElem.phone}></a>{SenatorElem.phone}</td>
				<td><a href={"https://twitter.com" + SenatorElem.twitter}>{"@" + SenatorElem.twitter}</a></td>
			</tr>
		);
	}
}