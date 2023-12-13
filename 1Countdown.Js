// Function to update the timer display
function updateTimer() {
    // Get current time and the future event time
    let currentTime = new Date().getTime();
    let eventTime = new Date("2024-11-01").getTime();

    // Calculate the remaining time
    let remainingTime = eventTime - currentTime;

    // Calculate days, hours, minutes, and seconds from remaining time
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the timer in the HTML element with ID "timer"
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update timer when the page loads
updateTimer();
