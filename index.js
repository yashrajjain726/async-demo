console.log('Before');
getUser(1,displayUsers);
console.log('after');


// Named functions to rescue callback rescue
function displayUsers(user){
    console.log('User',user);
    getRepositories(user.githubUsername,displayRepos);
}
function displayRepos(repos){
    console.log('Repo List',repos)
}



// callbacks functions
function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading user from the database....');
        callback({id:id,githubUsername:'yashrajjain726'});
    },2000)
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Calling Github API');
        callback(['repo1','repo2','repo3']);
    },2000)
    
}