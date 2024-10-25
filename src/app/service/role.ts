import { Role } from "~/database/entity/role"
import { BaseService } from "./base"

export class RoleService extends BaseService<Role> {
  constructor() {
    super({ tableName: 'role', entity: Role })
  }
}
