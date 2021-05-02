class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(450,130)

        var input = createInput("name")
        input.position(530,360)

        var button = createButton("play")
        button.position(600,400)

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value()
            var greeting = createElement('h3')
            greeting.html("Hello! "+ name)
            greeting.position(680,360)
        })
    }
}