import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environment/environment.development';

export interface ItemEntity {
  id?: string;
  name: string;
  isMandatory: boolean;
  isAvailable: boolean;
  refBasket: number;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  getItems(): Observable<any> {
    return from(
      this.supabase
        .from('item')
        .select('*')
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
