class Entry {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.done = false;
    }
}
class Todo {
    constructor() {
        this.entries = JSON.parse(window.localStorage.getItem("entries")) || [];
        document.querySelector("#addButton").addEventListener("click", () => {this.addEntry();});
        this.render();
    }
    addEntry(){
        const titleValue = document.querySelector("#title").value;
        const descriptionValue = document.querySelector("#description").value;
        const dateValue = document.querySelector("#date").value;
        this.entries.push(new Entry(titleValue, descriptionValue, dateValue));
        console.log(this.entries);
        this.saveLocal();
        this.render();
    }
    render(){
        if (document.querySelector(".todo-list")){
            document.body.removeChild(document.querySelector(".todo-container"));
        }
        const todoContainer = document.createElement("div");
        todoContainer.className = "todo-container";
        const ul = document.createElement("ul");
        ul.className = "todo-list";

        this.entries.forEach((entryValue, entryIndex)=>{
            const li = document.createElement("li");
            const div = document.createElement("div");
            const removeBtn = document.createElement("div");
            removeBtn.className = "delete-button";
            const removeIcon = document.createTextNode("X");
            div.innerHTML = `${entryIndex+1}) ${entryValue.title}<br>${entryValue.description}<br>${entryValue.date}`;

            if(entryValue.done){
                li.classList.add("task-completed");
            }

            removeBtn.addEventListener("click", ()=>{
                ul.removeChild(li);
                this.entries.splice(entryIndex, 1);
                this.saveLocal();
                this.render();
            });

            div.addEventListener("click", ()=>{
                if(!entryValue.done){
                    li.classList.add("task-completed");
                    this.entries[entryIndex].done = true;
                    this.saveLocal();
                }else{
                    li.classList.remove("task-completed");
                    this.entries[entryIndex].done = false;
                    this.saveLocal();
                }
            });

            removeBtn.appendChild(removeIcon);
            li.appendChild(div);
            li.appendChild(removeBtn);
            ul.appendChild(li);
            todoContainer.appendChild(ul);
        });
        document.body.appendChild(todoContainer);
    }
    saveLocal(){
        window.localStorage.setItem("entries", JSON.stringify(this.entries));
    }
}
const ToDo = new Todo();