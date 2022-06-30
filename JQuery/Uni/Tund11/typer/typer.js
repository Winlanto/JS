class Typer{
    constructor() {
        this.name;
        this.wordsInGame = 2;
        this.startingWordLength = 2;
        this.words = [];
        this.startTime = 0;
        this.endTime = 0;
        this.typerWords = [];
        this.wordsTyped = 0;
        this.word;
        this.results = [];
        this.loadFromFile();
        this.charsTyped = 0;
    }

    loadFromFile(){
        $.get("lemmad2013.txt", (data)=>this.getWords(data));
        $.get("database.txt", (data)=>{
            let content = JSON.parse(data).content;
            this.results = content;
            console.log(this.results);
            localStorage.setItem("score", JSON.stringify(content));
        });
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

        $('#submitName').click(()=>{
            this.name = $('#nameValue').val();
            this.startTyper();
            $('#name').hide();
        });
    }

    startTyper() {
        this.generateWords();
        this.updateGameInfo();
        this.startTime = performance.now();
        $(document).off("keypress");
        $(document).on("keypress", (event)=>this.shortenWords(event.key));
        this.showResults();
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
            this.charsTyped++;
        }else if (this.word.length == 1 && this.word.charAt(0) == keyPressed && this.wordsTyped != this.wordsInGame - 1){
            this.wordsTyped++;
            this.charsTyped++;
            this.selectWord();
            this.updateGameInfo();
        }else if (this.word.length == 1 && this.word.charAt(0) == keyPressed && this.wordsTyped == this.wordsInGame - 1){
            this.endTime = performance.now();
            this.charsTyped++;
            $('#score').html(this.name+" Teie aeg oli "+((this.endTime-this.startTime)/1000).toFixed(2)+"<br>Teie keskmine kirjutamise kiirus oli: "+(this.charsTyped/((this.endTime-this.startTime)/1000)*60).toFixed(0)+" tähte minutis");
            $('#wordDiv').hide();
            $("#startNew").show();
            this.saveResults();
            this.updateGameInfo();
            this.wordsTyped = 0;
            $(document).off("keypress");
            $(document).on("keypress", (event) => {
                this.startNewGame(event.keyCode);
            })
        }else if(this.word.charAt(0) != keyPressed){
            $('#container').addClass('redBg');
            setTimeout(function (){
                $('#container').removeClass('redBg');
            }, 100)

        }
    }

    saveResults() {
        let result = {
            name: this.name,
            time: ((this.endTime-this.startTime)/1000).toFixed(2),
            charsInMinute: (this.charsTyped/((this.endTime-this.startTime)/1000)*60).toFixed(0)
        };
        this.results.push(result);
        this.results.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
        localStorage.setItem('score', JSON.stringify(this.results));
        $.post('server.php', {save: this.results}).done(function (){
            console.log("Success");
        }).fail(function (){
            alert('FAIL');
        }).always(function (){
            console.log("Tegime midagi AJAXiga");
        });
        this.showResults();
    }

    showResults() {
        $('#results').html("");
        for (let i=0;i<this.results.length;i++){
            if (i === 10){break;}
            $('#results').append(i+1+". "+this.results[i].name+": "+this.results[i].time+" "+this.results[i].charsInMinute+"<br>");
        }
    }

    startNewGame(keyCode) {
        if(keyCode === 114){
            this.startTyper();
            $("#startNew").hide();
            $("#wordDiv").show();
        }
    }

    updateGameInfo(){
        $('#info').html(this.wordsTyped+1+"/"+this.wordsInGame);
    }
}

let typer = new Typer();