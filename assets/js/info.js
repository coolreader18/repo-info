var inpdiv = $("#inputdiv");
var input = $("#input");
var hash = window.location.hash.split("#")[0];
var info = {};
if (hash) {
  dispInfo(hash);
}

function getInfo(repo,subdir) {
  return $.getJSON("https://api.github.com/repos/" + repo + (subdir ? "/" + subdir : ""));
}

function dispInfo(repo) {
  var subdirs = ["commits", "languages", ];
  
  $.when(subdirs.reduce(function(arr, subdir) {
    return arr.concat([getInfo(repo, subdir).done(function(data) {
      info[subdir] = data;
    }]));
  },[]).concat([
    getInfo(repo).done(function(data) {
      Object.keys(data).forEach(function(key) {
        if (key.indexOf("api.github.com") != -1) {
          delete data[key];
        }
      });
      $.extend(info, data);
    })
  ])).done(function() {
      
  })
}
