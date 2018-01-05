
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; // http
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { convertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      AppComponent,
      ProductListComponent,
      convertToSpacesPipe,
      StarComponent,
      ProductDetailComponent,
      WelcomeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
         { path: 'products', component: ProductListComponent },
        {path: 'products/:id', component: ProductDetailComponent},
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default page
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard page (404)
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
