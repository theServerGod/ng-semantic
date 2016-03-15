ng-semantic
===========
AngularJS and Semantic UI project seed

This is a project seed for an Angular 1.x / Semantic UI front end only app.

The aim of this project seed is to be minimal but still provide a useful starting point for a new project. As such, implementation of a backend, code aggregation tasks, testing modules, etc have intentionally been avoided to provide a server-agnostic project seed.

Getting Started
---------------
First, install the dependencies. In the project root directory, run the following:

	bower install

Then start the app. This project seed allows you to choose and configure your own webserver, such as Node.js, Apache, or Nginx. Just configure your server to serve the files under the `app/` directory. For instance, for a simple Node.js-based server, you can use the npm package `http-server`.

	http-server -p 80 app/

This will serve the `app/` directory on port 80.

If using port 80, make sure the server is able to use it. Do not start a server with `sudo`, obviously.

Running the App in Production
-----------------------------
This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `app/` directory. Everything else should be omitted.

Semantic UI
-----------
At the time of this writing, [Semantic UI Angular bindings](http://semantic-ui.com/introduction/integrations.html) are still in development and so this project seed uses the standard UI components. As such, this project seed contains custom Angular directives/components to provide functionality to some Semantic UI components that would otherwise not work with Angular because of the way they use jQuery.
