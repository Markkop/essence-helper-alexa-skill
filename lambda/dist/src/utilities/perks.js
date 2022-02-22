"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndefiniteArticleForPerkType = exports.getPerk = void 0;
const perks_json_1 = __importDefault(require("../../data/perks.json"));
function getPerk(name) {
    return perks_json_1.default.find(perk => perk.name.toLowerCase() === name.toLowerCase());
}
exports.getPerk = getPerk;
function getIndefiniteArticleForPerkType(perkType) {
    if (perkType === 'active')
        return 'an';
    return 'a';
}
exports.getIndefiniteArticleForPerkType = getIndefiniteArticleForPerkType;
//# sourceMappingURL=perks.js.map