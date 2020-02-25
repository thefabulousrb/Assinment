var schools: school[] = [];
function addstudent() {



    let name = (<HTMLInputElement>document.getElementById('Name')).value;
    let age = (<HTMLInputElement>document.getElementById('Age')).value;
    let Class = (<HTMLInputElement>document.getElementById('Class')).value;
    let Favourite_sub = (<HTMLInputElement>document.getElementById('favourite_sub')).value;
    let School = (<HTMLInputElement>document.getElementById!('School')).value;
    let status: boolean;

    function validate() {

        var regex = /^[a-zA-Z ]{2,30}$/;
        var regex1 = /^[-9]{1,2}$/;

        if (name == "" || age == "" || Class == "" || Favourite_sub == "" || School == "") {

            alert("please fill all fields");
            return false;
        }
        else if (regex.test(name) == false) {

            alert("Name can contain only alphabets and space");
            return false;
        }
        else if (regex1.test(age) == false || age.length > 2) {

            alert("invalid ageee");
            return false;
        }
        else if (regex.test(School) == false) {
            alert("enter valid school name");
            return false;
        }
     
        else {
            return true;
        }


    }

    if (validate() == true) {
        let student: Student = new Student();
        student.name = name;
        student.age = age;
        student.Class = Class;
        student.Favourite_sub = Favourite_sub;

        if (schools.length > 0) {
            for (var i = 0; i < schools.length; i++) {

                if (schools[i].School_name == School) {

                    schools[i].students.push(student);
                    break;


                }
                else {
                    status = false;
                }

            }
        }


        if (schools.length == 0 || status == false) {

            var newschool: school = new school();
            newschool.School_name = School;
            newschool.students.push(student);
            schools.push(newschool);
            status = true;


        }
        alert(schools.length);

    }
}

function getstudents() {

    var regex = /^[a-zA-Z ]{2,30}$/;
    var searchitem = (<HTMLInputElement>document.getElementById("searchitem")).value;
    var result: boolean = true;
    if (searchitem == "") {
        alert("please enter value");
        return false;
    }
    else if (regex.test(searchitem) == false) {

        alert("Name can have onnly alphabets and length should be beween 2-30");
        return false;
    }



    if (schools.length <= 0) {
        alert("Please Add students");
    }
    else {
        
        
        for (var i = 0; i < schools.length; i++)
        {

            if (schools[i].School_name == searchitem) {
                for (var j = 0; j < schools[i].students.length; j++) {
                    var studentinfo = document.getElementById('studentinfo');
                    studentinfo.innerHTML += "<h4>";
                    studentinfo.innerHTML += "Name:" + schools[i].students[j].name + "Age:" + schools[i].students[j].age + "class:" + schools[i].students[j].Class + "favouritesub:" + schools[i].students[j].Favourite_sub;
                    


                }
                break;


            }
            else {

                result = false;
                 }


        }
        if (result == false) {

            alert("No such shools found");
        }


        }


    }


  





