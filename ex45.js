var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var car_object = function (manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    Object.entries(args).map(function (_a) {
        var key = _a[0], value = _a[1];
        car = __assign(__assign({}, car), value);
    });
    return car;
};
console.log(car_object("Hyundai", "Electra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
