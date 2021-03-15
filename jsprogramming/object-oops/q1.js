// Given an array of objects of student's marks:
//1. Print the name and total marks of each student.
//2. Print the name of student whose total marks is highest.
//3. Print the name of student whose total marks is lowest.
//4. Print the average marks of the class in computer subject.
//5. Print the grades of all students:
//   Grade A if total marks is higher than or equal to 75%,
//   Grade B if higher than or equal to 60%,
//   Grade C if higher than or equal to 35%,
//   Grade D if lower than 35%.
//10. Print the total number of students passed and their names. Pass when total marks is greater than 35%
const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

//1. Print the name and total marks of each student.
const nameAndMarks=(studentDetails)=>{

    studentDetails.forEach((student)=>{
        console.log(`Name:${student.name} | Total Marks: ${student.maths+student.science+student.english+student.computer}`)
    })
}

nameAndMarks(studentDetails)


//2. Print the name of student whose total marks is highest.
const highestMarks=(studentDetails)=>{
    dic={}
    studentDetails.forEach((student)=>{
        dic[student.name] =student.maths+student.science+student.english+student.computer
    })
    //let mini=Math.min(...Object.values(strObj))
    let maxi=Math.max(...Object.values(dic))

    
    for (let [key, value] of Object.entries(dic)) {
        if(value === maxi)
        console.log(`Student with highest marks:- Name: ${key} | Score : (${value})`);
      }
}

highestMarks(studentDetails)


//3. Print the name of student whose total marks is lowest
const lowestMarks=(studentDetails)=>{
    dic={}
    studentDetails.forEach((student)=>{
        dic[student.name] =student.maths+student.science+student.english+student.computer
    })
    let mini=Math.min(...Object.values(dic))
    //let maxi=Math.max(...Object.values(dic))

    
    for (let [key, value] of Object.entries(dic)) {
        if(value === mini)
        console.log(`Student with lowest marks:- Name: ${key} | Score : (${value})`);
      }
}

lowestMarks(studentDetails)

//4. Print the average marks of the class in computer subject.
const avgMarks=(studentDetails)=>{
    let avgMarks=0
    let sum=0;
    let n=studentDetails.length
    studentDetails.forEach((student)=>{
        sum+=student.maths+student.science+student.english+student.computer
    })
    

    
   
    console.log(` avg marks:- ${sum/n}`);
      
}

avgMarks(studentDetails)

//5. Print the grades of all students:
const nameAndMarks=(studentDetails)=>{
    let grade;
    let totalScore=0;
    studentDetails.forEach((student)=>{
        totalScore=student.maths+student.science+student.english+student.computer
        if(total)
        console.log(`Name:${student.name} | grade: ${grade}`)
    })
}

nameAndMarks(studentDetails)