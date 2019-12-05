"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WarframeItems = require("warframe-items");
class Items {
    static getFirstItem() {
        const items = new WarframeItems({
            category: ['Primary']
        });
        return items[0].name;
    }
}
exports.default = Items;
