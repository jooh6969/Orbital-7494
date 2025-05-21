function submitURL() {
    const input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        document.getElementById("confirmation").innerText = "Please enter a URL.";
    } else {
        document.getElementById("confirmation").innerText = `URL received: "${input}"`;
    }
}
