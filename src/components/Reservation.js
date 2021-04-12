import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { addRooms, deleteRoom, updateRoom } from '../actions/roomActions'
import { selectRooms } from '../selectors/rootSelector'
import RoomsData from '../rooms.json'
import RoomDisplay from './subComponents/RoomDisplay'

const styles = {
	mainContainer: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100vw',
		height: '100vh',
		color: '#555',
		// backgroundColor: '#555',
		backgroundSize: 'cover',
		fontFamily: 'Avenir Next',
		fontSize: '1vw',
	}
}

const Reservation = (props) => {
	const dispatch = useDispatch();
	const rooms = useSelector(selectRooms)
	// const [rooms, setRooms] = useState(null)

	useEffect(() => {
		// console.log("Rooms redux ", rooms)
		// console.log("Rooms", RoomsData)
		if (_.isEmpty(rooms))
			dispatch(addRooms(RoomsData.rooms))
	}, [])

	return (
		<div style={styles.mainContainer}>
			{_.map(rooms, (room, index) => <RoomDisplay key={index} room={room} />)}
		</div>
	)
}

export default Reservation