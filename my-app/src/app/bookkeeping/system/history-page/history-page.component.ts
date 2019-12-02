import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { AppEvent } from '../shared/models/event.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  constructor(
    private categoriesService: CategoriesService,
    private eventService: EventsService
  ) { }
  s1: Subscription;
  isLoaded = false;
  categories: Category[] = [];
  events: AppEvent[] = [];
  chartData = [];

  ngOnInit() {
    this.s1 = combineLatest(
      this.categoriesService.getCategories(),
      this.eventService.getEvents())
      .subscribe((data: [[Category], AppEvent[]]) => {
        this.categories = data[0];
        this.events = data[1];

        this.calculateChartData();
        this.isLoaded = true;
      });
  }
  calculateChartData() {
    this.chartData = [];
    this.categories.forEach((cat) => {
      const catEvent = this.events.filter((e) => e.category === cat.id && e.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }
  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }

}
