class Jeu {
    constructor(game, x = 6, y = 7) {
      this.x = x;
      this.y = y;
      this.board = Array(this.x);
      for (let i = 0; i < this.x; i++) {
        this.board[i] = Array(this.y).fill(0);
      }
      this.turn = 1;
      this.moves = 0;
      this.winner = null;
      this.element = document.querySelector(game);
      this.score = [0, 0]; 
      this.element.addEventListener('click', (event) => this.handle_click(event));
  
      this.genere_jeu();
      this.genere_score();
    }
  
    genere_jeu() {
      const div = document.createElement('div');
      div.setAttribute('class', 'jeu');
      const table = document.createElement('table');
      table.setAttribute('id', 'table');
      for (let i = 0; i < this.x; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < this.y; j++) {
          const td = document.createElement('td');
          td.setAttribute('id', `${this.x - i}${j}`);
          tr.appendChild(td);
          let colour = this.board[i][j];
          if (colour) td.className = 'player' + colour;
          td.dataset.column = j;
        }
        table.appendChild(tr);
      }
      div.appendChild(table);
      this.element.appendChild(div);
      this.genere_bouton_reset();
    }
  
    genere_score() {
      const scoreDiv = document.createElement('div');
      scoreDiv.setAttribute('id', 'score');
      scoreDiv.innerText = `Joueur 1: ${this.score[0]} | Joueur 2: ${this.score[1]}`;
      this.element.appendChild(scoreDiv);
    }

    genere_bouton_reset() {
      const resetButton = document.createElement('button');
      resetButton.setAttribute('id', 'reset-button');
      resetButton.innerText = 'Réinitialiser le score';
      resetButton.addEventListener('click', () => this.reset_score());
      this.element.appendChild(resetButton);
    }
  
    set(row, column, player) {
      this.board[row][column] = player;
      this.moves++;
    }
  
    play(column) {
      let row;
      for (let i = this.x - 1; i >= 0; i--) {
        if (this.board[i][column] == 0) {
          row = i;
          break;
        }
      }
      if (row === undefined) {
        return null;
      } else {
        this.set(row, column, this.turn);
        return row;
      }
    }
  
    handle_click(event) {
      if (this.winner !== null) {
        if (window.confirm('Recommencer une partie?')) {
          this.reset();
          this.genere_jeu();
          this.genere_score();
        }
        return;
      }
  
      let column = event.target.dataset.column;
      if (column !== undefined) {
        column = parseInt(column);
        let row = this.play(parseInt(column));
  
        if (row === null) {
          window.alert('Colonne pleine');
        } else {
          if (this.victoire(row, column, this.turn)) {
            this.winner = this.turn;
            this.score[this.winner - 1]++;
          } else if (this.moves >= this.x * this.y) {
            this.winner = 0;
          }
          this.turn = 3 - this.turn;
  
          let td = document.getElementById(`${this.x - row}${column}`);
          td.className = 'player' + this.turn;
  
          switch (this.winner) {
            case 0:
              window.alert('Match nul');
              break;
            case 1:
              window.alert('Joueur 1 gagne');
              break;
            case 2:
              window.alert('Joueur 2 gagne');
              break;
          }
  
          this.updateScore();
        }
      }
    }
  
    updateScore() {
      const scoreDiv = document.getElementById('score');
      scoreDiv.innerText = `Joueur 1: ${this.score[0]} | Joueur 2: ${this.score[1]}`;
    }
  
    reset_score() {
      this.score = [0, 0];
      this.updateScore();
    }
  
    victoire(row, column, player) {
      // Victoire en ligne
      for (let j = 0; j <= this.y - 4; j++) {
        if (
          this.board[row][j] == player &&
          this.board[row][j + 1] == player &&
          this.board[row][j + 2] == player &&
          this.board[row][j + 3] == player
        ) {
          return true;
        }
      }
  
      // Victoire en colonne
      for (let i = 0; i <= this.x - 4; i++) {
        if (
          this.board[i][column] == player &&
          this.board[i + 1][column] == player &&
          this.board[i + 2][column] == player &&
          this.board[i + 3][column] == player
        ) {
          return true;
        }
      }
  
      // Victoire diag montante
      for (let i = 3; i < this.x; i++) {
        for (let j = 0; j <= this.y - 4; j++) {
          if (
            this.board[i][j] == player &&
            this.board[i - 1][j + 1] == player &&
            this.board[i - 2][j + 2] == player &&
            this.board[i - 3][j + 3] == player
          ) {
            return true;
          }
        }
      }
  
      // Victoire diag descendante
      for (let i = 0; i <= this.x - 4; i++) {
        for (let j = 0; j <= this.y - 4; j++) {
          if (
            this.board[i][j] == player &&
            this.board[i + 1][j + 1] == player &&
            this.board[i + 2][j + 2] == player &&
            this.board[i + 3][j + 3] == player
          ) {
            return true;
          }
        }
      }
      return false;
    }
  
    reset() {
      for (let i = 0; i < this.x; i++) {
        for (let j = 0; j < this.y; j++) {
          this.board[i][j] = 0;
        }
      }
      this.turn = 1;
      this.moves = 0;
      this.winner = null;
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
    }
  }
  
  let p4 = new Jeu('#game');