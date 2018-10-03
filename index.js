require("dotenv").config();

const Client = require("./struc/GitHubClient");
const app = require("express")();

const createCommentonPullrequest = async () => {
    const pr = await Client.pullRequests.get({owner: "DiscordManager", repo: "github-bot-testing", number: "1"});
    const createComment = await Client.pullRequests.createComment({owner: "DiscordManager", repo: "github-bot-testing", number: pr.data.number, body: `Thanks for that pullrequest ${pr.data.user.login}!`, commit_id: pr.data.merge_commit_sha})
    console.log(createComment);
};
createCommentonPullrequest();

// app.post("/pulladded", async (req, res) => {
//     const pr = await Client.pullRequests.get({owner: "DiscordManager", repo: "github-bot-testing", number: "1"});
//     console.log(pr);
//     res.end();
// });

// app.listen(8000);