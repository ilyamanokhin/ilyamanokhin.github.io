import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.less']
})
export class HistoryDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private categoriesSerice: CategoriesService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params['id']);
      });
  }

}
