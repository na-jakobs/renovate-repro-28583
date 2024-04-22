# renovate-repro-28583
https://github.com/renovatebot/renovate/discussions/28583

## Description

I am trying to update the image tag and the digest with a regex custom manager.

## Issue

The values.yaml indenting breaks with my current config, ideally it should add 4 spaces but adds 2.

### bitnami/kube-state-metrics:2.9.1

```
bitnami/kube-state-metrics:2.9.1
sha256:b23831f93fba580d6a7adafd09897d62739a18c16417c9609b67a7789e6ba0c5
https://hub.docker.com/layers/bitnami/kube-state-metrics/2.9.1/images/sha256-1f67066b3b386afb7fd83a4bdff5bca0067e08747d49a5ed280a29cbfc0dd2d3?context=explore
```

```
❯ crane digest bitnami/kube-state-metrics:2.9.1
sha256:b23831f93fba580d6a7adafd09897d62739a18c16417c9609b67a7789e6ba0c5
```
