class Student{
	constructor(name, age, dateOfBirth, gender, studentId, hobbies){
		this.name = name;
		this.age = age;
		this.birth = dateOfBirth;
		this.gender = gender;
		this.id = studentId;
		this.hobby = hobbies;
	}

	setName(newName){
		this.name = newName;
	}
	setAge(newAge){
		this.age = newAge;
	}
	setBirth(newBirth){
		this.birth = newBirth;
	}
	setGender(newGender){
		if(newGender == "Male" || newGender == "Female"){
			this.gender = newGender;
		}
	}
	setId(newIdStudent){
		this.id = newIdStudent;
	}


	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getBirth(){
		return this.birth;
	}
	getGender(){
		return this.gender;

	}
	getId(){
		return this.id;
	}
	getData(){
		return this;
	}

	addHobby(newHobby){
		this.hobby.push(newHobby);
	}

	removeHobby(newHobby){
		let del = this.hobby.indexOf(newHobby);
		this.hobby.splice(del,1);
	}
}

let data = new Student("Anggi", 23, "16 Januari 1994", "Male", "9-Island-003", ["Culinary"]);

data.setName("Laras");
console.log(data.getName());
data.setAge("22");
console.log(data.getAge());
console.log(data.getBirth());
data.setGender("Female");
console.log(data.getGender());
console.log(data.getId());
data.addHobby("Coding");
console.log(data.hobby);
data.removeHobby("Coding");
console.log(data.hobby);
console.log(data.getData());