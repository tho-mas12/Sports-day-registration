const scoreForm = document.getElementById("scoreForm");
const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

let scores = JSON.parse(localStorage.getItem("scores")) || [];

function displayScores(data = scores) {
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${item.participant}</td>
            <td>${item.event}</td>
            <td>${item.team}</td>
            <td>${item.score}</td>
            <td>${item.position}</td>
            <td><span class="status">Completed</span></td>
            <td>
                <button class="action-btn delete"
                onclick="deleteScore(${index})">
                Delete
                </button>
            </td>
        </tr>`;
    });
}

scoreForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const score = {
        event: document.getElementById("event").value,
        participant: document.getElementById("participant").value,
        team: document.getElementById("team").value,
        score: document.getElementById("score").value,
        position: document.getElementById("position").value,
        remarks: document.getElementById("remarks").value
    };

    scores.push(score);

    localStorage.setItem("scores", JSON.stringify(scores));

    displayScores();
    scoreForm.reset();
});

function deleteScore(index) {
    scores.splice(index, 1);
    localStorage.setItem("scores", JSON.stringify(scores));
    displayScores();
}

searchInput.addEventListener("keyup", function() {
    const value = this.value.toLowerCase();

    const filtered = scores.filter(item =>
        item.participant.toLowerCase().includes(value)
    );

    displayScores(filtered);
});

displayScores();