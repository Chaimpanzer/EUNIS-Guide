let currentStep = 1; // Étape actuelle de l'arbre de décision
let etatFinal = ""; // Stockage de l'état A-J (niveau 1)
let currentStep2 = 1;



function cacherTousLesBoutons() {
  document.getElementById('Questionbase').style.display = 'none';
  document.getElementById('question6').style.display = 'none';
  document.getElementById('question12').style.display = 'none';
  document.getElementById('question13').style.display = 'none';
  document.getElementById('question14').style.display = 'none';
  document.getElementById('question15').style.display = 'none';
}

function afficherEtat(etat) {
  document.getElementById('questionBox').style.display = 'none';
  cacherTousLesBoutons();
  document.getElementById('etat').textContent = "Habitat identifié : État " + etat;
  etatFinal = etat; // Stocke l'état pour le niveau 2
  // Passe au niveau 2 après courte pause
  if (etat === 'A') {
    lancerNiveau2A();
  }
}



function afficherQuestion(text, bouton) {
  document.getElementById('questionBox').style.display = 'block';
  document.getElementById('questionText').textContent = text;
  cacherTousLesBoutons();
  document.getElementById(bouton).style.display = 'block';
}

// Réponses niveau 2
function repondreOuiNiveau2() {
  if (etatFinal === 'A') {
    if (currentStep2 === 1) {
      afficherEtatFinalNiveau2('A7'); // Là ça chie
    } else if (currentStep2 === 2) {
      currentStep2 = 4;
      afficherQuestion("A4 : Plateau continental ?", 'Questionbase');
    } else if (currentStep2 === 4) {
      currentStep2 = 5;
      afficherQuestion("A5 : Substrat ?", 'Questionbase');
    } else if (currentStep2 === 5) {
      afficherEtatFinalNiveau2('A5');
    } else if (currentStep2 === 6) {
      afficherEtatFinalNiveau2('A3');
    }
  }
}
function repondreNonNiveau2() {
  if (etatFinal === 'A') {
    if (currentStep2 === 1) {
      currentStep2 = 2;
      afficherQuestion("A2 : Toujours immergés ?", 'Questionbase');
    } else if (currentStep2 === 2) {
      currentStep2 = 3;
      afficherQuestion("A3 : Substrat ?", 'Questionbase');
    } else if (currentStep2 === 3) {
      afficherEtatFinalNiveau2('A1');
    } else if (currentStep2 === 4) {
      afficherEtatFinalNiveau2('A6');
    } else if (currentStep2 === 5) {
      currentStep2 = 6;
      afficherQuestion("A6 : Caractérisé par des microalgues ?", 'Questionbase');
    } else if (currentStep2 === 6) {
      afficherEtatFinalNiveau2('A4');
    }
  }
}


function afficherEtatFinalNiveau2(etat) {
  document.getElementById('questionBox').style.display = 'none';
  cacherTousLesBoutons();
  document.getElementById('etat').textContent = "Habitat final : " + etat;
}

// --- Arbre de décision ---
function repondreOui() {
  if (etatFinal && etatFinal === 'A') {
    repondreOuiNiveau2();
  return;
  }
  if (currentStep === 1) {
    currentStep = 2;
    afficherQuestion("Régulièrement cultivés ?", 'Questionbase');
  } else if (currentStep === 2) {
    currentStep = 6;
    afficherQuestion("Types de végétation ?", 'question6');
  } else if (currentStep === 3) {
    currentStep = 4;
    afficherQuestion("Faune ou flore aquatique ou semi-naturelle ?", 'Questionbase');
  } else if (currentStep === 4) {
    currentStep = 5;
    afficherQuestion("Marins ?", 'Questionbase');
  } else if (currentStep === 5) {
    afficherEtat('A');
  } else if (currentStep === 7) {
    afficherEtat('H');
  } else if (currentStep === 8) {
    afficherEtat('A');
  } else if (currentStep === 9) {
    afficherEtat('B');
  } else if (currentStep === 10) {
    afficherEtat('C');
  } else if (currentStep === 11) {
    afficherEtat('G');
  }

}




function repondreNon() {
  if (etatFinal && etatFinal === 'A') {
    repondreNonNiveau2();
  return;
  }
  if (currentStep === 1) {
    currentStep = 7;
    afficherQuestion("Souterrains ?", 'Questionbase');
  } else if (currentStep === 2) {
    currentStep = 3;
    afficherQuestion("Aquatiques ?", 'Questionbase');
  } else if (currentStep === 3 || currentStep === 4) {
    afficherEtat('J');
  } else if (currentStep === 5) {
    afficherEtat('C');
  } else if (currentStep === 7) {
    currentStep = 8;
    afficherQuestion("Marins ?", 'Questionbase');
  } else if (currentStep === 8) {
    currentStep = 9;
    afficherQuestion("Influence du littoral ?", 'Questionbase');
  } else if (currentStep === 9) {
    currentStep = 10;
    afficherQuestion("Eau libre et rives associées ?", 'Questionbase');
  } else if (currentStep === 10) {
    currentStep = 11;
    afficherQuestion("Dominé par les arbres ?", 'Questionbase');
  } else if (currentStep === 11) {
    currentStep = 12;
    afficherQuestion("Humidité ?", 'question12');
  }

}

// --- Question 6 ---
function repondreHerbacees() { afficherEtat('I'); }
function repondreArbres() { afficherEtat('G'); }
function repondreArbustes() { afficherEtat('F'); }

// --- Question 12 ---
function repondreAutres() {
  currentStep = 13;
  afficherQuestion("% du couvert végétal ?", 'question13');
}
function repondreGorgee() {
  currentStep = 14;
  afficherQuestion("Végétation dominante ?", 'question14');
}

// --- Question 13 ---
function repondreMoinsTrente() { afficherEtat('H'); }
function repondrePlusTrente() {
  currentStep = 15;
  afficherQuestion("Végétation dominante ?", 'question15');
}

// --- Question 14 ---
function repondreArbustes14() { afficherEtat('F'); }
function repondreAutre14() { afficherEtat('D'); }

// --- Question 15 ---
function repondreArbustes15() { afficherEtat('F'); }
function repondreAutre15() { afficherEtat('E'); }


function lancerNiveau2A() {
  currentStep2 = 1;
  afficherQuestion("A1 : Strate ?", 'Questionbase');
}








// Init
afficherQuestion("Habitats construits, très artificiels ou régulièrement cultivés ?", 'Questionbase');

