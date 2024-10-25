import { AppDataSource } from "../../database/datasource.js";
import { useQuery } from "../../lib/typeorm/useQuery.js";
export class BaseService {
    /**
     *
     * @param params
     */
    constructor(params) {
        this.tableName = params.tableName;
        this.repository = AppDataSource.getRepository(params.entity);
    }
    /**
     *
     * @param req
     * @returns
     */
    async findAll(reqQuery) {
        const query = this.repository.createQueryBuilder(this.tableName);
        const newQuery = useQuery({ entity: this.tableName, query, reqQuery });
        const data = await newQuery.getMany();
        const total = await newQuery.getCount();
        const message = "data has been received";
        return { message: `${total} ${message}`, data, total };
    }
}
