import { OfferState } from './offer/offer.state';
import { ComponentsStates } from './components/components.state';

export interface RootState {
    components: ComponentsStates, 
    company_offerings: OfferState,
    toastr: any
}
