const QUESTIONS_DB =
[
    {qid : '0', question : 'What is your dream date?' , answers : ['Ice skating in the park', 'Streaking in the park', 'Starting fires in the park', 'Waterboarding in the park']},
    {qid : '1', question : 'Do you have lice?' , answers : ['Yes', 'No']},
    {qid : '2', question : 'Which pasta shape best describes your political affiliation?' , answers : ['Angel hair', 'Wagon wheels', 'Elbows', 'Bowties']},
    {qid : '3', question : 'How often do you floss?' , answers : ['Once in a lifetime', 'Three times everyday, no more, no less', 'Never, flossing is for the weak', 'Right before I go to the dentist']},
    {qid : '4', question : 'What is your favorite substitute for a swear word? ' , answers : ['Dangit', 'Muffins', 'Poop', 'Fudge']},
    {qid : '5', question : 'What do you do at the zoo?' , answers : ['Go to all the animals and use silly voices to pretend like you are that animal.  Narrate what they think and do.', 'Lure the spider monkeys to the fence and then when they get close enough reach through and touch them.', 'Hop the fence of the Mexican Grey Wolves and submit to the alpha, hoping he will allow you into the wolf pack.  The Alpha does let you in because he sees you understand how the pack operates and also you have the courage of a wolf.  The alpha teaches you to hunt with the ancient stealth of wolves of millennium past.  You both bay at the moon each night, a call to your ancestors.  AWHOOOOO.', 'Release all the animals because you can\'t own nature, man.  Zoos are the incarnation of human greed and their assumed but BACKWARD dominion of the natural world.  But you\'ll show them who\'s in charge when the majestic snow leopards devour the zoo workers, then flee into the Massachusetts woods. ']},
    {qid : '6', question : 'What is your ideal date?' , answers : ['Friday the 13th', 'A romantic candlelit dinner which you awkwardly split the bill for', 'An overly intellectual conversation over coffee', 'Flip cup in a fraternity basement']},
    {qid : '7', question : 'Are you a good person?' , answers : ['Yes', 'No', 'I was not prepared for such heavyhanded questioning ', 'My morality is more or less in line with Batman\'s']},
    {qid : '8', question : 'What\'s a boy gotta do to get a malt around here?' , answers : ['Pay Ol\' Willy a nickel and tell him to keep the change.', 'Not bother Ol\' Willy that\'s for sure! He\'s busy singing some tunes with the Laramie boys again. Have his son young Willy make you a malt instead.', 'Empty your pockets: you have a length of twine, your trusty sack of marbles, and some snap n\'pops.Try bartering with one of the Willys in exchange for multiple malts.', 'Throw a snap n\' pop at Young Willy\'s face to disorient him. While he\'s blinded, attach your twine to the sack of marbles to create a makeshift sheapard\'s sling. Hit Young Willy between the eyes and watch him tumble. At this point the commotion has reached Ol\' Willy who\'s stopped singing and made his way over. Tell him that if he doesn\'t make you a chocolate malt he\'s next.']},
    {qid : '9', question : 'Where are you most likely to be found on a Saturday night?' , answers : ['Grinding all up on some hot dude/girl (from The Institute) in a basement that smells like tomatoes and piss.', 'Putting some finishing touches on the shrine to your crush a la Helga from Hey Arnold.', 'Writing sweet, sweet sketch comedy.', 'Telling yourself you\'re worth it in the bathroom mirror in between shots of vodka.']},
    {qid : '10', question : 'If you were a troll, which troll would you be?' , answers : ['Larry, the troll under the bridge.', 'Gary, the troll in the dungeon. ', 'Marie, the troll who operates the trollercoaster. ', 'Terri, a Furby. ']},
    {qid : '11', question : '\"I\'m sorry. I know we were supposed to go to the Harvest Dance together on Friday but now I can\'t make it.\"' , answers : ['\"Sorry, who are you?\"', '\"You\'re going with that rat Dominic instead, aren\'t you!?\"', '\"But if you don\'t go who will play \"The Accountant of the Gourds\" in the Harvest show?\"', 'Take the \"Accountant of the Gourds\" costume from Jessica\'s trembling hands. Tonight at the Harvest Dance you will grace the stage. You will tabulate the ceremonial gourd tax. This is your moment.']},
    {qid : '12', question : 'How great is the scowl you direct at the world?' , answers : ['I drown my distaste for humanity underneath blankets of ability and self-confidence, and so am able to grin toothily at the world.', 'By reminding myself of the few tolerable people I know, I am able to conceal my scowl and present a weak smile to the world.', 'I have not yet mastered the art of deceit, and so the immense disappointment I feel when considering how pitiful humanity\'s example of itself is in the twenty-first century sometimes shows in my eyes, but I still keep my jaw tight and resist the scowl.', 'My scowl is impossible to conceal, but my tactics and cunning are formidable. I am often able to play it off as a nervous tic or a facial disorder when I glare challengingly at the cosmos.']},
    {qid : '13', question : 'When you get a little schwasty, what\'s your language of choice?' , answers : ['Interpretive dance', 'Murican', 'Français (franglais variation included)', 'The language of the hill folk']},
    {qid : '14', question : 'How do you shave?' , answers : ['Up then down', 'Down then up', 'Side to side', 'Inside then out']},
    {qid : '15', question : 'What would you rather have stuck to your fingers?' , answers : ['Other people\'s fingers', 'Magnets', 'Knives', 'The souls of your enemies']},
    {qid : '16', question : 'If you were to have just realized you were in love and that the love of your life was right there in front of you the whole time (probably performing and writing sketch comedy on your college campus) what song would be playing as you marched with purpose to go to them?' , answers : ['\"Signed, Sealed, Delivered (I\'m Yours)\" Tom Hanks is a PRINCE among men.', '\"It Must Have Been Love\" Richard Gere is climbin\' his way up that fire escape, umbrella and flowers in hand, TO YOU.', '\"Ain\'t No Mountain High Enough\" - Marvin Gaye and Tammi Terrell (or \"Ain\'t No Mountain High Enough\" - Diana Ross) Honestly, you don\'t have to be in love for this to be the perfect song for literally every occasion, but yes, that is Renee Zellwegger running towards you through the snow. Go to her.']},
    {qid : '17', question : 'How enthusiastic are you about playing the interactive video game Rock Band with your pals?' , answers : ['lol it\'s not 2008', 'Maybe I would do one song?', 'I like to sing', 'give me Rock Band or give me death!!!!']},
];

var questionsArray =
    [
        {qid : '0', question : 'What is your ultra-dream date?' , answers : ['Ice skating in the park', 'Streaking in the park', 'Waterboarding in the park', 'Saturday in the Park']},
        {qid : '1', question : 'Do you have lice?' , answers : ['Yes', 'No']},
        {qid : '2', question : 'Which pasta shape best describes your political affiliation?' , answers : ['Angel hair', 'Wagon wheels', 'Elbows', 'Bowties', 'Anything gluten free!!!']},
        {qid : '3', question : 'How often do you floss?' , answers : ['Once in a lifetime', 'Three times everyday, no more, no less', 'Never, flossing is for the weak', 'On Wednesdays from 4-6']},
        {qid : '4', question : 'What is your favorite substitute for a swear word? ' , answers : ['Dangit', 'Muffins', 'Poop', 'Fudge', 'nibblets', 'doogie', 'wigglenutz', 'corncobbers', 'riflesticks', 'fudgenuts', 'eek', 'uggl', 'nabbit', 'nibbit', 'darnit', 'doogit', 'doogy', 'sheiz', 'sheiza', 'frick']},
        {qid : '5', question : 'What do you do at the zoo?' , answers : ['Go to all the animals and use silly voices to pretend like you are that animal.  Narrate what they think and do.', 'Lure the spider monkeys to the fence and then when they get close enough reach through and touch them.', 'Hop the fence of the Mexican Grey Wolves and submit to the alpha, hoping he will allow you into the wolf pack.  The Alpha does let you in because he sees you understand how the pack operates and also you have the courage of a wolf.  The alpha teaches you to hunt with the ancient stealth of wolves of millennium past.  You both bay at the moon each night, a call to your ancestors.  AWHOOOOO.', 'Release all the animals because you can\'t own nature, man.  Zoos are the incarnation of human greed and their assumed but BACKWARD dominion of the natural world.  But you\'ll show them who\'s in charge when the majestic snow leopards devour the zoo workers, then flee into the Massachusetts woods. ']},
        {qid : '6', question : 'What is your dream date?' , answers : ['Friday the 13th', 'An overly intellectual conversation over coffee', 'Flip cup in a fraternity basement', 'Charades!']},
        {qid : '7', question : 'Are you a good person?' , answers : ['Yes', 'No', 'I was not prepared for such heavy-handed questioning ', 'My morality is more or less in line with Batman\'s']},
        {qid : '8', question : 'What\'s a boy gotta do to get a malt around here?' , answers : ['Pay Ol\' Willy a nickel and tell him to keep the change.', 'Not bother Ol\' Willy that\'s for sure! He\'s busy singing some tunes with the Laramie boys again. Have his son young Willy make you a malt instead.', 'Empty your pockets: you have a length of twine, your trusty sack of marbles, and some snap n\'pops.Try bartering with one of the Willys in exchange for multiple malts.', 'Throw a snap n\' pop at Young Willy\'s face to disorient him. While he\'s blinded, attach your twine to the sack of marbles to create a makeshift sheapard\'s sling. Hit Young Willy between the eyes and watch him tumble. At this point the commotion has reached Ol\' Willy who\'s stopped singing and made his way over. Tell him that if he doesn\'t make you a chocolate malt he\'s next.']},
        {qid : '9', question : 'Where are you most likely to be found on a Saturday night?' , answers : ['Grinding all up on some hot dude/girl in a basement that smells like tomatoes and piss.', 'Telling yourself you\'re worth it in between shots of vodka.','Downtown with a 30 year old investment banker you met on Tinder', 'Downtown with a 30 year old investment banker you met on Grindr']},
        {qid : '10', question : 'If you were a troll, which troll would you be?' , answers : ['Larry, the troll under the bridge.', 'Gary, the troll in the dungeon. ', 'Marie, the troll who operates the trollercoaster. ', 'Terri, a Furby. ']},
        {qid : '11', question : '\"I\'m sorry. I know we were supposed to go to the Harvest Dance together on Friday but now I can\'t make it.\"' , answers : ['\"Sorry, who are you?\"', '\"You\'re going with that rat Dominic instead, aren\'t you!?\"', '\"But if you don\'t go who will play \"The Accountant of the Gourds\" in the Harvest show?\"', 'Take the \"Accountant of the Gourds\" costume from Jessica\'s trembling hands. Tonight at the Harvest Dance you will grace the stage. You will tabulate the ceremonial gourd tax. This is your moment.']},
        {qid : '12', question : 'How great is the scowl you direct at the world?' , answers : ['I drown my distaste for humanity underneath blankets of ability and self-confidence, and so am able to grin toothily at the world.', 'By reminding myself of the few tolerable people I know, I am able to conceal my scowl and present a weak smile to the world.', 'I have not yet mastered the art of deceit, and so the immense disappointment I feel when considering how pitiful humanity\'s example of itself is in the twenty-first century sometimes shows in my eyes, but I still keep my jaw tight and resist the scowl.', 'My scowl is impossible to conceal, but my tactics and cunning are formidable. I am often able to play it off as a nervous tic or a facial disorder when I glare challengingly at the cosmos.']},
        //{qid : '13', question : 'When you get a little schwasty, what\'s your language of choice?' , answers : ['Interpretive dance', 'Murican', 'Français (franglais variation included)', 'The language of the hill folk']},
        //{qid : '14', question : 'How do you shave?' , answers : ['Up then down', 'Down then up', 'Side to side', 'Inside then out']},
        //{qid : '15', question : 'What would you rather have stuck to your fingers?' , answers : ['Other people\'s fingers', 'Magnets', 'Knives', 'The souls of your enemies']},
        {qid : '16', question : 'If you were to have just realized you were in love and that the love of your life was right there in front of you the whole time (probably performing and writing sketch comedy on your college campus) what song would be playing as you marched with purpose to go to them?' , answers : ['\"Signed, Sealed, Delivered (I\'m Yours)\" Tom Hanks is a PRINCE among men.', '\"It Must Have Been Love\" Richard Gere is climbin\' his way up that fire escape, umbrella and flowers in hand, TO YOU.', '\"Ain\'t No Mountain High Enough\" - Marvin Gaye and Tammi Terrell (or \"Ain\'t No Mountain High Enough\" - Diana Ross) Honestly, you don\'t have to be in love for this to be the perfect song for literally every occasion, but yes, that is Renee Zellwegger running towards you through the snow. Go to her.']},
        {qid : '17', question : 'How enthusiastic are you about playing the interactive video game Rock Band with your pals?' , answers : ['lol it\'s not 2008', 'Maybe I would do one song?', 'I like to sing', 'give me Rock Band or give me death!!!!']}
    ];

var INSTITUTE_PEOPLE =
    [
        {name : 'Elliot Cobb', img : "content/elliotCobb.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "Giddy up! You're an Elliot Cobb. Elliot's have never been filmed in the wild, so don't be the first. Got it? Good."},
        {name : 'Sarah Gruen',  img : "content/sarahGruen.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "Congratulations! You're a Sarah Gruen! Sarahs are clever and hungry. The freeze-pop flavor that can best be used to described a Sarah is pink. Other Sarahs include the late Knut the polar bear, Stacy from \"What Not to Wear,\" and the narrator of Serial. The spirit shoe of a Sarah is a size 8 Birkenstock."},
        {name : 'Lily Blumkin',  img : "content/lilyBlumkin.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Lily! Congratulations, Lilys are the curliest people in the room! What does that mean? You tell us! Lilys always know the proper way to pick your nose, and would be happy to teach you if you would just muster up the courage to ask! Lilys never need to muster up any courage though; they pick their noses in public all the time! Rock on!"},
        {name : 'Ari Glasgow ',  img : "content/ariGlasgow.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're an Ari Glasgow! This is unfortunate for you. Aris are laid back 99.99% of the time, but insanely anxious that other .01%. You ate a cheeseburger every day for the first 25 days of college, and the biggest fan of your comedy is your mom! "},
        {name : 'Jacob Barr',  img : "content/jacobBarr.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Jacob Barr!  Congratulations, you're among the few people who were put on this earth to enjoy it and make others enjoy it too.  You want to laugh and make others laugh.  You like to keep busy and keep others busy.  You're also probably pretty tall, so pat yourself on the back for that.  You enjoy small competitions for small stakes, and are just the slightest bit worried about this becoming a gambling addiction but if you like it then it would make sense that you don't mind paying a SMALL fee just for the experience and when you think of it like that you're not REALLY losing money, are you?  ARE YOU?  You also like dogs."},
        {name : 'Ben Meyerson',  img : "content/benMeyerson.jpg", answers : [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Ben! Bens are an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today. Humans began to domesticate horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated, such as the endangered Przewalski\'s horse, a separate subspecies, and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior. Horses' anatomy enables them to make use of speed to escape predators and they have a well-developed sense of balance and a strong fight-or-flight response. Related to this need to flee from predators in the wild is an unusual trait: horses are able to sleep both standing up and lying down. Female horses, called mares, carry their young for approximately 11 months, and a young horse, called a foal, can stand and run shortly following birth. Most domesticated horses begin training under saddle or in harness between the ages of two and four. They reach full adult development by age five, and have an average lifespan of between 25 and 30 years. Horse breeds are loosely divided into three categories based on general temperament: spirited \"hot bloods\" with speed and endurance; \"cold bloods\", such as draft horses and some ponies, suitable for slow, heavy work; and \"warmbloods\", developed from crosses between hot bloods and cold bloods, often focusing on creating breeds for specific riding purposes, particularly in Europe. There are more than 300 breeds of horse in the world today, developed for many different uses. Horses and humans interact in a wide variety of sport competitions and non-competitive recreational pursuits, as well as in working activities such as police work, agriculture, entertainment, and therapy. Horses were historically used in warfare, from which a wide variety of riding and driving techniques developed, using many different styles of equipment and methods of control. Many products are derived from horses, including meat, milk, hide, hair, bone, and pharmaceuticals extracted from the urine of pregnant mares. Humans provide domesticated horses with food, water and shelter, as well as attention from specialists such as veterinarians and farriers."},
        {name : 'Jacob Hafey',  img : "content/jacobHafey.jpg", answers : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], bio : "You're too Scoots for Tutes! You are most likely wanted by several government agencies for crimes you forget if you committed. If you see someone who wears glasses, make sure to point and laugh at them! You've earned it."},
        {name : 'Sam Gordon',  img : "content/samGordon.jpg", answers : [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0], bio : "You're Sam Gordon. You like movies. You like skateboards. You like tiramisu. You like Tetris. You like warmth. You like Ike. You are white. You have hair. You are male. You are Jewish. You have chromosomes. You are reverent. You are aged."},
        {name : 'Céili Hale',  img : "content/ceiliHale.jpg", answers : [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0], bio : "You're totally Ceili Hale! That means you're probably naked right now eating cold Chef Boyardee from the can. You're spunky and lovable but you're never 100% sure that you actually exist and the world isn't just some sort of virtual reality game or maybe an MTV dramedy. Your life motto is probably something along the lines of, \"FUCK OFF, COPS!\""},
        {name : 'Emily Baker',  img : "content/emilyBaker.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're an Emily Baker! You're mildly cool and majorly allergic to peanuts. You should avoid phone calls, the outdoors, UV rays and manta rays. In 15 years, you will be drunk on a Bravo show. Shine on, you crazy diamond."},
        {name : 'Danny Garfield',  img : "content/dannyGarfield.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're Danny Garfield! Who am I to sum up an entire complex personality in just a few sentences?! And look at the questions that determined this result, they're heinous! I doubt this diagnosis would stand to the scrutiny of academic piers. Anyways, I'm guessing you enjoy taking online quizzes..."},
        {name : 'John C. Merfeld',  img : "content/johnMerfeld.jpg", answers : [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], bio : "Unfortunately, it seems you most resemble John C. Merfeld. You are simultaneously delighted and exhausted by those around you, and would like nothing more out of life than to take a red pen to the world and mark it up and down like the poorly written book report that it is. You appreciate verbosity, disdain, and probability distributions. Your therapist has told you that you are not literally a narcissist, but you may feel like one anyway. Your favorite color is green. Your cunnilingus receives positive feedback. Sorry."},
        {name : 'Elaine Bledsoe',  img : "content/elaineBledsoe.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "Ohemgee you're an Elaine Bledsoe! Elaines are usually over-caffeinated and are desperately trying avoid becoming the mom of the group. As the French say, Elaines \"boivent comme un trou.\" You should stay away from peanut butter at all costs, since you're deathly allergic, and come to think of it you may have middle child syndrome. Behind your fluffy and warm exterior you're secretly a conniving puppet master plotting to overthrow Anthony Monaco. Never forgive, never forget."},
        {name : 'Chloe Hyman',  img : "content/chloeHyman.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Chloe! Chloes have nine lives and can see in the dark. They have super fast reflexes and ALWAYS land on their feet, no matter what life throws at them. Depending on their breed, they sometimes shed. If you're a Chloe, you look great in pastels and terrible in earth tones. Your personality shines from within, so you don't need lightbulbs. Chloes are genuine and spunky. Never cross a Chloe- she'll tear your eyes out… in the dark!"},
        {name : 'Jehan Madhani',  img : "content/jehanMadhani.jpg", answers : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Jehan Madhani! You're probably taking this quiz while watching a romantic comedy and happy crying just a little bit. Someday your prince will come, and by that we mean the Yoshi's delivery man who knows who you are. (You used to eat there alone instead of ordering delivery, until the day that you got a fortune cookie that said \"Everyone around you is rooting for you\" and became VERY paranoid.)"}
    ];

// initialize AngularJS
var quizApp = angular.module('quizApp', []);

quizApp.controller('QuizCtrl', function ($scope, $timeout, $window) {

    $scope.INSTITUTE_PEOPLE = INSTITUTE_PEOPLE;
    $scope.questions = questionsArray;
    $scope.answers = new Array();
    $scope.question = "";

    $scope.currentQuizStep = 0;
    $scope.currentQuestionNum = 0;
    $scope.NUM_PEOPLE = 14;
    $scope.NUM_QUESTIONS = 3;

    $scope.userAnswers = new Array();
    $scope.yourMatch = { name : "Institute Mom", img : "" , answers : [], bio : "Im ur mom"};
    $scope.yourMatch = {name : 'Ben Meyerson',  img : "content/benMeyerson.jpg", answers : [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], bio : "You're a Ben! Bens are an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today. Humans began to domesticate horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated, such as the endangered Przewalski\'s horse, a separate subspecies, and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior. Horses' anatomy enables them to make use of speed to escape predators and they have a well-developed sense of balance and a strong fight-or-flight response. Related to this need to flee from predators in the wild is an unusual trait: horses are able to sleep both standing up and lying down. Female horses, called mares, carry their young for approximately 11 months, and a young horse, called a foal, can stand and run shortly following birth. Most domesticated horses begin training under saddle or in harness between the ages of two and four. They reach full adult development by age five, and have an average lifespan of between 25 and 30 years. Horse breeds are loosely divided into three categories based on general temperament: spirited \"hot bloods\" with speed and endurance; \"cold bloods\", such as draft horses and some ponies, suitable for slow, heavy work; and \"warmbloods\", developed from crosses between hot bloods and cold bloods, often focusing on creating breeds for specific riding purposes, particularly in Europe. There are more than 300 breeds of horse in the world today, developed for many different uses. Horses and humans interact in a wide variety of sport competitions and non-competitive recreational pursuits, as well as in working activities such as police work, agriculture, entertainment, and therapy. Horses were historically used in warfare, from which a wide variety of riding and driving techniques developed, using many different styles of equipment and methods of control. Many products are derived from horses, including meat, milk, hide, hair, bone, and pharmaceuticals extracted from the urine of pregnant mares. Humans provide domesticated horses with food, water and shelter, as well as attention from specialists such as veterinarians and farriers."},

    $scope.scrollHeight = $('.header').position().top + $('.header').height();


    $scope.scrollToHeaderBottom = function() {
        $(document).scrollTop($scope.scrollHeight);
    };

    $scope.startQuiz = function() {
        $scope.currentQuizStep++;
        $scope.scrollToHeaderBottom();
        $scope.fadeInQuestion = true;
        $scope.resetFadeEffects();
        $scope.getQuestion();
    };

    $scope.nextQuestion = function(answerNumber) {
        $scope.fadeOutQuestion = true;
        $scope.submitAnswer(answerNumber);

        // wait for previous question to fade out before changing the model
        $timeout( function() {
            if ($scope.isEndOfQuiz()) {
                $scope.currentQuizStep++;
                $scope.submitQuiz();
            } else {
                    $scope.getQuestion();
                    $scope.scrollToHeaderBottom();
                    $scope.fadeInQuestion = true;
                    $scope.resetFadeEffects();
            }
        }, 1000);
    };

    $scope.isEndOfQuiz = function() {
        return $scope.currentQuestionNum >= $scope.NUM_QUESTIONS;
    };

    $scope.submitAnswer = function(answerNumber) {
        $scope.userAnswers.push(answerNumber);
        $scope.currentQuestionNum++;
    };

    $scope.getQuestion = function() {
        $scope.question = $scope.questions[$scope.currentQuestionNum].question;
        $scope.answers = $scope.questions[$scope.currentQuestionNum].answers;
    };

    $scope.submitQuiz = function() {
        $scope.yourMatch = $scope.findMatch();
        $scope.userAnswers = new Array();
    };

    $scope.resetFadeEffects = function() {
        $timeout( function() {
            $scope.fadeInQuestion = false;
            $scope.fadeOutQuestion = false;
        }, 1000);
    };

    $scope.findMatch = function() {

        //$scope.userAnswers = $('form.quiz-form').serializeArray();
        var userMatches = $scope.countAnswerMatches($scope.userAnswers);
        var matchIndexArray = $scope.getMatchIndex(userMatches);

        for (var i = 0; i < matchIndexArray.length; i++) {

            // only returns first match.
            // should implement random tiebreaker function or something
            return $scope.INSTITUTE_PEOPLE[matchIndexArray[i]];
        }
    };

    $scope.countAnswerMatches = function(userAnswers) {

        // creates zero-filled array of length NUM_PEOPLE
        var userMatches = Array.apply(null, Array($scope.NUM_PEOPLE)).map(Number.prototype.valueOf,0);

        for (var i = 0; i < $scope.NUM_PEOPLE; i++) {
            for (var j = 0; j < $scope.NUM_QUESTIONS; j++) {

                if ($scope.INSTITUTE_PEOPLE[i].answers[j] == userAnswers[j]) {
                    userMatches[i]++;
                }
            }
        }
        return userMatches;
    };

    $scope.getMatchIndex = function(userMatches) {
        var max = Math.max.apply(null, userMatches);
        var matchIndexArray = new Array();
        for (var i = 0; i < $scope.NUM_PEOPLE; i++) {
            if (userMatches[i] == max) {
                matchIndexArray.push(i);
            }
        }
        return matchIndexArray;
    };

    // document ready function
    angular.element(document).ready(function () {

        $timeout( function() {
            $scope.scrollToHeaderBottom();
        }, 90);
    });
});


