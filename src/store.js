import { AsyncStorage } from 'react-native'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const store = createStore(
    combineReducers({ calculator: reducer }),
    undefined,
    compose(
        autoRehydrate(),
        applyMiddleware(createLogger({ collapsed: () => true }))
    )
)

persistStore(store, { storage: AsyncStorage })

export default store
