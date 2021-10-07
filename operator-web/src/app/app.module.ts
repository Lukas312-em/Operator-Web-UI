import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBpA685rxaiBY1ixqr7wVBjZoKYoBR93xI",
      authDomain: "testing-fire-6a0e7.firebaseapp.com",
      projectId: "testing-fire-6a0e7",
      storageBucket: "testing-fire-6a0e7.appspot.com",
      messagingSenderId: "36419784526",
      appId: "1:36419784526:web:fb0ac76cffdfed67b0181f",
      measurementId: "G-NB8K1VTC2H"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
