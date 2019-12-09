import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KindOfQuestion} from '../../../model/kind-of-question';
import {KindOfQuestionService} from '../../../service/kind-of-question.service';

@Component({
  selector: 'app-list-kind-of-question',
  templateUrl: './list-kind-of-question.component.html',
  styleUrls: ['./list-kind-of-question.component.scss']
})
export class ListKindOfQuestionComponent implements OnInit , OnDestroy {
  public subscription: Subscription;
  public kindOfQuestion: KindOfQuestion[];
  constructor(private  kindOfQuestionService: KindOfQuestionService) { }

  ngOnInit() {
    this.subscription = this.kindOfQuestionService.getallKindOfQuetion().subscribe( data => {
      this.kindOfQuestion = data;
    });
  }

  ngOnDestroy(): void {
  }

}
