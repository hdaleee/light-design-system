"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyLighter = exports.bodyNormal = exports.bodyBold = exports.headerLighter = exports.headerNormal = exports.HeaderBold = void 0;
var styled_components_1 = require("styled-components");
exports.HeaderBold = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: bold;\n"], ["\n  font-size: ", ";\n  font-weight: bold;\n"])), function (_a) {
    var useRem = _a.useRem, theme = _a.theme;
    return (useRem ? theme.spacing.H : theme.spacing.h);
});
exports.headerNormal = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: normal;\n"], ["\n  font-size: ", ";\n  font-weight: normal;\n"])), function (_a) {
    var useRem = _a.useRem;
    return (useRem ? '2rem' : '32px');
});
exports.headerLighter = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: lighter;\n"], ["\n  font-size: ", ";\n  font-weight: lighter;\n"])), function (_a) {
    var useRem = _a.useRem;
    return (useRem ? '2rem' : '32px');
});
exports.bodyBold = (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: bold;\n"], ["\n  font-size: ", ";\n  font-weight: bold;\n"])), function (_a) {
    var useRem = _a.useRem;
    return (useRem ? '1rem' : '16px');
});
exports.bodyNormal = (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: normal;\n"], ["\n  font-size: ", ";\n  font-weight: normal;\n"])), function (_a) {
    var useRem = _a.useRem;
    return (useRem ? '1rem' : '16px');
});
exports.bodyLighter = (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: lighter;\n"], ["\n  font-size: ", ";\n  font-weight: lighter;\n"])), function (_a) {
    var useRem = _a.useRem;
    return (useRem ? '1rem' : '16px');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
