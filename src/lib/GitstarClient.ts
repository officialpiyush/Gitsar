import fetch, { Response } from "node-fetch";
import IOptions from "./interface/IOptions";

class GitstarClient {
    protected token: string | null;

    /**
     * @param  {IOptions} options
     * @param {options.token} token - The Github acess token
     */
    constructor(options: IOptions) {
        this.token = options.token || null;
    }

    /**
     * @param  {string} repo - The repository to list labels from (Should be in owner/repo format)
     * @returns {Promise<JSON>} - The JSON object retrieved from API.
     */
     public getlabels(repo: string): Promise<JSON> {
        return fetch(`https://api.github.com//repos/${repo}/labels`).then((r: Response) => r.json());
    }
}
