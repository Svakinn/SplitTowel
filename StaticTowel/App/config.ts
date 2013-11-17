
export interface IRoute {
    route: string;
    moduleId: string;
    title: string;
    nav: number;
}

export interface IMenuItemTemplate {
    id: string;
    route: string;
    title: string;
    visible: boolean;
    toolTip: string;
}

//Why not put configs in TypeScript class?
export class ConfigClass {
    constructor() {}

    public breezeServiceName = 'http://localhost:55414/breeze/Country';

    public routes: Array<IRoute> = [
        { route: '', moduleId: 'home', title: 'Home', nav: 1 },
        { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }
    ];

    public mainMenuItems: Array<IMenuItemTemplate> = [
        { id: 'home', route: '#/', title: 'Home', visible: true, toolTip: 'Go home' },
        { id: 'details', route: '#/details', title: 'Customers', visible: true, toolTip: 'Customers' }
    ];
}

export var cfg = new ConfigClass();