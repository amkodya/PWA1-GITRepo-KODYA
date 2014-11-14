/*
	* Mid Terms for PWA-1
	*
	* Name: Ashley M. Kodya
	*
*/
(function(){

    //array of student 1 variables
var student1 = {name:'Jerry Garcia',address:{street:'123 Shakedown st',city:'Burlington',state:'VT'},gpa:[3.2, 3.5, 2.9]};

console.log('Student name: '+ student1.name);          //submits array variable to console
console.log('Student Address: '+ student1.address.street+', '+student1.address.city+', '+student1.address.state);   //submits array variable to console
console.log('Student GPA\'s: '+ student1.gpa[0]+', '+student1.gpa[1]+', '+student1.gpa[2]);   //submits array variable to console

    var clickButton = document.getElementById('info_btn');   //click object FIGHT box to begin function
    clickButton.onclick = function addData(){                 //function envoked by clicking button


    //std1 object to display student information in the function addData()
    var std1 = {
        stdName: 'Jerry Garcia',
        stdAddress: '123 Shakedown St, Burlington, VT',
        stdGPA: [
            {gpa: 3.2},
            {gpa: 3.5},
            {gpa: 2.9}
        ]

    };
        console.log('Student Name: ' + std1.stdName);                   // student name to the console from object
        console.log('Student Address: ' + std1.stdAddress);             // student address to the console from object
        console.log('Student GPA: ' +std1.stdGPA[0].gpa+', '+std1.stdGPA[1].gpa+', '+std1.stdGPA[2].gpa); //student gpa to the console from object




        var gradeAvg = function (stu1) {                            // gradeAvg function to calculate averages of GPA
            var count = 0;                                       // starts count at zero
            var total = 0;                                         //starts total at zero
            for (var i = 0, j = stu1.stdGPA.length; i < j; i++) {     //for loop
                count++;                                           //counts number of gpa averages
                total = total + stu1.stdGPA[i]['gpa'];            //calculates total of gpa averages

            };
            return total / count;              // returns the total divided the number of gpa averages
        };


        console.log('Average Grade: ', gradeAvg(std1));   //console log the average of grades to the console




    var std1Name = document.getElementById("name");           // shows name on name link line from html
    std1Name.innerHTML = std1.stdName;

    var std1Address = document.getElementById("address");        // shows address in address line from html
    std1Address.innerHTML = std1.stdAddress;                     // shows address in address line

    var std1GPA = document.getElementById("gpa");                                              // shows gpa scores in gpa line
    std1GPA.innerHTML = std1.stdGPA[0].gpa+', '+std1.stdGPA[1].gpa+', '+std1.stdGPA[2].gpa;   // displays gpa scores in gpa line

    var std1GpaAverage = document.getElementById("gpaavg");         // dom object to show average of gpa from html
    std1GpaAverage.innerHTML = gradeAvg(std1);                     // calls upon gradeAvg() function

    var noMoreInfo =  disableBtn();           //function to disable button after click
       console.log(noMoreInfo);

        console.log(window);                 // global dom object
        console.log(window.location);       // global dom object
        console.log(window.history);        // global dom object
        console.log(window.navigator);      // global dom object




           var giveDate = document.getElementById("date");   // shows date at end of object
            giveDate.innerHTML = Date();                     // date function as given by "console.log(window)"








    };





    function disableBtn(){

        var noMoreInfo = student1.gpa.length;

        if (noMoreInfo === 3){
            var doneMsg = document.querySelectorAll('#info_box a');
            console.log(doneMsg[1]);

            for (var i= 0, max = doneMsg.length; i<max; i++){

                doneMsg[i].innerHTML = 'Done!!!';
            };
            document.getElementById('info_btn').style.pointerEvents = 'none';
        }else{

            document.getElementById('info_btn').style.pointerEvents = 'auto';
        };

        return noMoreInfo;

    }


//addData();









})();