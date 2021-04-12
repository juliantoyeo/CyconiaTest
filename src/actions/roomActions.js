import { ROOM_ACTIONS } from '../constants/actionConstant'

export const addRooms = (roomsData) => {
	return {
		type: ROOM_ACTIONS.ADD_ROOMS,
		roomsData
	}
}

export const deleteRoom = (roomToDelete) => {
	return {
		type: ROOM_ACTIONS.DELETE_ROOM,
		roomToDelete
	}
}

export const updateRoom = (updatedRoom) => {
	return {
		type: ROOM_ACTIONS.UPDATE_ROOM,
		updatedRoom
	}
}