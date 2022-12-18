import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./Reducers/themeReducer";
import postsReducer from "./Reducers/postsReducer";
import imageReducer from "./Reducers/imageReducer";
import authReducer from "./Reducers/authReducer";
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = {
  themeReducer,
  postsReducer,
  imageReducer,
  authReducer,
}


export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
