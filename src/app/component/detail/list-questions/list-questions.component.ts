import { Component, OnInit } from '@angular/core';
import {Questions} from '../../../model/questions';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ListquetionsService} from '../../../service/listquetions.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {
  addquestion: Questions;
  isSuccess =  false;
  // questionForm: FormGroup;
  questionForm = new FormGroup({
    add: new FormControl('')
  })
  constructor(private questionService: ListquetionsService , private quest: FormBuilder) { }

  ngOnInit() {
    // this.questionForm = this.quest.group({
    //   questions: [null, Validators.required]
    // });
  }
  onSubmit() {
    // this.questionService.addQuestion(this.questionForm.value).subscribe( result => {
    //   this.addquestion = result;
    // },
    //   error => {
    //   console.log(error);
    //   }
    //   );
  }
}
