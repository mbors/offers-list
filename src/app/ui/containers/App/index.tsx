import * as React from 'react'
import { Offer, OfferStatus } from '../../../store/offer/offer.model';
import { RootState } from '../../../store/state';
import { connect } from 'react-redux';
import { OffersActions } from '../../../store/offer/offer.actions';
import { bindActionCreators, Dispatch } from 'redux';
import { Utils } from '../../../utils';
import { OffersList } from '../../components/OffersList';
import { Loader } from '../../elements/Loader';
import * as _ from 'lodash';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Logo } from '../../elements/Logo';
import './style.css';

export interface AppProps {
    offers?: Offer[]
    getOffers?: Function
    acceptOffer?: Function
    loaderVisibility?: boolean
}

@connect((state: RootState) => ({
    offers: state.company_offerings.offers,
    loaderVisibility: state.components.loader.visibility
}),
    (dispatch: Dispatch): Pick<AppProps, 'getOffers' | 'acceptOffer'> => ({
        getOffers: bindActionCreators(
            Utils.omit(OffersActions, 'Type'),
            dispatch
        ).getOffers,
        acceptOffer: bindActionCreators(
            Utils.omit(OffersActions, 'Type'),
            dispatch
        ).acceptOffer,
    })
)

export class App extends React.Component<AppProps> {

    componentDidMount() {
        const { getOffers } = this.props;
        getOffers && getOffers()
    }

    render() {
        const { offers, loaderVisibility, acceptOffer } = this.props;
        const newOffers = _.filter(offers, { 'status': OfferStatus.NEW })
        const acceptedOffers = _.filter(offers, { 'status': OfferStatus.ACCEPTED })
        return (
            <div className="main-content">
                <Logo/>
                <OffersList acceptOffer={acceptOffer} title="New Offers" offers={newOffers} />
                <OffersList title="Accepted Offers" offers={acceptedOffers} inactive />
                <Loader visible={loaderVisibility} />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick />
            </div>
        )
    }
}
