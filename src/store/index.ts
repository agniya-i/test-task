import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({ reducer: rootReducer })

export type IRootState = ReturnType<typeof rootReducer>

export default store
