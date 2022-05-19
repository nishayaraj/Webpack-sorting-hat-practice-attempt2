import studentsOnDom from '../../scripts/components/cards';

const students = [];
const voldysArmy = [];

// target filter buttons on Dom
document.querySelector('#filter-container').addEventListener('click', (e) => {
  if (e.target.id.includes('filter')) {
    const [, house] = e.target.id.split('--');
    if (house === 'all') {
      studentsOnDom('#students', students);
    } else if (house) {
      const filter = students.filter((student) => (student.house === house));
      studentsOnDom('#students', filter, house);
    }
  }
});

// target expel buttons to move to voldys army
document.querySelector('#student-container')
  .addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => (student.id === Number(id)));
      // move from one array to another
      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      // studentsOnDom('#students', students);
      // studentsOnDom('#voldy', voldysArmy);
    }
  });

export default students;
