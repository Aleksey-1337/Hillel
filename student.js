function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);
  this.attendanceIndex = 0;

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, val) => acc + val, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = true;
    } else {
      console.warn('Досягнуто ліміту.');
    }
  };

  this.absent = function () {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = false;
    } else {
      console.warn('Досягнуто ліміту.');
    }
  };

  this.summary = function () {
    const avgGrade = this.getAverageGrade();
    const recorded = this.attendance.filter(val => val !== null);
    const avgAttendance = recorded.length
      ? recorded.filter(val => val === true).length / recorded.length
      : 0;

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return 'Молодець!';
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return 'Добре, але можна краще';
    } else {
      return 'Редиска!';
    }
  };
}

const student1 = new Student('Анастасія', 'Федотовська', 2001, [95, 93, 90]);
const student2 = new Student('Олексій', 'Федотовський', 2000, [85, 88, 82]);
const student3 = new Student('Олександр', 'Федотовський', 1999, [70, 65, 60]);

student1.present(); student1.present(); student1.present();
student2.present(); student2.absent(); student2.present();
student3.absent(); student3.absent(); student3.absent();

console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);
console.log(`${student2.firstName} ${student2.lastName}: ${student2.summary()}`);
console.log(`${student3.firstName} ${student3.lastName}: ${student3.summary()}`);
