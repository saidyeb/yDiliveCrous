import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private mockService : MockService, private router: Router) { }

  ngOnInit() {}


  public isDetailRoute() : boolean {
    const routeMatch = this.router.url.match("details/([0-9]+)$"); 
    if(routeMatch != null && routeMatch.length > 0)
      return routeMatch[0].length > 0

    return false;
  }

}
