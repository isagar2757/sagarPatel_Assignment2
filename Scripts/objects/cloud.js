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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // constructors
        function Cloud() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Cloud.prototype._checkBounds = function () {
            // check the bottom boundary
            // if(this.y >= (config.Screen.HEIGHT + this.height)) {
            //     this.Reset();
            // }
            if (this.x <= (0)) {
                this.Start();
            }
        };
        // public methods
        Cloud.prototype.Start = function () {
            this.x = config.Screen.WIDTH;
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            // this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Cloud.prototype.Reset = function () {
            // this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizontalSpeed = Math.floor(Math.random() * 5) + 2;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight;
            // this.x -= this.width;
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map