import GitHub from 'github-api';
const gh = new GitHub();
const inpdiv = document.getElementById("inputdiv");
var hash = window.location.hash;
dispInfo();
if (hash) {
  dispInfo(hash);
}

function dispInfo(repo) {
  gh.getRepo.apply(this,repo.split("/")).getDetails(function(error,details){
    console.log(error, details);
  });
}
