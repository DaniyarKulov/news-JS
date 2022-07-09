import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {IDrawSources, IDrawNews} from '../../types/index';

class App {    
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start():void {
    const sources = document.querySelector('.sources') as HTMLElement;        
    sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as IDrawNews)));
    this.controller.getSources((data) => this.view.drawSources(data as IDrawSources));               
  }
}

export default App;
