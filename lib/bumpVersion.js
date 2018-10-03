const semver = require("semver");
module.exports = (version) => {
    return semver.inc(version, "patch");
};