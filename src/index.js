import { server } from "./server/server.js";
import { swagger } from "./swagger/swagger.js";


await swagger.generateSwaggerDoc()
server.start()