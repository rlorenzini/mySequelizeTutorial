<a name="top"><img height="200px" src="photos/sequelize-101.png" href/></a>

# SEQUELIZE TUTORIAL FOR BEGINNERS

**Created By:**

```JavaScript
const Contributors = 
[ { Name: "Richard Lorenzini" }, { Name: "Jaclyn Legacion" } ]
```
<br/>

**THIS IS A WORK IN PROGRESS**

| SEARCH OPTIONS | WHAT IT'S FOR |
| :--- | :--- |
| [DOC#START](#and-so-it-begins) | BEGINNING OF DOCUMENTATION |
| [SQLZ#START](#setting-up) | SETTING UP FROM SCRATCH |
| [SQLZ#NPM](#npm-time) | SEQUELIZE INSTALLATION |
| [SQLZ#DB](#database-setup) | SETTING UP THE DATABASE |
| [SQLZ#MIG](#first-migration) | FIRST MIGRATION |
| [SQLZ#FORMS](#forms-and-posts) | FORMS AND POSTS |

<br/>
<br/>
<br/>

<a name="and-so-it-begins"><img height="200px" src="photos/and-so-it-begins.png"/></a>

<a href="#top">`back to top`</a>

## So what is Sequelize?

**Sequelize** is a tool used to make the connection between your *backend* and your *database* simpler. Setting up Sequelize and understanding what's going on can be daunting, so I hope this simple and basic tutorial helps anyone who reads it. 
<br/>
<br/>
This tutorial is **VERY BASIC** and will not go into great depth about every aspect of Sequelize.

<br/>
<br/>
<br/>

---

<br/>


<a name="setting-up"><img height="200px" src="photos/setting-up.png"/></a>

<a href="#top">`back to top`</a>

<img height="400px" src="photos/terminalStart.png"/> 

I have created a new folder called `mySequelize` and opened a terminal at that folder.

My terminal is displaying the following, indicating I am on my Macbook Pro, in the folder `mySequelize`, as user: richardlorenzini.

```console
(base) Richards-MBP:mySequelize richardlorenzini$
```

## Setting Up Git

<img height="400px" src="photos/terminalGitInit.png"/> 

```console
git init
``` 

We will begin by initializing our git folder and connecting to this git repository.

<img height="400px" src="photos/terminalGitAddOrigin.png"/> 

```console
git add remote origin <insert_repository_url_here>
```

<img height="400px" src="photos/terminalGitIgnore.png"/> 

```console
touch .gitignore
```

.gitignore is used to tell your git commands to ignore certain folders. This is extremely useful when working in a Node.js environment, as your Node_Modules folder (the packages installed into your project) can get massive quickly.

<img height="400px" src="photos/codeGitIgnore.png"/> 

My .gitignore file can be located in my GitHub repository <a href='https://github.com/rlorenzini/usingGitignore/blob/master/.gitignore'>HERE</a>. This is a cookie-cutter catch-all .gitignore file. 

<img height="400px" src="photos/terminalGitPush.png"/> 

```console
git add . && git commit -m "first commit" && git push origin master
``` 

I always perform an initial commit to verify I have properly setup my git environment.

<br/>
<br/>
<br/>

---

<br/>

<a name="npm-time"><img height="200px" src="photos/npm-initialization.png"/></a>


<a href="#top">`back to top`</a>

<img height="400px" src="photos/terminalNPMInstall.png"/> 

```console
npm init && npm install express && npm install cors && npm install body-parser && npm install sequelize && npm install sequelize pg
```
Don't forget to initialize node in your project with ```npm init```. Otherwise, you can't install or use any packages.

I install **express** to make my time coding my backend simpler, **cors** is to avoid certain HTTP request issues, **body-parser** allows us to translate what is being sent from the frontend to the backend, **sequelize** is the point of this tutorial and makes the transfer of data from the backend to our database simpler, and **sequelize pg** is used to tell sequelize we are using a *postgres database*.

<img height="400px" src="photos/terminalSQLCLI.png"/> 

```console
npm install -g sequelize-cli
```

Sequelize does not, by default, have a command-line interface. **Sequelize CLI** literally stands for "Sequelize Command-Line Interface". We are installing this so we can avoid a lot of the file creating and editing Sequelize performs. This also makes migrations easier.

<img height="400px" src="photos/codeBackendSetup.png"/> 

Setting up our backend **app.js** environment. What we installed, we are requiring. 

**NOTE:** 
```console
models = require(./models)
``` 
is so we can tell Sequelize where the models are. More on that later.


<br/>
<br/>
<br/>

---

<br/>

<a name="database-setup"><img height="200px" src="photos/database-setup.png"/></a>


<a href="#top">`back to top`</a>

In your command-line, which should be in your directory for your backend (the folder which has **app.js**), run the following command. 

```console
sequelize init
```

We have now initialize Sequelize. If you receive an error message informing you Sequelize is not a command, you did not properly install the Sequelize-CLI. 

Sequelize will create several folders inside of your working directory: models; seeders; migrations; config. At this point, running 
```console
sequelize db:migrate
``` 
can help avoid any early-stage issues, but is not required.

| FOLDER | QUICK EXPLANATION |
| :--- | :--- |
| MODELS | A visual representation of each table in your database. Does not always update with migration. |
| MIGRATIONS | JavaScript files which execute during migration. These files are the backbone of Sequelize. |
| SEEDERS | Used to dump data into a table. DO NOT USE in place of forms, post, and create/build. |
| SEEDERS | Seeders should not be used until you have a deeper understanding of Sequelize. |
| CONFIG | The config file in this folder tells Sequelize what database you are using and where it is located. |

<img height="400px" src="photos/codeConfigMysql.png"/> 

The config file will very likely need modified from the beginning of your project. For example, unless your database is a MySQL database, you will need to change your dialect. In our case, we are going to change the dialect to **postgres** since we are using a postgres database. 

I prefer to setup a database on a website called **ElephantSQL**. It is a free online service to host a database and store the data. ElephantSQL **DOES NOT** replace Postico and **DOES NOT** show you the tables, columns, and data inside of your database.

<img height="400px" src="photos/elephantSQL.png"/> 

ElephantSQL provides us several pieces of information, which is automatically generated when we create our database. What we are interested in is **Server, User & Database, and Password**.

| SERVER | The URL our database will be hosted on. A local environment runs a database on PORT 5432 by default. |
| USER/DATABASE | When we go to our server, this is our username and the database name we are looking for. |
| PASSWORD | The password we need to access the DATABASE via our USER. |


The placement of the information into postico and your config file are straight forward. 

SERVER goes into "host", USER & DATABASE goes into "username"/USER and "database", and PASSWORD goes into "password".


<img height="400px" src="photos/posticoDatabase.png"/> 

<img height="400px" src="photos/codeConfigElephantSQL.png"/> 

<br/>
<br/>
<br/>

---

<br/>

<a name="first-migration"><img height="200px" src="photos/first-migration"/></a>


<a href="#top">`back to top`</a>

<img height="400px" src="photos/posticoDatabaseInitial.png"/> 

Once we connect into our database via Postico, we can see all of our tables, columns, and data is a clean interface. Our Postico database is practically empty at this stage, as we have no created any tables.

<img height="400px" src="photos/terminalModelCreate.png"/> 

```console
sequelize model:create --name Users --attributes 'username:string, password:string, firstName:string, lastName:string, email:string'
```

We are finally creating our first **TABLE**. A *table* in Sequelize is referred to as a **MODEL** and *columns* are **ATTRIBUTES**. Our 
```console
model:create
``` 
command takes in a name and attributes. The name must be declared as 
```console
--name NameOfYourTable
```
. You **MUST** declare --name or the command will fail. Columns are immediately declared after the name of the table, and must be declared with --attributes to work. Attributes are wrapped inside of apostrophes as a whole and not individually, so be mindful of your syntax.

```console
--attributes 'FirstColumnName:DATATYPE, SecondColumnName:DATA, etc:etc'
``` 

<img height="400px" src="photos/codeMigrationFile.png"/> 

Running our model:create command has generated a new migration file. Migration files are JavaScript files with JavaScript code. Essentially, in our migration file above, we are creating a Class via Sequelize. This file is executed when we run 
```console
sequelize db:migrate
```
This particular migration file is telling us it will create a table called Users with the attributes id, username, password, firstName, lastName, email, createdAt, and updatedAt. Id, createdAt, and updatedAt are automatically generated by Sequelize. 

Our migration file starts with 
```console
model.exports
```
which is an object. The first key for our object is UP, and the last key is DOWN. Both UP and DOWN need to be utilized in a specific manner.

| WHAT | WHY |
| :--- | :--- |
| UP | Used to create, modify, or update your database. |
| DOWN | Used to delete, undo, or reverse whatever UP does. |

<img height="400px" src="photos/terminalDBMigrate.png"/> 

I'm going to slow down and explain a bit about Sequelize, as to understand db:migrate we must understand how Sequelize functions. Sequelize keeps a log of everything done. Every migration is kept, with a log of when what was ran. This way, if a new user pulls our project and runs our project, Sequelize can build the environment from scratch exactly how you, the original developer, built your project. Due to this, you **must** commit fully to Sequelize. Let me explain.

Imagine following this tutorial and at this point <GO TO JACLYN'S GITHUB FOR THIS INFORMATION> would be great, right? But we really don't talk about that anymore, especially after **the incident**... Anyway. Let's move on to utilizing Sequelize with scrapping data form news websites.



I'm only partially kidding, but this is essentially what happens when you do not commit fully to Sequelize. If you use pg-promise to create a new table, Sequelize will be unable to retrieve that script and build a proper environment. Then, the user who downloaded and ran your project will not have a fully functional environment.

Say you created a Users table in pg-promise. If the user then goes to a *login page* you created and submits their login information, your application will crash due to being unable to communicate properly with the server. Sequelize does not know the Users table exists since it did not create a migration and execute building the Users table. This is why if you plan to use Sequelize it is **HIGHLY** recommended, and almost completely required, to **ONLY** utilize Sequelize.

<img height="400px" src="photos/posticoPostMigrate.png"/> 

Looking at our Postico after our db:migrate, we can see our Users table and the columns we specified. **MAGNIFICENT.**

<br/>
<br/>
<br/>

---

<br/>

<a name="forms-and-posts"><img height="200px" src="photos/forms-and-posts.png"/></a>

<a href="#top">`back to top`</a>

<img height="400px" src="photos/codePostForm.png"/> 

I built my project in **React**, a framework for **JavaScript** based on Components and Single Page Applications. React is my comfort zone and go-to for building projects, but that is not the only reason I used it for this project. React allows you to break apart the webpage into components and inject them easily wherever they are needed. This way, I do not have to show off my entire project, but I can show off just the raw HTML code used to build the form.

I purposely removed code-wrapping and indentions so the code is easier to follow. Otherwise, my code would either go further than my screen or would be less appealing to look at. 

For those who are unfamiliar with React, this is what you need to know about the form shown above. **onClick** is similar in functionality and purpose as **action**. **onChange** is a React thing, so do not get caught up on that too much. I'm using it to make it easier for me to pass my values to my backend via my **fetch** above, **handleSubmitData**.

**Fetch** has two very common uses: **POST and GET**. I your client, who is on the **frontend** of your applications, wants to **get information or a new page**, you have to use a **get request** via fetch. In my example above, our client wants to **submit data to the database**, so we have to allow them to **post their data** to our backend. This is why we are using a **post request** via fetch. 

Our header informs our server, the **backend**, what to expect. This is why we installed **body-parser** on the backend, so we can easily pass our data as a **JSON** file. **JSON.stringify()**, which is a JSON function, translates roughly to, "take this data and make it a JSON file." JSON.stringify, as you would expect if you are familiar with JSON files, wants an object. We define our keys and values, where our keys are what our backend calls and our values are directly taken from our form. In my example, **this.state.username** is the value submitted by our user via the **username input**. 

**NOTE:** There are many ways to do this step, with many different frameworks and libraries to change how you do it. For example, if you wish to use **AXIOS** to handle your fetch requests your code will look different. Be sure to keep in mind the technologies you are using, as my code may or may not translate properly into your technologies without a bit of fiddling.

<img height="400px" src="photos/appPostForm.png"/> 

<img height="400px" src="photos/terminalPostBody.png"/> 

Our POST request is console logged on our backend so we can get an idea of what we are receiving from the frontend. When using **body-parser**, the JSON file is sent in the request as **body**. To access the JSON file, we must call **req.body**. Our user, me, sent nothing but "a" in every input.

```JavaScript
console.log(req.body)
```
As we see, we are no longer working with **this.state.username**, but we have all of our values of "a". To get the value on the backend, we now use **req.body.username**. Below, I will list what the frontend sent and what the backend received so we can visualize the change better.

| FRONTEND FORM VALUES | BACKEND JSON FILE |
| this.state.username | req.body.username |
| this.state.password | req.body.password |
| this.state.firstName | req.body.firstName |
| this.state.lastName | req.body.lastName |
| this.state.email | req.body.email |



<img height="400px" src="photos/codeBackendPostToDB.png"/> 

Personally, the first thing I do is create variable names for my data being received. Typing out **username** is quicker and takes up less space than typing **req.body.username**. This is a personal preference to shorten and clean-up my code, but is not required. 

Line 24 is where we are now in Sequelize territory. We are still working on our backend, but we now must communicate to Sequelize what we want Sequelize to do with our data. As you may recall above, we created a model/table called "Users". Once we migrated, we received a model file called **"users.js"**. This is where Sequelize begins to shine, but you must understand **what you are doing and why**. We required our models earlier, at the very beginning, because Sequelize needs to know **where to find them**. For any coder who has ever created routes, paths, or imported their own files, this concept isn't new but might look different.

Our model === users. When we type ```models```, Sequelize immediately knows two things. First, we are going to be doing something with a model. Secondly, it knows where which models we are going to be working with are. The next argument, ```users```, tells Sequelize, "Check the /models folder for a file called 'users'." The last argument, **build**, is as basic as it comes. Time to build a new model with our data! This is going to be our first Users entry into our database.

**models.Users.build()** 

**build()** is a function and our **model** is built similar to a **Class**. Sequelize wants us to pass our data in as an object. Our keys **must** be exactly the same as the **attributes** our model is built with. If my model has an attribute "firstname", I cannot send this key as "firstName". If you run into errors about improperly building a model, this should be the first place you look. It is very easy to use the wrong syntax, especially if your database uses a different convention than your backend.

```JavaScript
{
username: req.body.username,
password: req.body.password,
firstName: req.body.firstName,
lastName: req.body.lastName,
email: req.body.email
}
```
This is how our **build** object would look if we did not define our req.body values as variables. It is not wrong and will work, but my preference is to define variables first.

<img height="400px" src="photos/posticoTerminalResults.png"/> 

Postico is now displaying "a" values in each of our columns. **NOTE:** Postico does not refresh dynamically as data is put into your database. Remember to refresh to see the results. Our id column is, by default, 1 as this is our first entry. Behind my terminal is createdAt and updatedAt, which are updated automatically by Sequelize. 

Looking at our terminal, we see a long command being run which may be familiar to some of you. The command is run using pg-promise. Sequelize takes our **models.Users.build({})** and translates it into pg-promise for us, so we do not have to execute pg-promise ourselves. As you may recall, by default our config file uses "mysql" as the "dialect". Sequelize can communicate with multiple backend technologies, which is great for us. If we decided to change our server to a mysql server, converting is much easier now as we only need to switch to mysql. The backend, frontend, models, and migrations do not change. We only have to uninstall pg-promise, install mysql, and require mysql. There may be a few other tweaks, but overall this is much faster and simpler than rewriting huge chunks of your code.
