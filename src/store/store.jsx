import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import { logger } from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist : ['user' , 'products'] ,
  whitelist : ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const middlewares = [logger]

// const Enchancers = compose(applyMiddleware(...middleware))

// export const store = createStore(persistedReducer , undefined ,Enchancers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: 
      {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)