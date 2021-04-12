import _ from 'lodash'
import React, { useState, useEffect } from 'react'

const styles = {
	mainContainer: {
		border: '1px solid #999',
		display: 'flex',
		flexDirection: 'column',
		// alignItems: 'center',
		borderRadius: '3vw',
		// justifyContent: 'space-around',
		padding: '1.5vw',
		height: '15vw',
		width: '15vw',
		margin: '1vw 0',
	},
	buttonContainer: {
		width: '20%',
		display: 'flex',
		justifyContent: 'space-evenly'
	},
	text: {
		// width: '20%',
		whiteSpace: 'nowrap',
		textAlign: 'left',
		overflow: 'hidden',
		margin: '0.3vw 0',
		textOverflow: 'ellipsis',
	},
}

const RoomDisplay = (props) => {
	const { room } = props
	console.log("room", room)
	return (
		<div style={styles.mainContainer}>
			<span style={styles.text}>{room.name}</span>
			<span style={styles.text}>{`Capacity : ${room.capacity} personne`}</span>
			<span style={styles.text}>Equipement :</span>
			{_.map(room.equipements, (equipment, index) => <span style={styles.text} key={index}>{`${index + 1} : ${equipment.name}`}</span>)}
		</div>
	)
}

export default RoomDisplay