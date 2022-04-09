/**
 * Import this file to load docker secrets into memory. 
 * Uses SECRETS_DIR environment variable to find secrets.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
//import type DOCKER_SECRETS from "../../src/generated/@types/DockerSecrets";

const SECRETS_DIR = process.env.SECRETS_DIR || '/run/secrets';

let SECRETS: { [key: string]: any } = {};
try {
    fs.existsSync(SECRETS_DIR);
    const files = fs.readdirSync(SECRETS_DIR);
    SECRETS = Object.fromEntries(
        await Promise.all(
            files.map(async (file) => {
                const fullPath = path.join(SECRETS_DIR, file);
                let data = (await fs.promises.readFile(fullPath, 'utf8')).trim();
                try {
                    data = JSON.parse(data);
                } catch (_e) {
                    // do nothing
                }
                return [file, data] as [string, any];
            })
        )
    );
} catch (err) {
    throw new Error(`Error loading docker secrets: ${err}`);
}

export default SECRETS //as DOCKER_SECRETS;
