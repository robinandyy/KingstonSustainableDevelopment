

document.addEventListener('DOMContentLoaded', function(){
    // hide all steps
    const elements = document.querySelectorAll('.step-container');
    elements.forEach(function(element){
        element.style.opacity = 0;
    })

    function wordsDisappear(){
        document.querySelector('#simple').style.opacity = 0;
        document.querySelector('#efficient').style.opacity = 0;
        document.querySelector('#effective').style.opacity = 0;
        document.querySelector('#ready').style.opacity = 0;
        // document.querySelector('#oops').style.opacity = 0;
    }

    wordsDisappear()

    function simpleAppear(){
        document.querySelector('#simple').style.opacity = 1;
    }

    function efficientAppear(){
        document.querySelector('#efficient').style.opacity = 1;
    }

    function effectiveAppear(){
        document.querySelector('#effective').style.opacity = 1;
    }

    function readyAppear(){
        document.querySelector('#ready').style.opacity = 1;
    }



    setInterval(simpleAppear, 500);
    setInterval(efficientAppear, 1000);
    setInterval(effectiveAppear, 1500);
    setInterval(readyAppear, 2000);






    

    // make step 1 visible
    document.querySelector('#ready').onclick = function(){
        document.querySelector('#explanation').style.opacity = 0;
        document.querySelector('.step1').style.opacity = 1;
        document.querySelector('.step1').style.transform = 'translateY(-200px)';
    }



    // make step 2 visible
    document.querySelector('#next1').onclick = function(){
        document.querySelector('.step2').style.opacity = 1;
        document.querySelector('.step1').style.opacity = 0;
        document.querySelector('.step2').style.transform = 'translateY(-600px)';
    }

    // make step 3 visible
    document.querySelector('#next2').onclick = function(){
        document.querySelector('.step3').style.opacity = 1;
        document.querySelector('.step2').style.opacity = 0;
        // move this up later
        document.querySelector('.step3').style.transform = 'translateY(-900px)';
        
        // if choice on drop down is one - pick letter one and insert user's name
        if(document.querySelector('#letterChoice').value === 'letter1'){
            firstName = document.querySelector('#fname').value;
            var letter = document.querySelector('#textbox');
            letter.innerHTML = `                TO: THE CITY HALL CLERK OF KINGSTON, ONTARIO;
            REQUEST TO BE FORWARDED AS OFFICIAL CORRESPONDENCE TO THE MAYOR, COUNCIL, AND ALL RELEVANT STAFF ON PLANNING AND DEVELOPMENT ISSUES <br>
            Dear Mayor, Kingston City Council, and Council Staff
            My name is ${firstName}. I am writing as a concerned citizen of Kingston, who urges you to strongly consider the alarming rate of commercial development and densification currently occurring in Kingston’s historic downtown. 
            I recognize the positive impact of development on access to housing and enhancing our downtown core. and do not believe that the city should adopt an “anti-development” attitude. However, I also am firm in my belief that we, as citizens, and you as our government, have the obligation to protect the unique historical character of Kingston with development that is appropriate to the scale of our downtown. 
            As proud Kingstonians, we also have the obligation to protect those who don’t have the voice to advocate for themselves - our environment. I implore you to consider the impact of densification on our trees, our turtles, and other wildlife and elements of the natural world who themselves do not have a voice to raise on this issue. 
            For the sake of protecting the history, character, and environment of our special city, I ask you to please consider the extent, rate, and scale at which you adopt ongoing and future densification projects in Kingston’s downtown core and surrounding areas.
            Thank you so much for your consideration.
            Sincerely,<br>
            ${firstName}`;
        }

        // if choice on drop down is two - pick letter two and insert user's name
        if(document.querySelector('#letterChoice').value === 'letter2'){
            firstName = document.querySelector('#fname').value;
            var letter = document.querySelector('#textbox');
            letter.innerHTML = `                TO: THE CITY HALL CLERK OF KINGSTON, ONTARIO;
            REQUEST TO BE FORWARDED AS OFFICIAL CORRESPONDENCE TO THE MAYOR, COUNCIL, AND ALL RELEVANT STAFF ON PLANNING AND DEVELOPMENT ISSUES <br>
            Dear Mayor, Kingston City Council, and Council Staff
            My name is ${firstName}, and I am writing to raise my voice on the issue of densification in downtown Kingston. If left unchecked, I am concerned that the current rate of densification that we are seeing poses risks to the environment, local businesses, and historical character of our unique “Limestone City.”
            I applaud the efforts of the city to reduce urban sprawl, improve the downtown core’s economic promise, and increase affordable housing in our beautiful city. However valiant these initiatives have been, in seeking social progress, we must not compromise the most special aspects of Kingston: our historic downtown core and our rich natural environment. 
            I am not asking the council to stop all development and densification efforts, as this would be antithetical to our shared goals of growth and improvement of our city for all Kingstonians. I instead implore you to wield your power and responsibility as council with wisdom, by ensuring that appropriate development happens, at an appropriate rate, and at an appropriate scale when considering which projects to implement in our city.
            Thank you so much for your consideration.
            Sincerely,<br>
            ${firstName}`
        }

        // if choice on drop down is three - pick letter three and insert user's name
        if(document.querySelector('#letterChoice').value === 'letter3'){
            firstName = document.querySelector('#fname').value;
            var letter = document.querySelector('#textbox');
            letter.innerHTML = `                TO: THE CITY HALL CLERK OF KINGSTON, ONTARIO;
            REQUEST TO BE FORWARDED AS OFFICIAL CORRESPONDENCE TO THE MAYOR, COUNCIL, AND ALL RELEVANT STAFF ON PLANNING AND DEVELOPMENT ISSUES <br>
            Dear Mayor, Kingston City Council, and Council Staff
            My name is ${firstName}. In writing this letter today, I appeal to your sense of duty and care as a proud Kingstonian, who is concerned about the impacts of rapid development and densification that is taking place in our historic downtown. I am writing to speak out to protect the future of our city, environment, and home. 
            Specifically, I am concerned with the lack of information and transparency on how the council proposes to maintain the heritage of the downtown while also planning for one of the greatest population influxes in the past century - an increase in population in the thousands. I am also worried about how densification will impact our nature and access to green spaces, and all of the animal and plant species who rely on the beautiful natural environment of Kingston as their home.
            I believe that processes of development and densification in our downtown absolutely do provide benefits to those who live in our city, now and in the future. However, not all densification is created equal.  To employ a responsible mindset when developing and densifying, the council must consider the impacts of such projects on all aspects of our city, including our historical character, our environment, and the well-being of our residents. 
            Sincerely,<br>
            ${firstName}`
        }

        // add customized letter content including user's name to email
        const button = document.querySelector('#send');
        button.href = `mailto:bjohnson@cityofkingston.ca?bcc=robin.and26@gmail.com&subject=Densification in Kingston&body=${letter.textContent}`;



        document.querySelector('#noWork').onclick = function(){
            alert('Oops, that\'s awkward. Depending on your browser settings, this may not work until we sort this bug out. If you aren\'t using your phone, it is strongly reccommended for best results. Otherwise, please copy paste the letter, and send it to bjohnson@cityofkingston.ca. Please consider bcc\'ing robin.and26@gmail.com as well, just so we know you participated.');
        }

    }


})






