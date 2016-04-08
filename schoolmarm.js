var gitHubServer = "github.com",
	gitHubApiPath = "/api/v3",
	gitHubPullRequest;

http.get({
	hostname: gitHubServer,
	port: 80,
	path: gitHubApiPath,
	agent: false
	}, function storeResponse(response) {
		gitHubPullRequest = response;
	});

console.log(gitHubPullRequest);
