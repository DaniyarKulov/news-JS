import Loader from './loader';


class AppLoader extends Loader {

	constructor( ) {
		super( 'https://newsapi.org/v2/', {
			apiKey: '3d29c3459ba04f27bfea786d6f2a065f',
		});
	}
}

export default AppLoader;
