import { EntityTarget, ObjectLiteral, Repository } from "typeorm"
import { AppDataSource } from "~/database/datasource"
import { useQuery } from "~/lib/typeorm/useQuery"

interface IBaseService<T> {
  tableName: string
  entity: EntityTarget<T>
}

export class BaseService<T extends ObjectLiteral> {
  public tableName: string
  public repository: Repository<T>

  /**
   *
   * @param params
   */
  constructor(params: IBaseService<T>) {
    this.tableName = params.tableName
    this.repository = AppDataSource.getRepository(params.entity)
  }

  /**
   *
   * @param req
   * @returns
   */
  public async findAll(reqQuery: Record<string, string | undefined>) {
    const query = this.repository.createQueryBuilder(this.tableName)
    const newQuery = useQuery({ entity: this.tableName, query, reqQuery })

    const data = await newQuery.getMany()
    const total = await newQuery.getCount()

    const message = "data has been received"
    return { message: `${total} ${message}`, data, total }
  }
}
