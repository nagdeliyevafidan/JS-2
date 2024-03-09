const telebeler = [
    {
        fin: "5443CFD",
        name: "Sadiq",
        surname: "Nuriyev",
        isStudent: true
    },
    {
        fin: "6443CFD",
        name: "Kenan",
        surname: "Babayev",
        isStudent: false
    },
    {
        fin: "7443CFD",
        name: "Amin",
        surname: "Quliyev",
        isStudent: true
    }
];

for (let i = 0; i < telebeler.length; i++) {
    document.querySelector("tbody").innerHTML += `
    <tr>
    <th scope="row">${telebeler[i].fin}</th>
    <td>${telebeler[i].surname}</td>
    <td>${telebeler[i].name}</td>
    <td>${telebeler[i].isStudent ? "Telebe tehsil alir" : "Telebe mezundur"}</td>
   
       <td><i class="bi bi-pencil-square"></i></td> 
       <td><i class="bi bi-trash3"></i><td>
       </tr> `
}

console.log(newTable(telebeler));