import { loaderReducer } from './../../ui/elements/Loader/redux/loader.reducer';
import { combineReducers } from 'redux'
import { ComponentsStates } from './components.state'

export const uiReducers = combineReducers<ComponentsStates>({loader: loaderReducer});
