import {getGithubUser, getLastCommit} from "./github.js";


// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

(async () => {
    let user = await getGithubUser(`kwieberdink`)
    console.log(user);
    let lastCommit = await getLastCommit('kwieberdink')
    console.log(lastCommit);










})();

