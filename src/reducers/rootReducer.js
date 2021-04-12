import { combineReducers } from 'redux'
import roomReducer from './roomReducer'
import reservationReducer from './resevervationReducer'

const rootReducer = combineReducers({
	rooms: roomReducer,
	reservations: reservationReducer
})

export default rootReducer