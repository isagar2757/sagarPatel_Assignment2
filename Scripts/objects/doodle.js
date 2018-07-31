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
    var Doodle = /** @class */ (function (_super) {
        __extends(Doodle, _super);
        // member variables
        // constructors
        function Doodle() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Doodle.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Doodle.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Doodle.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Doodle.prototype.Reset = function () {
        };
        return Doodle;
    }(objects.GameObject));
    objects.Doodle = Doodle;
})(objects || (objects = {}));
//# sourceMappingURL=doodle.js.map