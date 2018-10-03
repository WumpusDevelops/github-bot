require("dotenv").config();

const getPullRequest = require("./lib/getPullRequest");
const getPackageJsonVersion = require("./lib/getPackageJsonVersion");
const createCommit = require("./lib/createCommit");
const createComment = require("./lib/createComment");
const addLabeltoPr = require("./lib/addLabeltoPr");
const bumpVersion = require("./lib/bumpVersion");

const app = require("express")();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post("/pullrequest", async (req, res) => {
    const { body } = req;
    console.log(body);
    if(body.action == "closed" && body.merged == true) {

        
    }
    if(body.action == "opened") {
        await createComment(body.number, `Thanks for opening this Pull Request, **${body.pull_request.user.login}**!\nI will add the language label to this Pull Request and it will be reviewed as soon as possible!\nYou can also join [our Discord Server](https://discord.gg/Japq4P) and you can get the Translator role!`)
        await addLabeltoPr(body.number);
        return res.status(200).end();
    }
    return res.status(200).end();
});
app.get("/", (req, res) => {
    res.send("Hi!");
});
app.listen(8000);
console.log("Listening on port 8000");