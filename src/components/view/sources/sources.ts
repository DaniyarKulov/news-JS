import './sources.css';

interface SourcesItem{
	name: string,
	id: string,
	
	}
	

class Sources {
    draw(data: SourcesItem[]):void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourcesItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement ;

			const itemName =  sourceClone.querySelector('.source__item-name') as HTMLElement;
			itemName.textContent = item.name;
       
			const itemId = sourceClone.querySelector('.source__item') as HTMLElement;
			itemId.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

		const sources =  document.querySelector('.sources') as HTMLElement;;
		sources.append(fragment);
    }
}

export default Sources;
