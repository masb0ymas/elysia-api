import Elysia from "elysia";
import { RoleService } from "../service/role.js";
const app = new Elysia({ prefix: "/role", tags: ["Auth - Role"] });
const newRoleService = new RoleService();
app.get("/", async ({ query }) => {
    const data = await newRoleService.findAll(query);
    return data;
});
app.get("/:id", () => {
    return { message: "get role by id" };
});
app.post("/", () => {
    return { message: "post role" };
});
app.put("/:id", () => {
    return { message: "put role" };
});
app.delete("/:id", () => {
    return { message: "delete role" };
});
const roleRoute = app;
export default roleRoute;
