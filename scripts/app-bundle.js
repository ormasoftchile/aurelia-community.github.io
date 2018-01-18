var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./routes"], function (require, exports, aurelia_framework_1, routes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.activeRoute = "";
            this.title = "Aurelia community";
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = this.title;
            config.addPipelineStep("modelbind", RouterStep);
            config.addPipelineStep("postcomplete", PostCompleteStep);
            config.map(routes_1.default);
            this.router = router;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], App.prototype, "activeRoute", void 0);
        return App;
    }());
    exports.App = App;
    var RouterStep = (function () {
        function RouterStep() {
        }
        RouterStep.prototype.run = function (routingContext, next) {
            return next();
        };
        return RouterStep;
    }());
    var PostCompleteStep = (function () {
        function PostCompleteStep() {
        }
        PostCompleteStep.prototype.run = function (routingContext, next) {
            return next();
        };
        return PostCompleteStep;
    }());
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('footer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Footer = (function () {
        function Footer() {
        }
        return Footer;
    }());
    exports.Footer = Footer;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home',["require", "exports", "aurelia-router", "aurelia-framework", "text!assets/home.json"], function (require, exports, aurelia_router_1, aurelia_framework_1, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(router) {
            this.router = router;
            this.model = JSON.parse(data);
        }
        Home = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});



define('main',["require", "exports", "./environment", "bootstrap", "whatwg-fetch"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('nav-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], NavBar.prototype, "router", void 0);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});



define('routes-icons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.homeIcon = "<g id=\"Outline_Icons\">\n<g>\n  <path d=\"M20.5,13.5c-0.276,0-0.5,0.224-0.5,0.5v9h-5v-6.5c0-0.276-0.224-0.5-0.5-0.5h-5C9.224,16,9,16.224,9,16.5V23H4v-9.5\n    C4,13.224,3.776,13,3.5,13S3,13.224,3,13.5v10C3,23.777,3.224,24,3.5,24h6c0.276,0,0.5-0.224,0.5-0.5V17h4v6.5\n    c0,0.276,0.224,0.5,0.5,0.5h6c0.276,0,0.5-0.224,0.5-0.5V14C21,13.724,20.776,13.5,20.5,13.5z\"></path>\n  <path d=\"M23.854,12.647l-11.5-11.5c-0.195-0.195-0.512-0.195-0.707,0l-11.5,11.5c-0.195,0.195-0.195,0.512,0,0.707\n    s0.512,0.195,0.707,0L12,2.208l11.146,11.146c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146\n    C24.049,13.159,24.049,12.842,23.854,12.647z\"></path>\n  <path d=\"M16,3h3v3c0,0.276,0.224,0.5,0.5,0.5S20,6.277,20,6V2.5C20,2.224,19.776,2,19.5,2H16c-0.276,0-0.5,0.224-0.5,0.5\n    S15.724,3,16,3z\"></path>\n</g>\n</g>\n<g id=\"invisible_shape\">\n<rect fill=\"none\" width=\"24\" height=\"24\"></rect>\n</g>\n";
    exports.guidesIcon = "<g id=\"Outline_Icons_1_\">\n<g>\n  <path d=\"M23.5,1H12V0.5C12,0.224,11.776,0,11.5,0h-8C3.224,0,3,0.224,3,0.5V1H0.5C0.224,1,0,1.224,0,1.5v22\n    C0,23.776,0.224,24,0.5,24h23c0.276,0,0.5-0.224,0.5-0.5v-22C24,1.224,23.776,1,23.5,1z M4,1h7v11.293L7.854,9.146\n    c-0.195-0.195-0.512-0.195-0.707,0L4,12.293V1z M23,23H1V2h2v11.5c0,0.446,0.542,0.668,0.854,0.354L7.5,10.207l3.646,3.646\n    C11.459,14.166,12,13.948,12,13.5V2h11V23z\"></path>\n  <path d=\"M14.5,8h6C20.776,8,21,7.776,21,7.5S20.776,7,20.5,7h-6C14.224,7,14,7.224,14,7.5S14.224,8,14.5,8z\"></path>\n  <path d=\"M14.5,11h6c0.276,0,0.5-0.224,0.5-0.5S20.776,10,20.5,10h-6c-0.276,0-0.5,0.224-0.5,0.5S14.224,11,14.5,11z\"></path>\n  <path d=\"M20.5,13h-6c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h6c0.276,0,0.5-0.224,0.5-0.5S20.776,13,20.5,13z\"></path>\n  <path d=\"M20.5,16h-17C3.224,16,3,16.224,3,16.5S3.224,17,3.5,17h17c0.276,0,0.5-0.224,0.5-0.5S20.776,16,20.5,16z\"></path>\n  <path d=\"M16.5,19h-13C3.224,19,3,19.224,3,19.5S3.224,20,3.5,20h13c0.276,0,0.5-0.224,0.5-0.5S16.776,19,16.5,19z\"></path>\n</g>\n</g>\n<g id=\"Invisible_Shape\">\n<rect fill=\"none\" width=\"24\" height=\"24\"></rect>\n</g>\n";
    exports.blogIcon = " <g id=\"Outline_Icons\">\n<path d=\"M21.945,15.283c-0.009-0.02-0.022-0.034-0.034-0.052c-0.031-0.048-0.068-0.089-0.114-0.123\n  c-0.011-0.008-0.015-0.021-0.026-0.029L17,12.011V7.5c0-0.082-0.024-0.156-0.059-0.224c-0.01-0.02-0.023-0.035-0.036-0.053\n  c-0.033-0.049-0.072-0.089-0.12-0.124c-0.012-0.007-0.017-0.022-0.028-0.029l-5-3c-0.158-0.095-0.355-0.095-0.514,0l-5,3\n  C6.231,7.078,6.227,7.093,6.215,7.1c-0.048,0.035-0.087,0.075-0.12,0.124C6.082,7.241,6.068,7.257,6.059,7.276\n  C6.024,7.344,6,7.418,6,7.5v4.511L1.229,15.08c-0.012,0.007-0.016,0.021-0.026,0.029c-0.046,0.034-0.083,0.075-0.114,0.123\n  c-0.012,0.018-0.025,0.032-0.034,0.052C1.022,15.349,1,15.421,1,15.5v4.784c0,0.17,0.087,0.329,0.229,0.421l5,3.216\n  c0.009,0.006,0.021,0.003,0.029,0.009C6.331,23.971,6.411,24,6.5,24s0.169-0.029,0.241-0.07c0.009-0.006,0.021-0.003,0.029-0.009\n  l4.729-3.042l4.729,3.042c0.009,0.006,0.021,0.003,0.029,0.009C16.331,23.971,16.411,24,16.5,24s0.169-0.029,0.241-0.07\n  c0.009-0.006,0.021-0.003,0.029-0.009l5-3.216C21.913,20.613,22,20.454,22,20.284V15.5C22,15.421,21.978,15.349,21.945,15.283z\n  M16.5,17.917l-4.053-2.432l4.053-2.606l4.053,2.606L16.5,17.917z M7,18.783l4-2.4v3.628l-4,2.573V18.783z M16,12.011l-4,2.573\n  v-3.801l4-2.4V12.011z M11,14.584l-4-2.573V8.383l4,2.4V14.584z M11.5,5.083L15.528,7.5L11.5,9.917L7.472,7.5L11.5,5.083z\n  M6.5,12.879l4.053,2.606L6.5,17.917l-4.053-2.432L6.5,12.879z M2,16.383l4,2.4v3.801l-4-2.573V16.383z M12,16.383l4,2.4v3.801\n  l-4-2.573V16.383z M17,22.584v-3.801l4-2.4v3.628L17,22.584z\"></path>\n</g>\n<g id=\"Invisible_Shape\">\n<rect fill=\"none\" width=\"24\" height=\"24\"></rect>\n</g>\n";
    exports.helpIcon = "<g id=\"Outline_Icons_1_\">\n<g id=\"Outline_Icons\">\n  <g>\n    <path d=\"M11.5,1C5.159,1,0,6.159,0,12.5C0,18.841,5.159,24,11.5,24S23,18.841,23,12.5C23,6.159,17.841,1,11.5,1z M11.5,23\n      C5.71,23,1,18.29,1,12.5C1,6.71,5.71,2,11.5,2S22,6.71,22,12.5C22,18.29,17.29,23,11.5,23z\"></path>\n    <path d=\"M11.5,6.5C9.57,6.5,8,8.07,8,10c0,0.276,0.224,0.5,0.5,0.5S9,10.276,9,10c0-1.378,1.121-2.5,2.5-2.5S14,8.622,14,10\n      s-1.121,2.5-2.5,2.5c-0.276,0-0.5,0.224-0.5,0.5v3c0,0.276,0.224,0.5,0.5,0.5S12,16.276,12,16v-2.535\n      c1.694-0.244,3-1.704,3-3.465C15,8.07,13.43,6.5,11.5,6.5z\"></path>\n    <circle cx=\"11.5\" cy=\"18.5\" r=\"1\"></circle>\n  </g>\n</g>\n</g>\n";
    exports.surveyIcon = "<g id=\"Outline_Icons\">\n<g id=\"Invisible_Shape\">\n\t<rect fill=\"none\" width=\"32\" height=\"32\"/>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M16.461,3.218c-0.037-0.119-0.091-0.236-0.163-0.339c-0.155-0.228-0.391-0.391-0.657-0.463\n\t\t\tc-0.1-0.027-0.204-0.039-0.306-0.039h-0.69V2.278c-0.017-1.332-1.112-2.412-2.442-2.412h-0.037c-0.677,0-1.286,0.271-1.733,0.706\n\t\t\tC9.99,1.01,9.71,1.612,9.703,2.278v0.099H9.013c-0.104,0-0.208,0.013-0.306,0.039C8.439,2.487,8.204,2.651,8.048,2.878\n\t\t\tc-0.07,0.103-0.127,0.22-0.163,0.339C7.865,3.285,7.85,3.362,7.846,3.437v1.355c0.005,0.08,0.019,0.151,0.04,0.22\n\t\t\tC8.026,5.502,8.463,5.84,8.97,5.86h6.4c0.516-0.02,0.952-0.358,1.092-0.848c0.02-0.069,0.036-0.14,0.039-0.212V3.429\n\t\t\tC16.498,3.362,16.482,3.289,16.461,3.218z M13.485,2.377h-2.622V2.273c0.02-0.689,0.593-1.247,1.282-1.247h0.055\n\t\t\tc0.69,0,1.265,0.558,1.283,1.247L13.485,2.377L13.485,2.377z\"/>\n\t</g>\n\t<path d=\"M21.342,19.03l-0.001-0.226c-0.002-0.532-0.004-1.081-0.004-1.621c0-1.262,0-2.526,0-3.791v-0.648\n\t\tc-0.001-1.961-0.003-3.988,0.002-5.979c0.002-1.485-0.619-2.576-1.847-3.241c-0.422-0.229-0.897-0.331-1.542-0.333h-0.335v1.562\n\t\tl0.074,0.001c0.213,0,0.396,0.007,0.555,0.017c0.825,0.052,1.531,0.753,1.572,1.561c0.043,0.79,0.042,1.615,0.04,2.345\n\t\tc0,0.162,0,0.324,0,0.484c0.002,2.723,0.002,5.445,0.002,8.169c0,1.899,0,1.784,0,3.685c0,0.431,0,0.879-0.207,1.263\n\t\tc-0.356,0.667-0.87,0.991-1.569,0.991c-0.945,0-1.89,0-2.833,0h-2.834h-0.242h-0.242H9.097c-0.944,0-1.889,0-2.832,0\n\t\tc-0.698,0-1.211-0.324-1.57-0.991c-0.207-0.384-0.207-0.832-0.207-1.263c0-1.9,0-1.787,0-3.685c0-2.724,0-5.446,0.003-8.169\n\t\tc0-0.16,0-0.322-0.002-0.484c0-0.731-0.001-1.556,0.039-2.345C4.57,5.524,5.276,4.824,6.102,4.772\n\t\tc0.16-0.011,0.342-0.017,0.554-0.017l0.074-0.001V3.191H6.396C5.75,3.193,5.274,3.296,4.853,3.524\n\t\tC3.625,4.189,3.005,5.281,3.006,6.766c0.003,1.99,0.002,4.018,0.002,5.979v0.648c0,1.264,0,2.529,0,3.791\n\t\tc0,0.541-0.002,1.089-0.002,1.621L3.003,19.03c-0.004,1.521-0.01,1.08,0.023,2.64c0.019,0.832,0.364,1.622,0.971,2.224\n\t\tc0.613,0.606,1.413,0.939,2.253,0.939h0.014c1.791-0.009,3.539-0.009,5.319-0.009h0.587h0.588c1.782,0,3.527,0,5.32,0.009h0.013\n\t\tc0.84,0,1.641-0.333,2.254-0.939c0.606-0.602,0.952-1.394,0.97-2.224C21.353,20.109,21.347,20.551,21.342,19.03z\"/>\n\t<path d=\"M16.899,14.062c0.265,0.268,0.52,0.524,0.772,0.783c0.297,0.305,0.203,0.756-0.186,0.895\n\t\tc-0.223,0.081-0.405,0.002-0.568-0.149c-0.262-0.249-0.524-0.492-0.804-0.755c-0.271,0.273-0.523,0.528-0.779,0.784\n\t\tc-0.159,0.159-0.341,0.239-0.565,0.165c-0.382-0.125-0.497-0.566-0.219-0.876c0.191-0.21,0.398-0.41,0.604-0.607\n\t\tc0.061-0.059,0.188-0.172,0.18-0.183c-0.31-0.303-0.546-0.529-0.792-0.776c-0.235-0.238-0.243-0.57-0.025-0.782\n\t\tc0.216-0.211,0.517-0.215,0.764,0.022c0.258,0.251,0.496,0.526,0.76,0.809c0.326-0.326,0.585-0.597,0.858-0.854\n\t\tc0.331-0.31,0.785-0.179,0.901,0.256c0.056,0.209-0.04,0.375-0.181,0.517c-0.231,0.238-0.466,0.472-0.698,0.709\n\t\tC16.912,14.032,16.907,14.048,16.899,14.062z\"/>\n\t<path d=\"M18.33,16.847c-0.012,0-0.021,0.001-0.031,0.002c-0.05,0.006-0.09,0.025-0.117,0.04l-0.123,0.063\n\t\tc-0.075,0.04-0.162,0.089-0.25,0.147c-0.585,0.389-1.141,0.827-1.678,1.252l-0.032,0.026c-0.13,0.102-0.261,0.206-0.387,0.31\n\t\tl-0.077,0.061l-0.138-0.116c-0.156-0.13-0.33-0.276-0.51-0.417c-0.109-0.084-0.23-0.141-0.335-0.187\n\t\tc-0.111-0.047-0.229-0.021-0.294,0.059c-0.05,0.062-0.064,0.145-0.045,0.236c0.016,0.065,0.034,0.146,0.064,0.222\n\t\tc0.17,0.412,0.406,0.828,0.745,1.31c0.115,0.164,0.292,0.257,0.483,0.257c0.158,0,0.311-0.064,0.43-0.182\n\t\tc0.107-0.103,0.215-0.211,0.324-0.324c0.354-0.366,0.766-0.795,1.159-1.238c0.115-0.13,0.231-0.261,0.344-0.391\n\t\tc0.085-0.098,0.171-0.194,0.256-0.289l0.018-0.024c0.293-0.319,0.423-0.532,0.412-0.667C18.542,16.941,18.51,16.847,18.33,16.847z\"\n\t\t/>\n\t<rect x=\"6.37\" y=\"8.883\" width=\"6.555\" height=\"1.195\"/>\n\t<rect x=\"6.37\" y=\"13.565\" width=\"6.555\" height=\"1.195\"/>\n\t<rect x=\"6.37\" y=\"18.35\" width=\"6.555\" height=\"1.195\"/>\n\t<path d=\"M18.356,7.729c-0.011,0-0.022,0-0.03,0.002c-0.05,0.006-0.09,0.026-0.119,0.04l-0.121,0.063\n\t\tc-0.075,0.041-0.162,0.089-0.252,0.147C17.25,8.37,16.695,8.81,16.157,9.234l-0.032,0.026c-0.13,0.102-0.261,0.207-0.387,0.31\n\t\tl-0.077,0.061l-0.139-0.115c-0.155-0.131-0.33-0.277-0.508-0.417c-0.108-0.085-0.231-0.143-0.336-0.187\n\t\tc-0.112-0.046-0.229-0.024-0.295,0.059c-0.049,0.06-0.063,0.144-0.044,0.235c0.014,0.066,0.034,0.146,0.064,0.222\n\t\tc0.17,0.413,0.406,0.828,0.743,1.309c0.114,0.165,0.291,0.26,0.484,0.26c0.157,0,0.311-0.065,0.432-0.183\n\t\tc0.105-0.104,0.213-0.211,0.322-0.325c0.354-0.367,0.766-0.794,1.16-1.239c0.114-0.129,0.229-0.258,0.343-0.391\n\t\tc0.086-0.097,0.17-0.193,0.256-0.29l0.02-0.021c0.291-0.32,0.42-0.532,0.412-0.667C18.569,7.825,18.535,7.729,18.356,7.729z\"/>\n</g>\n";
});



define('routes',["require", "exports", "./routes-icons"], function (require, exports, routes_icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            route: ["", "home"],
            name: "home",
            moduleId: "home",
            nav: true,
            title: "Home",
            settings: { icon: routes_icons_1.homeIcon }
        },
        {
            route: "guides/content/:author?/:book?",
            name: "guides",
            moduleId: "guides/guides",
            nav: true,
            title: "Guides",
            settings: { icon: routes_icons_1.guidesIcon },
            href: "#guides/content/"
        },
        {
            route: "blog",
            name: "blog",
            moduleId: "blog/blog",
            nav: true,
            title: "Blog",
            settings: { icon: routes_icons_1.blogIcon }
        },
        {
            route: "survey",
            name: "survey",
            moduleId: "survey/survey",
            nav: true,
            title: "Survey",
            settings: { icon: routes_icons_1.surveyIcon }
        },
        {
            route: "help",
            name: "help",
            moduleId: "help/help",
            nav: true,
            title: "Help",
            settings: { icon: routes_icons_1.helpIcon }
        }
    ];
    exports.default = routes;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('blog/blog',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Blog = (function () {
        function Blog(router) {
            this.router = router;
        }
        Blog = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], Blog);
        return Blog;
    }());
    exports.Blog = Blog;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('guides/guide-bar',["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1, aurelia_framework_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuideBar = (function () {
        function GuideBar() {
        }
        __decorate([
            aurelia_framework_2.bindable,
            __metadata("design:type", Object)
        ], GuideBar.prototype, "guides", void 0);
        GuideBar = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router)
        ], GuideBar);
        return GuideBar;
    }());
    exports.GuideBar = GuideBar;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('guides/guide-content',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuideContent = (function () {
        function GuideContent() {
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], GuideContent.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], GuideContent.prototype, "overview", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GuideContent.prototype, "categories", void 0);
        return GuideContent;
    }());
    exports.GuideContent = GuideContent;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('guides/guides',["require", "exports", "aurelia-framework", "text!assets/site-map.json"], function (require, exports, aurelia_framework_1, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Guides = (function () {
        function Guides() {
            this.dataSource = JSON.parse(data);
        }
        Guides.prototype.IframeUrl = function (param) {
            return "/#/guides/content/" + param.author + "/" + param.book;
        };
        Guides.prototype.activate = function (params) {
            if (params.author) {
                this.urlBook = "https://" + params.author + ".gitbooks.io/" + params.book + "/content/";
            }
            else {
                this.urlBook = "";
            }
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], Guides.prototype, "urlBook", void 0);
        return Guides;
    }());
    exports.Guides = Guides;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('help/help',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Help = (function () {
        function Help(router) {
            this.router = router;
        }
        Help = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], Help);
        return Help;
    }());
    exports.Help = Help;
});



define('home/text1',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text = "\nKURAC ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
    exports.default = text;
});



define('home/text2',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text = "\nMauris a augue id tellus fermentum efficitur. Etiam semper ex at eros rutrum, eget facilisis eros tempor. Curabitur id sollicitudin purus. Donec ornare, turpis a hendrerit pulvinar, purus risus tincidunt dui, ac accumsan ante lectus ut urna. In eget purus risus. Sed suscipit, nisi convallis vestibulum pharetra, sem velit euismod metus, sit amet ornare neque turpis in nisi. Morbi hendrerit porta leo, volutpat consequat orci elementum ac. Aenean pellentesque mollis tortor quis iaculis. Vestibulum interdum lacinia dui, id faucibus enim aliquet id.\n";
    exports.default = text;
});



define('home/text3',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text = "\nDonec pellentesque semper nulla, quis iaculis ante viverra id. Etiam venenatis blandit tincidunt. Nunc egestas vel turpis vitae tristique. Nullam at porta augue, et semper neque. Vivamus elementum volutpat diam. Maecenas elementum risus lectus. Fusce lectus ligula, elementum ut lorem nec, lacinia imperdiet enim. Quisque rutrum luctus leo, id sagittis mi. Nullam bibendum libero in turpis condimentum volutpat. Praesent euismod dapibus nisl, et imperdiet nulla accumsan in. Suspendisse consequat tempus euismod. Etiam vitae nisl lobortis, aliquet augue nec, luctus nunc. Morbi quis rutrum justo. Fusce velit sem, tristique vitae quam et, facilisis consectetur orci. Nam convallis leo at justo egestas, eget laoreet mi cursus.\n";
    exports.default = text;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './elements/blog-container',
            './elements/guides-container'
        ]);
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('survey/survey',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Survey = (function () {
        function Survey(router) {
            this.router = router;
        }
        Survey = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], Survey);
        return Survey;
    }());
    exports.Survey = Survey;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/blog-container',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogContainer = (function () {
        function BlogContainer(router) {
            this.router = router;
        }
        BlogContainer = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], BlogContainer);
        return BlogContainer;
    }());
    exports.BlogContainer = BlogContainer;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/guides-container',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuidesContainer = (function () {
        function GuidesContainer(router) {
            this.router = router;
        }
        GuidesContainer.prototype.activate = function (params, routeConfig, navigationInstruction) {
            this.content = params;
        };
        GuidesContainer = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], GuidesContainer);
        return GuidesContainer;
    }());
    exports.GuidesContainer = GuidesContainer;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/survey-container',["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SurveyContainer = (function () {
        function SurveyContainer(router) {
            this.router = router;
        }
        SurveyContainer = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], SurveyContainer);
        return SurveyContainer;
    }());
    exports.SurveyContainer = SurveyContainer;
});



define('resources/services/gitbook',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GitBookClient = (function () {
        function GitBookClient() {
            this.httpClient.configure(function (config) {
                config
                    .withBaseUrl("https://api.gitbook.com/")
                    .withDefaults({
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "Fetch"
                    }
                })
                    .withInterceptor({
                    request: function (request) {
                        console.log("Requesting " + request.method + " " + request.url);
                        return request;
                    },
                    response: function (response) {
                        console.log("Received " + response.status + " " + response.url);
                        return response;
                    }
                });
            });
        }
        GitBookClient.prototype.contents = function (author, book, path) {
            var uri = author + "/" + book + "/" + path;
            this.httpClient
                .fetch(uri)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log(data.description);
            });
        };
        return GitBookClient;
    }());
    exports.GitBookClient = GitBookClient;
});



define('text!assets/home.json',[],function () { return '{\n  "contexts": ["content1", "content2", "content3"],\n  "content2": {\n    "text": "This application - AUCS website should be considered as the \'aggregator and a transient station\' between the Aurelia Community and Aurelia core team headed by @EisenbergEffect, meaning that it offers a data buffer content of which could be asynchronously moved to Aurelia proper website.To further facilitate this, all of our data is formatted as markdown files - AUCS website just provides structured interface to this data.",\n    "class": "context2"\n  },\n  "content1": {\n    "text":\n      "Mauris a augue id tellus fermentum efficitur. Etiam semper ex at eros rutrum, eget facilisis eros tempor. Curabitur id sollicitudin purus. Donec ornare, turpis a hendrerit pulvinar, purus risus tincidunt dui, ac accumsan ante lectus ut urna. In eget purus risus. Sed suscipit, nisi convallis vestibulum pharetra, sem velit euismod metus, sit amet ornare neque turpis in nisi. Morbi hendrerit porta leo, volutpat consequat orci elementum ac. Aenean pellentesque mollis tortor quis iaculis. Vestibulum interdum lacinia dui, id faucibus enim aliquet id.",\n    "class": "context1"\n  },\n  "content3": {\n    "text":\n      "Donec pellentesque semper nulla, quis iaculis ante viverra id. Etiam venenatis blandit tincidunt. Nunc egestas vel turpis vitae tristique. Nullam at porta augue, et semper neque. Vivamus elementum volutpat diam. Maecenas elementum risus lectus. Fusce lectus ligula, elementum ut lorem nec, lacinia imperdiet enim. Quisque rutrum luctus leo, id sagittis mi. Nullam bibendum libero in turpis condimentum volutpat. Praesent euismod dapibus nisl, et imperdiet nulla accumsan in. Suspendisse consequat tempus euismod. Etiam vitae nisl lobortis, aliquet augue nec, luctus nunc. Morbi quis rutrum justo. Fusce velit sem, tristique vitae quam et, facilisis consectetur orci. Nam convallis leo at justo egestas, eget laoreet mi cursus.",\n    "class": "context3"\n  }\n}';});

define('text!assets/site-map.json',[],function () { return '{\n  "version": 1.0,\n  "title": "Guides",\n  "overview":\n    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n  "groups": [\n    {\n      "title": "How to create aucs guide with gitbook",\n      "overview":\n        "This file file serves as your book\'s preface, a great place to describe your book\'s content and ideas.",\n      "author": "aurelia-community",\n      "book": "how-to-create-aucs-guide-with-gitbook"\n    },\n    {\n      "title": "Aurelia CLI guides",\n      "overview":\n        "Aurelia CLI is a desktop tool using the command line interface (yes, that thing from the anciant past that recently became omnipresent) to build a setup that Aurelia supports out-of-the-box.",\n      "book": "aurelia-cli",\n      "author": "adriatic"\n    },\n    {\n      "title": "Aurelia Typescript Adventures",\n      "overview":\n        "This book is my attempt to collect all relevant information needed to establish the current state of the art of development of Aurelia applications using Typescript and Visual studio code.",\n      "book": "aurelia-typescript-adventures",\n      "author": "aurelia-tools"\n    }\n  ],\n  "guides": [\n    {\n      "index": 0,\n      "title": "How to create aucs guide with gitbook",\n      "author": "aurelia-community",\n      "book": "how-to-create-aucs-guide-with-gitbook"\n    },\n    {\n      "index": 1,\n      "title": "Aurelia CLI guides",\n      "book": "aurelia-cli",\n      "author": "adriatic"\n    },\n    {\n      "index": 2,\n      "title": "Aurelia Typescript Adventures",\n      "book": "aurelia-typescript-adventures",\n      "author": "aurelia-tools"\n    }\n  ]\n}\n';});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=nav-bar></require><require from=footer></require><div class=main-layout><nav-bar router.bind=router style=\"transition:all .3s;transform:translate(0,0)\"></nav-bar><div class=page-host><router-view></router-view><footer class=content-footer id=app-footer></footer></div></div></template>"; });
define('text!footer.html', ['module'], function(module) { module.exports = "<template><p class=copyright>Copyright © 2018 - Aurelia Community Space. All rights reserved.</p></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><section class=home-screen><div class=container-fluid><div class=row><div class=\"col-md-4 col-sm-4\" repeat.for=\"context of model.contexts\"><div class=\"card ${model[context].class}\"> ${model[context].text} </div></div></div></div></section></template>"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=router><nav class=nav><ul><template repeat.for=\"nav of router.navigation\"><li class=\"${nav.isActive ? 'active' : ''}\"><a href.bind=nav.href><svg version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px width=32px height=32px viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=preserve innerhtml.bind=nav.settings.icon></svg><div class=label>${nav.title}</div></a></li></template></ul></nav></template>"; });
define('text!blog/blog.html', ['module'], function(module) { module.exports = "<template><blog-container></blog-container></template>"; });
define('text!guides/guide-bar.html', ['module'], function(module) { module.exports = "<template><ul><li repeat.for=\"guide of guides\"><a class=nav-link href.bind=\"'/#/guides/content/' + guide.author + '/' + guide.book + '/' + guide.path\"> ${guide.title} </a></li></ul></template>"; });
define('text!guides/guide-content.html', ['module'], function(module) { module.exports = "<template><section class=article-group-root><div class=\"carousel slide\"><div class=carousel-inner role=listbox><div class=carousel-item><h2>${title}</h2><p>${overview}</p><a href=\"\">Learn More ￫</a></div></div><a class=carousel-control-prev role=button><span class=carousel-control-prev-icon aria-hidden=true></span></a><a class=carousel-control-next role=button><span class=carousel-control-next-icon aria-hidden=true></span></a></div><div class=groups repeat.for=\"group of groups\"><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>3 Guides</p><h2 class=group-name>Overview</h2></div><p class=group-description>Discover what Aurelia is along with its business and technical advantages.</p><a class=group-learn href=docs/overview>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/overview/what-is-aurelia>What is Aurelia?</a></li><li class=item><a class=item-link href=docs/overview/technical-benefits>Technical Benefits</a></li><li class=item><a class=item-link href=docs/overview/business-advantages>Business Advantages</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>2 Guides</p><h2 class=group-name>Tutorials</h2></div><p class=group-description>Step-by-step tutorials teaching you how to build your first Aurelia applications.</p><a class=group-learn href=docs/tutorials>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/tutorials/creating-a-todo-app>Creating a Todo App</a></li><li class=item><a class=item-link href=docs/tutorials/creating-a-contact-manager>Creating a Contact Manager</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>5 Guides</p><h2 class=group-name>Fundamentals</h2></div><p class=group-description>After you've completed the quick starts, learn more about Aurelia's app model, components, dependency injection and more.</p><a class=group-learn href=docs/fundamentals>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/fundamentals/app-configuration-and-startup>App Config and Startup</a></li><li class=item><a class=item-link href=docs/fundamentals/components>Creating Components</a></li><li class=item><a class=item-link href=docs/fundamentals/dependency-injection>Dependency Injection</a></li><li class=item><a class=item-link href=docs/fundamentals/security>Securing Your App</a></li><li class=item><a class=item-link href=docs/fundamentals/cheat-sheet>Cheat Sheet</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>11 Guides</p><h2 class=group-name>Binding</h2></div><p class=group-description>Learn all about Aurelia's powerful data-binding engine.</p><a class=group-learn href=docs/binding>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/binding/basics>Binding Basics</a></li><li class=item><a class=item-link href=docs/binding/class-and-style>Class and Style</a></li><li class=item><a class=item-link href=docs/binding/checkboxes>Binding Checkboxes</a></li><li class=item><a class=item-link href=docs/binding/radios>Binding Radios</a></li><li class=item><a class=item-link href=docs/binding/selects>Binding Selects</a></li><li class=item><a class=item-link href=docs/binding/delegate-vs-trigger>Delegate vs. Trigger</a></li><li class=item><a class=item-link href=docs/binding/computed-properties>Computed Properties</a></li><li class=item><a class=item-link href=docs/binding/value-converters>Value Converters</a></li><li class=item><a class=item-link href=docs/binding/binding-behaviors>Binding Behaviors</a></li><li class=item><a class=item-link href=docs/binding/binding-observable-properties>Observable Properties</a></li><li class=item><a class=item-link href=docs/binding/how-it-works>How it Works</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>6 Guides</p><h2 class=group-name>Templating</h2></div><p class=group-description>Learn all about Aurelia's powerful templating engine.</p><a class=group-learn href=docs/templating>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/templating/basics>Templating Basics</a></li><li class=item><a class=item-link href=docs/templating/html-behaviors-introduction>HTML Behaviors</a></li><li class=item><a class=item-link href=docs/templating/custom-attributes>Custom Attributes</a></li><li class=item><a class=item-link href=docs/templating/custom-elements>Custom Elements</a></li><li class=item><a class=item-link href=docs/templating/content-projection>Content Projection</a></li><li class=item><a class=item-link href=docs/templating/dynamic-ui-composition>Dynamic UI Composition</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>1 Guides</p><h2 class=group-name>Routing</h2></div><p class=group-description>Learn how to setup and configure Aurelia's router.</p><a class=group-learn href=docs/routing>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/routing/configuration>Router Configuration</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>4 Guides</p><h2 class=group-name>Plugins</h2></div><p class=group-description>Learn about Aurelia's officially supported plugins and how to use them.</p><a class=group-learn href=docs/plugins>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/plugins/http-services>HTTP</a></li><li class=item><a class=item-link href=docs/plugins/validation>Validation</a></li><li class=item><a class=item-link href=docs/plugins/i18n>I18N</a></li><li class=item><a class=item-link href=docs/plugins/dialog>Dialog</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>1 Guides</p><h2 class=group-name>Integration</h2></div><p class=group-description>Learn how to integrate Aurelia with various other libraries and frameworks.</p><a class=group-learn href=docs/integration>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/integration/polymer>Integrating with Polymer</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>2 Guides</p><h2 class=group-name>Testing</h2></div><p class=group-description>Learn all about testing Aurelia apps, including component testing and e2e testing.</p><a class=group-learn href=docs/testing>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/testing/components>Testing Components</a></li><li class=item><a class=item-link href=docs/testing/end-to-end>End-to-End Testing</a></li></ul></div></div><div class=group><div class=group-summary><div class=group-header><p class=group-item-count>5 Guides</p><h2 class=group-name>Build Systems</h2></div><p class=group-description>Learn about the various build setups that Aurelia supports out-of-the-box.</p><a class=group-learn href=docs/build-systems>Learn More ￫</a></div><div class=group-details><ul class=group-items><li class=item><a class=item-link href=docs/build-systems/aurelia-cli>The Aurelia CLI</a></li><li class=item><a class=item-link href=docs/build-systems/webpack/setup>Webpack Setup</a></li><li class=item><a class=item-link href=docs/build-systems/webpack/bundling>Webpack Bundling</a></li><li class=item><a class=item-link href=docs/build-systems/jspm/setup>JSPM Setup</a></li><li class=item><a class=item-link href=docs/build-systems/jspm/bundling>JSPM Bundling</a></li></ul></div></div></div></section></template>"; });
define('text!guides/guides.html', ['module'], function(module) { module.exports = "<template><section show.bind=\"urlBook == ''\" class=guides><div class=side-bar-guides><div class=nav-button><a href=#guides/content/ >Guides</a></div><ul><li repeat.for=\"guide of dataSource.guides\"><a href=\"/#/guides/content/${guide.author}/${guide.book}\"> ${guide.title} </a></li></ul></div><div class=content><div class=\"carousel slide\"><div class=carousel-inner role=listbox><div class=carousel-item><h2>${dataSource.title}</h2><p>${dataSource.overview}</p></div></div></div><div class=groups><div class=group repeat.for=\"group of dataSource.groups\"><div class=group-summary><div class=group-header><h2 class=group-name>${group.title}</h2></div><p class=group-description>${group.overview}</p><a class=group-learn href=\"/#/guides/content/${group.author}/${group.book}\">Learn More ￫</a></div></div></div></div></section><section show.bind=\"urlBook != ''\" class=iframe><iframe src.bind=urlBook frameborder=0 width=100% height=100% allowfullscreen></iframe></section></template>"; });
define('text!help/help.html', ['module'], function(module) { module.exports = "<template><section class=help>todo</section></template>"; });
define('text!survey/survey.html', ['module'], function(module) { module.exports = "<template><survey-container></survey-container></template>"; });
define('text!resources/elements/blog-container.html', ['module'], function(module) { module.exports = "<template><section class=blog><iframe src=http://104.236.54.170/ width=100% height=100% style=margin:0;padding:0;border:0></iframe></section></template>"; });
define('text!resources/elements/guides-container.html', ['module'], function(module) { module.exports = "<template><div innerhtml.bind=content></div></template>"; });
define('text!resources/elements/survey-container.html', ['module'], function(module) { module.exports = "<template><section class=survey><iframe src=https://aucs-survey.netlify.com/ width=100% height=100% style=margin:0;padding:0;border:0></iframe></section></template>"; });
//# sourceMappingURL=app-bundle.js.map