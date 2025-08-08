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
    F: { // Questions et réponses pour le niveau F
    questions: [ 
      {id: "Fun", text: "Ceinture étroite d'arbustes",answers: [
          { text: "Oui", next: "FA" },
          { text: "Non", next: "Fdeux" }
      ]},
      { id: "Fdeux", text: "Régulièrement cultivés ou plantés", answers: [
          { text: "Oui", next: "FB" },
          { text: "Non", next: "Ftrois" }
   ]},
         { id: "Ftrois", text: "Sur sol engorgé ou en bordure d'une masse d'eau", answers: [
          { text: "Oui", next: "F9" },
          { text: "Non", next: "Fquatre" }
   ]},
         { id: "Fquatre", text: "Strate de végétation dominante", answers: [
          { text: "Autres", next: "Fcinq" },
          { text: "Fourrés épineux formant des coussins", next: "F7" }
   ]},
         { id: "Fcinq", text: "Climat", answers: [
          { text: "Froid à froid tempéré", next: "F2" },
          { text: "Tempéré ou méditerranéo-montagnard", next: "Fsix" },
          { text: "Méditerranéen ou subdésertique", next: "Fsept" }
   ]},
         { id: "Fsix", text: "Type de végétation dominante", answers: [
          { text: "Autre", next: "F3" },
          { text: "Éricoïde", next: "F4" },
          { text: "Sclérophylle", next: "F6" }
   ]},
         { id: "Fsept", text: "Structure", answers: [
          { text: "Ouverte", next: "F6" },
          { text: "Fermée", next: "F5" }
   ]}],
   states: { 
      FA: "Haies",
      FB: "Plantations d'arbustes",
      F2: "Fourrés arctiques, alpins et subalpins",
      F3: "Fourrés tempérés et méditerranéo-montagnards",
      F4: "Landes arbustives tempérées",
      F5: "Maquis, matorrals arborescents et fourrés thermo-méditerranéens",
      F6 : "Garrigues",
      F7 : "Landes épineuses méditerranéennes (phryganes, landes-hérissons et végétations apparentées des falaises littorales)",
      F9 : "Fourrés ripicoles et des bas-marais",
    }
  },
    G: { // Questions et réponses pour le niveau G
    questions: [ 
      {id: "Gun", text: "Type de boisement",answers: [
          { text: "Autre", next: "G5" },
          { text: "Forestier", next: "Gdeux" }
      ]},
      { id: "Gdeux", text: "Types d'arbres caractéristiques", answers: [
          { text: "Feuillus caducifoliés", next: "G1" },
          { text: "Feuillus sempervirents", next: "G2" },
          { text: "Conifères", next: "G3" },
          { text: "Mélanges", next: "G4" }
   ]}],
   states: { 
      G1: "Forêts de feuillus caducifoliés",
      G2: "Forêts de feuillus sempervirents",
      G3: "Forêts de conifères",
      G4: "Formations mixtes d'espèces caducifoliées et de conifères",
      G5: "Alignements d'arbres, petits bois anthropiques, boisements récemment abattus, stades initiaux de boisements et taillis",
    }
  },
    H: { // Questions et réponses pour le niveau H
    questions: [ 
      {id: "Hun", text: "De surface ou souterrains",answers: [
          { text: "Souterrains", next: "H1" },
          { text: "Surface", next: "Hdeux" }
      ]},
      { id: "Hdeux", text: "Substrat", answers: [
          { text: "Neige et glace", next: "H4" },
          { text: "Origine volcanique récente", next: "H6" },
          { text: "Autre", next: "Htrois" }
   ]},
         {id: "Htrois", text: "Roche-mère",answers: [
          { text: "Oui", next: "H3" },
          { text: "Non", next: "Hquatre" }
      ]},
        {id: "Hquatre", text: "Pente raide et rochers mobiles",answers: [
          { text: "Oui", next: "H2" },
          { text: "Non", next: "H5" }
      ]}],
   states: { 
      H1: "Grottes, systèmes de grottes, passages et plans d'eau souterrains terrestres",
      H2: "Éboulis",
      H3: "Falaises continentales, pavements rocheux et affleurements rocheux",
      H4: "Habitats dominés par la neige ou la glace",
      H5: "Habitats continentaux divers sans végétation ou à végétation clairsemée",
      H6: "Reliefs volcaniques récents",
    }
  },
   I: { // Questions et réponses pour le niveau I
    questions: [ 
      {id: "Iun", text: "Usage",answers: [
          { text: "Agriculture ou horticulture commerciale", next: "I1" },
          { text: "Ornemental ou à proximité des habitations", next: "I2" }
      ]}],
   states: { 
      I1: "Cultures et jardins maraîchers",
      I2: "Zones cultivées des jardins et parcs",
    }
  },
   J: { // Questions et réponses pour le niveau J
    questions: [ 
      {id: "Jun", text: "Aquatiques",answers: [
          { text: "Oui", next: "J5" },
          { text: "Non", next: "Jdeux" }
      ]},
      {id: "Jdeux", text: "Déchets",answers: [
          { text: "Oui", next: "J6" },
          { text: "Non", next: "Jtrois" }
      ]},
      {id: "Jtrois", text: "Usage",answers: [
          { text: "Transports, loisirs, cimetières", next: "J4" },
          { text: "Industries extracives", next: "J3" },
          { text: "Autre", next: "Jquatre" },
      ]},
      {id: "Jquatre", text: "Densité",answers: [
          { text: "Moyenne à forte", next: "J1" },
          { text: "Basse", next: "J2" }
      ]}],
   states: { 
      J1: "Bâtiments des villes et des villages",
      J2: "Constructions à faible densité",
      J3: "Sites industriels d'extraction",
      J4: "Réseaux de transport et autres zones de construction à surface dure",
      J5: "Plans d'eau constuits très artificiels et structures connexes",
      J6: "Dépôts de déchets",
    }
  },
},
level3: { // Questions et réponses pour le niveau 3
  A1: { // Niveau A1
    questions: [
      { id: "A1q1", text: "Espèces végétales annuelles opportunistes", answers: [
        { text: "Oui", next: "A1.4" },
        { text: "Non", next: "A1q2" }
      ]},
      { id: "A1q2", text: "Grottes/surplombs", answers: [
        { text: "Oui", next: "A1.4" },
        { text: "Non", next: "A1q3" }
      ]},
      { id: "A1q3", text: "Cuvettes et mares permanentes", answers: [
        { text: "Oui", next: "A1.4" },
        { text: "Non", next: "A1q4" }
      ]},
      { id: "A1q4", text: "Hydrodynamisme", answers: [
        { text: "Fort", next: "A1.1" },
        { text: "Modéré", next: "A1.2" },
        { text: "Faible à négligeable", next: "A1.3" }
      ]},
    ],
    states: {
      'A1.1': "Roche intertidale sous fort hydrodynamisme",
      'A1.2': "Roche intertidale sous hydrodynamisme modéré",
      'A1.3': "Roche intertidale sous faible hydrodynamisme",
      'A1.4': "Habitats rocheux intertidaux particuliers",
    }
  },

    A2: { // Niveau A2
    questions: [
      { id: "A2q1", text: "Se développant autour de sources de fluides", answers: [
        { text: "Oui", next: "A2.8" },
        { text: "Non", next: "A2q2" }
      ]},
      { id: "A2q2", text: "Algues annuelles et opportunistes", answers: [
        { text: "Oui", next: "A2.8" },
        { text: "Non", next: "A2q3" }
      ]},
      { id: "A2q3", text: "Présence d'angiospermes", answers: [
        { text: "Oui", next: "A2q4" },
        { text: "Non", next: "A2q5" }
      ]},
      { id: "A2q4", text: "Dominance d'angiospermes", answers: [
        { text: "Terrestres", next: "A2.5" },
        { text: "Aquatiques", next: "A2.6" }
      ]},
      { id: "A2q5", text: "Substrat", answers: [
        { text: "Gravier ou sable grossier", next: "A2.1" },
        { text: "Sable fin ou sable vaseux", next: "A2.2" },
        { text: "Vase", next: "A2.3" },
        { text: "Combinaison de substrats", next: "A2.4" },
        { text: "Biogénique", next: "A2.7" }
      ]},
    ],
    states: {
      'A2.1': "Sédiments grossiers intertidaux",
      'A2.2': "Sables et sables vaseux intertidaux",
      'A2.3': "Vase intertidale",
      'A2.4': "Sédiments hétérogènes intertidaux",
      'A2.5': "Marais salés côtiers et roselières salines",
      'A2.6': "Sédiments intertidaux dominés par des Angiospermes aquatiques",
      'A2.7': "Récifs biogènes intertidaux",
      'A2.8': "Habitats sédimentaires particuliers intertidaux",
    }
  },
  A3: { // Niveau A3
    questions: [
      { id: "A3q1", text: "Se développant autour de sources de fluides", answers: [
        { text: "Oui", next: "A3.7" },
        { text: "Non", next: "A3q2" }
      ]},
      { id: "A3q2", text: "Substrats artificiels récemment colonisés", answers: [
        { text: "Oui", next: "A3.7" },
        { text: "Non", next: "A3q3" }
      ]},
      { id: "A3q3", text: "Grottes, surplombs ou crevasses", answers: [
        { text: "Oui", next: "A3.7" },
        { text: "Non", next: "A3q4" }
      ]},
      { id: "A3q4", text: "Hydrodynamisme", answers: [
        { text: "Fort", next: "A3.1" },
        { text: "Modéré", next: "A3.2" },
        { text: "Faible à négligeable", next: "A3.3" }
      ]},
    ],
    states: {
      'A3.1': "Roche infralittorale de l'Atlantique et de la Méditerranée sous fort hydrodynamisme",
      'A3.2': "Roche infralittorale de l'Atlantique et de la Méditerranée sous hydrodynamisme modéré",
      'A3.3': "Roche infralittorale de l'Atlantique et de la Méditerranée sous faible hydrodynamisme",
      'A3.7': "Habitats particuliers rocheux infralittoraux",
    }
  },
    A4: { // Niveau A4
    questions: [
      { id: "A4q1", text: "Se développant autour de sources de fluides", answers: [
        { text: "Oui", next: "A4.7" },
        { text: "Non", next: "A4q2" }
      ]},
      { id: "A4q2", text: "Substrats artificiels récemment colonisés", answers: [
        { text: "Oui", next: "A4.7" },
        { text: "Non", next: "A4q3" }
      ]},
      { id: "A4q3", text: "Grottes, surplombs ou crevasses", answers: [
        { text: "Oui", next: "A4.7" },
        { text: "Non", next: "A4q4" }
      ]},
      { id: "A4q4", text: "Hydrodynamisme", answers: [
        { text: "Fort", next: "A4.1" },
        { text: "Modéré", next: "A4.2" },
        { text: "Faible à négligeable", next: "A4.3" }
      ]},
    ],
    states: {
      'A4.1': "Roche circalittorale de l'Atlantique et de la Méditerranée sous fort hydrodynamisme",
      'A4.2': "Roche circalittorale de l'Atlantique et de la Méditerranée sous hydrodynamisme modéré",
      'A4.3': "Roche circalittorale de l'Atlantique et de la Méditerranée sous faible hydrodynamisme",
      'A4.7': "Habitats rocheux circalittoraux particuliers",
    }
  },
  A5: { // Niveau A5
    questions: [
      { id: "A5q1", text: "Résurgences", answers: [
        { text: "Oui", next: "A5.7" },
        { text: "Non", next: "A5q2" }
      ]},
      { id: "A5q2", text: "Enrichi en matière organique ou anoxique", answers: [
        { text: "Oui", next: "A5.7" },
        { text: "Non", next: "A5q3" }
      ]},
      { id: "A5q3", text: "Dominé par les macrophytes", answers: [
        { text: "Oui", next: "A5.5" },
        { text: "Non", next: "A5q4" }
      ]},
      { id: "A5q4", text: "Substrat", answers: [
        { text: "Gravier ou sable grossier", next: "A5.1" },
        { text: "Sable fin ou sable vaseux", next: "A5.2" },
        { text: "Vase", next: "A5.3" },
        { text: "Combinaison de substrat", next: "A5.4" },
        { text: "Biogénique", next: "A5.6" }
      ]},
    ],
    states: {
      'A5.1': "Sédiment grossier intertidal",
      'A5.2': "Sable subtidal",
      'A5.3': "Vase subtidale",
      'A5.4': "Sédiments hétérogènes subtidaux ",
      'A5.5': "Sédiment subtidal dominé par des macrophytes",
      'A5.6': "Récifs biogènes subtidaux",
      'A5.7': "Habitats particuliers rocheux infralittoraux",
    }
  },
  A6: { // Niveau A6
  questions: [
    { 
      id: "A6q1", 
      text: "Caractérisé par des conditions chimiques", 
      answers: [
        { text: "Oui", next: "A6.9" },
        { text: "Non", next: "A6q2" }
      ]
    },
    { 
      id: "A6q2", 
      text: "Éléments remarquables du relief", 
      answers: [
        { text: "Dépression", next: "A6.8" },
        { text: "Prominence", next: "A6.7" },
        { text: "Plat", next: "A6q3" }
      ]
    },
    { 
      id: "A6q3", 
      text: "Substrat", 
      answers: [
        { text: "Roche", next: "A6.1" },
        { text: "Biogénique", next: "A6.6" },
        { text: "Hétérogènes/graviers", next: "A6.2" },
        { text: "Sable", next: "A6.3" },
        { text: "Sable vaseux", next: "A6.4" },
        { text: "Vase", next: "A6.5" }
      ]
    }
  ],
  states: {
    "A6.1": "Roche et substrats durs artificiels profonds",
    "A6.2": "Substrats hétérogènes profonds",
    "A6.3": "Sable profond",
    "A6.4": "Sable vaseux profond",
    "A6.5": "Vase profonde",
    "A6.6": "Biohermes profonds",
    "A6.7": "Reliefs proéminents profonds",
    "A6.8": "Fosses océaniques, canyons, chenaux, ruptures de pente et éboulements sur le talus continental",
    "A6.9": "Sources hydrothermales, sources de fluide froid, habitats hypoxiques et anoxiques des grands fonds"
  }
},
  A7: { // Niveau A7
  questions: [
    { 
      id: "A7q1", 
      text: "Habitats pélagiques", 
      answers: [
        { text: "Suivant", next: "A7.1" }
      ]
    }
  ],
  states: {
    "A7.1": "Neuston",
  }},
  B1: { // Niveau B1
    questions: [
      { id: "B1q1", text: "Topographie", answers: [
        { text: "Plus ou moins plane", next: "B1q2" },
        { text: "Dunes", next: "B1q3" }
      ]},
      { id: "B1q2", text: "Au-dessus de la laisse de mer", answers: [
        { text: "Oui", next: "B1.2" },
        { text: "Non", next: "B1.1" }
      ]},
      { id: "B1q3", text: "Humidité", answers: [
        { text: "Humide", next: "B1.8" },
        { text: "Sec", next: "B1q4" }
      ]},
      { id: "B1q4", text: "Mobile", answers: [
        { text: "Oui", next: "B1.3" },
        { text: "Non", next: "B1q5" }
      ]},
      { id: "B1q5", text: "Strate végétale", answers: [
        { text: "Herbes", next: "B1.4" },
        { text: "Arbustes nains", next: "B1.5" },
        { text: "Arbustes", next: "B1.6" },
        { text: "Arbres", next: "B1.7" },
      ]},
    ],
    states: {
      'B1.1': 'Laisses de mer des plages sableuses',
      'B1.2': 'Plages sableuses au-dessus de la laisse de mer',
      'B1.3': 'Dunes côtières mobiles',
      'B1.4': 'Pelouses des dunes côtières fixées (dunes grises)',
      'B1.5': 'Landes des dunes côtières',
      'B1.6': 'Fruticées des dunes côtières',
      'B1.7': 'Dunes côtières boisées',
      'B1.8': 'Pannes dunaires mouilleuses et humides',
    }
  },
},
}