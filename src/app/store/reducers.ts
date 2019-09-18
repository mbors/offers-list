import { uiReducers } from './components/components.reducers';
import { combineReducers } from 'redux'
import { RootState } from './state'
import { offersReducer } from './offer/offer.reducers';
export { RootState }
import { reducer as toastrReducer } from 'react-redux-toastr'

export  const rootReducer = combineReducers<RootState>({
    components: uiReducers as any,
    company_offerings: offersReducer as any,
    toastr: toastrReducer as any,

})

