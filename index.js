
function superbowlWin (theArray){
 let myResult = theArray.find( year => {return year.result === 'W'});
 console.log(myResult);
 if (myResult == undefined) {return undefined;}
     let theYear = myResult.year;
    console.log(theYear);
    return theYear;
     }
 
