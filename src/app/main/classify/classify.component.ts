import { Component, OnInit,Injector, ViewChild } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent extends BaseComponent implements OnInit {

  public ProductClassify: any=[];


  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();

  }
  refserProList()
  {
    this.ProductClassify=[];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/get-all-menu-pro/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductClassify = data;
      });
    });
  }

}
