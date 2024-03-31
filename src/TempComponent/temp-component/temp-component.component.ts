import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/service/supabase.service';

@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.css'],
})
export class TempComponentComponent implements OnInit {
  constructor(private supabaseService: SupabaseService) {}

  items: any = null;

  ngOnInit() {}
}
