import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, DragDropContextProvider  } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {App} from './components/App';

import '../css/main.css';

ReactDOM.render(
	<DragDropContextProvider backend={HTML5Backend}>
		<App/>
	</DragDropContextProvider>,
	document.getElementById('root')
);