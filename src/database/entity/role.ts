import { Column, DeleteDateColumn, Entity, Index } from "typeorm"
import { Base, IBaseEntity } from "./base"

interface RoleEntity extends IBaseEntity {
  deleted_at?: Date | null
  name: string
}

export type RoleAttributes = Omit<
  RoleEntity,
  'id' | 'created_at' | 'updated_at' | 'deleted_at'
>

@Entity()
export class Role extends Base {
  @Index()
  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date

  @Index()
  @Column()
  name: string
}
