console.log('conected.....');
// Navbar sticky 

const navbar = document.getElementById("navbar-section");
const sticky = navbar.offsetTop;
function navbarSticky(){
  if (window.scrollY > sticky) {
    navbar.classList.add("fixed","w-[100%]","z-40");
  }else{
    navbar.classList.remove("fixed","w-[100%]","z-40");
  }
}
window.addEventListener("scroll", navbarSticky);

// banner for donate function

document.getElementById('donate-amount')
.addEventListener('click',function(event){
    let donation= document.getElementById('donate-amount')
  event.preventDefault();
  if((donation) === -1 || isNaN(donation)){
  //   input donation for noakhali start here 
 
  let writeAmount=document.getElementById('write-amount').value;
  let amountNoakhali =parseFloat(writeAmount);
//   new balance add
    let balance = document.getElementById('balance-stat').innerText;
    let noakhaliBalance =parseFloat(balance);   
    let balanceAdd=noakhaliBalance+amountNoakhali;
    // console.log(balanceAdd);
    document.getElementById('balance-stat').innerText=balanceAdd;
    // minus balance 
    let balanceNav = document.getElementById('balance-stat-nav').innerText;
    let minusBalance =balanceNav-balanceAdd;
    document.getElementById('balance-stat-nav').innerText=minusBalance;
    alert('succesfully added balance')


    const p= document.createElement('p');
    p.innerText =`${balanceAdd} :Taka is Donate for Flood at Noakhali Bangladesh`
    console.log(p);
   document.getElementById('Transaction-history').appendChild(p);

}else{
    alert('failed to add..!')
}

})
// 2nd banner add money 
document.getElementById('donate-now')
.addEventListener('click',function(event){
    let donationFeni= document.getElementById('donate-now')
  event.preventDefault();
  if((donationFeni) === -1 || isNaN(donationFeni)){
  //   input donation for Feni start here 
  let feniAmount= document.getElementById('input-amount').value;
  let amountFeni =parseFloat(feniAmount);

    let feni = document.getElementById('balanceBd').innerText;
    let feniBalance =parseFloat(feni);   
    let balanceAdded=feniBalance+amountFeni;
    // console.log(balanceAdd);
    document.getElementById('balanceBd').innerText=balanceAdded;
    // minus balance 
    let balanceNav = document.getElementById('balance-stat-nav').innerText;
    let minusBalance =balanceNav-balanceAdded;
    document.getElementById('balance-stat-nav').innerText=minusBalance;
    alert('succesfully added balance')


    // Notification amount 
    
    const p= document.createElement('p');
    p.innerText =`${balanceAdded} :Taka is Donate for Flood at FENI Bangladesh`
    console.log(p);
   document.getElementById('Transaction-history-2').appendChild(p);

 }else{
    alert('failed to add..!')
}
})

// 3rd Banner 
document.getElementById('donate-quata')
.addEventListener('click',function(event){
    let donateQuata= document.getElementById('donate-quata')
  event.preventDefault();
  if((donateQuata) === -1 || isNaN(donateQuata)){
  //   input donation for Feni start here 
  let qutaAmount= document.getElementById('quata-input').value;
  let amountquata =parseFloat(qutaAmount);

    let quata = document.getElementById('quata-balance').innerText;
    let quataBalance =parseFloat(quata);   
    let balanceAddQuata=quataBalance+amountquata;
    // console.log(balanceAdd);
    document.getElementById('quata-balance').innerText=balanceAddQuata;
    // // minus balance 
    let balanceNav = document.getElementById('balance-stat-nav').innerText;
    let minusBalance =balanceNav-balanceAddQuata;
    document.getElementById('balance-stat-nav').innerText=minusBalance;
    alert('succesfully added balance')


    // Notification amount 
    
    const p= document.createElement('p');
    p.innerText =`${balanceAddQuata} :Taka is Donate for Flood at QUATA Movement Bangladesh`
    console.log(p);
   document.getElementById('Transaction-history-3').appendChild(p);

 }else{
    alert('failed to add..!')
}
})

// Show Button Donation History



// all hide model 
function showSEctionById(id){
    document.getElementById('banner-section').classList.add('hidden');
    document.getElementById('historySection').classList.add('hidden');
    // Show section 
    document.getElementById(id).classList.remove('hidden');
}
// DOnation button show 
document.getElementById('donation-show')
.addEventListener('click', function(){
   showSEctionById('banner-section');
})
// Document transaction show
let colorSEc=document.getElementById('history-show');
document.getElementById('history-show').addEventListener('click', function(){
    showSEctionById('historySection');
    colorSEc.style.backgroundColor='rgb(180, 244, 97)'
})