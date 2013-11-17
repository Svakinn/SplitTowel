Split Towel
=======================

This is a modified version of John Papa’s Hot Towel and TypeTowel (Hot Towel with TypeScript).

The purpose of this version is to make clear split between the client-html/javascripts and the web-api server.  
The client part is now static web that makes it much easier to deploy the solution and even deploy the client and server on separate servers.  
For example it is now possible to deploy the client inside another web or even place it within content management system running on PHP on Linux.

Corse:
------
The server side web-api now includes corse handling to enable the client and server to run on separate websites.

Bundling:
---------
Instead of using the .Net Web Optimization Framework, Hot Towel demonstrates, we now use open source bundler solution to bundle and minify CSS and JavaScripts when the web project is compiled.

App.ts:
-------
Application module is introduced to make it easier to handle the viewmodel for the app/shell.  
The app.ts also includes menu object to handle the main menu.

Web-Api 2:
--------
The web-api has been updated to use Web-API 2 and Breeze server for Web-API 2  
For demonstration the details page includes example of retrieving data (list of countries) from the web-api.

Requirements: 
-------------

1. Visual studio 2012
2. TypeScript, latest version, currently 0.9.1.1 
 
 


