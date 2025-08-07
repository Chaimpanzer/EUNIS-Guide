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

  // PHASE 2 : 
  level2: {
    A: { // Questions et réponses pour le niveau A
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
    },
    B: { // Questions et réponses pour le niveau B
    questions: [
      {
        id: "Bun", // Question unique de l'étape B
        text: "Type de substrat sous-jacent",
        answers: [
          { text: "Sable", next: "B1" },
          { text: "Galets et cailloutis", next: "B2" },
          { text: "Rocheux", next: "B3" }
        ]
      }
    ],
    states: {
      B1: "Dunes côtières et rivages sableux",
      B2: "Galets côtiers",
      B3: "Falaises, corniches et rivages rocheux, incluant le supralittoral"
    }
  },
  C: { // Questions et réponses pour le niveau C
    questions: [ 
      {id: "Cun", text: "Eau peu profonde avec végétation émergée en bordure, périodiquement inondée ou rives à forte humidité",answers: [
          { text: "Oui", next: "C3" },
          { text: "Non", next: "Cdeux" }
      ]},
      { id: "Cdeux", text: "Eaux dormantes ou courantes", answers: [
          { text: "Dormantes", next: "C1" },
          { text: "Courantes", next: "C2" }
        ]}],
    states: { 
      C1: "Eaux dormantes de surface",
      C2: "Eaux courantes de surface",
      C3:"Zones littorales des eaux de surface continentales",
    }
  },
    D: { // Questions et réponses pour le niveau D
    questions: [ 
      {id: "Dun", text: "Sources d'eau",answers: [
          { text: "Eau de pluie uniquement", next: "D1" },
          { text: "Autres", next: "Ddeux" }
      ]},
      { id: "Ddeux", text: "Formation de tourbe à la surface de l'eau", answers: [
          { text: "Oui", next: "D2" },
          { text: "Non", next: "Dtrois" }
   ]},
         { id: "Dtrois", text: "Acide", answers: [
          { text: "Oui", next: "D2" },
          { text: "Non", next: "Dquatre" }
   ]},
         { id: "Dquatre", text: "Salé ou saumâtre", answers: [
          { text: "Oui", next: "D6" },
          { text: "Non", next: "Dcinq" }
   ]},
         { id: "Dcinq", text: "Dominé par quelques espèces de grandes hélophytes", answers: [
          { text: "Oui", next: "D5" },
          { text: "Non", next: "D4" }
   ]}],
   states: { 
      D1: "Tourbières hautes et tourbières de couverture",
      D2: "Tourbières de vallées, bas-marais acides et tourbières de transition",
      D3: "ABCD",
      D4:"Bas-marais riches en bases et tourbières des sources calcaires",
      D5: "Roselières sèches et cariçaies, normalement sans eau libre",
      D6: "Marais continentaux salés et saumâtres et roselières",
    }
  },
  E: { // Questions et réponses pour le niveau E
    questions: [ 
      {id: "Eun", text: "Présence significative d'arbres",answers: [
          { text: "Oui", next: "E7" },
          { text: "Non", next: "Edeux" }
      ]},
      { id: "Edeux", text: "Salé", answers: [
          { text: "Oui", next: "E6" },
          { text: "Non", next: "Etrois" }
   ]},
         { id: "Etrois", text: "Espèces dominantes", answers: [
          { text: "Grandes herbacées non graminoïdes et fougères", next: "Equatre" },
          { text: "Autre", next: "Ecinq" }
   ]},
         { id: "Equatre", text: "Très sec avec des espèces inappétentes", answers: [
          { text: "Oui", next: "E1" },
          { text: "Non", next: "E5" }
   ]},
         { id: "Ecinq", text: "Zone climatique", answers: [
          { text: "Alpin", next: "E4" },
          { text: "Autre", next: "Esix" }
   ]},
            { id: "Esix", text: "Gradient d'humidité", answers: [
          { text: "Sec", next: "E1" },
          { text: "Mésique", next: "E2" },
          { text: "Humide", next: "E3" }
   ]}],
   states: { 
      E1: "Pelouses sèches",
      E2: "Prairies mésiques",
      E3: "Prairies humides et prairies humides saisonnières",
      E4: "Pelouses alpines et subalpines",
      E5: "Ourlets, clairières forestières et peuplements de grandes herbacées non graminoïdes",
      E6: "Steppes salées continentales",
      E7 : "Prairies peu boisées",
    }
  },
},
}