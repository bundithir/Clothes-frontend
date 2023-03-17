import { compose ,  legacy_createStore as createStore  , applyMiddleware} from 'redux'
import { rootReducer } from './root-reducer'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    blacklist : ['user' , 'products'] ,
    whitelist : ['cart']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [logger , thunk]

const Enchancers = compose(applyMiddleware(...middleware))

export const store = createStore(persistedReducer , undefined ,Enchancers)

export const persistor = persistStore(store)