import AppLoader from './appLoader';
import {ILoaderCallback, IDrawNews, IDrawSources} from '../../types/index';

class AppController extends AppLoader {
	getSources(callback: ILoaderCallback<IDrawSources>):void {                      
		super.getResp({ endpoint: 'sources'}, callback);       
	  }

	  getNews(e: Event, callback: ILoaderCallback<IDrawNews> ): void {   
      
		let target = e.target as HTMLElement;
		const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
