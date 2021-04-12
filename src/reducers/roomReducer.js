import { ROOM_ACTIONS } from '../constants/actionConstant'

const reducer = (state = [] , action) => {
	switch(action.type){
	case ROOM_ACTIONS.ADD_ROOMS:
		return action.roomsData
	default:
		return state
	}
}

export default reducer