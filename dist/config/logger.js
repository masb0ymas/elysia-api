import { logger, serializeRequest, serializers } from "@bogeychan/elysia-logger";
import { randomUUID } from "node:crypto";
const mySerializers = {
    ...serializers,
    request: (request) => {
        const url = new URL(request.url);
        return {
            ...serializeRequest(request),
            // https://http.dev/x-request-id
            id: request.headers.get("X-Request-ID") ?? randomUUID(),
            path: url.pathname,
        };
    },
};
export const elysiaLogging = logger({
    serializers: mySerializers,
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
        },
    },
});
