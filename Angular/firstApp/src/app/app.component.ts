import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
