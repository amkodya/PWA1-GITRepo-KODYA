/*
	* Mid Terms for PWA-1
	*
	* Name: Ashley M. Kodya
	*
*/
(function(){

var student1 = {name:'Jerry Garcia',address:{street:'123 Shakedown st',city:'Burlington',state:'VT'},gpa:[3.2, 4.0, 2.9]};
//var student2 = {name:'Bobby Weir',address:{street:'123 Bertha rd',city:'Buffalo',state:'NY'},gpa:[3.0, 3.2, 3.3]};
//var student3 = {name:'Phil Lesh',address:{street:'123 Brokedown Palace',city:'New York',state:'NY'},gpa:[2.5, 2.1, 3.0]};


console.log('Student name: '+student1.name);
console.log('Student Address: '+student1.address.street+', '+student1.address.city+', '+student1.address.state);
console.log('Student GPA\'s: '+student1.gpa[0]+', '+student1.gpa[1]+', '+student1.gpa[2]);

function addData(){

    var student1name = student1.name;
    var student1add = student1.address.street+', '+student1.address.city+', '+student1.address.state



    var stdnt1 = {
        stdName: student1.name,
        stdAddress: [
            {street: student1.address.street},
            {city: student1.address.city },
            {state:student1.address.state }
            ]
        stdGPA: [
            {GPA: student1.gpa[0]},
            {GPA: student1.gpa[1]},
            {GPA: student1.gpa[2]}
        ]

    };




}













})();