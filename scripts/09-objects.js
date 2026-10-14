let course = {
  code: "CSCI 12",
  title: "Fundamentals of Web Application Development",
  crn: "15078",
  meets: "W 8:10-10:10p ET",
  instr: "David P. Heitmeyer",
  start_date: "2026-08-31",
  end_date: "2026-12-19",
  catalog_url:
    "https://courses.dce.harvard.edu/?details&srcdb=202701&crn=15078",
  meeting_times: [
    {
      meet_day: "2",
      start_time: "2010",
      end_time: "2210",
    },
  ],
  subject_code: "CSCI",
  term: "Fall 2026",
  sort_string: "csci00012",
};

/* you can access by key 
   with [] syntax with key name or . syntax
*/
console.log(course['title']);
console.log(course.title);

console.log('='.repeat(15));
/* iterate over object with for..in */
for (const key in course) {
   console.log(`key   is ${key}`);
   console.log(`value is ${course[key]}`);
   console.log('--');
}
console.log('='.repeat(15));

const keys = Object.keys(course);
console.log(keys);

const entries = Object.entries(course);
console.log(entries);