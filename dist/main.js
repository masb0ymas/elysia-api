import cors from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import _ from "lodash";
import { elysiaLogging } from "./config/logger.js";
import { AppDataSource } from "./database/datasource.js";
import route from "./routes/index.js";
const app = new Elysia({ tags: ["Main"] })
    .use(cors({ origin: ["http://localhsot:3000"] }))
    .use(staticPlugin({ prefix: "/" }))
    .use(elysiaLogging);
app.use(swagger({ path: "/v1/api-docs" }));
app.use(route);
app.onError(({ path, code, request }) => {
    if (code === "NOT_FOUND") {
        return {
            message: `Sorry, the ${path} HTTP method ${request.method} resource you are looking for was not found.`,
        };
    }
});
try {
    const connection = await AppDataSource.initialize();
    const dbName = _.get(connection, "options.database", "");
    const dbConnect = _.get(connection, "options.type", "");
    const message = `database ${dbName}, connection ${dbConnect} has been established successfully.`;
    console.log(message);
    // run server listen
    app.listen(8000);
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
}
catch (error) {
    const message = `unable to connect to the database: ${error}`;
    console.log(message, error);
    process.exit(1);
}
