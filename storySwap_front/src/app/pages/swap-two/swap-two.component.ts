import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swap-two',
  standalone: true,
  imports: [],
  templateUrl: './swap-two.component.html',
  styleUrl: './swap-two.component.css'
})
export class SwapTwoComponent implements OnInit {
  user: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = params.get('user') || ''; 
    });
  }
}
