function creatGame(player1, hour, player2){
  return `
  <li>
  <img src="./assets/icon-${player1}.svg" alt="Logo ${player1}">
  <strong>${hour}</strong>
  <img src="./assets/icon-${player2}.svg" alt="Logo ${player2}" >
  </li>
  
  `
}




let delay = -0.4;
function createCard(date, day, games){
  delay += 0.4;
  return `
  <div class="card" style= "animation-delay: ${delay}s" >
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games} 
        </ul>
      </div>
  `
}


document.querySelector("#cards").innerHTML = 
      createCard("24/11", "Quinta", creatGame("Brasil", "16:00", "Servia")) +
      createCard(
        "28/11",
        "Segunda",
        creatGame("Brasil", "13:00", "Suica") +
          creatGame("portugal", "16:00", "uruguai")
      ) +
      createCard("02/11", "Sexta", creatGame("Brasil", "16:00", "Camaroes"))
    


