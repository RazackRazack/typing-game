

const textDisplay= document.getElementById('text')
const paragraphs= ["can you imagine","where are you at", "how old are you", "what do you think will happen to him" ]
const textValue = document.getElementById('input')

function randomText() {
    var paragraph = paragraphs[Math.floor(Math.random()*paragraphs.length)]
    textDisplay.innerText = paragraph
    paragraph.split("").forEach(letter => {
        const letterSpan = document.createElement("span")
        letterSpan.innerText = letter
    })
    textValue.innerText = null
    
}
randomText()