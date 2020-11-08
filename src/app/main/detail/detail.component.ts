import { Component, OnInit,Injector, ViewChild } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {

  public ProductDetail: any;
  public ProductMenu1: any=[];


  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProDetail();

  }
  refserProDetail()
  {
    this.ProductDetail={};
    this.ProductMenu1=[];
    this._route.params.subscribe(params => {
      let id = params['idpro'];
      let idmenu = params['idmenu'];
      this._api.get('/api/product/get-pro-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductDetail = data;
      });
      this._api.get('/api/product/get-5-menu-pro/'+idmenu).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductMenu1 = data;
      });
    });
  }
}
