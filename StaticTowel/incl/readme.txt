About bundeling with bundle.js

This bundler is from open source project on GitHub from Service Stack (http://wwww.servicestack.net):
https://github.com/ServiceStack/Bundler


1. I had some problems with using the GitHub Visual Studio package since the bundle.js there would not run properly.
This is the reason "bundle" is not included in the project packages. However bundle folder from the github project
"SocialBootstrapApi" worked nicely for me and is therefore shiped with this project (however not included in the project file).

2. There where also problems bundeling the knockout-2.3.0.js file while bundling knockout-2.3.0.debug.js worked fine.
Therefore we include the file knockout-2.3.0.nodebug.js in this splittowel.js bundle.  
knockout-2.3.0.nodebug.js is the same as the knockout-2.3.0.debug.js except the "debug" variable has been set to false.

3. The bundling process is configured in this project to run on post build of the StaticTowel project.
The following command is used: 
$(ProjectDir)bundler\node.exe "$(ProjectDir)bundler\bundler.js" "$(ProjectDir)incl"