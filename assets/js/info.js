const inpdiv = document.getElementById("inputdiv");
const input = document.getElementById("input");
var hash = window.location.hash.split("#")[0];
var info = {};
if (hash) {
  dispInfo(hash);
}

function getInfo(repo,subdir) {
  return $.getJSON("https://api.github.com/repos/"+repo+(subdir?"/"+subdir:""));
}

function dispInfo(repo) {
  var subdirs = ["commits","languages"];

  subdirs.forEach(function(subdir){
    $.getJSON("https://api.github.com/repos/"+repo+"/"+subdir).done(function(data){
      info[subdir] = data;
    });
  });

}
