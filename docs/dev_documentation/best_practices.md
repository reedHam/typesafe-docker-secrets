# Best Practices

## [Docker Image Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

Docker container have a lifecycle made up of a number of steps.

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


Docker images should be build so that they require the minimum amount of setup and configuration durning its lifetime.