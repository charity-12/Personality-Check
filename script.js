document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let introvertCount = 0;
    let extrovertCount = 0;
    let ambivertCount = 0;

    // Loop through the form questions
    for (let i = 1; i <= 15; i++) {
        let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === 'Introvert') {
                introvertCount++;
            } else if (selectedAnswer.value === 'Extrovert') {
                extrovertCount++;
            } else {
                ambivertCount++;
            }
        }
    }

    // Determine the personality type
    let personality = '';
    let careerSuggestion = '';

    if (introvertCount > extrovertCount && introvertCount > ambivertCount) {
        personality = 'Introvert';
        careerSuggestion = 'Consider careers in research, writing, software development, or roles where deep focus is valued.';
    } else if (extrovertCount > introvertCount && extrovertCount > ambivertCount) {
        personality = 'Extrovert';
        careerSuggestion = 'You might excel in sales, management, public relations, or any role that involves interacting with people frequently.';
    } else {
        personality = 'Ambivert';
        careerSuggestion = 'You are adaptable! You could thrive in a variety of careers, such as project management, consulting, or entrepreneurship.';
    }

    // Display the result
    document.getElementById('personality-type').innerText = personality;
    document.getElementById('career-suggestion').innerText = careerSuggestion;
    document.getElementById('result').classList.remove('hidden');
});
