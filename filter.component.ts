import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  title = 'rg';
    
  bankid="";
  aa:boolean=false;
  users=[{
    fsc:'BCBMCCC00077',
    bankid:'60',
    branch:'Kormangala',
    bankname:'Bharath cooperative bank Mumbai Limited'
  },{
    
    fsc:'BCBMCCC00078',
    bankid:'70',
    branch:'Magadi Main Road',
    bankname:'Bharath cooperative bank Mumbai Limited'
  },{
    
    fsc:'BCBMCCC00079',
    bankid:'80',
    branch:'Maleshpuram',
    bankname:'City Union Bank Limited'
  },{
    
    fsc:'BCBMCCC00080',
    bankid:'90',
    branch:'Indhira Nagar',
    bankname:'City Union Bank Limited'
  },
  {
   fsc:'BCBMCCC00081',
    bankid:'44',
    branch:'Jayanagar Nagar',
    bankname:'City Union Bank Limited'
  },
  {
    fsc:'CIJB0000148',
    bankid:'45',
    branch:'Vijay Nagar',
    bankname:'City Union Bank Limited'
  },
  {
    fsc:'CIJB0000149',
    bankid:'46',
    branch:'Banashankari',
    bankname:'City Union Bank Limited'
  },
  ]
 setIndex(ii){
    this.aa=ii;
    console.log
  }
  
 ngOnInit() {
  }

}
