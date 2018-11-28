
function currentGrade(){

    var hw="hw";
    var cw="cw";
    var as="as";
    var pa="pa";
    var other="other";

    var hwAverage=calculate(hw);
    var cwAverage=calculate(cw);
    var asAverage=calculate(as);
    var paAverage=calculate(pa);
    var otherAverage=calculate(other);

    var hwWeight=changeWeight("hwWeight");
    var cwWeight=changeWeight("cwWeight");
    var asWeight=changeWeight("asWeight");
    var paWeight=changeWeight("paWeight");
    var otherWeight=changeWeight("otherWeight");

    var totalWeight=hwWeight+cwWeight+asWeight+paWeight+otherWeight;

    var hwTotal = calculateWeight(hwAverage, "hwWeight",totalWeight);
    var cwTotal = calculateWeight(cwAverage, "cwWeight",totalWeight);
    var asTotal = calculateWeight(asAverage, "asWeight",totalWeight);
    var paTotal = calculateWeight(paAverage, "paWeight",totalWeight);
    var otherTotal = calculateWeight(otherAverage, "otherWeight",totalWeight);

    var hwWeight=("hwWeight");
    var cwWeight=("cwWeight");
    var asWeight=("asWeight");
    var paWeight=("paWeight");
    var otherWeight=("otherWeight");

    var findCurrent = hwTotal+cwTotal+asTotal+paTotal+otherTotal;
    var currentRound= (findCurrent).toFixed(2);

    var letter= findLetter(findCurrent);

    if (totalWeight<0||totalWeight>100){
        document.getElementById("error").innerHTML="The weight must equal a positive number less than 100, please enter correct values";
    }else{
        document.getElementById("calculate").innerHTML="Your current grade is: "+ currentRound+"%";
        document.getElementById("letterGrade").innerHTML="That is an unweighted "+letter+"!";

        if(hwAverage>=90){
            document.getElementById("hw").style.background="forestgreen";
        }if(hwAverage>=80&&hwAverage<90){
            document.getElementById("hw").style.background="steelblue";
        }if(hwAverage>=70&&hwAverage<80){
            document.getElementById("hw").style.background="gold";
        }if(hwAverage>=60&&hwAverage<70){
            document.getElementById("hw").style.background="orange";
        }if(hwAverage<60){
            document.getElementById("hw").style.background="red";
        }

        if(cwAverage>=90){
            document.getElementById("cw").style.background="forestgreen";
        }if(cwAverage>=80&&cwAverage<90){
            document.getElementById("cw").style.background="steelblue";
        }if(cwAverage>=70&&cwAverage<80){
            document.getElementById("cw").style.background="gold";
        }if(cwAverage>=60&&cwAverage<70){
            document.getElementById("cw").style.background="orange";
        }if(cwAverage<60){
            document.getElementById("cw").style.background="red";
        }

        if(asAverage>=90){
            document.getElementById("as").style.background="forestgreen";
        }if(asAverage>=80&&asAverage<90){
            document.getElementById("as").style.background="steelblue";
        }if(asAverage>=70&&asAverage<80){
            document.getElementById("as").style.background="gold";
        }if(asAverage>=60&&asAverage<70){
            document.getElementById("as").style.background="orange";
        }if(asAverage<60){
            document.getElementById("as").style.background="red";
        }

        if(paAverage>=90){
            document.getElementById("pa").style.background="forestgreen";
        }if(paAverage>=80&&paAverage<90){
            document.getElementById("pa").style.background="steelblue";
        }if(paAverage>=70&&paAverage<80){
            document.getElementById("pa").style.background="gold";
        }if(paAverage>=60&&paAverage<70){
            document.getElementById("pa").style.background="orange";
        }if(paAverage<60){
            document.getElementById("pa").style.background="red";
        }

        if(otherAverage>=90){
            document.getElementById("other").style.background="forestgreen";
        }if(otherAverage>=80&&otherAverage<90){
            document.getElementById("other").style.background="steelblue";
        }if(otherAverage>=70&&otherAverage<80){
            document.getElementById("other").style.background="gold";
        }if(otherAverage>=60&&otherAverage<70){
            document.getElementById("other").style.background="orange";
        }if(otherAverage<60){
            document.getElementById("other").style.background="red";
        }
    }
}

function final(){

    var hwWeight=document.getElementById("hwWeight").value;
    var cwWeight=document.getElementById("cwWeight").value;
    var asWeight=document.getElementById("asWeight").value;
    var paWeight=document.getElementById("paWeight").value;
    var otherWeight=document.getElementById("otherWeight").value;

    var finalWant=document.getElementById("finalWant").value;
    var finalweight=document.getElementById("finalWeight").value;
    var currentGrade=document.getElementById("myCurrentGrade").value;

    var finalGrade=finalCalculate();

    if (finalweight>=100||finalweight<0){
        document.getElementById("error2").innerHTML="The weight must be a positive number less than 100, please enter correct values"
    }else{
        document.getElementById("myFinalWant").innerHTML="To get "+finalWant+"% in the class";
        document.getElementById("myFinalNeed").innerHTML="You need to get a "+finalGrade+"%";
        document.getElementById("luck").innerHTML="Good Luck!";
    }
}

function calculate(value){
    var num=document.getElementById(value).value;
    var array=num.split(",");
    var average=0;
    for (var i=0; i<array.length; i++){
        average+=parseInt(array[i]);
    }
    average=average/array.length;
    return average;
}

function calculateWeight(average, value, totalWeight){
    var num=document.getElementById(value).value;
    var weight = num/totalWeight;
    var total=weight*average;

    return total;
}

function findLetter(value){
    var answer="";
    if (value>=90){
        answer=answer+"A";
    }if (value>=80 && value<90){
        answer=answer+"B";
    }if (value>=70 && value<80){
        answer=answer+"C";
    }if (value>=60 && value<70){
        answer=answer+"D";
    }if (value<=60){
        answer=answer+"F";
    }
    return answer;
}

function changeWeight(value){
    var num=document.getElementById(value).value;
    return parseInt(num);
}

function finalCalculate(){

    var current=document.getElementById("myCurrentGrade").value;
    var want=document.getElementById("finalWant").value;
    var weight=document.getElementById("finalWeight").value;

    var weighted=weight/100;
    var weighted1=1-weighted;
    var current1=current*weighted1;
    var need=want-current1;
    var need2=need/weighted;
    var need3 = (need2).toFixed(2);

    return need3;
}