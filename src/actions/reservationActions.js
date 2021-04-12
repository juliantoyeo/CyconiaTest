import { RESERVATION_ACTIONS } from '../constants/actionConstant'

export const addReservations = (reservation) => {
	return {
		type: RESERVATION_ACTIONS.ADD_RESERVATION,
		reservation
	}
}