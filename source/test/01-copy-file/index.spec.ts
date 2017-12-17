import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getDirectoryContent from 'vamtiger-get-directory-content';
import bash from 'vamtiger-bash';
import createFile from 'vamtiger-create-file';
import copyFile from '../..';
import { createSecureContext } from 'tls';

const source = resolvePath(
    __dirname,
    'source.txt'
);
const destinationFileName = 'destination.txt';
const destination = resolvePath(
    __dirname,
    destinationFileName
);

describe('vamtiger-copy-file should', function () {
    it('Copy a file from a defined source to destination path', async function () {
        const createSourceFile = createFile(source, `Some data for source file: ${new Date()}`);
        const copy = await copyFile({
            source,
            destination
        });
        const directoryContent = await getDirectoryContent(__dirname);

        expect(directoryContent.includes(destinationFileName)).to.be.true;
    })
})