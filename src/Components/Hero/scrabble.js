const headerText = [
    "Maximize your SAP solution",
    "Articulate SaaS solutions",
    "Orchestrate Integrate Discover"
]

const subText = [
    "Accelerate your Digital Transformation",
    "Supply chain and Procurement expertise meets enterprise development",
    "...your supply chain"
]

const alphabet = "abcdefghijklmnopqrstuvwxyz"
function scrabble() {
    for (let j = 0; j < 10000; j++) {
        if (j % 100 != 0) continue
        var text = headerText[0]
        var arr = new Array(text.length).fill(0)
        for (var i = 0; i < headerText.length; i++) {
            if (text.at(i) === " ") {
                arr[i] = 1;
            }
        }
        var newString = new Array(text.length);
        for (var i = 0; i < text.length; i++) {
            if (arr[i] === 0) {
                newString[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
            }
            if (arr[i] === 1) {
                newString[i] = " "
            }
            if (arr[i] === 2) {
                newString[i] = text[i]
            }
        }
        return(newString.join(""))
    }
}