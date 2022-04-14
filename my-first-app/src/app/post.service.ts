import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IPost } from "./post.model";

@Injectable({
  providedIn: "root"
})
export class PostService {
  fetchNeeded = new Subject<void>();
  error = new Subject<HttpErrorResponse>();
  baseUrl:string='https://angular-2037c-default-rtdb.asia-southeast1.firebasedatabase.app';
  constructor(private http:HttpClient) {}

  createPost(title:string,content:string){
    let postData = {title,content};
    this.http.post<Omit<IPost,'id'>>(`${this.baseUrl}/posts.json`,postData,{headers:{'Content-Type':'application/json'}}).subscribe(responseData => {
      this.fetchNeeded.next();
    }, error => this.error.next(error) )
  }

  fetchPosts(){
   return this.http.get<{[key:string] : IPost}>(`${this.baseUrl}/posts.json`)
    .pipe(map((responseData) => {
        const posts:IPost[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            posts.push({...responseData[key],id:key});
          }
        }
        return posts
    }),catchError((err)=>{
      err.message = 'Cannot Fetch data From Database!'
     return throwError(err)
    })
    )

  }

  clearPosts(){
   return this.http.delete(`${this.baseUrl}/posts.json`)
  }

  onDelete(id:string){

  return this.http.delete(`${this.baseUrl}/posts/${id}.json`)
  }
}
