import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';


// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

  private pnr: string = '';
  PnrForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router)
    // private userService: UserService,
    // private toastr: ToastrService) 
    { }

  // //Toast Methods
  // showWarning() {  //FOR Success
  //   this.toastr.success('Warning', 'Please verify your email first!', {
  //     timeOut: 3000
  //   });
  // }

  // showError() {   // FOR Errors 
  //   this.toastr.error('Sorry', 'Invalid Credentials!', {
  //     timeOut: 3000
  //   });
  // }


  ngOnInit(): void {

    this.PnrForm = new FormGroup({
      'pnr': new FormControl(this.pnr, [Validators.required]),
    })
  }

  onSubmit() {
    //this.pnr = this.PnrForm.value.email;
    this.PnrForm.reset();
  }

  
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
