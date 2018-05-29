import React from 'react'
import PropTypes from 'prop-types'
import {
	DropTarget,
	DropTargetConnector,
	DropTargetMonitor,
	ConnectDropTarget,
} from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
};

const boxTarget = {
	drop() {
		return { name: 'Dustbin' }
	},
	hover(props, monitor, component){
		return {name: 'test'}
	}
};

// export interface DustbinProps {
// 	canDrop?: boolean
// 	isOver?: boolean
// 	connectDropTarget?: ConnectDropTarget
// }

// @DropTarget(
// 	ItemTypes.BOX,
// 	boxTarget,
// 	(connect, monitor) => ({
// 		connectDropTarget: connect.dropTarget(),
// 		isOver: monitor.isOver(),
// 		canDrop: monitor.canDrop(),
// 	}),
// )
class Dustbin extends React.Component {
	// propTypes = {
	// 	connectDropTarget: PropTypes.func.isRequired,
	// 	isOver: PropTypes.bool.isRequired,
	// 	canDrop: PropTypes.bool.isRequired,
	// };

	render() {
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;

		let backgroundColor = '#222';
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return (
			connectDropTarget &&
			connectDropTarget(
				<div style={{...style , backgroundColor }}>
					{isActive ? 'Release to drop' : 'Drag a box here'}
				</div>,
			)
		)
	}
}
export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
}))(Dustbin);