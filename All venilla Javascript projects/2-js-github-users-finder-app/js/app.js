

$(document).ready(function() {

  $("#searchUser").on("keyup", function(e) {

    let username = e.target.value;

    //Here, We are Making our first api request to the github api with ajax in jquery.
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "ccd479ad0243e5ef279e",
        client_secret: "0a1af65c59a5562f6c83bba01525fb770b1e111d"
      }
      //  we are giving the ajax request a .done because it is return a promise.
      //that means, the api is returning our request to it (the returned, is a promise).
    }).done(function(user) {
      //Here, We are Making our second api request to the github api with ajax in jquery.
      $.ajax({
        url: "https://api.github.com/users/" + username + "/repos",
        data: {
          client_id: "ccd479ad0243e5ef279e",
          client_secret: "0a1af65c59a5562f6c83bba01525fb770b1e111d",
          //   we were the one that sent these two requests
          sort: "created: asc",
          per_page: 5
        }

        //Again, we are giving the ajax request a .done because it is return a promise.
        //that means, the api is returning our request to it (the returned, is a promise).
      }).done(function(repos) {
        $.each(repos, function(index, repo) {
          $("#repos").append(`
            <div class="well">
                <div class="row">
                    <div class="col-md-7">
                        <strong>${repo.name}</strong> : ${repo.description}
                    </div>
                     <div class="col-md-3">
                      <span class="label label-danger">Forks: ${
                        repo.forks_count
                      }</span>
                         <span class="label label-warning">Watchers: ${
                           repo.watchers_count
                         }</span>
                        <span class="label label-primary">Stars: ${
                          repo.stargazers_count
                        }</span>
                    </div>
                     <div class="col-md-2">
                        <a href="${
                          repo.html_url
                        }" target="_blank" class="btn btn-success">Repo Page</a>
                    </div>
                </div>
            </div>
          `);
        });
      });

      // bootstrap panel
      $("#profile").html(`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-3">
                        <img class="thumbnail avatar" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${
                          user.html_url
                        }">view profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="label label-primary">Public Repos: ${
                          user.public_repos
                        }</span>
                         <span class="label label-success">Public Gists: ${
                           user.public_gists
                         }</span>
                        <span class="label label-info">Followers: ${
                          user.followers
                        }</span>
                        <span class="label label-warning">Following: ${
                          user.following
                        }</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${
                              user.company
                            }</li>
                            <li class="list-group-item">Website/blog: ${
                              user.blog
                            }</li>
                            <li class="list-group-item">Location: ${
                              user.location
                            }</li>
                            <li class="list-group-item">Member Since: ${
                              user.created_at
                            }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-header">Latest Repos</h3>
        <div id="repos">

        </div>

      `);
      //Right above Here, We are Making our third api request to the github api with ajax in jquery.
    });
  });
});

{
  /* <span class="label label-primary">Primary Label</span>
  <span class="label label-success">Success Label</span>
  <span class="label label-info">Info Label</span>
  <span class="label label-warning">Warning Label</span>
  <span class="label label-danger">Danger Label</span> */
}
