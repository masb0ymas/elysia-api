var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
let Base = class Base extends BaseEntity {
};
__decorate([
    Index({ unique: true }),
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Base.prototype, "id", void 0);
__decorate([
    Index(),
    CreateDateColumn({ nullable: false }),
    __metadata("design:type", Date)
], Base.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn({ nullable: false }),
    __metadata("design:type", Date)
], Base.prototype, "updated_at", void 0);
Base = __decorate([
    Entity()
], Base);
export { Base };
