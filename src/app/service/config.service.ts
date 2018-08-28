import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


export interface Recipe {
    name: string;
    steps: any;
    ing: any;
}

export interface MetaData {
  max_results: number;
  total: number;
  page: number;
}

export interface RecipeList {
  _items: [Recipe];
  _meta: MetaData;
  _links: any;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  configUrl = 'http://127.0.0.1:5000';
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  });

  getRecipe(id: string) {
    return this.http.get<Recipe>(`${this.configUrl}/recipe/${id}`, { headers: this.headers });
  }

  getRecipeList(page: number, pageSize: number) {
    return this.http.get<RecipeList>(`${this.configUrl}/recipe`, { headers: this.headers });
  }

  constructor(private http: HttpClient) { }
}
