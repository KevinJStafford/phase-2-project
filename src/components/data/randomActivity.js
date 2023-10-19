const arrayOfActivities = [
  {
    "id": 1,
    "name": "Museum",
    "image": "https://tinyurl.com/museumthefamilyhelper",
    "description": "Museums can provide memorable, immersive learning experiences, provoke imagination, introduce unknown worlds and subject matter, and offer unique environments for quality time with family.",
    "ageRange": "all ages",
    "outdoor": false,
    "free": false
    },
    {
    "id": 2,
    "name": "Swimming Pool",
    "image": "https://tinyurl.com/communitypoolthefamilyhelper",
    "description": "water activities are great ways to encourage your children to become more active. And the best thing is that they won't even know notice — they'll be too busy having fun.",
    "ageRange": "all ages",
    "outdoor": true,
    "free": false
    },
    {
    "id": 3,
    "name": "Make Slime",
    "image": "https://tinyurl.com/slimethefamilyhelper",
    "description": "Making slime with your kids is the best way to spend some hours of quality time with your family while having some fun and creative talks.",
    "ageRange": "5 and over",
    "outdoor": false,
    "free": false
    },
    {
    "id": 4,
    "name": "Playground",
    "image": "https://tinyurl.com/playgroundthefamilyhelper",
    "description": "Playgrounds are safe spaces where kids develop crucial physical, social, emotional and imaginative skills necessary to gain self-confidence, improve coordination, and advance critical thinking capabilities.",
    "ageRange": "1 and over'",
    "outdoor": true,
    "free": true
    },
    {
    "id": 5,
    "name": "Family Game Day",
    "image": "https://tinyurl.com/gamedaythefamilyhelper",
    "description": "a family game day provides an opportunity for children to bond with siblings, parents and family members as well as peers. It can promote tradition building and establish a fun routine. Additionally, game days help children develop social skills such as following rules, taking turns, and graceful winning or losing.",
    "ageRange": "3 and over",
    "outdoor": false,
    "free": true
    },
    {
    "id": 6,
    "name": "Movie Theatre",
    "image": "https://tinyurl.com/moviesthefamilyhelper",
    "description": "a fun oppurtunity for the whole family to enjoy some popcorn and movies",
    "ageRange": "all ages",
    "outdoor": false,
    "free": false
    },
    {
    "id": 7,
    "name": "Tummy Time",
    "image": "https://tinyurl.com/tummytimethefamilyhelper",
    "description": "Supervised tummy time is important because it helps to: Strengthen baby's neck, shoulder, and arm muscles so the baby can start to sit up, crawl, and eventually walk on their own.",
    "ageRange": "1 and under",
    "outdoor": false,
    "free": true
    },
    {
    "id": 8,
    "name": "Sensory Development",
    "image": "https://tinyurl.com/sensorythefamilyhelper",
    "description": "Sensory play encourages learning through exploration, curiosity, problem solving and creativity.",
    "ageRange": "all ages",
    "outdoor": false,
    "free": true
    },
    {
    "id": 9,
    "name": "Take a walk",
    "image": "https://tinyurl.com/walkthefamilyhelper",
    "description": "Family walks open up new forms of conversations dependent on the environment, offer a safe space for your child to decompress, and show your littles the importance of initiating regular bonding time with loved ones. If walking offers all these great benefits, why do families naturally gravitate towards the couch?",
    "ageRange": "all ages",
    "outdoor": true,
    "free": true
    },
    {
    "id": 10,
    "name": "Camping",
    "image": "https://tinyurl.com/campthefamilyhelper",
    "description": "Camping is also a great opportunity to teach your children new skills. When you go camping, you’re forced to disconnect from technology. This can be a good thing! It gives you the opportunity to talk and interact with your family without any distractions. If you have teenagers, this is an excellent way to get them to put down their phones and pay attention to the world around them.",
    "ageRange": "all ages",
    "outdoor": true,
    "free": false
    },
    {
    "id": 11,
    "name": "Arcade",
    "image": "https://tinyurl.com/arcadethefamilyhelper",
    "description": "playing at the arcade can be a great experience for kids as it helps them hone social skills and boosts their self-esteem. Arcades offer various video game choices",
    "ageRange": "5 and over",
    "outdoor": false,
    "free": false
    },
    {
    "id": 12,
    "name": "Theme Park",
    "image": "https://tinyurl.com/themeparkthefamilyhelper",
    "description": "Amusement parks can offer kid-sized thrill rides as well as daredevil experiences for older children and adults. Theme parks provide adventure, enjoyment, and memories that will last for a lifetime!",
    "ageRange": "all ages",
    "outdoor": true,
    "free": false
    },
    {
    "name": "Karaoke",
    "image": "https://tinyurl.com/karaokethefamilyhelper",
    "description": "Karaoke is all about having fun and encouraging one and another.  Looking to try something new for family night? Karaoke is also always a great way to bring the family together. Try a night of singing and dancing to all of your favorite tunes!",
    "ageRange": "all ages",
    "outdoor": "Indoor Activity",
    "free": "Free Activity",
    "id": 13
    }
]

  export const getRandomActivity = () => 
  arrayOfActivities[Math.floor(Math.random() * arrayOfActivities.length)]