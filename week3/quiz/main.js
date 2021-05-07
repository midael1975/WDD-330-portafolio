const quiz = [{ name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
};

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        // main game loop    
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // end of main game loop    
        this.gameOver();
    },

    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },

    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            alert('Correct!');
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },

    gameOver() {
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}

game.start(quiz);
view.hide(view.start);


view.start.addEventListener('click', () => game.start(quiz), false);