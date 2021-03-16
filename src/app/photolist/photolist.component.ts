import { Component, OnInit } from '@angular/core';
import{PhotodataService} from '../photodata.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {
 dataget:any;
 photolistget:any = [];
 tabledata:any = [];

  constructor(private _photosgetdata:PhotodataService) { 
 
  }

  ngOnInit(): void {
    this.viewdata();
  }

  // display the img list fun
  viewdata(){
    this._photosgetdata.getdata().subscribe((res)=>{
   //   console.log(res)    
     this.photolistget = res;
     
    })
    
  }

  // Add row fun
  comparedata(event){

     this.tabledata.push(event) 
  }

  // Remove the Row fun
  deleteRow(id){
    for(let i = 0; i < this.tabledata.length; ++i){
        if (this.tabledata[i].id === id) {
            this.tabledata.splice(i,1);
        }
    }
  }

}
