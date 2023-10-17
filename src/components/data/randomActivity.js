const arrayOfActivities = [
      {
        "id": 1,
        "name": "Museum",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 2,
        "name": "Swimming Pool",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": true
      },
      {
        "id": 3,
        "name": "Make Slime",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
    },
      {
        "id": 4,
        "name": "Playground",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": true
      },
      {
        "id": 5,
        "name": "Family Movie",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 6,
        "name": "Movie Theatre",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 7,
        "name": "Tummy Time",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 8,
        "name": "Sensory Development",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 9,
        "name": "Take a walk",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": true
      },
      {
        "id": 10,
        "name": "Camping",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": true
      },
      {
        "id": 11,
        "name": "Arcade",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": false
      },
      {
        "id": 12,
        "name": "Theme Park",
        "image": "",
        "description": "",
        "ageRange": "",
        "outdoor": true
    }
]

  export const getRandomActivity = () => 
  arrayOfActivities[Math.floor(Math.random() * arrayOfActivities.length)]