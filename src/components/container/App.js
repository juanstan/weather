var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Router } from '@reach/router';
import { Results } from './Results';
import { Details } from './Details';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*handleTitleClick() {
        alert('you clicked the title');
    }*/
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Adopt me!"),
            React.createElement(Router, null,
                React.createElement(Results, { path: "/" }),
                React.createElement(Details, { path: "/details/:id" }))));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map