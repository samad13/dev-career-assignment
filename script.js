document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const redactWords = document.getElementById("redactWords");
    const scrambleCharacter = document.getElementById("scrambleCharacter");
    const redactButton = document.getElementById("redactButton");
    const redactedOutput = document.getElementById("redactedOutput");

    redactButton.addEventListener("click", function () {
        const text = inputText.value;
        const wordsToRedact = redactWords.value.split(" ");
        const char = scrambleCharacter.value || "*";

        const redactedText = text.split(" ").map(word => {
            if (wordsToRedact.includes(word)) {
                return char.repeat(word.length);
            }
            return word;
        }).join(" ");

        redactedOutput.textContent = redactedText;
    });
});





