# GitHub Finder
Find a GitHub user and their repos with this simple web app, using the GitHub API.


![GitHub finder demo](img/demo.gif)


## Features
* Find a Github user (a request is sent via the GitHub API for every keyup event)
* Display an error message if no such user is found.
* Display the user's basic details (Profile pic, no. of repos, location, no. of followers etc)
* Display a user's latest 5 repos


## Built with
* HTML
* JavaScript
* Bootstrap 5
* [Bootswatch CSS](https://bootswatch.com/)
* [GitHub API](https://docs.github.com/en/rest/reference/users)

### JS Concepts utilized:
1. Fetch API - Fetching data using an external API (GitHub API)
2. Promises
   1. Handling a Promise response with ````.then()````
   2. Reading a returned response with ```.json()```
3. Async functions - async await keywords
4. Object Oriented Programming (OOP) with JS 
5. DOM Selectors
6. Event listeners & Event handlers
7. Mouse & keyboard input events
8. Event Delegation
9. Running a function once after an interval of time with ```setTimeout(function, milliseconds)``` function.


## See this project
You may clone this project by running this command from your terminal:

```
git clone https://helen-tan.github.io/github-finder/
```

This will create a directory in the name of the project folder.

Once you have the project files, do the following steps:
### 1. Generate Your Own API Keys
1.  Login to your GitHub account
2.  Go to settings
3.	To go ‘Developer Settings’ > Select Oauth Apps
4.	Select ‘New OAuth App’
5.	Obtain your own Client ID and Client Secret

For the full details on how to do this, visit the GitHub Docs [here](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

### 2. Create a file named config.js
The following steps is to ensure that your API keys will not be pushed to a GitHub repo and become exposed as a result.
1. In the file directory, creae a file named **config.js**
2. In the config file, enter your API keys (obtained in step 1) in an object like so. No other code in this file:

``` javascript
let config = {
  client_id = 'INSERT_YOUR_CLIENT_ID_HERE';
  client_secret: 'INSERT_YOUR_CLIENT_SECRET_HERE';
}
```

3. Check and ensure that in **index.html**, the following script link to the config.js file has been added:

``` html
<script src="config.js"></script>
```

4. Check and ensure that in the **.gitignore** file, config.js is added.

### 3. Open index.html
Once You have your API keys and the config.js file created, its time to launch the app by opening index.html.
Thank you and enjoy!