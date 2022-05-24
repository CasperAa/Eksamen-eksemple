import { handleErrors } from "../fetchUtils.js";
import { URL } from "../settings.js";

const candidateURL = URL + "/candidates"


export function candidateHandlers(){
    showCandidates();
}


async function showCandidates(){
    try{
    const candidate = await fetch(candidateURL).then(res => handleErrors (res))
        console.log(candidate)
        const tableData = candidate.map(candidate => `
        <tr> 
            <td>${candidate.id}</td>    
            <td>${candidate.name}</td>
            <td>${candidate.partyLetter}</td>
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        console.log(error.messange)
    }
    
}


async function showCandidates(){
    try{
    const candidate = await fetch(candidateURL).then(res => handleErrors (res))
        console.log(candidate)
        const tableData = candidate.map(candidate => `
        <tr> 
            <td>${candidate.id}</td>    
            <td>${candidate.name}</td>
            <td>${candidate.partyLetter}</td>
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }catch{
        console.log(error.messange)
    }
    
}