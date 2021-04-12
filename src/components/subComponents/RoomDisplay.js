import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const styles = {
	mainContainer: {
		border: '1px solid #999',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '3vw',
		padding: '1.5vw',
		height: '15vw',
		width: '15vw',
		margin: '1vw 0',
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '12vw',
	},
	disable: {
		cursor: 'cursor',
		backgroundColor: '#EEE',
	}
}

const RoomDisplay = (props) => {
	const { room, onClick, selectedRoom } = props
	const [reserve, setReserve] = useState(false)

	useEffect(() => {
		if (selectedRoom)
			setReserve(selectedRoom.name === room.name)
		else
			setReserve(false)
	}, [selectedRoom])

	const onReserve = () => {
		if (reserve)
			return
		onClick(room)
	}

	return (
		<div style={styles.mainContainer} key={room.name} >
			<div style={styles.infoContainer}>
				<span className={'header textSpan'} >{room.name}</span>
				<span className={'textSpan'} >{`Capacity : ${room.capacity} personne`}</span>
				<span className={'textSpan'} >Equipement :</span>
				{_.map(room.equipements, (equipment, index) => <span className={'textSpan'} key={index}>{`${index + 1} : ${equipment.name}`}</span>)}
			</div>
			<button className={'formButton'} style={reserve ? styles.disable : {}} type={'button'} text={'Play'} onClick={() => onReserve()} >{reserve ? 'Réservé': 'Réserve'}</button>
		</div>
	)
}

export default RoomDisplay