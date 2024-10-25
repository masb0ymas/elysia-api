import { ObjectLiteral, SelectQueryBuilder } from "typeorm"

export type SortType = "ASC" | "DESC"

export interface QueryFiltered {
  id: string
  value: string
}

export interface QuerySorted {
  sort: string
  order: SortType
}

export interface ReqQuery {
  filtered?: QueryFiltered[]
  sorted?: QuerySorted[]
  page?: string | number
  pageSize?: string | number
  [key: string]: any
}

export interface TypeOrmQueryOptions {
  limit?: number
  orderKey?: string
}

export interface UseQueryTypeOrm<T extends ObjectLiteral> {
  entity: string
  query: SelectQueryBuilder<T>
  reqQuery: ReqQuery
  options?: TypeOrmQueryOptions
}
