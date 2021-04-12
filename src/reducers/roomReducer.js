import { ROOM_ACTIONS } from '../constants/actionConstant'
import _ from 'lodash';

const reducer = (state = [] , action) => {
	switch(action.type){
	case ROOM_ACTIONS.ADD_ROOMS:
		return action.roomsData
	case ROOM_ACTIONS.DELETE_ROOM:
			return _.filter(state, (room) => room.name !== action.roomToDelete.name)
	case ROOM_ACTIONS.UPDATE_ROOM:
			return _.unionBy([action.updatedRoom], state, 'name')
	default:
		return state
	}
}

export default reducer