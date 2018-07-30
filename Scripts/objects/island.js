var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // constructors
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Island.prototype._checkBounds = function () {
            // check the bottom boundary
            // if(this.x <= (config.Screen.WIDTH + this.width)) {
            if (this.x <= (this.width)) {
                this.Reset();
            }
        };
        // public methods
        Island.prototype.Start = function () {
            this._verticalSpeed = 5; // the island will move down 5ppf
            this.Reset();
        };
        Island.prototype.Update = function () {
            this.x += this._verticalSpeed;
            this._checkBounds();
        };
        Island.prototype.Reset = function () {
            this.y = Math.floor(Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth;
            this.x = -this.height;
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map