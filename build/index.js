"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (params) => new Promise((resolve, reject) => {
    const source = params.source;
    const destination = params.destination;
    const sourceFile = fs_1.createReadStream(source);
    const destinationFile = fs_1.createWriteStream(destination);
    const copyFile = sourceFile
        .pipe(destinationFile)
        .on('finish', resolve)
        .on('error', reject);
});
//# sourceMappingURL=index.js.map