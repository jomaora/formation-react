import React, { Component } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import './App.scss'
import {renderRoutes} from "react-router-config";

const categories = [
	{id: 'kitten', label: 'Kittens'},
	{id: 'bear', label: 'Bears'},
	{id: 'doggo', label: 'Dogs'}
];

class App extends Component {
	/* Démo champs contrôlés/non contrôlés

	input1 = React.createRef()
	state = { input4: 'value' }

	render() {
		return (
			<main>
				<div className="container">
					<div className="row">
						<div className="col s3">
							<div className="card">
								rien
								<input ref={this.input1} />
								(non contrôlé)
							</div>
						</div>
						<div className="col s3">
							<div className="card">
								defaultValue <input defaultValue="default value" />
								(idem "rien")
							</div>
						</div>
						<div className="col s3">
							<div className="card">
								value + readOnly
								<input value="value" readOnly />
								(contrôlé)
							</div>
						</div>
						<div className="col s3">
							<div className="card">
								value + onChange{' '}
								<input
									value={this.state.input4}
									onChange={e => {
										console.log(e.target.value)
										this.setState({ input4: e.target.value })
									}}
								/>
								(contrôlé)
							</div>
						</div>
					</div>
				</div>
				<button
					onClick={() => {
						console.log(this.input1.current.value)
					}}
				>
					console.log
				</button>
			</main>
		)
	}
	*/

	render() {
		return (
			<>
				<Header categories={categories}></Header>
				<MainContent>{renderRoutes(this.props.route.routes)}</MainContent>
			</>
		)
	}
}

export default App