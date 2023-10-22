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
const fs = require("node:fs/promises");
const filePath = "/Users/Gaby/Documents/Course/Sprint3/test-files/text.txt";
function read() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let file = yield fs.readFile(filePath, "utf8");
            let formattedFile = file.split("\n").length - 1;
            console.log(formattedFile);
            return formattedFile;
        }
        catch (err) {
            throw err;
        }
    });
}
let promisedFn = read();
module.exports = { promisedFn };
