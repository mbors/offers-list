import { Offer } from './offer.model';
import { CoreApiController } from "../core/coreApi.controller";
import * as _ from 'lodash';

export default class OfferController extends CoreApiController {
    private static _instance: OfferController = new OfferController()

    constructor() {
        super()
        if (OfferController._instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.')
        }
        OfferController._instance = this
    }

    public static getInstance(): OfferController {
        return OfferController._instance
    }

    partnerId = 'par_nxvjj7em'

    async getOffers(): Promise<Offer[]> {
        try {
            const offers = await this.fetchRequest(`offer/${this.partnerId}`)
            return _.get(offers, 'offers', [])
        } catch (e) {
            throw new Error(e)
        }
    }

    async acceptOffer(customerId: string): Promise<any> {
        try {
            return await this.postRequest(`offer/${this.partnerId}`, { customer_id: customerId })
        } catch (e) {
            throw new Error(e)
        }
    }

}