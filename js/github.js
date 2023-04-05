import {keys} from './keys-module.js'

// Do not forget a catch within your assignments
// Always need a backup plan just encase the APIs fail
// Will affect the grade of the assignment
export const getGitHubUsers = async () => {
    try {
        let response = await fetch('https://api.github.com/users')
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }

    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => {
    //         console.log(error);
    //     });
}

export const renderGithubUser = (user, parent) => {
    const element = document.createElement('div');//refers to the parent node, what everything lives inside
    element.classList.add('user-card');
    element.innerHTML = `
    <div class="img-wrapper">
                    <img src="${user.avatar_url}" alt="User Image" class="avatar">
                </div>
                <h2>${user.login}</h2>
                <a href="${user.html_url}" target="_blank">Go to Profile</a>
                <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function() {
       element.remove();
    });
    parent.appendChild(element);
}

export const getGithubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const options = {
        headers: {
            'Authorization': `token ${keys.github}`
        }
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}

export const getLastCommit = async (username) => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {
        headers: {
            'Authorization': `token ${keys.github}`
        }
    };
    let response = await fetch(url, options);
    let data = await response.json();
    let lastCommits = data.filter((e)=>{
        return e.type === "PushEvent";
    })
    return lastCommits[0];
}

// STAR WARS API

export const getStarWarsCharacterEye = async (char) => {
    try {
        const url = `https://swapi.dev/api/people/${char}`;
        let response = await fetch(url);
        let data = await response.json();
        return data.eye_color
    } catch(error) {
        console.log(error);
    }
}

export const getStarWarsMovie = async (film) => {
    try{
        const url = `https://swapi.dev/api/films/${film}`;
        let response = await fetch(url);
        let data = await response.json();
        return data
    } catch(error) {
        console.log(error);
    }
}

export const getStarWarsPlanet = async (planet) => {
    try {
        const url = `https://swapi.dev/api/planets/${planet}`;
        let response = await fetch(url);
        let data = await response.json();
        return data
    } catch(error) {
        console.log(error);
    }
}

