var student = {
  firstName: 'Kurt',
  lastName: 'Yazdizadeh',
  age: 32
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Network Administrator';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2022
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Fido',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
