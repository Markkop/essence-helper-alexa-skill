"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemText = exports.getItem = void 0;
const cookingItems_json_1 = __importDefault(require("../../data/cookingItems.json"));
function getItem(name) {
    return cookingItems_json_1.default.find(item => item.title.toLowerCase() === name.toLowerCase());
}
exports.getItem = getItem;
function getItemText(item) {
    const locations = item.sources.join(', ');
    if (item.additionalText) {
        return item.additionalText.replace(/([0-9]+)/, '$1 Zen').concat(` ${locations}`);
    }
    return `${item.title} can be found in the following locations: ${locations}`;
}
exports.getItemText = getItemText;
//# sourceMappingURL=items.js.map