import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AppComponent } from '../../app.component'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-main',
  templateUrl: './signup-main.component.html',
  styleUrls: ['./signup-main.component.scss']
})
export class SignupMainComponent implements OnInit {

  private subs = new SubSink()

  constructor() { }

  ngOnInit(): void {
  }

}
