const data = {
  // PHASE 1: Questions et réponses
  "questions": [
    {"id":"1","text":"Habitats construits, très artificiels ou régulièrement cultivés","answers":[{"text":"Oui","next":"11"},{"text":"Non","next":"2"}]},
    {"id":"2","text":"Souterrains","answers":[{"text":"Oui","next":"H"},{"text":"Non","next":"3"}]},
    {"id":"3","text":"Marins","answers":[{"text":"Oui","next":"A"},{"text":"Non","next":"4"}]},
    {"id":"4","text":"Influence du littoral","answers":[{"text":"Oui","next":"B"},{"text":"Non","next":"5"}]},
    {"id":"5","text":"Eau libre et rives associées","answers":[{"text":"Oui","next":"C"},{"text":"Non","next":"6"}]},
    {"id":"6","text":"Dominés par les arbres","answers":[{"text":"Oui","next":"G"},{"text":"Non","next":"7"}]},
    {"id":"7","text":"Humidité","answers":[{"text":"Gorgée d'eau","next":"8"},{"text":"Autres","next":"9"}]},
    {"id":"8","text":"Végétation dominante","answers":[{"text":"Arbustes","next":"F"},{"text":"Autres","next":"D"}]},
    {"id":"9","text":"% du couvert végétal","answers":[{"text":"< 30 %","next":"H"},{"text":"> 30 %","next":"10"}]},
    {"id":"10","text":"Végétation dominante","answers":[{"text":"Arbustes ou arbustes nains","next":"F"},{"text":"Autres","next":"E"}]},
    {"id":"11","text":"Régulièrement cultivés","answers":[{"text":"Oui","next":"12"},{"text":"Non","next":"13"}]},
    {"id":"12","text":"Types de végétation","answers":[{"text":"Herbacées","next":"I"},{"text":"Arbres","next":"G"},{"text":"Arbustes","next":"F"}]},
    {"id":"13","text":"Aquatiques","answers":[{"text":"Oui","next":"14"},{"text":"Non","next":"J"}]},
    {"id":"14","text":"Faune ou flore aquatique semi-naturelle","answers":[{"text":"Oui","next":"15"},{"text":"Non","next":"J"}]},
    {"id":"15","text":"Marins","answers":[{"text":"Oui","next":"A"},{"text":"Non","next":"C"}]},
  ],

  // PHASE 1 : États finaux
   states: {
    A: "Habitats marins",
    B: "Habitats côtiers",
    C: "Eaux de surface continentales",
    D: "Tourbières hautes et bas-marais",
    E: "Prairies ; terrains dominés par des herbacées non graminées, des mousses ou des lichens",
    F: "Landes, fourrés et toundras",
    G: "Boisements, forêts et autres habitats boisés",
    H: "Habitats continentaux sans végétation ou à végétation clairsemée",
    I: "Habitats agricoles, horticoles et domestiques régulièrement cultivés",
    J: "Zones bâties, sites industriels et autres habitats artificiels"
  },

  // PHASE 2 : Sous-arbre pour l’état A uniquement
  level2: {
    A: {
      questions: [
        { id: "Aun", text: "Strate", answers: [
          { text: "Colonne d'eau", next: "A7" },
          { text: "Benthique", next: "Adeux" }
        ]},
        { id: "Adeux", text: "Toujours immergés", answers: [
          { text: "Non", next: "Atrois" },
          { text: "Oui", next: "Aquatre" }
        ]},
        { id: "Atrois", text: "Substrat", answers: [
          { text: "Immobile", next: "A1" },
          { text: "Mobile", next: "A2" }
        ]},
        { id: "Aquatre", text: "Plateau continental", answers: [
          { text: "Oui", next: "Acinq" },
          { text: "Non", next: "A6" }
        ]},
        { id: "Acinq", text: "Substrat", answers: [
          { text: "Immobile", next: "Asix" },
          { text: "Mobile", next: "A5" }
        ]},
        { id: "Asix", text: "Caractérisé par des macroalgues", answers: [
          { text: "Oui", next: "A3" },
          { text: "Non", next: "A4" }
        ]}
      ],
      // États finaux pour le niveau A
      states: {
        A1: "Roche et autres substrats durs intertidaux",
        A2: "Sédiment intertidal",
        A3: "Roche et autres substrats durs infralittoraux",
        A4: "Roche et autres substrats durs circalittoraux",
        A5: "Sédiment subtidal",
        A6: "Habitats profonds",
        A7: "Habitats pélagiques"
      }
    }
  }
};