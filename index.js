
const registerBtn = document.getElementById("register-btn")
const saveNoBtn = document.getElementById("save-no-btn")
const candidateNoInput = document.getElementById("candidate-no-input")
const candidateNameInput = document.getElementById("candidate-name-input")
const candidatePostInput = document.getElementById("candidate-post-input")
const votingTable = document.getElementById("voting-table")
const finalResult = document.getElementById("final-result")
let noOfCandidates = 0
let nameOfCandidates = ""
let postOfCandidates = ""
let voteBtnEl = ""
let tr = ""
let td1 = ""
let td2 = ""
let td3 = ""
let noRegistered = 0

votingTable.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON"){
        let buttonClicked = event.target
        let row = buttonClicked.closest('tr')
        let candidateName = row.cells[0].textContent;
        let candidatePosition = row.cells[1].textContent;
        finalResult.innerHTML = `${candidateName} was voted`
    }
})

saveNoBtn.addEventListener("click", function(){
    noOfCandidates = candidateNoInput.value
    candidateNoInput.value = ""
})

registerBtn.addEventListener("click", function(){
    nameOfCandidates = candidateNameInput.value
    postOfCandidates = candidatePostInput.value
    voteBtnEl = document.createElement("button")
    voteBtnEl.textContent = "VOTE"
    if(nameOfCandidates && noRegistered < noOfCandidates && postOfCandidates){
        tr = votingTable.insertRow()
        td1 = tr.insertCell(0)
        td1.innerHTML = nameOfCandidates
        td2 = tr.insertCell(1)
        td2.innerHTML = postOfCandidates
        td3 = tr.insertCell(2)
        td3.appendChild(voteBtnEl)
        noRegistered++
        candidateNameInput.value = ""
        candidatePostInput.value = ""
    }
})   




//votes
let vote = [
    document.getElementById("vote1"),
    document.getElementById("vote2"),
    document.getElementById("vote3"),
    document.getElementById("vote4")
]

//results
let res = [
    document.getElementById("res1"),
    document.getElementById("res2"),
    document.getElementById("res3"),
    document.getElementById("res4")
]

//winner
let winner = document.getElementById("winner")

let count = [0, 0, 0, 0]

function increment1() {
    count[0]++
    console.log(count[0])
    vote[0].innerText = count[0]
}

function increment2() {
    count[1]++
    console.log(count[1])
    vote[1].innerText = count[1]
}

function increment3() {
    count[2]++
    console.log(count[2])
    vote[2].innerText = count[2]
}

function increment4() {
    count[3]++
    console.log(count[3])
    vote[3].innerText = count[3]
}

function result() {
    res[0].textContent = count[0]
    res[1].textContent = count[1]
    res[2].textContent = count[2]
    res[3].textContent = count[3]

    if (count[0] > count[1] && count[0] > count[2] && count[0] > count[3]) {
        winner.textContent = "Winner: Candidate A"
    }
    else if (count[1] > count[0] && count[1] > count[2] && count[1] > count[3]) {
        winner.textContent = "Winner: Candidate B"
    }
    else if (count[2] > count[0] && count[2] > count[1] && count[2] > count[3]) {
        winner.textContent = "Winner: Candidate C"
    }
    else if (count[3] > count[0] && count[3] > count[1] && count[3] > count[2]) {
        winner.textContent = "Winner: Candidate D"
    }
    else {
        winner.textContent = "There is a Tie!"
    }
}

function reset() {

    count = [0, 0, 0, 0]
    
    vote[0].innerText = count[0]
    vote[1].innerText = count[1]
    vote[2].innerText = count[2]
    vote[3].innerText = count[3]

    
    console.log(count)
}

function save(){
    result();  
    reset();
      
}



