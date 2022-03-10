import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookDetailService } from 'src/app/shared/book-detail.service';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styles: [
  ]
})
export class BookDetailFormComponent implements OnInit {

  constructor(public service:BookDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log("xx");
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postBookDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Book Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putBookDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Book Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new BookDetail();
  }

}
