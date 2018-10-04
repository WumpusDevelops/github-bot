require("dotenv").config();

const getPullRequest = require("./lib/getPullRequest");
const getPackageJsonVersion = require("./lib/getPackageJsonVersion");
const createCommit = require("./lib/createCommit");
const createComment = require("./lib/createComment");
const addLabeltoPr = require("./lib/addLabeltoPr");
const bumpVersion = require("./lib/bumpVersion");
const { base64encode     } = require('nodejs-base64');

const app = require("express")();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post("/pullrequest", async (req, res) => {
    let { body } = req;
    if(body.payload) body = JSON.parse(body.payload);
    if(body.action == "closed" && body.pull_request.merged == true) {
        const data = await getPackageJsonVersion();
        const bumpedversion = bumpVersion(data.version);
        let content = { version: bumpedversion };
        let contentencrypted = base64encode(JSON.stringify(content));
        await createCommit("package.json", contentencrypted, data.sha)
        return res.status(200).end();
    } else if(body.action == "opened") {
        await createComment(body.number, `Thanks for opening this Pull Request, **${body.pull_request.user.login}**!\nI will add the language label to this Pull Request and it will be reviewed as soon as possible!\nYou can also join [our Discord Server](https://discord.gg/Japq4P) and you can get the Translator role!`)
        await addLabeltoPr(body.number);
        return res.status(200).end();
    } else return res.status(400).end();
});
app.get("/", (req, res) => {
    res.send("Hi!");
});
app.listen(8000);
console.log("Listening on port 8000");