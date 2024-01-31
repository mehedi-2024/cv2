let autoClickInterval;

document.getElementById('startButton').addEventListener('click', startAutoClicker);
document.getElementById('stopButton').addEventListener('click', stopAutoClicker);

function startAutoClicker() {
    const clickRate = 1000; // Click every 1000 milliseconds (1 second)
    autoClickInterval = setInterval(() => {
        simulateClick();
    }, clickRate);

    // Toggle button visibility
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
}

function stopAutoClicker() {
    clearInterval(autoClickInterval);

    // Toggle button visibility
    document.getElementById('startButton').style.display = 'inline';
    document.getElementById('stopButton').style.display = 'none';
}

function simulateClick() {
    // You can customize this function to perform a specific click action
    // For example, clicking at a specific coordinate on the screen
    const xCoordinate = 100;
    const yCoordinate = 100;

    // Create a mouse click event
    const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: xCoordinate,
        clientY: yCoordinate
    });

    // Dispatch the click event
    document.elementFromPoint(xCoordinate, yCoordinate).dispatchEvent(clickEvent);
}
