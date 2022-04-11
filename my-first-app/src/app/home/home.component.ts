import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription = interval(1000).subscribe(count=>{
  //     console.log(count);
  //   })
  const customInterval = new Observable<any>((observer)=>{
    let count=0;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);
  })


  this.firstObsSubscription =customInterval.pipe(
    filter((data)=>{
      return data > 2;
    }),
    map((data:number)=>{
      return 'Round ' + (data + 1)
    })
  ).subscribe({
    next: (count)=>{
      console.log(count);
    },
    error :(error)=>{ console.error(error)}
  })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe()
  }

}
