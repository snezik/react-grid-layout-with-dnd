import React, {Component} from 'react';
import GridLayout from 'react-grid-layout';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragDropContextProvider  } from 'react-dnd';

import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import Dustbin from "./Dustbin";
import Box from './Box';
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		this.setState({ hasError: true });
		// You can also log the error to an error reporting service
		logErrorToMyService(error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<h1>Something went wrong.</h1>;
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
				)

		}
		return this.props.children;
	}
}

export class App extends React.Component {
	render() {
		let layout = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 4, y: 0, w: 1, h: 2}
		];
		return (
			<ErrorBoundary>
				<div>
					<div style={{ overflow: 'hidden', clear: 'both' }}>
						<Dustbin />
					</div>
					<div style={{ overflow: 'hidden', clear: 'both' }}>
						<Box name="Glass" />
						<Box name="Banana" />
						<Box name="Paper" />
					</div>
				</div>
			</ErrorBoundary>
			// {/*<GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>*/}
			// 	{/*<div key="a">a</div>*/}
			// 	{/*<div key="b">b</div>*/}
			// 	{/*<div key="c">c<div>*/}
			// {/*</GridLayout>*/}
		)
	}
}

// export default DragDropContext(HTML5Backend)(App)