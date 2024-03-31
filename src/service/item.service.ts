import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(public supabaseService: SupabaseService) {}

  getItems(refBasket: number): Observable<any> {
    return from(
      this.supabaseService.supabaseClient
        .from('item')
        .select('*')
        .eq('ref_basket', refBasket)
        .then(({ data, error }) => {
          if (error) {
            throw new Error('Error fetching data: ' + error.message);
          } else {
            return data;
          }
        })
    );
  }
}
