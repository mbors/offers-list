import axios from "axios";
import * as _ from 'lodash';

export abstract class CoreApiController {
    axios: any;
    constructor() {
        this.axios = axios.create();
    }

    baseUrl = 'http://localhost:9999/api/'

    /**
     *
     * @param path
     * @param queryParameters
     */
    async fetchRequest(path: string): Promise<any> {
        try {
            const res = await this.axios.get(`${this.baseUrl}${path}`);
            return _.get(res, 'data', []);
        } catch (error) {
            throw new Error(error)
        }
    }

    async postRequest(path: string, body: any) {
        try {
            const res = await this.axios.post(`${this.baseUrl}${path}/`, body);
            return res
        } catch (e) {
            throw new Error(e)
        }
    }


}
