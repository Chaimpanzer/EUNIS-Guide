// Table en mémoire (question, réponse)
let history = [];
let currentPhase = 1;
let currentLevel2 = null;

// Trouve question par id
function getQuestionById(id) {
  return data.questions.find(q => q.id === id);
}

// Affiche une question avec ses réponses
function displayQuestion(id) {
  const question = getQuestionById(id);
  renderQuestion(question, 1);
}

// --- AFFICHAGE PHASE 2 ---
function getLevel2QuestionById(stateKey, id) {
  return data.level2[stateKey]?.questions.find(q => q.id === id);
}

function displayLevel2Question(stateKey, id) {
  currentPhase = 2;
  currentLevel2 = stateKey;
  const question = getLevel2QuestionById(stateKey, id);
  renderQuestion(question, 2);
}

// --- RENDU UI ---
function renderQuestion(question, phase) {
  const questionDiv = document.getElementById('question');
  const answersDiv = document.getElementById('answers');
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = '';
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
      history.push({ phase, question: question.text, answer: answer.text });
      goToNext(answer.next, phase);
    });
    answersDiv.appendChild(btn);
  });

    // Bouton retour
  const backBtn = document.createElement('button');
  backBtn.className = 'answer-btn';
  backBtn.textContent = '⬅ Retour';
  backBtn.addEventListener('click', () => goBack());
  answersDiv.appendChild(backBtn);
}


// --- NAVIGATION ---
function goToNext(next, phase) {
  const resultDiv = document.getElementById('result');
  const questionDiv = document.getElementById('question');
  const answersDiv = document.getElementById('answers');

  if (phase === 1) {
    if (data.states[next]) {
      localStorage.setItem('phase1', next);
      questionDiv.textContent = '';
      answersDiv.innerHTML = '';
      resultDiv.textContent = `Résultat phase 1 : ${data.states[next]} (code : ${next})`;

      if (data.level2[next]) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'answer-btn';
        nextBtn.textContent = '➡ Passer à l’étape 2';
        nextBtn.addEventListener('click', () => {
          displayLevel2Question(next, data.level2[next].questions[0].id);
        });
        answersDiv.appendChild(nextBtn);
      }

      addSaveButton(answersDiv);
      return;
    }
    displayQuestion(next);
  }

  if (phase === 2) {
    const state = data.level2[currentLevel2]?.states[next];
    if (state) {
      localStorage.setItem('phase2', next);
      questionDiv.textContent = '';
      answersDiv.innerHTML = '';
      resultDiv.textContent = `Résultat phase 2 : ${state} (code : ${next})`;

      if (data.level3 && data.level3[next]) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'answer-btn';
        nextBtn.textContent = '➡ Passer à l’étape 3';
        nextBtn.addEventListener('click', () => {
          displayLevel3Question(next, data.level3[next].questions[0].id);
        });
        answersDiv.appendChild(nextBtn);
      }

      addSaveButton(answersDiv);
      return;
    }
    displayLevel2Question(currentLevel2, next);
  }

  if (phase === 3) {
    const state = data.level3[currentLevel3]?.states[next];
    if (state) {
      localStorage.setItem('phase3', next);
      questionDiv.textContent = '';
      answersDiv.innerHTML = '';
      resultDiv.textContent = `Résultat final étape 3 : ${state} (code : ${next})`;
      addSaveButton(answersDiv);
      return;
    }
    displayLevel3Question(currentLevel3, next);
  }
}

// --- ÉTAPE 3 ---
let currentLevel3 = null;

function getLevel3QuestionById(stateKey, id) {
  return data.level3[stateKey]?.questions.find(q => q.id === id);
}

function displayLevel3Question(stateKey, id) {
  currentPhase = 3;
  currentLevel3 = stateKey;
  const question = getLevel3QuestionById(stateKey, id);
  renderQuestion(question, 3);
}



// --- SAUVEGARDE ---
function addSaveButton(container) {
  const saveBtn = document.createElement('button');
  saveBtn.className = 'answer-btn';
  saveBtn.textContent = '💾 Sauvegarder la progression';
  saveBtn.addEventListener('click', () => {
    localStorage.setItem('progress', JSON.stringify(history));
    alert('Progression sauvegardée !');
  });
  container.appendChild(saveBtn);
}

// --- RETOUR EN ARRIÈRE ---
function goBack() {
  if (history.length === 0) return;

  history.pop(); // Supprime la dernière réponse
  const last = history[history.length - 1];

  if (!last) {
    // Revenir au tout début
    currentPhase = 1;
    displayQuestion("1");
    return;
  }

  if (last.phase === 1) {
    currentPhase = 1;
    displayQuestionByText(last.question);
  } else {
    currentPhase = 2;
    displayQuestionByText(last.question, currentLevel2);
  }
}

function displayQuestionByText(questionText, level2Key = null) {
  let question;
  if (!level2Key) {
    question = data.questions.find(q => q.text === questionText);
    displayQuestion(question.id);
  } else {
    question = data.level2[level2Key].questions.find(q => q.text === questionText);
    displayLevel2Question(level2Key, question.id);
  }
}

function displayQuestionByText(questionText, level2Key = null) {
  let question;
  if (!level2Key) {
    question = data.questions.find(q => q.text === questionText);
    displayQuestion(question.id);
  } else {
    question = data.level2[level2Key].questions.find(q => q.text === questionText);
    displayLevel2Question(level2Key, question.id);
  }
}

// Démarrer phase 1
displayQuestion("1");



