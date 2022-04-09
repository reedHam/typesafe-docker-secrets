# Best Practices

## [Docker Image Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

Docker containers have a lifecycle made up of a number of steps.

```
 Download Image
       |
  Build Image
       |
 Start Container
       |
  Health Check
       |
    Running
       |
    Cleanup
       |
 Stop Container
       |
 Remove Container
```

## Download Image

## Build Image

### [Permissions](https://docs.docker.com/engine/reference/builder/#user)

Containers should be ran as non root users to reduce the probability of unwanted actions and security failures.  
The application should only have access to resources and information that it needs to run.  
This can be accomplished by setting `USER <SOME_USER>` in a docker file.
E.g.

```Dockerfile
RUN adduser -D myuser && chown -R myuser:myuser /usr/src
USER myuser
ENTRYPOINT ["/usr/src/app"]
```

Note often docker images will have built in users; the nodejs docker image has `node` and `root` users.

### [Environment Variables](https://docs.docker.com/engine/reference/builder/#env)

Non sensitive static app configurations should be set using environment variables.
Examples include development host names, logging verbosity, production or development, etc.
Environment variables can be set in a dockerfile using `ENV <VARIABLE_NAME> <VALUE>`.  
Docker will look in .env files for environment variables.

SENSITIVE INFORMATION SHOULD BE STORED AS DOCKER SECRETS

### [Secrets](https://docs.docker.com/engine/swarm/secrets/)

Secrets are a way to store sensitive information needed to run a your application.
When a secret is created, it is stored in the docker swarm and will be available in the /run/secrets directory as a file.

Secrets can be created using the `docker secret create <SECRET_NAME> <FILE_PATH>` command.  
Use `docker secret create <SECRET_NAME> -` to read from stdin.  
  
Secrets can be added to a service using `docker service create --secret <SECRET_NAME> <CONTAINER_NAME>` the secret will be available in the container as `/run/secrets/<SECRET_NAME>`.  

Secrets can also be added to a docker-compose file using `secret: <SECRET_NAME>`.  

Included in the repo is a script named [DockerSecrets.ts](../../../src/startup/DockerSecrets.ts) to load the secrets into memory as an object.  

[Compose file secret](https://docs.docker.com/compose/compose-file/compose-file-v3/#secrets)

## Start Container

## Health Check

## Running

## Cleanup

## Stop Container

## Remove Container
