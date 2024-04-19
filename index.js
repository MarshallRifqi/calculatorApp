document.getElementById('fetch-button').addEventListener('click', fetchData); 

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        displayData(data.slice(0, 2));
    } catch (error) {
        displayError(error);
    }
}

function displayData(data) {
    const displayArea = document.getElementById('data-display');
    displayArea.innerHTML = '';

    data.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.id}. ${item.email}: ${item.body}`;
        displayArea.appendChild(itemElement);
    });
}

function displayError(error) {
    const displayArea = document.getElementById('data-display');
    displayArea.textContent = 'Error fetching data: ' + error.message;
}
