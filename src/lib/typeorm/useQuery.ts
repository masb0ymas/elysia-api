import { ObjectLiteral, SelectQueryBuilder } from "typeorm"
import { env } from "~/config/env"
import { UseQueryTypeOrm } from "./interface"
import { queryBuilder } from "./QueryBuilder"

type ConnectType = "postgres" | "mysql" | "mariadb"

type IUseQuery<T extends ObjectLiteral> = Omit<UseQueryTypeOrm<T>, "options"> & {
  limit?: number
}

export function useQuery<T extends ObjectLiteral>(params: IUseQuery<T>): SelectQueryBuilder<T> {
  const connectType = env.TYPEORM_CONNECTION as ConnectType

  return queryBuilder(
    { ...params, options: { limit: params.limit, orderKey: "created_at" } },
    { type: connectType }
  )
}
