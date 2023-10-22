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
Object.defineProperty(exports, "__esModule", { value: true });
let fs = require("node:fs/promises");
let finalList = [];
function read() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let list = yield fs.readdir(process.argv[2]);
            for (let i = 0; i < list.length; i++) {
                if (list[i].includes("." + process.argv[3])) {
                    finalList.push(list[i]);
                }
            }
            console.log(finalList.join("\n"));
            return finalList;
        }
        catch (err) {
            console.log(err);
        }
    });
}
let promisedArray = read();
module.exports = { promisedArray };
