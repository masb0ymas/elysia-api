import Elysia from "elysia";
import roleRoute from "../../app/controller/role.js";
const app = new Elysia();
app.get("/", () => {
    return { message: "Version 1" };
});
app.use(roleRoute);
const v1Route = app;
export default v1Route;
