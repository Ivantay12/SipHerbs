document.getElementById('generateButton').addEventListener('click', function() {
    const content = document.getElementById('generatedContent');
    content.innerHTML = `
        <img src="beer-image.png" alt="Beer Bottle">
        <p>"Angmoh Liang Teh" Beer</p>
    `;
    content.style.display = 'block';
});

function generateWordCloud() {
    const inputText = document.getElementById('text-input').value;
    const wordArray = inputText.split(' ').filter(word => word.trim() !== '');
    const wordCloudDiv = document.getElementById('word-cloud');

    wordArray.forEach(word => {
        const span = document.createElement('span');
        span.innerText = word;
        span.style.fontSize = `${Math.random() * 30 + 10}px`; // Random font size between 10px and 40px
        span.style.margin = '5px';
        span.style.display = 'inline-block';
        span.style.color = getRandomColor();
        wordCloudDiv.appendChild(span);
    });

    // Clear the input field after generating the word cloud
    document.getElementById('text-input').value = '';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}