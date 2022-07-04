import './news.css';

interface NewsItem{
urlToImage: string,
author: string,
source: {
	name: string
}
publishedAt: string,
title: string,
description: string,
url: string
}


// interface INews{
// 	status: string,
// 	totalResults: number,
// 	articles: INewsItem[]
// }
// interface INewsItem{
// 	source:{
// 	id: string,
// 	name: string
// 	}
// 	author: string,
// 	title: string,
// 	description: string,
// 	url: string,
// 	urlToImage: string,
// 	publishedAt: string,
// 	content: string
// }

class News {
    draw (data: NewsItem[]): void{
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item:NewsItem, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement ;
            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt') ;
		const newsPhoto =    newsClone.querySelector('.news__meta-photo') as HTMLElement;
         newsPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg' 
            })`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt 
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

		 	const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
		 	descriptionTitle.textContent = item.title;

			const descriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            descriptionSource.textContent = item.source.name;

			const descriptionContent =  newsClone.querySelector('.news__description-content')as HTMLElement;
			descriptionContent.textContent = item.description;

			const reamMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            reamMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

		const newsHtml =   document.querySelector('.news') as HTMLElement;
		newsHtml.innerHTML = '';
        newsHtml.appendChild(fragment);
    }
}

export default News;
