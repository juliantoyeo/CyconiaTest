import { RESERVATION_ACTIONS } from '../constants/actionConstant'

const reducer = (state = [] , action) => {
	switch(action.type){
	case RESERVATION_ACTIONS.ADD_RESERVATION:
		return [ ...state, action.reservation ]
	default:
		return state
	}
}

export default reducer