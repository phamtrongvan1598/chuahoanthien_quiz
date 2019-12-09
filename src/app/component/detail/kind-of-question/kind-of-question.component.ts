import { Component, OnInit } from '@angular/core';
import {KindOfQuestion} from '../../../model/kind-of-question';
import {FormControl, FormGroup} from '@angular/forms';
import {KindOfQuestionService} from '../../../service/kind-of-question.service';

@Component({
  selector: 'app-kind-of-question',
  templateUrl: './kind-of-question.component.html',
  styleUrls: ['./kind-of-question.component.scss']
})
export class KindOfQuestionComponent implements OnInit {
  as: KindOfQuestion;
  kindOfQuestions: KindOfQuestion[];
  isSuccess = false;
  kindOfQuestionForm: FormGroup;
  constructor(private  kindOfQuestionService: KindOfQuestionService) { }

  ngOnInit() {
    this.kindOfQuestionForm = new  FormGroup({
      kindOfQuestion: new FormControl('')
    });
  }
  onSubmit() {
    this.kindOfQuestionService.createKindOfQuestion(this.kindOfQuestionForm.value).subscribe(
      data => {
        console.log('succsess');
        window.location.reload();
        this.as = data;
      },
      error => {
        console.log('error');
      });
  }
  // listKindOfQuestion() {
  //   this.kindOfQuestionService.getallKindOfQuetion().subscribe(result => {
  //     this.kindOfQuestions = result;
  //   }, error => {
  //     console.log(error);
  //   });
  //
  // }
  // createKindOfQuestions() {
  //   this.kindOfQuestionService.createKindOfQuestion(this.kindOfQuestionForm.value).subscribe(result => {
  //     this.as = result;
  //   },
  //     error => {
  //     console.log(error);
  //     });
  // }

}
