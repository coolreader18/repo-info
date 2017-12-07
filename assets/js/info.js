const gh = new GitHub("5e5bdf52625a7309058e7bdda4ad3fcde6a680a0");
const inpdiv = document.getElementById("inputdiv");
const input = document.getElementById("input");
var hash = window.location.hash.split("#")[0];
dispInfo();
if (hash) {
  dispInfo(hash);
}

function dispInfo(repo) {
  gh.getRepo.apply(gh,repo.split("/")).getDetails(function(error,details){
    console.log(error, details);
  });
}
