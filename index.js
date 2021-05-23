console.log("Before");
console.log("after");

// Named functions to rescue callback rescue/ callback hell problem
// function displayUsers(user){
//     getRepositories(user.githubUsername,displayRepos);
// }
// function displayRepos(repos){
//     console.log('Repo List',repos)
// }

const p = getUser(1)
  .then((user) => getRepositories(user.githubUsername))
  .then((repos) => console.log(repos))
  .catch((err) => console.log(err.message));

// callbacks functions
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from the database....");
      resolve({ id: id, githubUsername: "yashrajjain726" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
