import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { getDocs, QuerySnapshot } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operator-web';
  item$: Observable<import("@angular/fire/firestore").DocumentData[]>;
  constructor(firestore: Firestore) {
    const coll: any = collection(firestore, 'items');
    this.item$ = collectionData(coll);

    const allDocs = this.item$.forEach((element) => {
      console.log(element)
    });
  }
}