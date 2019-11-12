
const allCourses = [
  {
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160  
  },
  {
    name: `Planning and Prototype`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,  
  }
]


document.getElementById(`name`).innerHTML = allCourses[1].name;
document.getElementById(`code`).innerHTML = allCourses[1].code;
document.getElementById(`instructor`).innerHTML = allCourses[1].instructor;
document.getElementById(`start`).innerHTML = allCourses[1].start;
document.getElementById(`weeks`).innerHTML = allCourses[1].weeks;
document.getElementById(`duration`).innerHTML = allCourses[1].duration;

/*
LAB:
1. Fix the output of the start term by turning the Object's properties into a String
      Ex: { term: `Fall`, year: 2019 }  >>  `Fall 2019`
2. Write a function that will take a Number of minutes and will return a human-readable String
      Ex: 160  >>  `2 hr, 40 min`
      Hints:
        - Division: /
        - Remainder: %
        - Rounding:
            - Standard rules:     Math.round(4.5)
            - Always round up:    Math.ceil(1.001)
            - Always round down:  Math.floor(1.999)
*/

function getDurationFromMinutes(minutes) {
  const hrs = Math.floor (minutes/60);
  const mins = duration - hrs * 60;

  return `${hrs} hr, ${mins} min`;
}

getDurationFromMinutes(160);  // 2 hr, 40 min



