import fs from 'fs';
import path from 'path';
import { parseObjectAsInterface } from './utils.js';
import DOCKER_SECRETS from "../src/startup/DockerSecrets.js";

const GENERATION_DIR = path.join(process.cwd(), 'generated/@types');
const typeDefinitionFilePath = path.join(GENERATION_DIR, 'DockerSecrets.d.ts');

fs.existsSync(GENERATION_DIR) || fs.mkdirSync(GENERATION_DIR, { recursive: true });
fs.writeFileSync(typeDefinitionFilePath, parseObjectAsInterface("DOCKER_SECRETS", DOCKER_SECRETS, { default: true }), { encoding: 'utf8', flag: "w" });

console.log('Wrote To ' + typeDefinitionFilePath);