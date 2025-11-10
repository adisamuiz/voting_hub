
const saveBtn = document.getElementById("save-btn")
const registerBtn = document.getElementById("register-btn")
const saveNoBtn = document.getElementById("save-no-btn")
const candidateNoInput = document.getElementById("candidate-no-input")
const candidateNameInput = document.getElementById("candidate-name-input")
const candidatePostInput = document.getElementById("candidate-post-input")
const voteBtn = document.getElementById("voting-table")
const resultTable = document.getElementById("result-table")
let indexOfRow = ""
let voteCountIncrement = ""
let voteCount = [0]
let noOfCandidates = 0
let nameOfCandidates = ""
let postOfCandidates = ""
let voteBtnEl = ""
let tr = ""
let td1 = ""
let td2 = ""
let td3 = ""
let trr = ""
let tdd1 = ""
let tdd2 = ""
let noRegistered = 0
const candidateVoted = document.getElementById("candidate-voted")

saveBtn.addEventListener("click", function(){
    for(let i = 0; i <= noRegistered; i++){
        let row = resultTable.rows[i+1]
        let totalVote = row.cells[1]
        totalVote.innerHTML = `${voteCount[i+1]}`
    }   
})


voteBtn.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON"){
        let buttonClicked = event.target
        let row = buttonClicked.closest('tr')
        let candidateName = row.cells[0].textContent
        indexOfRow = row.rowIndex
        voteCountIncrement = voteCount[indexOfRow]++
        candidateVoted.textContent = `you voted ${candidateName}`
        
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
        tr = voteBtn.insertRow()
        td1 = tr.insertCell(0)
        td1.innerHTML = nameOfCandidates
        td2 = tr.insertCell(1)
        td2.innerHTML = postOfCandidates
        td3 = tr.insertCell(2)
        td3.appendChild(voteBtnEl)
        noRegistered++
        candidateNameInput.value = ""
        candidatePostInput.value = ""
        voteCount.push(0)
        trr = resultTable.insertRow()
        tdd1 = trr.insertCell(0)
        tdd1.innerHTML = nameOfCandidates
        tdd2 = trr.insertCell(1)
    }
}) 







