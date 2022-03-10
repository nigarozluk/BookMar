import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BookDetail } from './book-detail.model';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  constructor(private http:HttpClient){}
  readonly baseUrl='http://localhost:51335/api/Book'
  formData:BookDetail=new BookDetail();
  list: BookDetail[];

  postBookDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }

  putBookDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  deleteBookDetail(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as BookDetail[]);
  }
}
