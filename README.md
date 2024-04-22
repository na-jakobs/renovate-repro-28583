# renovate-repro-28583
https://github.com/renovatebot/renovate/discussions/28583

## Description

I am trying to update the image tag and the digest with a regex custom manager.

## Issue

The values.yaml indenting breaks with my current config, ideally it should add 4 spaces but adds 2.

### kubesphere/kube-state-metrics:v2.8.0

```
kubesphere/kube-state-metrics:v2.8.0
sha256:5658d0011a41779ef114f3508143a0e67e4169f64333d0337e731d191ab7edb8
https://hub.docker.com/layers/kubesphere/kube-state-metrics/v2.8.0/images/sha256-6911e6a8c3e8eb55a6f775dfbb789802adb0a15141b0297c5be90ed543571849?context=explore
```

```
❯ crane digest kubesphere/kube-state-metrics:v2.8.0
sha256:5658d0011a41779ef114f3508143a0e67e4169f64333d0337e731d191ab7edb8
```

### crane ls

```
❯ crane ls kubesphere/kube-state-metrics
v1.5.2
v1.7.2
v1.8.0
v1.9.4
v1.9.5
v1.9.6
v1.9.6-arm64
v1.9.7
v1.9.7-arm64
v2.10.1
v2.3.0
v2.5.0
v2.6.0
v2.8.0
v2.8.2
❯
```
