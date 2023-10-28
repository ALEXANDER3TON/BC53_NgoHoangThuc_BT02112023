import {configureStore} from '@reduxjs/toolkit'
import { rootReduceer } from './rootReducer'

export const store = configureStore({
    reducer: rootReduceer,
})