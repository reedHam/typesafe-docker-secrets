import 'dotenv/config';
import DOCKER_SECRETS from './startup/DockerSecrets.js';

console.log(JSON.stringify(DOCKER_SECRETS, null, 4));