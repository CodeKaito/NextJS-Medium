"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var index_1 = require("../components/index");
var head_1 = require("next/head");
var sanity_1 = require("../../sanity");
var link_1 = require("next/link");
function Home(_a) {
    var posts = _a.posts;
    return (React.createElement("div", { className: 'max-w-7xl mx-auto' },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Medium Blog"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("main", { className: 'max-w-7xl mx-auto' },
            React.createElement(index_1.Header, null),
            React.createElement(index_1.Hero, null),
            React.createElement("div", { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6' }, posts.map(function (post) { return (React.createElement(link_1["default"], { key: post._id, href: "/post/" + post.slug.current },
                React.createElement("div", { className: 'group cursor-pointer border rounded-lg overflow-hidden' },
                    post.mainImage && (React.createElement("img", { className: 'h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out', src: sanity_1.urlFor(post.mainImage).url(), alt: "" })),
                    React.createElement("div", { className: 'flex justify-between p-5 bg-white' },
                        React.createElement("div", null,
                            React.createElement("p", { className: 'text-lg font-bold' }, post.title),
                            React.createElement("p", { className: 'text-xs' },
                                post.description,
                                " (by ",
                                post.author.name,
                                ")")),
                        React.createElement("img", { className: 'h-12 w-12 rounded-full object-cover', src: sanity_1.urlFor(post.author.image).url(), alt: "" }))))); })))));
}
exports["default"] = Home;
exports.getServerSideProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = "*[_type == 'post'] {\n    _id,\n    title,\n    author -> {\n      name,\n      image,\n    },\n      description,\n      mainImage,\n      slug\n  }";
                return [4 /*yield*/, sanity_1.sanityClient.fetch(query)];
            case 1:
                posts = _a.sent();
                return [2 /*return*/, {
                        props: {
                            posts: posts
                        }
                    }];
        }
    });
}); };
