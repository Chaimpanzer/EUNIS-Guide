// Table en mémoire (question, réponse)
let history = [];

// Trouve question par id
function getQuestionById(id) {
  return data.questions.find(q => q.id === id);
}

// Affiche une question avec ses réponses
function displayQuestion(id) {
  const question = getQuestionById(id);
  const questionDiv = document.getElementById('question');
  const answersDiv = document.getElementById('answers');
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = ''; // clear result if any
  if (!question) {
    questionDiv.textContent = "Question non trouvée.";
    answersDiv.innerHTML = '';
    return;
  }

  questionDiv.textContent = question.text;
  answersDiv.innerHTML = '';

  question.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => {
      // Enregistrer la réponse dans history
      history.push({question: question.text, answer: answer.text});
      // Passer à la suite
      goToNext(answer.next);
    });
    answersDiv.appendChild(btn);
  });
}

// Gestion passage à la prochaine étape
function goToNext(next) {
  const resultDiv = document.getElementById('result');
  // Si next est une lettre, état final
  if (data.states[next]) {
    document.getElementById('question').textContent = '';
    document.getElementById('answers').innerHTML = '';
    resultDiv.textContent = `Résultat final : ${data.states[next]} (code : ${next})`;
    console.log("Historique des réponses :", history);
    return;
  }

  // Sinon next est un id de question
  displayQuestion(next);
}

// Démarrer avec la question id=1
displayQuestion("1");
