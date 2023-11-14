import url from 'url';
import { dirname } from 'path';
/**
 * Retrives current file or path info or others path related functionalities
 *
 * @param importMetaURL string: import.meta.url | path_url
 * @returns
 */
export const pathUtil = (importMetaURL) => ({
    get __filename() {
        return url.fileURLToPath(importMetaURL);
    },
    get __dirname() {
        return dirname(this.__filename);
    }
});
