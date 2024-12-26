import "module-alias/register";
import { addAliases } from "module-alias";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

addAliases({
  "@": __dirname,  
});
