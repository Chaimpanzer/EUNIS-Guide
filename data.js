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
  B2: { // Niveau B2
    questions: [
      { id: "B2q1", text: "Laisse de mer", answers: [
        { text: "Oui", next: "B2.1" },
        { text: "Non", next: "B2q2" }
      ]},
      { id: "B2q2", text: "Avec de la végétation", answers: [
        { text: "Oui", next: "B2q3" },
        { text: "Non", next: "B2.2" }
      ]},
      { id: "B2q3", text: "Galets et cailloutis stabilisés par la végétation", answers: [
        { text: "Oui", next: "B2q4" },
        { text: "Non", next: "B2.3" }
      ]},
      { id: "B2q4", text: "Strate végétale", answers: [
        { text: "Herbes", next: "B2.4" },
        { text: "Arbustes", next: "B2.5" },
        { text: "Arbres", next: "B2.6" },
      ]},
    ],
    states: {
      'B2.1': 'Laisses de mer des plages de galets',
      'B2.2': 'Plages de galets mobiles sans végétation au-dessus du niveau des laisses de mer',
      'B2.3': 'Partie supérieure des plages de galets avec végétation ouverte',
      'B2.4': 'Plages de galets fixées à végétation herbacée',
      'B2.5': 'Plages de galets et de graviers à arbustes',
      'B2.6': 'Boisements des plages de galets et de graviers',
    }
  }, 
    B3: { // Niveau B3
    questions: [
      { id: "B3q1", text: "Zone humectée par les embruns", answers: [
        { text: "Oui", next: "B3.1" },
        { text: "Non", next: "B3q2" }
      ]},
      { id: "B3q2", text: "Roche dure", answers: [
        { text: "Oui", next: "B3q3" },
        { text: "Non", next: "B3.4" }
      ]},
      { id: "B3q3", text: "Avec de la végétation", answers: [
        { text: "Oui", next: "B3.3" },
        { text: "Non", next: "B3.2" }
      ]},
    ],
    states: {
      'B3.1': 'Roche supralittorale (zone à lichens ou à embruns)',
      'B3.2': 'Falaises, corniches, rivages et îlots rocheux sans végétation',
      'B3.3': 'Falaises, corniches et rivages rocheux à Angiospermes',
      'B3.4': 'Falaises littorales à substrat meuble, souvent avec un couvert végétal',
    }
  }, 
      C1: { // Niveau C1
    questions: [
      { id: "C1q1", text: "Temporaire", answers: [
        { text: "Oui", next: "C1.6" },
        { text: "Non", next: "C1q2" }
      ]},
      { id: "C1q2", text: "Salé", answers: [
        { text: "Oui", next: "C1.5" },
        { text: "Non", next: "C1q3" }
      ]},
      { id: "C1q3", text: "État trophique", answers: [
        { text: "Dystrophe", next: "C1.4" },
        { text: "Eutrophe", next: "C1.3" },
        { text: "Mésotrophe", next: "C1.2" },
        { text: "Oligotrophe", next: "C1.1" }
      ]},
    ],
    states: {
      'C1.1': 'Lacs, étangs et mares oligotrophes permanents',
      'C1.2': 'Lacs, étangs et mares mésotrophes permanents',
      'C1.3': 'Lacs, étangs et mares eutrophes permanents',
      'C1.4': 'Lacs, étangs et mares permanents dystrophes',
      'C1.5': 'Lacs, étangs et mares continentaux salés et saumâtres permanents',
      'C1.6': 'Lacs, étangs et mares temporaires',
    }
  }, 
        C2: { // Niveau C2
    questions: [
      { id: "C2q1", text: "Temporaire", answers: [
        { text: "Oui", next: "C2.5" },
        { text: "Non", next: "C2q2" }
      ]},
      { id: "C2q2", text: "Sources", answers: [
        { text: "Oui", next: "C2.1" },
        { text: "Non", next: "C2q3" }
      ]},
      { id: "C2q3", text: "Film d'eau sur la roche", answers: [
        { text: "Oui", next: "C2.6" },
        { text: "Non", next: "C2q4" }
      ]},
        { id: "C2q4", text: "Marée", answers: [
        { text: "Oui", next: "C2.4" },
        { text: "Non", next: "C2q5" }
      ]},
        { id: "C2q5", text: "Écoulement", answers: [
        { text: "Lent à laminaire", next: "C2.3" },
        { text: "Rapide et turbulent", next: "C2.2" }
      ]},
    ],
    states: {
      'C2.1': 'Sources, ruisseaux de sources et geysers',
      'C2.2': "Cours d'eau permanents, non soumis aux marées, à écoulement turbulent et rapide",
      'C2.3': "Cours d'eau permanents non soumis aux marées, à débit régulier",
      'C2.4': "Fleuves et rivières tidaux en amont de l'estuaire",
      'C2.5': 'Eaux courantes temporaires',
      'C2.6': "Films d'eau coulant sur les marges d'un cours d'eau rocheux",
    }
  }, 
  C3: { // Niveau C3
    questions: [
      { id: "C3q1", text: "Dépendant de la bruine", answers: [
        { text: "Oui", next: "C3.8" },
        { text: "Non", next: "C3q2" }
      ]},
      { id: "C3q2", text: "Végétation riveraine permanente", answers: [
        { text: "Oui", next: "C3q5" },
        { text: "Non", next: "C3q3" }
      ]},
      { id: "C3q3", text: "Végétation éphémère", answers: [
        { text: "Oui", next: "C3.5" },
        { text: "Non", next: "C3q4" }
      ]},
        { id: "C3q4", text: "Substrat", answers: [
        { text: "Sédiments mobiles", next: "C3.6" },
        { text: "Sédiments non mobiles", next: "C3.7" }
      ]},
        { id: "C3q5", text: "Diversité spécifique", answers: [
        { text: "Forte", next: "C3.1" },
        { text: "Faible", next: "C3q6" }
      ]},
        { id: "C3q6", text: "Espèce dominante", answers: [
        { text: "Cannes", next: "C3.3" },
        { text: "Autres", next: "C3q7" }
      ]},
        { id: "C3q7", text: "Forme de croissance", answers: [
        { text: "Haute", next: "C3.2" },
        { text: "Basse", next: "C3.4" }
      ]},
    ],
    states: {
      'C3.1': 'Formations à hélophytes riches en espèces',
      'C3.2': "Roselières et formations de bordures à grands hélophytes autres que les roseaux",
      'C3.3': "Formations riveraies à grandes Cannes",
      'C3.4': "Végétations à croissance lente, pauvres en espèces, du bord des eaux ou amphibies",
      'C3.5': 'Berges périodiquement inondées à végétation pionnière et éphémère',
      'C3.6': "Berges nues ou à végétation clairsemées avec des sédiments meubles ou mobiles",
      'C3.7': 'Berges nues ou à végétation clairsemée avec des sédiments non mobiles',
      'C3.8': "Habitats continentaux dépendants de la bruine",
    }
  }, 
    D1: { // Niveau D1
    questions: [
      { id: "D1q1", text: "Dépendante du relief", answers: [
        { text: "Oui", next: "D1.1" },
        { text: "Non", next: "D1.2" }
      ]},
    ],
    states: {
      'D1.1': 'Tourbières hautes',
      'D1.2': "Tourbières de couverture",
            }
  },
    D2: { // Niveau D2
    questions: [
      { id: "D2q1", text: "Nappe phréatique", answers: [
        { text: "Sous le niveau du sol", next: "D2q2" },
        { text: "Au niveau du sol", next: "D2q3" }
      ]},
        { id: "D2q2", text: "Origine de l'eau", answers: [
        { text: "Cours d'eau", next: "D2.1" },
        { text: "Sources et ruissellements localisés", next: "D2.2" }
      ]},
        { id: "D2q3", text: "écoulement", answers: [
        { text: "Sol gorgé d'eau", next: "D2.3" },
        { text: "Sources et ruissellements localisés", next: "D2.2"}
      ]},
    ],
    states: {
      'D2.1': 'Tourbières de vallée',
      'D2.2': "Bas-marais oligotrophes et tiurbières des sources d'eau douce",
      'D2.3': "Tourbières de transition et tourbières tremblantes",
            }
  },
    D4: { // Niveau D4
    questions: [
      { id: "D4q1", text: "Flore arctico-montagnarde", answers: [
        { text: "Oui", next: "D4.2" },
        { text: "Non", next: "D4.1" }
      ]},
    ],
    states: {
      'D4.1': 'Bas-marais riches en bases, y compris les bas-marais eutrophes à hautes herbes, suintements et ruissellements calcaires',
      'D4.2': "Communautés riveraines des sources et des ruisseaux de montagnes calcaires, avec une riche flore arctico-montagnarde",
            }
  },
    D5: { // Niveau D5
    questions: [
      { id: "D5q1", text: "Végétation dominante", answers: [
        { text: "Roseaux", next: "D5.1" },
        { text: "Carex", next: "D5.2" },
        { text: "Joncs", next: "D5.3" }
      ]},
    ],
    states: {
      'D5.1': 'Roselières normalement sans eau libre',
      'D5.2': "Formations à grandes Cypéracées normalement sans eau libre",
      'D5.3': "Zones marécageuses dominées par les Juncus effusus ou d'autres grands Juncus",
            }
  },
    D6: { // Niveau D6
    questions: [
      { id: "D6q1", text: "Végétation haute", answers: [
        { text: "Oui", next: "D6.2" },
        { text: "Non", next: "D6.1" }
      ]},
    ],
    states: {
      'D6.1': 'Marais salés continentaux',
      'D6.2': "Nappes d'hélophytes, salines ou saumâtres, pauvres en espèces, normalement sans eau libre",
            }
  },
      E1: { // Niveau E1
    questions: [
      { id: "E1q1", text: "Sols métallifères", answers: [
        { text: "Oui", next: "E1.B" },
        { text: "Non", next: "E1q2" }
      ]},
      { id: "E1q2", text: "Méditerranéen, aride et surpâturé", answers: [
        { text: "Oui", next: "E1.C" },
        { text: "Non", next: "E1q3" }
      ]},
      { id: "E1q3", text: "Type de sol", answers: [
        { text: "Riche en base", next: "E1q4" },
        { text: "Déficit en base", next: "E1q9" }
      ]},
      { id: "E1q4", text: "Sol embryonnaire et végétation ouverte", answers: [
        { text: "Oui", next: "E1.1" },
        { text: "Non", next: "E1q5" }
      ]},
      { id: "E1q5", text: "Régions géographiques", answers: [
        { text: "Némorale et steppe", next: "E1.2" },
        { text: "Méditerranéenne", next: "E1q6" }
      ]},
      { id: "E1q6", text: "Annuelles nitrophiles", answers: [
        { text: "Oui", next: "E1.6" },
        { text: "Non", next: "E1q7" }
      ]},
      { id: "E1q7", text: "Montagne", answers: [
        { text: "Oui", next: "E1.5" },
        { text: "Non", next: "E1q8" }
      ]},
      { id: "E1q8", text: "Hauteur de végétation", answers: [
        { text: "Haute", next: "E1.4" },
        { text: "Basse", next: "E1.3" }
      ]},
      { id: "E1q9", text: "Végétation ouverte", answers: [
        { text: "Oui", next: "E1q10" },
        { text: "Non", next: "E1q11" }
      ]},
      { id: "E1q10", text: "Région biogéographique", answers: [
        { text: "Autres", next: "E1.9" },
        { text: "Méditerranéenne", next: "E1.A" }
      ]},
      { id: "E1q11", text: "Région biogéographique", answers: [
        { text: "Méditerranéenne", next: "E1.8" },
        { text: "Autres", next: "E1.7" }
      ]},
    ],
    states: {
      'E1.A': 'Pelouses sèches, ouvertes, acides et neutres méditerranéennes',
      'E1.B': 'Pelouses des sols métallifères',
      'E1.C': "Habitats méditerranéens secs à végétation herbacée non-vernale inappétente",
      'E1.1': 'Végétations ouvertes des substrats sableux et rocheux continentaux',
      'E1.2': 'Pelouses calcaires vivaces et steppes riches en bases',
      'E1.3': "Pelouses xériques méditerranéennes",
      'E1.4': 'Steppes méditerranéennes à grandes graminées et Artemisia',
      'E1.5': 'Pelouses méditerranéo-montagnardes',
      'E1.6': 'Pelouses à annuelles subnitrophiles',
      'E1.7': 'Pelouses sèches acides et neutres fermées non-méditerranéennes',
      'E1.8': 'Pelouses fermées, sèches, acides et neutres méditerranéennes',
      'E1.9': 'Pelouses ouvertes, sèches, acides et neutres non-méditerranéennes, y compris les formations dunaires continentales',
     }
  },
  E2: { // Niveau E2
  questions: [
    { id: "E2q1", text: "Gestion intensive", answers: [
      { text: "Oui", next: "E2.6" },
      { text: "Non", next: "E2q2" }
    ]},
    { id: "E2q2", text: "Gestion dominante", answers: [
      { text: "Sans intervention", next: "E2.7" },
      { text: "Fauche principalement", next: "E2q3" },
      { text: "Pâture et éventuellement fauche", next: "E2.1" }
    ]},
    { id: "E2q3", text: "Altitude", answers: [
      { text: "Montagne", next: "E2.3" },
      { text: "Basse à moyenne", next: "E2.2" }
    ]}
  ],
  states: {
    'E2.1': "Pâturages permanents mésotrophes et prairies de post-pâturage",
    'E2.2': "Prairies de fauche de basse et moyenne altitude",
    'E2.3': "Prairies de fauche montagnardes",
    'E2.6': "Prairies améliorées, réensemencées et fortement fertilisées, y compris les terrains de sport et les pelouses ornementales",
    'E2.7': "Prairies mésiques non gérées",
  }
}  


}, 
  E3: { //niveau E3
      questions: [
    { id: "E3q1", text: "Climat", answers: [
      { text: "Méditerranéen", next: "E3q2" },
      { text: "Autre", next: "E3q3" }
    ]},
    { id: "E3q2", text: "Dessèchement estival", answers: [
      { text: "Oui", next: "E3.2" },
      { text: "Non", next: "E3.1" },
    ]},
    { id: "E3q3", text: "Oligotrophe", answers: [
      { text: "Oui", next: "E3.5" },
      { text: "Non", next: "E3.4" }
    ]} //fin derniere question
  ], //fin questions
    states: {
    'E3.1': "Prairies humides hautes méditerranéennes",
    'E3.2': "Prairies méditerranéennes humides rases",
    'E2.4': "Prairies eutrophes et mésotrophes humides ou mouilleuses",
    'E2.5': "Prairies oligotrophes humides ou mouilleuses",
  } //fin states du niveau en cours 
  }, // fin niveau en cours
  
    E4: { //niveau E4
      questions: [
    { id: "E4q1", text: "Couche de neige tardive", answers: [
      { text: "Oui", next: "E4.1" },
      { text: "Non", next: "E4q2" }
    ]},
    { id: "E4q2", text: "Dominés par les mousses et lichens", answers: [
      { text: "Oui", next: "E4.2" },
      { text: "Non", next: "E4q3" },
    ]},
    
    { id: "E4q3", text: "Enrichies", answers: [
      { text: "Oui", next: "E4.5" },
      { text: "Non", next: "E4q4" },
    ]},
    { id: "E4q4", text: "Type de sol", answers: [
      { text: "Riche en bases", next: "E4.4" },
      { text: "Acide", next: "E4.3" }
    ]} //fin derniere question
  ], //fin questions
    states: {
    'E4.1': "Combes à neige avec végétation",
    'E4.2': "Sommets, corniches et pentes eposées des montagnes, dominés par des mousses et es lichens",
    'E4.3': "Pelouses alpines et subalpines acidiphiles",
    'E4.4': "Pelouses alpines et subalpines calcicoles",
    'E4.5': "Prairies alpines et subalpines fertilisées",
  } //fin states du niveau en cours 
  }, // fin niveau en cours

  
E5: { //niveau E5
      questions: [
    { id: "E5q1", text: "Sols limoneux humides subalpins", answers: [
      { text: "Oui", next: "E5.5" },
      { text: "Non", next: "E5q2" }
    ]},
    { id: "E5q2", text: "Dominés par la fougère aigle", answers: [
      { text: "Oui", next: "E5.3" },
      { text: "Non", next: "E5q3" },
    ]},
    
    { id: "E5q3", text: "Forte anthropisation", answers: [
      { text: "Oui", next: "E5.1" },
      { text: "Non", next: "E5q4" },
    ]},
    { id: "E5q4", text: "Régime thermique", answers: [
      { text: "Thermophile", next: "E5.2" },
      { text: "Mésophile", next: "E5.4" }
    ]} //fin derniere question
  ], //fin questions
    states: {
    'E5.1': "Végétations herbacées anthropiques",
    'E5.2': "Ourlets forestiers thermophiles",
    'E5.3': "Formations à Pteridium aquilinum",
    'E5.4': "Lisières et prairies humides ou mouilleuses à grandes herbacées et à fougères",
    'E5.5': "Formations subalpines humides ou mouilleuses à grandes herbacées et à fougères",
  } //fin states du niveau en cours 
  }, // fin niveau en cours

E6: { //niveau E6
      questions: [
    { id: "E6q1", text: "Suivant", answers: [
      { text: "Suivant", next: "E6.1" },
    ]}, //fin derniere question
  ], //fin questions
    states: {
    'E6.1': "Steppes salées intérieures méditerranéennes",
  } //fin states du niveau en cours 
    }, // fin niveau en cours
  



  
  
E7: { //niveau E7
      questions: [
    { id: "E7q1", text: "Climat", answers: [
      { text: "Atlantique", next: "E7.1" },
      { text: "Sub-Continental", next: "E7.2" },
      { text: "Méditerranéen", next: "E7.3" }
    ]}, //fin derniere question
  ], //fin questions
    states: {
    'E7.1': "Parcs boisés atlantiques",
    'E7.2': "Parcs boisés subcontinentaux",
    'E7.3': "Dehesa",
  } //fin states du niveau en cours 
  }, // fin niveau en cours
}  // fin const data
