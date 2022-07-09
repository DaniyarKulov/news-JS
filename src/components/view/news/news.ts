import './news.css';
import {INews} from '../../../types/index';

class News {
  draw(data: INews[]): void {
        
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

      const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
      if (idx % 2) newsItem.classList.add('alt');

      const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      newsMetaPhoto.style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
      newsMetaAuthor.textContent = item.author || item.source.name;
      const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
      newsMetaDate.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
      newsDescriptionTitle.textContent = item.title;
      const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
      newsDescriptionSource.textContent = item.source.name;
      const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
      newsDescriptionContent.textContent = item.description;
      const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
      newsReadMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsEl = document.querySelector('.news') as HTMLElement;
    newsEl.innerHTML = '';
    newsEl.appendChild(fragment);
  }
}

export default News;
