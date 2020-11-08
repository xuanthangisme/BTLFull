import { Component, OnInit,Injector, ViewChild } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent extends BaseComponent implements OnInit {


  public ProductMenuList1: any=[];
  public ProductMenuList2: any=[];
  public ProductMenuList3: any=[];
  public ProductMenuList4: any=[];
  public ProductMenuList5: any=[];

  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();
    this.refserProList1();
    this.refserProList2();
    this.refserProList3();
    this.refserProList4();

  }
  refserProList(){
    this.service.get("/api/product/get-5-menu-pro/1").subscribe(data=>{
      this.ProductMenuList1 = data;
      console.log(this.ProductMenuList1);
    })
  }
  refserProList1(){
    this.service.get("/api/product/get-5-menu-pro/2").subscribe(data=>{
      this.ProductMenuList2 = data;
      console.log(this.ProductMenuList2);
    })
  }
  refserProList2(){
    this.service.get("/api/product/get-5-menu-pro/3").subscribe(data=>{
      this.ProductMenuList3 = data;
      console.log(this.ProductMenuList3);
    })
  }
  refserProList3(){
    this.service.get("/api/product/get-5-menu-pro/4").subscribe(data=>{
      this.ProductMenuList4 = data;
      console.log(this.ProductMenuList4);
    })
  }
  refserProList4(){
    this.service.get("/api/product/get-5-menu-pro/5").subscribe(data=>{
      this.ProductMenuList5 = data;
      console.log(this.ProductMenuList5);
    })
  }
}

