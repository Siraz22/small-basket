import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, skipWhile, switchMap, tap } from 'rxjs';
import { BasketEntity } from 'src/entity/basket-entity';
import { BasketService } from 'src/service/basket.service';
import { ItemService } from 'src/service/item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public basketName: string;
  public basketInputSubject: Subject<string> = new Subject<string | null>();

  public basketEntity: BasketEntity;

  constructor(
    public basketService: BasketService,
    public itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.subscribeInputChange();
  }

  public handleInputChange(): void {
    this.basketInputSubject.next(this.basketName);
  }

  private subscribeInputChange(): void {
    this.basketInputSubject
      .pipe(
        debounceTime(500),
        skipWhile((searchTerm: string) => searchTerm.length === 0)
      )
      .subscribe(() => {
        this.searchBasket();
      });
  }

  private searchBasket(): void {}
}
