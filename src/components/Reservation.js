import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import moment from 'moment';
import { addRooms } from '../actions/roomActions'
import { addReservations } from '../actions/reservationActions'
import { selectRooms, selectReservations } from '../selectors/rootSelector'
import RoomsData from '../rooms.json'
import SearchForm from './subComponents/SearchForm'
import RoomDisplay from './subComponents/RoomDisplay'

const styles = {
	mainContainer: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '2vw 0',
		color: '#555',
		fontFamily: 'Avenir Next',
		fontSize: '1vw',
	},
	roomContainer: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	}
}

const Reservation = (props) => {
	const dispatch = useDispatch();
	const today = moment().format("YYYY-MM-DD");
	const rooms = useSelector(selectRooms)
	const reservations = useSelector(selectReservations)
	const [searchResult, setSearchResult] = useState(null)
	const [selectedRoom, setSelectedRoom] = useState(null)
	const [form, setForm] = useState({
		name: "",
		date: today,
		time: "09:00",
		tv: false,
		projector: false,
		capacity: 1
	});

	useEffect(() => {
		if (_.isEmpty(rooms))
			dispatch(addRooms(RoomsData.rooms))
		if (_.isEmpty(reservations)) {
			const testReservation = {
				roomName: "Salle #1",
				bookBy: "Jyeo",
				time: "11:00",
				date: "2021-04-13",
			}
			const testReservation2 = {
				roomName: "Salle #1",
				bookBy: "Jyeo",
				time: "13:00",
				date: "2021-04-13",
			}
			const testReservation3 = {
				roomName: "Salle #2",
				bookBy: "Jyeo",
				time: "12:00",
				date: "2021-04-12",
			}
			dispatch(addReservations(testReservation))
			dispatch(addReservations(testReservation2))
			dispatch(addReservations(testReservation3))
		}
	}, [])

	const onChange = (event, type) => {
		const value = event.target.value;
		setForm(prev => ({
			name: type === 'name' ? value : prev.name,
			date: type === 'date' ? value : prev.date,
			time: type === 'time' ? value : prev.time,
			tv: value === 'tv' ? event.target.checked : prev.tv,
			projector: value === 'projector' ? event.target.checked : prev.projector,
			capacity: type === 'capacity' ? value : prev.capacity,
		}))
	}

	const onSubmit = (event) => {
		event.preventDefault()
		setSelectedRoom(null)
		const res = _.compact(_.map(rooms, (room) => {
			const hasTv = _.find(room.equipements, (eq) => eq.name === 'TV')
			const hasProjector = _.find(room.equipements, (eq) => eq.name === 'Retro Projecteur')
			if (room.capacity < form.capacity)
				return null
			if (form.tv)
				if (_.isEmpty(hasTv))
					return null
			if (form.projector)
				if (_.isEmpty(hasProjector))
					return null
			const reservationsList = _.filter(reservations, (res) => res.roomName === room.name)
			if (!_.isEmpty(reservationsList)) {
				let canBook = true
				_.map(reservationsList, (reserve) => {
					if (reserve.time === form.time && reserve.date === form.date)
						canBook = false
				})
				if (canBook)
					return room
				else
					return false
			}
			return room
		}))
		if (_.isEmpty(res))
			alert("Aucune chambre ne correspond aux critères de recherche")
		setSearchResult(res)
	}

	const onReserve = (room) => {
		const newReservation = {
			roomName: room.name,
			bookBy: form.name,
			time: form.time,
			date: form.date,
		}
		alert("La chambre a été réservée")
		dispatch(addReservations(newReservation))
		setSelectedRoom(room)
	}

	return (
		<div style={styles.mainContainer}>
			{form && <SearchForm onChange={onChange} onSubmit={onSubmit} selectedDate={form.date} form={form} />}
			<div style={styles.roomContainer}>
				{_.map(searchResult, (room, index) => <RoomDisplay key={index} room={room} selectedRoom={selectedRoom} onClick={onReserve} />)}
			</div>
		</div>
	)
}

export default Reservation