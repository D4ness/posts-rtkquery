import { combineReducers } from 'redux'
import {postAPI} from '../services/PostService';

export const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

