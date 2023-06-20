import {
    singleton,
    injectable,
    inject,
} from 'tsyringe';
import ApiService from 'services/api.service';
import {
    ITopAchivRequest,
    ITopAchivResponse,
} from './achiv';

@singleton()
@injectable()
export default class RequestService {

    constructor(@inject(ApiService) private apiService: ApiService) {}

    public async getTopAchiv(data: ITopAchivRequest) {
        return await this.apiService.request<ITopAchivResponse, ITopAchivRequest>({
            name: `achiv/top/${data.numbers}`,
            type: 'POST',
            data: data,
        });
    }
}
