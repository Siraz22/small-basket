import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.css'],
})
export class TempComponentComponent implements OnInit {
  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {}

  // async fetchItems() {
  //   const { data, error } = await this.supabaseService.supabase
  //     .from('item')
  //     .select('*');

  //   if (error) {
  //     console.error('Error fetching data:', error.message);
  //   } else {
  //     console.log('Fetched data:', data);
  //   }
  // }

  fetchItems(): void {
    this.supabaseService.getItems().subscribe((data) => {
      console.log(data);
    });
  }
}
