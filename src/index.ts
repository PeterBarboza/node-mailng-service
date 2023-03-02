import { apiMainLogger, app } from "./app";
import { CONFIG } from "./config";

app.listen(CONFIG.port, () => {
  apiMainLogger(`Server is running on port: [${CONFIG.port}]`)
})