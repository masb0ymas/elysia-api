import { Role } from "../../database/entity/role.js";
import { BaseService } from "./base.js";
export class RoleService extends BaseService {
    constructor() {
        super({ tableName: 'role', entity: Role });
    }
}
