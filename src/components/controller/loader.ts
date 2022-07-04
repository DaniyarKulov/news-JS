type Callback = () => void;

type UrlOptions = {
[param: string]: string
}
class Loader {
    constructor(public  baseLink: string, public  options: {apiKey:string} ) {
    }

    getResp(
        { endpoint, options = {
			apiKey: ""
		} }: {endpoint: string, options?: {apiKey:string} | UrlOptions;},
        callback: Callback = ():void =>{
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: {apiKey: string}| UrlOptions, endpoint: string) {
        const urlOptions:UrlOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: { (): void; (arg0: string): void; }, options: {apiKey:string}| UrlOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
