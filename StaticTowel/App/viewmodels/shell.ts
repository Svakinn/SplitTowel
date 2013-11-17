import m_app = require('base/app');
import m_router = require('plugins/router');
//The shell will dispose app as the viewmodel to be used in shell.html and subtemplates for the shell
//The app.boot() will then handle tha standard Durandal boot process - once all relavant data (the menu) is ready for boot

var shell = {
    activate: activate,
    router: m_router,
    app: m_app.cspMain
}
return shell;

function activate() {
    return m_app.cspMain.boot();
}