"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styles = __importStar(require("css"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("theme");
function Text(_a) {
    var content = _a.content, overrideCss = _a.overrideCss, _b = _a.styleTheme, styleTheme = _b === void 0 ? 'bodyNormal' : _b, _c = _a.useRem, useRem = _c === void 0 ? true : _c;
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(StyledText, __assign({ styleTheme: styleTheme, useRem: useRem, style: overrideCss }, { children: content })) })));
}
var StyledText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var styleTheme = _a.styleTheme;
    return {
        headerBold: styles.HeaderBold,
        headerNormal: styles.headerNormal,
        headerLighter: styles.headerLighter,
        bodyBold: styles.bodyBold,
        bodyNormal: styles.bodyNormal,
        bodyLighter: styles.bodyLighter,
    }[styleTheme];
});
exports.default = Text;
var templateObject_1;
