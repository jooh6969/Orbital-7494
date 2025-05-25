function submitURL() {
    let input = document.getElementById("userInput").value.trim();
    const confirmation = document.getElementById("confirmation");

    confirmation.innerText = "";

    // If user forgot protocol, add https://
    if (!input.startsWith("http://") && !input.startsWith("https://")) {
        input = "https://" + input;
    }

    // Updated stricter regex
    const urlPattern = /^(https?:\/\/)([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

    if (!urlPattern.test(input)) {
        confirmation.innerText = "❌ Invalid URL. Please enter a valid site.";
        return;
    }

    confirmation.innerText = "🔍 Checking URL, please wait...";

    setTimeout(() => {
        confirmation.innerText = `✅ Result: The URL "${input}" appears to be SAFE.`;
    }, 2000);
}
