
const data = [
    {
        Name: "Rohan Das",
        age: 25,
        city: "Ranchi",
        language: "C++",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    },
    {
        Name: "Anmol Raj",
        age: 22,
        city: "Ranchi",
        language: "C#",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/thumb/men/74.jpg"

    },
    {
        Name: "Rajesh nach",
        age: 35,
        city: "pune",
        language: "java",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/thumb/men/25.jpg"

    },
    {
        Name: "chini",
        age: 25,
        city: "nepal",
        language: "C++",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/thumb/women/75.jpg"

    },
    {
        Name: "Sonam Das",
        age: 22,
        city: "Delhi",
        language: "C",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/thumb/women/25.jpg"

    }
]



function CvIterator(profiles) {
    let index = 0;
    return {
        next: function () {
            //ternary operator
            return index < profiles.length ?
                { value: profiles[index++], done: false } :
                { done: true }
        }
    }
}
let candidates = CvIterator(data);
nextprofile();
let next = document.getElementById('btn');
next.addEventListener('click', nextprofile);


function nextprofile() {
    let currentcandidate = candidates.next().value;
    let profiles = document.getElementById('profiles');
    let img = document.getElementById('image');
    
    if(currentcandidate!= undefined){

    img.innerHTML = `<img src = '${currentcandidate.image}'>`
    
    profiles.innerHTML = `
            <ul class="list-group">
        <li class="list-group-item active" aria-current="true">${currentcandidate.Name}</li>
        <li class="list-group-item">${currentcandidate.age} years old</li>
        <li class="list-group-item">lives in ${currentcandidate.city}</li>
        <li class="list-group-item"> works on ${currentcandidate.language}</li>
        <li class="list-group-item"> using ${currentcandidate.framework} frame work.</li>
        </ul>`;
    }
    else{
        alert("LAST Applicant");
        window.location.reload();
    }

}