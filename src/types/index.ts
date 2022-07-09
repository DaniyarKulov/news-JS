export interface ISources {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
  }
  interface ISource {
	id: boolean;
	name: string;
  }
  export interface INews {
	source: ISource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;    
  }
  
  export interface IDrawNews {
	status: string;
	totalResults: number;
	articles: INews[];
  }
  export interface IDrawSources {
	status?: string;    
	sources: ISources[];
  }
  export interface ILoaderCallback<T>{    
	(data?: T): void;
  }
  
  export enum Methods {
	GET = 'GET',
	POST ='POST',
  }
  export interface IOptions { 
	[index: string]: string;   
  }
  export const API_KEY = '62ae49ecdc1c4964ab1b7b617d830399';
  
  