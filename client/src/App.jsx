import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import HomePage from './pages/Home'
import { NavBar } from './components'
import Building from './components/Building'
import AddTenant from './components/AddTenant'

import Newproperty from './components/Newproperty'
import BlackList from './pages/BlacklistPage'
import TenantCard from './components/Tenant'
import Listing from './pages/BuildingListing'
import Footer from './components/Footer'
// import {db} from './db/db'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 1,
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	};

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	};

	_logout(event) {
		event.preventDefault()
		axios.post('/auth/logout').then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="">

				{/* Navbar on every page */}
				<NavBar
					_logout={this._logout}
					loggedIn={this.state.loggedIn}
				/>
				<Footer />
				{/*  Individual Things */}
				<Route
					exact
					path="/"
					render={() =>
						<HomePage />}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route
					exact path="/signup"
					component={SignupForm}
				/>
				<Route
					exact path="/listing"
					render={() => <Building />
					}
				/>
								<Route
					exact path="/Test"
					render={() => <Listing />
					}
				/>
				<Route
					exact path="/ManageTenants"
					render={() => <AddTenant />}
				/>
				<Route
					exact path="/ManageProperties"
					render={() => <Newproperty />}
				/>
				<Route
					exact path="/Blacklist"
					render={() => <BlackList />}
				/>

				<Route
					exact path="/api/tenants"
					render={() => <TenantCard />}
				/>
				{/* {db.properties.mapi((item, index) => {
					return <PropertyCard key={index} data={item}/>
				})} */}
			</div>
		)
	}
}

export default App
