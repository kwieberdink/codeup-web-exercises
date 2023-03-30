// hold command and click either the {} or " " and will be taken to source of function or document
import{getGitHubUsers, renderGithubUser} from "./github.js";

(async ()=>{ // use async for await method

    let users = await getGitHubUsers();
    console.log(users)
    const usersGrid = document.querySelector('#usersGrid')
    users.forEach(function(user){
       renderGithubUser(user, usersGrid);
    });


})()