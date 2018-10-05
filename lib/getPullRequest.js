const { Request: { get, post }} = require('snek-node');
module.exports = async (prnumber) => {
const { body: data } = await get(`https://api.github.com/repos/${process.env.OWNER}/${process.env.REPO}/pulls/${prnumber}`)
console.log(data);
return data;
};