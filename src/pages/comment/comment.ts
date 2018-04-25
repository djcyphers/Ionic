import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';
import { Dish } from '../../shared/dish';
import { DishdetailPage} from '../../pages/dishdetail/dishdetail';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  commentForm: FormGroup;
  comment: Comment;
  errMess: string;
  dish: Dish;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder ) {

      this.commentForm = this.formBuilder.group({
        author: ['', Validators.required],
        comment: ['', Validators.required],
        rating: 5
      });
  }

  onSubmit() {
    this.dismiss();
  }

  dismiss() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.viewCtrl.dismiss(this.commentForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

}
