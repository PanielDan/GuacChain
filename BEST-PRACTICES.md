# GuacChain Best Practices

## Code Linting

Configure ESLint with the `.eslintrc.js` configuration file in the service repos. Make sure to lint before you pushing code to retain style consistency.

## Rebuilding Docker Images

Sometimes Docker doesn't recognize changes made to configuration files or small points in the source code. Try rebuilding without cached images to resolve any bugs related to old versioned code.


```bash
# the service name should be the root value of the service in the docker-compose.yml file
docker-compose build <service-name> --no-cache
```

## Frequently Pruning your Docker Images

Old Docker images in the repository quickly add up to a lot of space. Use this command to clean up some space

```bash
docker image prune
```