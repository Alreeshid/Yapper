export default function DemoOutput() {
    //first, grab the user's information from Cache, if there is any.
    let output;
    let data;
    

    if (localStorage.getItem("demoQuiz")) {
        output = localStorage.getItem("demoQuiz");
        //alert(output)
        data = JSON.parse(output) //takes the strong and makes it an object again
        console.log(data[0])
        output = ""//empty object array
        //const blob = new Blob([data], {type: "text/plain"})
        //const url = new URL.createObjectURL(blob)
        //document.getElementById("outputChannel").innerHTML = url
        //can't work with Vite as is
    }
    else
        output = "You have no demo data currently saved to your cache, please take the demo if you haven't already!"


function OutPut(){
    //alert(data)
    
    const listItems = data.map(quest =>   
        <>
            <li>{quest.qNum}: {quest.qQuest}</li>
            <li>Answer: {quest.Answer}</li>
            {console.log(quest)}
            <br></br>
        </>
     )
        //Won't return anything, figure out why. Doesn't break the page
        
    return(
        <>
            <ul>{listItems}</ul>
        </>
    )
}


    return (
        <>
            <h1>Thank you for trying our demo!</h1>
            <p>
                Please copy your information from below, and paste it wherever you'd like. If you'd like to answer a questionaire and have its information
                saved freely, please make an account!
                <br></br> <br></br>
                This data has been saved into your Cache, so you can access it
                temporarily by returnign to this URL(see button below if you'd like to clear this cache).
                If you take another demo quiz, this will be overwritten.
                

            </p>
            <br></br> <hr></hr>
            
            
            <OutPut />
        </>
    )
}
//this page should be secretive, and only show if the user reaches the end of the questionnaire
//look at the Router in indexRender.jsx for the path, and use the same redirection function in
//the login page for how to reach this component.