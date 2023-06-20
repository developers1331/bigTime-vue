import {
    injectable,
    singleton,
    inject,
} from 'tsyringe';
import RequestService from 'api/request.service';

@injectable()
@singleton()
export default class AchivService {
    constructor(
        @inject(RequestService) private requestService: RequestService,
    ) {
        this.getTopAchiv();
    }

    public async getTopAchiv(): Promise<void> {
        const req = await this.requestService.getTopAchiv({numbers: 10});
        // eslint-disable-next-line no-console
        console.log(req);
    }
}
