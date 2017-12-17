"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const vamtiger_create_file_1 = require("vamtiger-create-file");
const __1 = require("../..");
const source = path_1.resolve(__dirname, 'source.txt');
const destinationFileName = 'destination.txt';
const destination = path_1.resolve(__dirname, destinationFileName);
describe('vamtiger-copy-file should', function () {
    it('Copy a file from a defined source to destination path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const createSourceFile = vamtiger_create_file_1.default(source, `Some data for source file: ${new Date()}`);
            const copy = yield __1.default({
                source,
                destination
            });
            const directoryContent = yield vamtiger_get_directory_content_1.default(__dirname);
            chai_1.expect(directoryContent.includes(destinationFileName)).to.be.true;
        });
    });
});
//# sourceMappingURL=index.spec.js.map