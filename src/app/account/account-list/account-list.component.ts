import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  Accounts:any = [];
   sum=0;
   total: number;
  constructor(private apiService: ApiService) {
    this.readAccounts();
  }

  ngOnInit(): void {
  }

  readAccounts(){
    this.apiService.getAccounts().subscribe((data) => {
     this.Accounts = data;
     this.Accounts.forEach(a => this.sum =+ a.balance);

     this.total = this.Accounts.reduce(function(prev, cur)
     {
          return prev + (cur.balance - (cur.balance / cur.balance) );
     }, 0);
     console.log('Total of Discounted Items:',  this.total);


     //console.log(this.Accounts);
    });
  }








 // Array of strings




  onWithdraw()
  {
    alert('Success');

  }

}
