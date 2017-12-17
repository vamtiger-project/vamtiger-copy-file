import { createReadStream, createWriteStream, PathLike } from 'fs';

export default (params: Params) => new Promise((resolve, reject) => {
    const source = params.source;
    const destination = params.destination;
    const sourceFile = createReadStream(source);
    const destinationFile = createWriteStream(destination);
    const copyFile = sourceFile
        .pipe(destinationFile)
        .on('finish', resolve)
        .on('error', reject);
});

export interface Params {
    source: PathLike;
    destination: PathLike;
}