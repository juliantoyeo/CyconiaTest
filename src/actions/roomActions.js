import { ROOM_ACTIONS } from '../constants/actionConstant'

export const addRooms = (roomsData) => {
	return {
		type: ROOM_ACTIONS.ADD_ROOMS,
		roomsData
	}
}