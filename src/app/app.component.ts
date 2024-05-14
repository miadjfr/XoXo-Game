import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    this.newGame();
  }
  title = 'test';
  setMove: any = [];
  mark: string = '';
  massage: string = '';
  gameover: boolean = false;
  game: any[] = [];
  checkGameOver:boolean = false;

  setMark(index: number) {
    if (this.game[index].mark == '' && this.gameover == false) {
      this.game[index].mark = this.mark;
      this.setMove.push([...this.game]);
      this.gameOver();
      this.checkGame();
      if (this.gameover) {
        this.massage = `Game Over >> winner Player ${this.mark}`;
      }else if(this.checkGameOver){
        this.massage = "Try Again"


      }
       else {
        if (this.mark == 'X') this.mark = 'O';
        else this.mark = 'X';
        this.massage = `player >>> ${this.mark}`;
      }
    }
  }

  newGame() {
    this.mark = 'X';
    this.massage = 'player >>> X';
    this.game = [
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
      { mark: '', winner: false },
    ];
    this.gameover = false;
    this.setMove = [];
    this.checkGameOver = false
  }

  gameOver() {
    if (
      this.game[0].mark != '' &&
      this.game[0].mark === this.game[1].mark &&
      this.game[1].mark === this.game[2].mark
    ) {
      this.gameover = true;
      this.game[0].winner = true;
      this.game[1].winner = true;
      this.game[2].winner = true;
    }
    if (
      this.game[3].mark != '' &&
      this.game[3].mark === this.game[4].mark &&
      this.game[4].mark === this.game[5].mark
    ) {
      this.gameover = true;
      this.game[3].winner = true;
      this.game[4].winner = true;
      this.game[5].winner = true;
    }
    if (
      this.game[6].mark != '' &&
      this.game[6].mark === this.game[7].mark &&
      this.game[7].mark === this.game[8].mark
    ) {
      this.gameover = true;
      this.game[6].winner = true;
      this.game[7].winner = true;
      this.game[8].winner = true;
    }
    if (
      this.game[0].mark != '' &&
      this.game[0].mark === this.game[3].mark &&
      this.game[3].mark === this.game[6].mark
    ) {
      this.gameover = true;
      this.game[0].winner = true;
      this.game[3].winner = true;
      this.game[6].winner = true;
    }
    if (
      this.game[1].mark != '' &&
      this.game[1].mark === this.game[4].mark &&
      this.game[4].mark === this.game[7].mark
    ) {
      this.gameover = true;
      this.game[1].winner = true;
      this.game[4].winner = true;
      this.game[7].winner = true;
    }
    if (
      this.game[2].mark != '' &&
      this.game[2].mark === this.game[5].mark &&
      this.game[5].mark === this.game[8].mark
    ) {
      this.gameover = true;
      this.game[2].winner = true;
      this.game[5].winner = true;
      this.game[8].winner = true;
    }
    if (
      this.game[0].mark != '' &&
      this.game[0].mark === this.game[4].mark &&
      this.game[4].mark === this.game[8].mark
    ) {
      this.gameover = true;
      this.game[0].winner = true;
      this.game[4].winner = true;
      this.game[8].winner = true;
    }
    if (
      this.game[2].mark != '' &&
      this.game[2].mark === this.game[4].mark &&
      this.game[4].mark === this.game[6].mark
    ) {
      this.gameover = true;
      this.game[2].winner = true;
      this.game[4].winner = true;
      this.game[6].winner = true;
    }
  }

  moveSet(index: number) {
    this.game = this.setMove[index];
  }

  changColor(winner: boolean) {
    if (winner) return 'btn btn-success';
    else return 'btn btn-info';
  }


  checkGame(){
    this.checkGameOver = true
    for (let i = 0; i < this.game.length; i++) {
        if(this.game[i].mark==""){
            this.checkGameOver = false
            break


        }

    }

  }
}
