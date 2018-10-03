require("dotenv").config();

const app = require("express")();

const createCommentonPullrequest = async () => {
    require("./lib/createComment")(1, "hi");
};
createCommentonPullrequest();

/* app.post("/pulladded", async (req, res) => {
    const pr = await Client.pullRequests.get({owner: "DiscordManager", repo: "github-bot-testing", number: "1"});
    console.log(pr);
    res.end();
});

app.listen(8000); */