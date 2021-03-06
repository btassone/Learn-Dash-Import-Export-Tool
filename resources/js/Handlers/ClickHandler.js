var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClickHandler = (function (_super) {
    __extends(ClickHandler, _super);
    function ClickHandler(id, target, target_cb) {
        // Call parent class
        _super.call(this, id);
        // Set properties
        this.target = target;
        this.target_cb = target_cb;
    }
    // This is so we can register all the handlers at once. Also this separation allows for testing
    // Note: Can't be tested in jasmine (jQuery)
    ClickHandler.registerHandlers = function () {
        var jQueryClickHandlers = ClickHandler.getInstances(ClickHandler);
        jQueryClickHandlers.forEach(function (value) {
            value.target.on('click', value.target_cb);
        });
    };
    Object.defineProperty(ClickHandler.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickHandler.prototype, "target_cb", {
        get: function () {
            return this._target_cb;
        },
        set: function (value) {
            this._target_cb = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClickHandler;
}(BaseHandler));
