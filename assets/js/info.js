const gh = new GitHub();
const inpdiv = document.getElementById("inputdiv");
const input = document.getElementById("input");
var hash = window.location.hash.split("#")[0];
dispInfo();
if (hash) {
  dispInfo(hash);
}

function dispInfo(repo) {
  gh.getRepo.apply(this,repo.split("/")).getDetails(function(error,details){
    console.log(error, details);
  });
}
