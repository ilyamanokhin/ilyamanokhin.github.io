import { BaseApi } from 'src/app/bookkeeping/shared/core/base-api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }
    addCategory(category:Category): Observable<Category>{
        return this.post('categories', category);
    }
    getCategories():Observable<Category[]>{
        return this.get('categories')
    }
    updateCategory(category): Observable<Category>{
        return this.put(`categories/${category.id}`, category)
    }
    getCategoryById(id: number): Observable<Category> {
        return this.get(`categories/${id}`);
    }
}