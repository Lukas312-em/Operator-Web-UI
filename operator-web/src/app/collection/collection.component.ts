import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, pipe, Subscription } from 'rxjs';
import { interval, fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  item: any;
  collection: any;
  sub: Subscription | undefined;
  wrapperElement: any;


  constructor() {

  }

  ngOnInit(): void {
    // let button = document.getElementById
    // Observable.fromEvent(button, 'dblclick')
    // let hello= Observable.of('hello');

    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(10000);
    // Subscribe to begin publishing values
    const subscription = secondsCounter.subscribe(n => {
      console.log(`It's been ${n + 1} seconds since subscribing!`);
      if (n > 5) {
        subscription.unsubscribe();
      }
    });

    this.wrapperElement = document.getElementById('el');
    const hover = fromEvent<MouseEvent>(this.wrapperElement, 'dblclick');
    const subscribe = hover.subscribe(evt => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    });
    const nums = of(1, 2, 3, 4, 5);

    const squre = pipe(
      map((n: number) => n * n),
      filter(n => n % 2 == 0)
    );


    const squareNums = squre(nums);

    squareNums.subscribe(y => console.log(y));
  }
}