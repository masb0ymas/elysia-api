import { memoryUsage } from "bun:jsc"
import Elysia from "elysia"
import v1Route from "./api/v1"

const app = new Elysia()

app.get("/", () => {
  return { message: "Hello Elysia" }
})

app.get("/health", () => {
  return { status: "ok", cpu: process.cpuUsage(), memoryUsage: memoryUsage() }
})

app.group("/v1", (group) => {
  return group.use(v1Route)
})

const route = app
export default route
