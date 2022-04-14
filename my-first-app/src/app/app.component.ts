import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPost } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postFormTemp;
  loadedPosts:IPost[]=[];
  isLoading = false;
  subscription:Subscription;
  errorSubs:Subscription;
  fetchSubs:Subscription;
  error:HttpErrorResponse;
  constructor( private postService:PostService){

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.errorSubs = this.postService.error.subscribe((error)=>{
      this.isLoading = false;
      this.error = error
    })
    this.fetchSubs = this.postService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isLoading = false;
    }, error=>  this.postService.error.next(error))
    this.subscription = this.postService.fetchNeeded.subscribe((a:void)=>{
      this.isLoading = true;
      this.fetchSubs.unsubscribe()
      this.fetchSubs = this.postService.fetchPosts().subscribe(posts => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },error=>  this.postService.error.next(error))
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.errorSubs.unsubscribe()
    this.fetchSubs.unsubscribe()
  }

  onClearPosts(){
    this.isLoading = true;
    this.postService.clearPosts().subscribe((response)=>{
      this.isLoading = false;
      this.postService.fetchNeeded.next()
    }, error=> this.postService.error.next(error))
  }

  onCreatePost(postData: Omit<IPost,'id'>) {
    this.postService.createPost(postData.title,postData.content);
    this.postFormTemp.reset()
  }

  onFetchPosts(){
    this.error=null
    this.isLoading = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isLoading = false;
    },error=> this.postService.error.next(error))
  }

  onHandleError(){
    this.error = null;
  }

  onDelete(id:string){
    this.isLoading = true;
    let idx = this.loadedPosts.findIndex(c=> c.id === id)
    this.loadedPosts.splice(idx,1)
    this.postService.onDelete(id).subscribe(()=>{
      this.isLoading = false;
      this.postService.fetchNeeded.next()
    }, error=> this.error = error)
  }


}
