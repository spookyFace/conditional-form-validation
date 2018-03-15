import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormValidatorsService} from './form-validators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Conditional Form Validation';

  readonly dropdownOptions: Option[] = [
    {key: 'key1', value: 'value1'},
    {key: 'key2', value: 'value2'},
    {key: 'key3', value: 'value3'},
    {key: 'key4', value: 'value4'}
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private validators: FormValidatorsService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      select: this.dropdownOptions[0].key,
      text: ''
    }, {
      validator: this.validators.requireTextAreaWhenNeeded()
    });
  }

  get isTextAreaRequired(): boolean {
    return this.form.errors && this.form.errors['textAreaRequiredForKey3'];
  }
}

interface Option {
  key: string;
  value: string;
}
