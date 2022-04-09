import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

spawn('docker', ['run', ])



import DOCKER_SECRETS from "../../src/startup/DockerSecrets";

const GENERATION_DIR = path.join(process.cwd(), 'src/generated/@types');

const typeDefinitionFile = `export default interface DockerSecrets {\n${Object.entries(DOCKER_SECRETS).map(([key, secret]) => `    "${key}": ${typeof secret};\n`).join('')}}\n`;

const typeDefinitionFilePath = path.join(GENERATION_DIR, 'DockerSecrets.d.ts');

fs.existsSync(GENERATION_DIR) || fs.mkdirSync(GENERATION_DIR, { recursive: true });
fs.writeFileSync(typeDefinitionFilePath, typeDefinitionFile, { encoding: 'utf8', flag: "w" });
