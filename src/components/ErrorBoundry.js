import React, { Component } from 'react';

class ErrorBoundry extends Compenent {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1> ooops. That is not good!!!</h1>;
		}
		return this.props.children
	}
}

export default ErrorBoundry;