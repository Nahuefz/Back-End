import { fileURLToPath } from "url";
import { dirname } from "path";
import { deflate } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
