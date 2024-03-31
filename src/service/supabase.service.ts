import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
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
  public supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }
}
