/// <reference types="node" />
import { PathLike } from 'fs';
declare const _default: (params: Params) => Promise<{}>;
export default _default;
export interface Params {
    source: PathLike;
    destination: PathLike;
}
