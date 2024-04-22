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
      username: process.env.RENOVATE_DOCKER_USER,
      password: process.env.RENOVATE_DOCKER_PASS,
    },
  ],
};
