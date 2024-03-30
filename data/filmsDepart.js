const filmsDepart = [
    {
        titre: "Halloween",
        genres: ["Horreur", "Thriller", "Suspense"],
        description: "Un tueur masqué, Michael Myers, s'échappe d'un hôpital psychiatrique et retourne dans sa ville natale pour poursuivre la jeune Laurie Strode, jouée par Jamie Lee Curtis, dans un classique du cinéma d'horreur.",
        annee: "1978",
        acteurs: ["Jamie Lee Curtis", "Donald Pleasence", "Nick Castle"],
        realisation: "John Carpenter",
        titreVignette: "halloween.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Nowhere",
        genres: ["Mystère", "Drame", "Comédie"],
        description: "Ce film dépeint une journée dans la vie de plusieurs adolescents à Los Angeles, naviguant entre réalité et fantaisie, dans un voyage psychédélique et surréaliste.",
        annee: "1997",
        acteurs: ["James Duval", "Christina Applegate", "Rachel True"],
        realisation: "Gregg Araki",
        titreVignette: "nowhere.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Child's Play",
        genres: ["Horreur", "Thriller", "Comédie"],
        description: "Dans ce film d'horreur iconique, une poupée possédée par l'esprit d'un tueur en série nommé Chucky terrorise le jeune Andy Barclay, dans un mélange effrayant et amusant d'horreur et de comédie.",
        annee: "1988",
        acteurs: ["Catherine Hicks", "Chris Sarandon", "Alex Vincent"],
        realisation: "Tom Holland",
        titreVignette: "childplay.jpg",
        notes: [5, 5, 5, 5, 5]
    }
    
    ,
    {
        titre: "Paris, Texas",
        genres: ["Drame", "Road movie", "Psychologique"],
        description: "L'histoire d'un homme amnésique retrouvant son passé et se reconnectant avec son fils après des années de séparation, dans un voyage émotionnel à travers les États-Unis.",
        annee: "1984",
        acteurs: ["Harry Dean Stanton", "Nastassja Kinski", "Dean Stockwell"],
        realisation: "Wim Wenders",
        titreVignette: "paris-texas.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Code Unknown",
        genres: ["Drame", "Thriller", "Guerre"],
        description: "Un film qui explore les thèmes de la communication et de la ségrégation sociale à travers une série de récits entrecroisés, dont la vie d'une actrice, jouée par Juliette Binoche.",
        annee: "2000",
        acteurs: ["Juliette Binoche", "Thierry Neuvic", "Ona Lu Yenke"],
        realisation: "Michael Haneke",
        titreVignette: "code-unknown.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Donnie Darko",
        genres: ["Mystère", "Drame", "Science-fiction"],
        description: "Un adolescent, joué par Jake Gyllenhaal, est hanté par des visions d'un lapin géant qui lui prédit la fin du monde, mêlant voyage dans le temps et réalités alternatives.",
        annee: "2001",
        acteurs: ["Jake Gyllenhaal", "Maggie Gyllenhaal", "Jena Malone"],
        realisation: "Richard Kelly",
        titreVignette: "donnie-darko.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Misery",
        genres: ["Drame", "Horreur", "Thriller"],
        description: "Un romancier, joué par James Caan, est retenu captif par une fan obsessionnelle, interprétée par Kathy Bates, après avoir été sauvé d'un accident de voiture dans un thriller psychologique intense.",
        annee: "1990",
        acteurs: ["Kathy Bates", "James Caan", "Richard Farnsworth"],
        realisation: "Rob Reiner",
        titreVignette: "misery.jpg",
        notes: [5, 5, 5, 5, 5]
    }
    ,
    {
        titre: "Poltergeist",
        genres: ["Horreur", "Fantastique", "Thriller"],
        description: "Une famille est terrorisée par une série de phénomènes paranormaux dans leur maison, conduisant à la disparition de leur fille dans un monde spectral.",
        annee: "1982",
        acteurs: ["JoBeth Williams", "Heather O'Rourke", "Craig T. Nelson"],
        realisation: "Tobe Hooper",
        titreVignette: "poltergeist.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "The Silence of the Lambs",
        genres: ["Crime", "Drame", "Thriller"],
        description: "Une jeune recrue du FBI interroge un psychopathe cannibale afin de l'aider à traquer un autre tueur en série.",
        annee: "1991",
        acteurs: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
        realisation: "Jonathan Demme",
        titreVignette: "lesilencedesagneaux.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "The Basketball Diaries",
        genres: ["Drame", "Biographie", "Sport"],
        description: "L'adolescence tourmentée de Jim Carroll, marquée par le basketball, la drogue et le crime, jusqu'à sa chute et sa rédemption.",
        annee: "1995",
        acteurs: ["Leonardo DiCaprio", "Mark Wahlberg", "Lorraine Bracco"],
        realisation: "Scott Kalvert",
        titreVignette: "basketball-diaries.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Psycho",
        genres: ["Horreur", "Mystère", "Thriller"],
        description: "Un secrétaire en fuite se retrouve dans un motel étrange tenu par un homme obsédé par sa mère.",
        annee: "1960",
        acteurs: ["Janet Leigh", "Anthony Perkins", "Vera Miles"],
        realisation: "Alfred Hitchcock",
        titreVignette: "psycho.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "To Die For",
        genres: ["Thriller", "Comédie", "Mystère"],
        description: "Une femme ambitieuse et séduisante utilise la manipulation et le meurtre pour réaliser son rêve de devenir une célèbre présentatrice de nouvelles.",
        annee: "1995",
        acteurs: ["Nicole Kidman", "Matt Dillon", "Joaquin Phoenix", "Casey Affleck"],
        realisation: "Gus Van Sant",
        titreVignette: "to-die-for.jpg",
        notes: [5, 5, 5, 5, 5]
    }
    ,
    {
        titre: "E.T. the Extra-Terrestrial",
        genres: ["Famille", "Science-fiction"],
        description:
            "Un garçon fait ami-ami avec un extraterrestre échoué sur Terre et tente de l'aider à rentrer chez lui.",
        annee: "1982",
        acteurs: ["Henry Thomas", "Dee Wallace", "Drew Barrymore", "Peter Coyote"],
        realisation: "Steven Spielberg",
        titreVignette: "etlextraterrestre.jpg",
        notes: [5, 5, 5, 5, 5],

    }
    ,
    {
        titre: "Close Encounters of the Third Kind",
        genres: ["Science-fiction", "Drame", "Aventure"],
        description: "Un homme ordinaire poursuit une quête obsessionnelle pour comprendre le sens d'une série de visions et de rencontres mystérieuses avec des OVNI.",
        annee: "1977",
        acteurs: ["Francois Truffaut", "Richard Dreyfuss", "Teri Garr"],
        realisation: "Steven Spielberg",
        titreVignette: "close-encounters.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Communion",
        genres: ["Drame", "Science-fiction", "Fantastique"],
        description: "Un écrivain fait face à des expériences d'enlèvements extraterrestres qui défient sa réalité et remettent en question son propre état mental.",
        annee: "1989",
        acteurs: ["Christopher Walken", "Lindsay Crouse", "Frances Sternhagen"],
        realisation: "Philippe Mora",
        titreVignette: "communion.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "The Exorcist",
        genres: ["Horreur", "Drame", "Surnaturel"],
        description: "Une mère désespérée fait appel à deux prêtres pour exorciser sa fille possédée par un démon maléfique.",
        annee: "1973",
        acteurs: ["Ellen Burstyn", "Linda Blair", "Max von Sydow"],
        realisation: "William Friedkin",
        titreVignette: "exorcist.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "La Planète Sauvage",
        genres: ["Animation", "Science-fiction", "Fantastique"],
        description: "Dans un monde fantastique où les humains sont dominés par des géants bleus, un jeune homme s'échappe et mène une rébellion.",
        annee: "1976",
        acteurs: [],
        realisation: "René Laloux",
        titreVignette: "planete-sauvage.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "The Cement Garden",
        genres: ["Drame", "Psychologique", "Thriller"],
        description: "Après la mort de leurs parents, quatre enfants cachent le décès pour éviter d'être séparés et créent un monde dysfonctionnel et isolé.",
        annee: "1993",
        acteurs: ["Charlotte Gainsbourg", "Andrew Robertson", "Alice Coulthard"],
        realisation: "Andrew Birkin",
        titreVignette: "cement-garden.jpg",
        notes: [1]
    }
    ,
    {
        titre: "Jackie Brown",
        genres: ["Crime", "Drame", "Thriller"],
        description: "Une hôtesse de l'air est surveillée par des policiers afin de coincer un magnat du trafic d'armes à feu.",
        annee: "1997",
        acteurs: ["Pam Grier", "Samuel L. Jackson", "Robert De Niro", "Bridget Fonda"],
        realisation: "Quentin Tarantino",
        titreVignette: "jackie-brown.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Welcome to the Dollhouse",
        genres: ["Comédie", "Drame", "Indépendant"],
        description: "Une jeune fille impopulaire lutte pour survivre dans l'environnement brutal de l'école intermédiaire.",
        annee: "1995",
        acteurs: ["Heather Matarazzo", "Brendan Sexton III", "Christina Brucato"],
        realisation: "Todd Solondz",
        titreVignette: "welcome-dollhouse.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Smooth Talk",
        genres: ["Romance", "Comédie", "Drame"],
        description: "Une adolescente est séduite par un homme mystérieux, ce qui entraîne des conséquences inattendues.",
        annee: "1985",
        acteurs: ["Laura Dern", "Treat Williams", "Mary Kay Place"],
        realisation: "Joyce Chopra",
        titreVignette: "smooth-talk.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Blue Velvet",
        genres: ["Mystère", "Thriller", "Drame"],
        description: "Après la découverte d'une oreille humaine coupée, un jeune homme plonge dans un monde mystérieux et troublant.",
        annee: "1986",
        acteurs: ["Kyle McLachlan", "Isabella Rossellini", "Dennis Hopper"],
        realisation: "David Lynch",
        titreVignette: "blue-velvet.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Ordinary People",
        genres: ["Drame", "Psychologique", "Famille"],
        description: "Les conflits et les tensions s'exacerbent au sein d'une famille endeuillée par la mort d'un fils.",
        annee: "1980",
        acteurs: ["Donald Sutherland", "Mary Tyler Moore", "Timothy Hutton"],
        realisation: "Robert Redford",
        titreVignette: "ordinary-people.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Don't Look Now",
        genres: ["Horreur", "Thriller", "Psychologique"],
        description: "Un couple en deuil rencontre des phénomènes étranges à Venise, liés à la mort accidentelle de leur fille.",
        annee: "1973",
        acteurs: ["Donald Sutherland", "Julie Christie", "Hilary Mason"],
        realisation: "Nicolas Roeg",
        titreVignette: "dont-look-now.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "3 Women",
        genres: ["Drame", "Psychologique", "Mystère"],
        description: "Trois femmes très différentes entremêlent leurs vies dans un complexe appartement-hôtel californien.",
        annee: "1977",
        acteurs: ["Shelley Duvall", "Sissy Spacek", "Janice Rule"],
        realisation: "Robert Altman",
        titreVignette: "3-women.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    {
        titre: "Showgirls",
        genres: ["Drame", "Erotique", "Satire"],
        description: "Une jeune danseuse ambitieuse monte les échelons dans le monde impitoyable du spectacle à Las Vegas.",
        annee: "1995",
        acteurs: ["Elizabeth Berkeley", "Kyle McLachlan", "Gina Gershon"],
        realisation: "Paul Verhoeven",
        titreVignette: "showgirls.jpg",
        notes: [5, 5, 5, 5, 5]
    }
    ,
    // {
    //     titre: "Wings of Desire",
    //     genres: ["Drame", "Fantaisie", "Romance"],
    //     description: "Un ange à Berlin décide de devenir mortel après être tombé amoureux d'une artiste de cirque.",
    //     annee: "1987",
    //     acteurs: ["Bruno Ganz", "Solveig Dommartin", "Otto Sander"],
    //     realisation: "Wim Wenders",
    //     titreVignette: "wings-of-desire.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Les Diaboliques",
    //     genres: ["Mystère", "Horreur", "Thriller", "Drame"],
    //     description: "La femme d'un directeur d'école tyrannique et sa maîtresse conspirent pour le tuer, mais après le meurtre, son corps disparaît.",
    //     annee: "1955",
    //     acteurs: ["Simone Signoret", "Véra Clouzot", "Paul Meurisse"],
    //     realisation: "Henri-Georges Clouzot",
    //     titreVignette: "diaboliques.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Le Salaire de la peur",
    //     genres: ["Aventure", "Thriller", "Drame"],
    //     description: "Des hommes désespérés en Amérique du Sud acceptent de transporter un chargement extrêmement dangereux de nitroglycérine.",
    //     annee: "1953",
    //     acteurs: ["Yves Montand", "Charles Vanel", "Folco Lulli"],
    //     realisation: "Henri-Georges Clouzot",
    //     titreVignette: "le-salaire-de-la-peur.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    {
        titre: "Scream",
        genres: ["Horreur", "Thriller", "Mystère"],
        description: "Une adolescente et ses amis deviennent la cible d'un tueur en série mystérieux.",
        annee: "1996",
        acteurs: ["Neve Campbell", "Rose McGowan", "David Arquette", "Courteney Cox"],
        realisation: "Wes Craven",
        titreVignette: "scream.jpg",
        notes: [5, 5, 5, 5, 5]
    },
    // {
    //     titre: "Christine",
    //     genres: ["Horreur", "Drame", "Fantastique"],
    //     description: "Une voiture possédée par une force maléfique devient l'obsession d'un adolescent, menaçant tous ceux qui s'opposent à elle.",
    //     annee: "1983",
    //     acteurs: ["Keith Gordon", "John Stockwell", "Alexandra Paul"],
    //     realisation: "John Carpenter",
    //     titreVignette: "christine.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Eyes Wide Shut",
    //     genres: ["Thriller", "Mystère", "Drame"],
    //     description: "Un médecin se lance dans une aventure nocturne qui met à l'épreuve son mariage et l'emmène dans un monde mystérieux et dangereux.",
    //     annee: "1999",
    //     acteurs: ["Tom Cruise", "Nicole Kidman", "Sydney Pollack"],
    //     realisation: "Stanley Kubrick",
    //     titreVignette: "eyes-wide-shut.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Full Metal Jacket",
    //     genres: ["Guerre", "Drame"],
    //     description: "Les horreurs de la guerre et leur impact sur les soldats américains, de l'entraînement brutal à la bataille de Hué pendant la guerre du Vietnam.",
    //     annee: "1987",
    //     acteurs: ["Matthew Modine", "R. Lee Ermey", "Vincent D'Onofrio"],
    //     realisation: "Stanley Kubrick",
    //     titreVignette: "full-metal-jacket.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Fly",
    //     genres: ["Science-fiction", "Horreur", "Drame"],
    //     description: "Un scientifique se transforme en un hybride mouche après que l'un de ses expériences tourne mal.",
    //     annee: "1986",
    //     acteurs: ["Jeff Goldblum", "Geena Davis", "John Getz"],
    //     realisation: "David Cronenberg",
    //     titreVignette: "the-fly.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }
    // ,
    // {
    //     titre: "My Own Private Idaho",
    //     genres: ["Drame", "Aventure", "Romance"],
    //     description: "Deux jeunes hommes embarquent dans un voyage personnel qui les mène sur la route et dans la vie de chacun, explorant l'amitié et la quête d'identité.",
    //     annee: "1991",
    //     acteurs: ["River Phoenix", "Keanu Reeves", "James Russo"],
    //     realisation: "Gus Van Sant",
    //     titreVignette: "my-own-private-idaho.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Elephant",
    //     genres: ["Drame", "Crime", "Thriller"],
    //     description: "Un portrait réaliste et choquant de la vie dans un lycée américain, culminant dans un acte de violence choquant.",
    //     annee: "2003",
    //     acteurs: ["Alex Frost", "Eric Deulen", "John Robinson"],
    //     realisation: "Gus Van Sant",
    //     titreVignette: "elephant.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Boogie Nights",
    //     genres: ["Drame", "Comédie", "Biographique"],
    //     description: "L'ascension et la chute d'une star du porno dans l'industrie du cinéma pour adultes des années 70 et 80.",
    //     annee: "1997",
    //     acteurs: ["Mark Wahlberg", "Julianne Moore", "Burt Reynolds"],
    //     realisation: "Paul Thomas Anderson",
    //     titreVignette: "boogie-nights.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Magnolia",
    //     genres: ["Drame", "Psychologique", "Epique"],
    //     description: "Les vies entrecroisées de personnages en quête de bonheur, de pardon et de sens dans la vallée de San Fernando.",
    //     annee: "1999",
    //     acteurs: ["Julianne Moore", "Philip Seymour Hoffman", "Tom Cruise"],
    //     realisation: "Paul Thomas Anderson",
    //     titreVignette: "magnolia.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Deer Hunter",
    //     genres: ["Drame", "Guerre", "Psychologique"],
    //     description: "L'impact de la guerre du Vietnam sur la vie de trois amis de la Pennsylvanie, avant, pendant et après leur service.",
    //     annee: "1978",
    //     acteurs: ["Robert De Niro", "Christopher Walken", "Meryl Streep"],
    //     realisation: "Michael Cimino",
    //     titreVignette: "deer-hunter.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Cape Fear",
    //     genres: ["Thriller", "Drame", "Horreur"],
    //     description: "Un criminel libéré sur parole traque la famille de l'avocat qu'il considère responsable de sa condamnation.",
    //     annee: "1991",
    //     acteurs: ["Robert De Niro", "Nick Nolte", "Jessica Lange"],
    //     realisation: "Martin Scorsese",
    //     titreVignette: "cape-fear.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }
    // ,
    // {
    //     titre: "Falling Down",
    //     genres: ["Thriller", "Action", "Drame"],
    //     description: "Un homme désillusionné par les échecs de sa vie se lance dans une violente randonnée à travers Los Angeles.",
    //     annee: "1993",
    //     acteurs: ["Michael Douglas", "Robert Duvall", "Barbara Hershey"],
    //     realisation: "Joel Schumacher",
    //     titreVignette: "falling-down.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Thing",
    //     genres: ["Horreur", "Science-fiction", "Thriller"],
    //     description: "Des scientifiques en Antarctique sont confrontés à une forme de vie extraterrestre qui peut prendre l'apparence de ses victimes.",
    //     annee: "1982",
    //     acteurs: ["Kurt Russell", "Wilford Brimley", "Keith David"],
    //     realisation: "John Carpenter",
    //     titreVignette: "the-thing.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Bride of Frankenstein",
    //     genres: ["Horreur", "Science-fiction", "Classique"],
    //     description: "Le Dr. Frankenstein crée une compagne pour sa créature, mais les choses tournent mal lorsque la mariée le rejette.",
    //     annee: "1935",
    //     acteurs: ["Boris Karloff", "Elsa Lanchester", "Colin Clive"],
    //     realisation: "James Whale",
    //     titreVignette: "bride-of-frankenstein.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Metropolis",
    //     genres: ["Science-fiction", "Drame", "Futuriste"],
    //     description: "Dans une ville futuriste dystopique, les tensions montent entre les travailleurs exploités et les élites dirigeantes.",
    //     annee: "1927",
    //     acteurs: ["Brigitte Helm", "Alfred Abel", "Gustav Fröhlich"],
    //     realisation: "Fritz Lang",
    //     titreVignette: "metropolis.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Carnival of Souls",
    //     genres: ["Horreur", "Mystère", "Indépendant"],
    //     description: "Après un accident de voiture, une femme est attirée par un carnaval abandonné où elle rencontre des visions fantomatiques.",
    //     annee: "1962",
    //     acteurs: ["Candace Hilligoss", "Frances Feist", "Sidney Berger"],
    //     realisation: "Herk Harvey",
    //     titreVignette: "carnival-of-souls.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "A Patch of Blue",
    //     genres: ["Drame", "Romance", "Social"],
    //     description: "Une jeune femme aveugle et abusée forme un lien avec un homme noir, apprenant sur l'amour et la liberté dans un monde de préjugés.",
    //     annee: "1965",
    //     acteurs: ["Sidney Poitier", "Elizabeth Hartman", "Shelley Winters"],
    //     realisation: "Guy Green",
    //     titreVignette: "patch-of-blue.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Rosemary's Baby",
    //     genres: ["Horreur", "Drame", "Mystère"],
    //     description: "Une jeune femme enceinte soupçonne que son mari et ses voisins ont des plans maléfiques pour son futur enfant.",
    //     annee: "1968",
    //     acteurs: ["Mia Farrow", "John Cassavetes", "Ruth Gordon"],
    //     realisation: "Roman Polanski",
    //     titreVignette: "rosemarys-baby.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }
    // ,
    // {
    //     titre: "Solaris",
    //     genres: ["Science-fiction", "Drame", "Psychologique"],
    //     description: "Un psychologue est envoyé à une station orbitale pour découvrir ce qui est arrivé à l'équipage obsédé par une entité mystérieuse.",
    //     annee: "1972",
    //     acteurs: ["Natalya Bondarchuk", "Donatas Banionis", "Jüri Järvet"],
    //     realisation: "Andrei Tarkovsky",
    //     titreVignette: "solaris.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Black Moon",
    //     genres: ["Fantaisie", "Surréaliste", "Drame"],
    //     description: "Dans un monde dystopique en guerre entre hommes et femmes, une jeune fille cherche refuge dans une ferme étrange peuplée de créatures surréalistes.",
    //     annee: "1975",
    //     acteurs: ["Cathryn Harrison", "Therese Giehse", "Alexandra Stewart"],
    //     realisation: "Louis Malle",
    //     titreVignette: "black-moon.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Polyester",
    //     genres: ["Comédie", "Drame", "Satire"],
    //     description: "Une ménagère du Maryland voit sa vie bouleversée par une série de scandales et de drames exagérés.",
    //     annee: "1981",
    //     acteurs: ["Divine", "Tab Hunter", "Edith Massey"],
    //     realisation: "John Waters",
    //     titreVignette: "polyester.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Last Temptation of Christ",
    //     genres: ["Drame", "Historique", "Spirituel"],
    //     description: "La vie de Jésus-Christ et son lutte intérieure avec ses responsabilités divines, explorant son humanité.",
    //     annee: "1988",
    //     acteurs: ["Willem Dafoe", "Harvey Keitel", "Barbara Hershey"],
    //     realisation: "Martin Scorsese",
    //     titreVignette: "last-temptation.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Irreversible",
    //     genres: ["Drame", "Thriller", "Expérimental"],
    //     description: "Le film raconte à rebours l'histoire tragique de la vengeance et du destin inéluctable de ses personnages après un acte de violence brutale.",
    //     annee: "2002",
    //     acteurs: ["Monica Bellucci", "Vincent Cassel", "Albert Dupontel"],
    //     realisation: "Gaspar Noe",
    //     titreVignette: "irreversible.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Le Grand Bleu",
    //     genres: ["Aventure", "Drame", "Romantique"],
    //     description: "L'histoire de la rivalité entre deux apnéistes et leur passion commune pour la mer.",
    //     annee: "1988",
    //     acteurs: ["Jean Reno", "Rosanna Arquette", "Jean-Marc Barr"],
    //     realisation: "Luc Besson",
    //     titreVignette: "grand-bleu.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }
    // ,
    // {
    //     titre: "Wild at Heart",
    //     genres: ["Crime", "Drame", "Romance"],
    //     description: "Un couple en fuite cherche à échapper aux tentatives de la mère de la jeune femme pour les séparer.",
    //     annee: "1990",
    //     acteurs: ["Laura Dern", "Nicolas Cage", "Willem Dafoe"],
    //     realisation: "David Lynch",
    //     titreVignette: "wild-at-heart.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Jacob's Ladder",
    //     genres: ["Horreur", "Mystère", "Thriller"],
    //     description: "Un vétéran du Vietnam est hanté par d'étranges visions et découvre une conspiration effrayante.",
    //     annee: "1990",
    //     acteurs: ["Tim Robbins", "Elizabeth Peña", "Danny Aiello"],
    //     realisation: "Adrian Lyne",
    //     titreVignette: "jacobs-ladder.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Rumble Fish",
    //     genres: ["Drame", "Crime", "Jeunesse"],
    //     description: "Le petit frère d'un ancien chef de gang veut prendre sa place, explorant la vie des jeunes dans la ville.",
    //     annee: "1983",
    //     acteurs: ["Matt Dillon", "Mickey Rourke", "Diane Lane"],
    //     realisation: "Francis Ford Coppola",
    //     titreVignette: "rumble-fish.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "The Guardian",
    //     genres: ["Horreur", "Fantastique", "Thriller"],
    //     description: "Une nounou chargée de garder un enfant cache un sombre secret lié à un arbre mystique.",
    //     annee: "1990",
    //     acteurs: ["Jenny Seagrove", "Dwier Brown", "Carey Lowell"],
    //     realisation: "William Friedkin",
    //     titreVignette: "the-guardian.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Jungle Fever",
    //     genres: ["Drame", "Romance", "Sociétal"],
    //     description: "L'histoire d'une romance interraciale dans la ville de New York et ses conséquences.",
    //     annee: "1991",
    //     acteurs: ["Wesley Snipes", "Annabella Sciorra", "Spike Lee"],
    //     realisation: "Spike Lee",
    //     titreVignette: "jungle-fever.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Death Becomes Her",
    //     genres: ["Comédie", "Fantastique", "Horreur"],
    //     description: "Deux femmes rivalisent pour l'amour d'un homme et découvrent un élixir de jeunesse éternelle.",
    //     annee: "1992",
    //     acteurs: ["Meryl Streep", "Goldie Hawn", "Bruce Willis"],
    //     realisation: "Robert Zemeckis",
    //     titreVignette: "death-becomes-her.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Groundhog Day",
    //     genres: ["Comédie", "Fantaisie", "Romance"],
    //     description: "Un présentateur météo se retrouve coincé dans une boucle temporelle, revivant sans cesse la même journée.",
    //     annee: "1993",
    //     acteurs: ["Bill Murray", "Andie MacDowell", "Chris Elliott"],
    //     realisation: "Harold Ramis",
    //     titreVignette: "groundhog-day.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Chunking Express",
    //     genres: ["Drame", "Romance", "Sociétal"],
    //     description: "Le film raconte deux histoires distinctes d'amour non partagé et de hasard à Hong Kong.",
    //     annee: "1994",
    //     acteurs: ["Brigitte Lin", "Tony Leung Chiu-Wai", "Faye Wong"],
    //     realisation: "Wong Kar-wai",
    //     titreVignette: "chunking-express.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }
    // ,
    // {
    //     titre: "Kids",
    //     genres: ["Drame", "Indépendant", "Adolescence"],
    //     description: "Ce film suit un groupe d'adolescents new-yorkais durant une journée, explorant leurs vies sexuelles et leurs comportements imprudents, dans un portrait cru de la jeunesse des années 90.",
    //     annee: "1995",
    //     acteurs: ["Leo Fitzpatrick", "Justin Pierce", "Chloë Sevigny"],
    //     realisation: "Larry Clark",
    //     titreVignette: "kids.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Safe",
    //     genres: ["Drame", "Thriller", "Mystère"],
    //     description: "Dans ce drame psychologique, Carol, une femme au foyer, découvre qu'elle est allergique à son environnement urbain et décide de se retirer dans un centre de guérison qui promet de la guérir.",
    //     annee: "1995",
    //     acteurs: ["Julianne Moore", "Peter Friedman", "Xander Berkeley"],
    //     realisation: "Todd Haynes",
    //     titreVignette: "safe.jpg",
    //     notes: [4, 3, 5, 2, 4]
    // }
    // ,
    
    // {
    //     titre: "The Doom Generation",
    //     genres: ["Action", "Comédie", "Drame"],
    //     description: "Des adolescents en fuite se retrouvent dans un tourbillon de violence et de chaos après avoir rencontré un vagabond charismatique.",
    //     annee: "1995",
    //     acteurs: ["James Duval", "Rose McGowan", "Johnathon Schaech"],
    //     realisation: "Gregg Araki",
    //     titreVignette: "doom-generation.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Trainspotting",
    //     genres: ["Drame", "Crime", "Psychologique"],
    //     description: "L'histoire d'un groupe d'amis héroïnomanes vivant à Édimbourg et leurs luttes avec la dépendance et le désespoir social.",
    //     annee: "1996",
    //     acteurs: ["Ewan McGregor", "Robert Carlyle", "Jonny Lee Miller"],
    //     realisation: "Danny Boyle",
    //     titreVignette: "trainspotting.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Gattaca",
    //     genres: ["Drame", "Mystère", "Science-fiction"],
    //     description: "Dans un futur où la génétique détermine la vie, un homme avec des gènes 'inférieurs' prend l'identité d'un autre pour poursuivre son rêve de voyager dans l'espace.",
    //     annee: "1997",
    //     acteurs: ["Ethan Hawke", "Uma Thurman", "Jude Law"],
    //     realisation: "Andrew Niccol",
    //     titreVignette: "gattaca.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // },
    // {
    //     titre: "Fear And Loathing in Las Vegas",
    //     genres: ["Fantastique", "Comédie", "Drame"],
    //     description: "Un journaliste et son avocat se lancent dans un voyage hallucinogène à travers Las Vegas.",
    //     annee: "1998",
    //     acteurs: ["Johnny Depp", "Benicio del Toro", "Tobey Maguire"],
    //     realisation: "Terry Gilliam",
    //     titreVignette: "fearandloathing.jpg",
    //     notes: [5, 5, 5, 5, 5]
    // }




];


module.exports = filmsDepart;
