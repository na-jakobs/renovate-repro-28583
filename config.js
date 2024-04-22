module.exports = {
  branchPrefix: "renovate/",
  onboarding: false,
  requireConfig: "required",
  platform: "github",
  forkProcessing: "disabled",
  repositories: ["na-jakobs/renovate-repro-28583"],
  hostRules: [
    {
      hostType: "docker",
      registryUrl: "docker.io",
      username: "najakobs",
      password: process.env.RENOVATE_DOCKER_PASS,
    },
  ],
};
