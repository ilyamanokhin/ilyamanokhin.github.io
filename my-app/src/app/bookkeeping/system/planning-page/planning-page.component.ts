import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';
import { Category } from '../shared/models/category.model';
import { AppEvent } from '../shared/models/event.model';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.less']
})
export class PlanningPageComponent implements OnInit, OnDestroy {
  s1: Subscription;

  isLoaded = false;
  bill: Bill;
  categories: Category[] = [];
  events: AppEvent[] = [];

  constructor(
    private billService: BillService,
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.s1 = combineLatest(
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Bill, Category[], AppEvent[]]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.events = data[2];

      this.isLoaded = true;
    });
  }
  getCategoryCost(cat: Category): number {
    const catEvents = this.events.filter(e => e.category === cat.id && e.type === 'outcome');

    return catEvents.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }
  private getPercent(cat: Category) {
    const percent = (100 * this.getCategoryCost(cat)) / cat.capacity;
    return percent > 100 ? 100 : percent;
  }

  getCatPercent(cat: Category): string {
    return this.getPercent(cat) + '%';
  }

  getCatColorClass(cat: Category) {
     const percent = this.getPercent(cat);
     return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.s1) {

      this.s1.unsubscribe();
    }
  }
}
