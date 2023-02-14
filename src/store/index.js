import {configureStore,combineReducers} from '@reduxjs/toolkit'
import usersReducer from "./reducers/usersSlice";
import postsReducer from "./reducers/postsSlice";
import albumsReducer from "./reducers/albumsSlice";



const rootReducer = combineReducers({
    usersReducer,
    postsReducer,
    albumsReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}