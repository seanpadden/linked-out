const btnHeckOff = document.getElementsByClassName("mr2")
const idkThem = document.getElementsByClassName("invitation-inline-confirmation-card__reported-cta")

function ignoreEverybody(){
  for (let i = 0; i < btnHeckOff.length; i++){
      setTimeout(() => btnHeckOff[i].click(), 750)
      setTimeout(() => idkThem[0].click(), 750)
  }
}

ignoreEverybody()