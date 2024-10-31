export default function DemoOutput({questions}){
    return(
        <>
        <h1>Thank you for trying our demo!</h1>
        <p>
            Please copy your information from below, and paste it wherever you'd like. If you'd like to answer a questionaire and have its information
             saved freely, please make an account!
                <br></br> <br></br>
             This data has been saved into your Cache, so you can access it 
             temporarily by returnign to this URL(see button below if you'd like to clear this cache). 
             If you take another demo quiz, this will be overwritten. 
             <br></br> <hr></hr>
        </p>
        {
            userInput.map((question) =>{
                //map out the question data in paragraph formats, with breaks between. This should be ideal for copy-pasting, so minimal styling
            })
        }
        </>
    )
}
//this page should be secretive, and only show if the user reaches the end of the questionnaire
//look at the Router in indexRender.jsx for the path, and use the same redirection function in
//the login page for how to reach this component.