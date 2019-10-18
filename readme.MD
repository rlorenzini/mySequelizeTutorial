# SEQUELIZE TUTORIAL FOR BEGINNERS

**Created By:**

```{ Name: "Richard Lorenzini" }``` <br/>
```{ Name: "Jaclyn Legacion" }```


| SEARCH OPTIONS | WHAT IT'S FOR |
| :--- | :--- |
| DOC#START | BEGINNING OF DOCUMENTATION |
| SQLZ#START | SETTING UP FROM SCRATCH |
| SQLZ#NPM | SEQUELIZE INSTALLATION |
| SQLZ#DB | SETTING UP THE DATABASE |

# AND SO IT BEGINS

**DOC#START**

**Sequelize** is a tool used to make the connection between your *backend* and your *database* simpler. Setting up Sequelize and understand what is going on can be daunting, so I hope this simple and basic tutorial helps anyone who reads it. This tutorial is **VERY BASIC** and will not go into great depth about every aspect of Sequelize.

## Setting Up

**SQLZ#START**

<img height="300px" src="photos/terminalStart.png"/> 

I have created a new folder called mySequelize and opened a terminal at that folder.

My terminal is displaying the following, indicating I am on my Macbook Pro, in the folder 'mySequelize', as user: richardlorenzini.

```(base) Richards-MBP:mySequelize richardlorenzini$```

## Setting Up Git

<img height="300px" src="photos/terminalGitInit.png"/> 

```git init``` 

We will begin by initializing our git folder and connecting to this git repository.

<img height="300px" src="photos/terminalGitAddOrigin.png"/> 

```git add remote origin <insert_repository_url_here>```

<img height="300px" src="photos/terminalGitIgnore.png"/> 

```touch .gitignore```

.gitignore is used to tell your git commands to ignore certain folders. This is extremely useful when working in a Node.js environment, as your Node_Modules folder (the packages installed into your project) can get massive quickly.

<img height="300px" src="photos/codeGitIgnore.png"/> 

My .gitignore file can be located in my GitHub repository <a href='https://github.com/rlorenzini/usingGitignore/blob/master/.gitignore'>HERE</a>. This is a cookie-cutter catch-all .gitignore file. 

<img height="300px" src="photos/terminalGitPush.png"/> 

```git add . && git commit -m "first commit" && git push origin master``` 

I always perform an initial commit to verify I have properly setup my git environment.

# NPM TIME

**SQLZ#NPM**

<img height="300px" src="photos/terminalNPMInstall.png"/> 

```npm install express && npm install cors && npm install body-parser && npm install sequelize && npm install sequelize pg```

I install **express** to make my time coding my backend simpler, **cors** is to avoid certain HTTP request issues, **body-parser** allows us to translate what is being sent from the frontend to the backend, **sequelize** is the point of this tutorial and makes the transfer of data from the backend to our database simpler, and **sequelize pg** is used to tell sequelize we are using a *postgres database*.

<img height="300px" src="photos/terminalSQLCLI.png"/> 

```npm install -g sequelize-cli```

Sequelize does not, by default, have a command-line interface. **Sequelize CLI** literally stands for "Sequelize Command-Line Interface". We are installing this so we can avoid a lot of the file creating and editing Sequelize performs. This also makes migrations easier.

<img height="300px" src="photos/codeBackendSetup.png"/> 

Setting up our backend **app.js** environment. What we installed, we are requiring. 

**NOTE:** ```models = require(./models)``` is so we can tell Sequelize where the models are. More on that later.

## Database Setup

**SQLZ#DB**

<img height="300px" src="photos/codeConfigMysql.png"/> 

explain why we change mysql to postgres

<img height="300px" src="photos/elephantSQL.png"/> 

what is elephantsql, what info are we grabbing

<img height="300px" src="photos/posticoDatabase.png"/> 

what info goes where and why

<img height="300px" src="photos/codeConfigElephantSQL.png"/> 

explain what info goes in config and why

<img height="300px" src="photos/posticoDatabaseInitial.png"/> 

why postico db looks as it does 

<img height="300px" src="photos/terminalModelCreate.png"/> 

what is command, what it dooooo

<img height="300px" src="photos/codeMigrationFile.png"/> 

explain migration file 

<img height="300px" src="photos/terminalDBMigrate.png"/> 

what is db migrate, why use it 

<img height="300px" src="photos/posticoPostMigrate.png"/> 

these are the results

<img height="300px" src="photos/codePostForm.png"/> 

fetch, form, post, inputs, etc
NOTE: forgot picture of backend console.log(req.body), must explain manually

<img height="300px" src="photos/appPostForm.png"/> 

ugly website

<img height="300px" src="photos/terminalPostForm.png"/> 

how req.body comes to us in terminal 

<img height="300px" src="photos/codeBackendPostToDB.png"/> 

explain the app.js code 

<img height="300px" src="photos/posticoTerminalResults.png"/> 

explain the results 
