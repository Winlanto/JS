let playerName = prompt("Sisetage oma nimi: ");

class Typer{
    constructor(name) {
        this.name = name;
        this.wordsInGame = 2;
        this.startingWordLength = 2;
        this.words = [];
        this.startTime = 0;
        this.endTime = 0;
        this.loadFromFile();
        this.typerWords = [];
        this.wordsTyped = 0;
        this.word;
    }
    loadFromFile(){
        $.get("lemmad2013.txt", (data)=>this.getWords(data));
    }

    getWords(data){
        console.log(data);
        const dataFromFile = data.split('\n');
        this.separateWordsByLength(dataFromFile);
    }

    separateWordsByLength(dataFromFile) {
        for (let i = 0; i<dataFromFile.length; i++){
            const wordLength = dataFromFile[i].length;
            if (this.words[wordLength] === undefined){
                this.words[wordLength] = [];
            }
            this.words[wordLength].push(dataFromFile[i]);
        }
        console.log(this.words);

        this.startTyper();
    }

    startTyper() {
        this.generateWords();
        this.startTime = performance.now();
        $(document).on("keypress", (event)=>this.shortenWords(event.key));
    }

    generateWords() {
        for (let i=0;i<this.wordsInGame; i++){
            const wordLength = this.startingWordLength+i;
            const randomWord = Math.round(Math.random() * this.words[wordLength].length);
            this.typerWords[i] = this.words[wordLength][randomWord];
        }
        console.log(this.typerWords);
        this.selectWord();
    }

    selectWord() {
        this.word = this.typerWords[this.wordsTyped];
        this.drawWord();
    }

    drawWord() {
        $('#wordDiv').html(this.word);
    }

    shortenWords(keyPressed) {
        console.log(keyPressed);
        if (this.word.length > 1 && this.word.charAt(0) == keyPressed){
            this.word = this.word.slice(1);
            this.drawWord();
        }else if (this.word.length == 1 && this.word.charAt(0) == keyPressed && this.wordsTyped != this.wordsInGame - 1){
            this.wordsTyped++;
            this.selectWord();
        }else if (this.word.length == 1 && this.word.charAt(0) == keyPressed && this.wordsTyped == this.wordsInGame - 1){
            this.endTime = performance.now();
            $('#score').html(this.name+" sinu aeg oli "+((this.endTime-this.startTime)/1000).toFixed(2));

        }
    }
}

let typer = new Typer(playerName);