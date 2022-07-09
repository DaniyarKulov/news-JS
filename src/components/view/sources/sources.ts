import './sources.css';
import {ISources} from '../../../types/index'

class Sources {
  draw(data: ISources[]) {        
      
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {            
        
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      const sourseItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      sourseItemName.textContent = item.name;

      const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sourceBtns = document.querySelector('.sources') as HTMLElement;
    sourceBtns.append(fragment);
  }
}

export default Sources;