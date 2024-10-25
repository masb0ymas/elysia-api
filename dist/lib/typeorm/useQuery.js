import { env } from "../../config/env.js";
import { queryBuilder } from "./QueryBuilder.js";
export function useQuery(params) {
    const connectType = env.TYPEORM_CONNECTION;
    return queryBuilder({ ...params, options: { limit: params.limit, orderKey: "created_at" } }, { type: connectType });
}
