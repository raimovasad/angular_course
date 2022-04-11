import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: number;
  private subscription:Subscription;

  constructor(private route: ActivatedRoute, private userService:UserService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onActivate(){
    this.userService.activatedEmitter.next(true);
  }
}
