import {injectable, singleton} from 'tsyringe';

export interface IApiServiceRequest<D = unknown> {
    name: string;
    type: 'GET' | 'POST';
    data?: D;
}

@injectable()
@singleton()
export default class ApiService {

    constructor() {}

    public static getApiDomain(): string {
        return import.meta.env.API_DOMAIN.replace(/\/$/g, '');
    }

    public async request<T, D>(data: IApiServiceRequest<D>): Promise<T | undefined> {
        const apiDomain: string = ApiService.getApiDomain();
        const apiPath: string = data.name.replace(/^\/|\/$/g, '');

        try {
            const response: Response = await fetch(apiDomain + '/api/' + apiPath, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: data.type,
                body: JSON.stringify(data.data),
            });

            try {
                const data: T = await response.json();
                return data;
            } catch (error) {
                throw ('Failed parse JSON: ' + error);
            }

        } catch (error) {
            throw ('Failed fetch: ' + error);
        }
    }
}
