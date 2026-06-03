const form = document.getElementById("scoreForm");
const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

let scores = JSON.parse(localStorage.getItem("scores")) || [];

function saveData() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

function renderTable(data = scores) {

    tableBody.innerHTML = "";

    data.forEach((item, index) => {

        let row = `
        <tr>
            <td>${item.participant}</td>
            <td>${item.event}</td>
            <td>${item.team}</td>
            <td>${item.score}</td>
            <td>${item.position}</td>
            <td>
                <span class="status">
                Completed
                </span>
            </td>

            <td>
                <button class="action-btn edit"
                onclick="editScore(${index})">
                Edit
                </button>

                <button class="action-btn delete"
                onclick="deleteScore(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const scoreData = {
        event: document.getElementById("event").value,
        participant: document.getElementById("participant").value,
        team: document.getElementById("team").value,
        score: document.getElementById("score").value,
        position: document.getElementById("position").value,
        remarks: document.getElementById("remarks").value
    };

    scores.push(scoreData);

    saveData();
    renderTable();

    form.reset();
});

function deleteScore(index){

    if(confirm("Delete this score?")){
        scores.splice(index,1);
        saveData();
        renderTable();
    }

}

function editScore(index){

    let item = scores[index];

    document.getElementById("event").value =
    item.event;

    document.getElementById("participant").value =
    item.participant;

    document.getElementById("team").value =
    item.team;

    document.getElementById("score").value =
    item.score;

    document.getElementById("position").value =
    item.position;

    document.getElementById("remarks").value =
    item.remarks;

    scores.splice(index,1);

    saveData();
    renderTable();
}

searchInput.addEventListener("keyup", ()=>{

    let value = searchInput.value.toLowerCase();

    let filtered = scores.filter(item =>
    item.participant.toLowerCase().includes(value));

    renderTable(filtered);

});

renderTable();