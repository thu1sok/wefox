import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostInterface } from '../../interface/post.interface';
import { REGEX } from '../../regex/regex.constant';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() isEditMode: boolean = false;
  @Input() postData: PostInterface;
  @Output() postFormSubmit = new EventEmitter();


  postForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.pattern(REGEX.title)]],
    content: ['', [Validators.required, Validators.pattern(REGEX.content)]],
    lat: ['', [Validators.pattern(REGEX.coordinates)]],
    long: ['', [Validators.pattern(REGEX.coordinates)]],
    imageUrl: ['', [Validators.pattern(REGEX.imageUrl)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  sumbitForm() {
    this.postFormSubmit.emit(this.postForm.value);
  }

  private buildForm() {
    if(this.isEditMode) {
      this.postForm.controls['title'].setValue(this.postData.title);
      this.postForm.controls['content'].setValue(this.postData.content);
      this.postForm.controls['lat'].setValue(this.postData.lat);
      this.postForm.controls['long'].setValue(this.postData.long);
      this.postForm.controls['imageUrl'].setValue(this.postData.image_url);
    }
  }
}
