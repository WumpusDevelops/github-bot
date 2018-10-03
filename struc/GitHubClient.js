const octokit = require("@octokit/rest");

const GitHubClient = new octokit({
    version: '3.0.0',
    timeout: 5 * 1000,
    headers: {
      'user-agent': 'Manager Discord GitHub Bot v0.0.1-beta'
    }
})

GitHubClient.authenticate({
    token: process.env.GITHUB_TOKEN,
    type: "token"
});

module.exports = GitHubClient;