import Loader from './loader';

interface Api{
	url: string,
	key: string
	}



class AppLoader extends Loader {

	constructor(  baseLink: string,   options: string) {
		super(  baseLink, options)
		super('https://newsapi.org/v2/', {
			apiKey: '3d29c3459ba04f27bfea786d6f2a065f',
		});
	}
}

export default AppLoader;
