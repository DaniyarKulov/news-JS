import {Methods, IOptions, ILoaderCallback} from '../../types/index';

class Loader {    


  constructor(public baseLink: string, public options: IOptions) {}

  getResp(
    { endpoint = '' as string, options = {} as IOptions },
    callback = (): void => {
    console.error('No callback for GET response');
    }
  ): void {                         
    this.load(Methods.GET, endpoint, callback, options);
  }
  errorHandler(res: Response) {        
      
    if (!res.ok) {
        if (res.status === 401 || res.status === 404)
            console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
    }         
    return res;
  }

  makeUrl(options: IOptions, endpoint: string): string {                       
      
    const urlOptions: { [index: string]: string } = { ...this.options, ...options };            
       
    let url = `${this.baseLink}${endpoint}?`;
    Object.keys(urlOptions).forEach((key) => {      
        
      url += `${key}=${urlOptions[key]}&`;
    });
    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: ILoaderCallback<JSON>, options = {}): void {
          
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));                 
  }
}

export default Loader;
