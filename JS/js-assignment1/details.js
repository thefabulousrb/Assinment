function getdetails(){
var firstname=(document.getElementById('firstname')).value;
var lastname=(document.getElementById('lastname')).value;
var email=(document.getElementById('email')).value;
var contact_no=(document.getElementById('contactnumber')).value;
var username=document.getElementById('username').value;
var address=document.getElementById('address').value;
var password=document.getElementById('password').value;
var cdl=[];
var male=document.getElementById("male");
var female=document.getElementById("female")
var gender=getgender();
var qualification=document.getElementById('qualification');
var experience=document.getElementById('experience');
var codinglanguage=document.getElementById('codinglanguage');
var lang1=document.getElementById('0');
var lang2=document.getElementById('1');
var lang3=document.getElementById('2');
var lang4=document.getElementById('3');
var lang5=document.getElementById('4');
var Qual=getqualification();
var Exp=getexperience();  
var lan=getcourse();

function getgender()
{

	if( female.selected==true)
	{
		gender="female";
	}
	else{
		gender="male";
	}

	return gender;
}
function getqualification()
{

	for(var i=0;i<6;i++)
	{
 		var qual=qualification.options[i];
 		if(qual.selected===true)
 		{
 			return(qual.text);
 		}
	}
}


function getexperience()
{

	for(var i=0;i<6;i++)
	{
 		var exp=experience.options[i];
 		if(exp.selected==true)
 		{
 			return(exp.text);
 		}

	}

}

function getcourse()
	{

		if(lang1.checked===true)
		{
			cdl.push(lang1.name);
		}
		if(lang2.checked===true)
		{
			cdl.push(lang2.name);	
		}
		if(lang3.checked===true)
		{
			cdl.push(lang3.name);
		}
		if(lang4.checked===true)
		{
			cdl.push(lang4.name);
		}
		if(lang5.checked===true)
		{
			cdl.push(lang5.name);
		}

	
		return cdl;
	}
	
function employee(f_name,L_name,mail,mno,sex,u_name,pass,add,degree,exp,pl)
{

	this.f_name=f_name;
	this.L_name=L_name;
	this.mail=mail;
	this.mno=mno;
	this.sex=sex;
	this.u_name=u_name;
	this.pass=pass;
	this.add=add;
	this.degree=degree;
	this.exp=exp;
	this.pl=pl;


}

var emp1=new employee(firstname,lastname,email,contact_no,gender,username,password,address,Qual,Exp,lan);

console.log("Firtname:"+emp1.f_name+"\nlastname:"+emp1.L_name+"\nemail:"+emp1.mail+"\nMobile_number:"+emp1.mno+"\nGender:"+emp1.sex+"\nUsername:"+emp1.u_name+"\nPassword:"+emp1.pass+"\nAddress:"+emp1.add+"\nQualification:"+emp1.degree+"\nExperiece:"+emp1.exp+"\nProgramming_Language:"+emp1.pl);
event.preventDefault();

}
