"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Hero = function () {
    return (react_1["default"].createElement("div", { className: 'flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0' },
        react_1["default"].createElement("div", { className: 'px-10 space-y-5' },
            react_1["default"].createElement("h1", { className: 'text-6xl max-w-xl font-serif' },
                react_1["default"].createElement("span", { className: 'underline decoration-black decoration-w-4 hover:bg-green-600' }, "Medium"),
                " ",
                "is a place to write, read, and connect."),
            react_1["default"].createElement("h2", { className: '' }, "It's easy and free to post your thinking on any topic and connect with millions of readers.")),
        react_1["default"].createElement("img", { className: 'hidden md:inline-flex h-32 lg:h-full', src: 'https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png' })));
};
exports["default"] = Hero;
