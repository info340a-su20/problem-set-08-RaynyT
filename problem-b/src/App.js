import React, { Component } from 'react'; //import React Component
import './style.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.adopt = this.adopt.bind(this);

		let isAdopted = [];
		this.props.pets.forEach((pet) => isAdopted.push({[pet.name]: false}));

		this.state = {
			pets: this.props.pets,
			isAdopted: isAdopted
		};
	}

	render() {
		let breeds = [];
		this.state.pets.forEach(pet => breeds.push(pet.breed));
		return (
			<div>
				<header className="jumbotron jumbotron-fluid py-4">
					<div className="container">
						<h1>Adopt a Pet</h1>
					</div>
				</header>

				<main className="container">
					<div className="row">
						<div id="navs" className="col-3">
							<AboutNav />
							<BreedNav breeds={breeds.unique()} />
						</div>

						<div id="petList" className="col-9">
							<h2>Dogs for Adoption</h2>
							<PetList adopt={this.adopt} pets={this.state.pets} isAdopted={this.state.isAdopted} />
						</div>
					</div>
				</main>

				<footer className="container">
					<small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
				</footer>
			</div>
		);
	}

	adopt(petName) {
		let isAdopted = this.state.isAdopted;
		isAdopted[petName] = true;

		this.setState({isAdopted: isAdopted});
	}
}

export default App;

class AboutNav extends Component {
	render() {
		return (
			<nav id="aboutLinks">
				<h2>About</h2>
				<ul class="list-unstyled">
					<li><a href="#/">How to Adopt</a></li>
					<li><a href="#/">Volunteering</a></li>
					<li><a href="#/">Events</a></li>
					<li><a href="#/">Donate</a></li>
					<li><a href="#/">About Us</a></li>
				</ul>
			</nav>
		);
	}
}

class BreedNav extends Component {
	render() {
		let breeds = this.state.props.breeds;
		return (
			<nav id="breedLinks">
				<h2>Pick a Breed</h2>
				<ul class="list-unstyled">
					{breeds.map((breed) => {
						return (
							<li key={breed.name}><a href="#/">{breed.name}</a></li>
						);
					})};
				</ul>
			</nav>
		);
	}
}

class PetCard extends Component {
	render() {
		let pet = this.state.props.pet;
		let isAdopted = this.props.isAdopted;

		return (
			<div class="card">
				<img class="card-img-top" src={"././public/" + pet.img} alt={pet.name} />
				<div class="card-body">
					<h3 class="card-title">{isAdopted ? pet.name + " (Adopted)" : pet.name}</h3>
					<p class="card-text">{pet.sex + " " + pet.breed}</p>
				</div>
			</div>
		);
	}
}

class PetList extends Component {
	render() {
		let pets = this.props.pets;
		return (
			<div class="card-deck">
				{pets.map((pet) => {
					return (
						<PetCard onCLick={this.props.adopt} pet={pet} isAdopted={this.props.isAdopted[pet]} />
					);
				})};
			</div>
		);
	}
}