
// Add an event listener to the button
document.getElementById('exerciseForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const muscle = document.getElementById('muscleInput').value;
    const apiKey = 'GrJbQOQ2RlFy70nZkBLz5w==xxH33Rf0CrIiTVud';
    const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
    const exerciseDetailsBox = document.getElementById('exerciseDetailsBox');

    axios.get(apiUrl, {
        headers: { 'X-Api-Key': apiKey },
    })
    .then(response => {
        const data = response.data;
        const exerciseDetails = data.map(exercise => {
            return `
                <h2>${exercise.name}</h2>
                <p>Type: ${exercise.type}</p>
                <h6>Equipment: ${exercise.equipment}</h6>
                <h5>Difficult: ${exercise.difficulty}</h5>
                <p>Instructions: ${exercise.instructions}</p>
                <hr>
            `;
        }).join('');

        exerciseDetailsBox.innerHTML = exerciseDetails;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        exerciseDetailsBox.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });
});
