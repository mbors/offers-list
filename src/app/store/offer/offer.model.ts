import { Schedule } from "app/store/schedule/schedule.model";

export interface Offer {
    status: OfferStatus, 
    partner_id: string, 
    customer_id: string, 
    customer_name: string, 
    customer_company: string, 
    address_company: string, 
    address_city: string, 
    address_postalcode: string, 
    schedule: Schedule, 
    schedule_matches: boolean, 
    contract_price: number, 
    contract_name: string, 
    contract_start: string
}

export enum OfferStatus {
    NEW = 'new', 
    ACCEPTED = 'accepted'
}