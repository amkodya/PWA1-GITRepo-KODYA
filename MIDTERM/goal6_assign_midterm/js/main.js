/*
	* Mid Terms for PWA-1
	*
	* Name: Ashley M. Kodya
	*
*/
(function(){

var student1 = {name:'Jerry Garcia',address:{street:'123 Shakedown st',city:'Burlington',state:'VT'},gpa:[3.2, 3.5, 2.9]};
//var student2 = {name:'Bobby Weir',address:{street:'123 Bertha rd',city:'Buffalo',state:'NY'},gpa:[3.0, 3.2, 3.3]};
//var student3 = {name:'Phil Lesh',address:{street:'123 Brokedown Palace',city:'New York',state:'NY'},gpa:[2.5, 2.1, 3.0]};


console.log('Student name: '+ student1.name);
console.log('Student Address: '+ student1.address.street+', '+student1.address.city+', '+student1.address.state);
console.log('Student GPA\'s: '+ student1.gpa[0]+', '+student1.gpa[1]+', '+student1.gpa[2]);

    var clickButton = document.getElementById('info_btn');   //click object FIGHT box to begin function
    clickButton.onclick = function addData(){



    var std1 = {
        stdName: 'Jerry Garcia',
        stdAddress: '123 Shakedown St, Burlington, VT',
        stdGPA: [
            {gpa: 3.2},
            {gpa: 3.5},
            {gpa: 2.9}
        ]


    };
        console.log('Student Name: ' + std1.stdName);
        console.log('Student Address: ' + std1.stdAddress);
        console.log('Student GPA: ' +std1.stdGPA[0].gpa+', '+std1.stdGPA[1].gpa+', '+std1.stdGPA[2].gpa);


        var gradeAvg = function (stu1) {
            var count = 0;
            var total = 0;
            for (var i = 0, j = stu1.stdGPA.length; i < j; i++) {
                count++;
                total = total + stu1.stdGPA[i]['gpa'];

            };
            return total / count;
        };


        console.log('Average Grade: ', gradeAvg(std1));









var std1Name = document.getElementById("name");
std1Name.innerHTML = std1.stdName;

var std1Address = document.getElementById("address");
std1Address.innerHTML = std1.stdAddress;

var std1GPA = document.getElementById("gpa");
std1GPA.innerHTML = std1.stdGPA[0].gpa+', '+std1.stdGPA[1].gpa+', '+std1.stdGPA[2].gpa;

var std1GpaAverage = document.getElementById("gpaavg");
std1GpaAverage.innerHTML = gradeAvg(std1);






    };

    document.getElementById("info_btn").disabled = true;

//addData();









})();