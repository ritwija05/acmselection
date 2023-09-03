// List of selected participants (case-insensitive)
var selectedParticipants = [
    "devansh kalia",
    "prateeksha",
    "sameeksha shakya",
    "amol sadana",
    "abhinandan malik",
    "gaurav kumar",
    "anwesh sinha",
    "priyal singh",
    "anand soni",
    "aditya mittal",
    "aditya singh",
    "aashi rajpoot",
    "akshita singh",
    "saransh dogra",
    "raghav agrawal",
    "astha pipani",
    "omansh sharma",
    "shivansh mahajan",
    "saanchi jain",
    "bhuvi garg",
    "anirudh mehta",
    "aarya gupta",
    "anvesha vijan",
    "saniya gupta",
    "darshika tyagi",
    "kumar ansh",
    "prashant padwal",
    "seejal taluja",
    "krish morga",
    "shashwat bharadwaj",
    "vishesh",
    "krisha garg",
    "nikhil singh",
    "devanshu saroha",
    "prashant kushwha",
    "shilpa",
    "shivansh",
    "smarth",
    "akshita gaba",
    "prabhav singh",
    "sidhant singh",
    "garima pathania",
    "aman singh",
    "venkat narahari",
    "agniprabha ganguly",
    "pranjali sharma",
    "aviral gupta",
    "anant singh",
    "krishna pratap singh",
    "rudra bhasin",
    "sagar dhapola",
    "rajat rajput",
    "yugam jain",
    "anshul katla",
    "mahima singh",
    "vardaan dwivedi",
    "prerna tyagi",
    "sumeet singh",
    "kavya sharma",
    "priyanshu sood",
    "aryan",
    "kartikeya",
    "sarthak chandel",
    "shruti sharma",
    "kartavya raj",
    "ayush choudhary",
    "dikshit",
    "om",
    "vansh soni",
    "suhani saini",
    "rahul changra",
    "sachin kumar snehal",
    "jahanvi sharma",
    "shivani",
    "mayuri kansal",
    "mayank aggarwal",
    "bhavesh thakur",
    "aanya aggarwal",
    "ojas chauhan",
    "nandini garg",
    "savitoj saini",
    "nilay gupta",
    "lakshit saini",
    "rajat sharma",
    "saumya kashyap",
    "namya sharma",
    "saarvi sharma",
    "anusha bisht",
    "arpit shukla",
    "aastha bhaik"
];

function checkSelection() {
    var participantName = document.getElementById("participantName").value.toLowerCase(); // Convert input to lowercase

    
    if (selectedParticipants.includes(participantName)) {
        
        document.getElementById("result").innerHTML = "Congratulations,🎊 " + participantName + "! You made it to the ACM!";
    } else {
        
        document.getElementById("result").innerHTML = "Sorry, " + participantName + ". You didn't make it this time.";
    }
}







