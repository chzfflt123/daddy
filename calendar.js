function newpage(setMonth, setDay){
    const date = new Date();
    console.log(date);

    //Adding 1 because the month index starts from 0 
    //  This will change our month format to MM,i.e.,08
    let month = date.getMonth()+1;
    console.log(month);

    let day = date.getDate();
    console.log(day);

    let wordMonth = "";
    if(setMonth==6){
        wordMonth = "June";
    }

    // if(month >=setMonth && day>= setDay){
        let href = wordMonth+setDay+".html";
        console.log(href);
        window.location = href;
    // }
    // else {
    //     window.alert("Wait until "+wordMonth+" "+setDay+"th to click the button!");
    // }
}