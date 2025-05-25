function submitURL() {
    const input = document.getElementById("userInput").value;
    const confirmation = document.getElementById("confirmation");

    // Clear previous result
    confirmation.innerText = "";

    if (input.trim() === "") {
        confirmation.innerText = "⚠️ Please enter a URL.";
    } else {
        // Show loading state
        confirmation.innerText = "🔍 Checking URL, please wait...";

        // Simulate backend delay, fake
        setTimeout(() => {
            confirmation.innerText = `✅ Result: The URL "${input}" appears to be SAFE.`;
        }, 2000); 
    }
}

// Dropdown menu toggle
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}