import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subuser',
  templateUrl: './subuser.component.html',
  styleUrls: ['./subuser.component.scss']
})
export class SubuserComponent implements OnInit {

  @Input() zero:any
  constructor() { }

  ngOnInit(): void {
  }

}
