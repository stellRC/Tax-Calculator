const totalAmount = document.getElementById('totalAmount')
const totalPercentage = document.getElementById('percentage')
const paperGoods = document.getElementById('paperGoods')
const costGoodsSold = document.getElementById('costGoodsSold')
const btnEnter = document.getElementById('btnEnter')
const btnReset = document.getElementById('btnReset')
const btnCopy = document.getElementById('btnCopy')

function getAmount() {
  paperGoods.value= (totalAmount.value *totalPercentage.value).toFixed(2)
  costGoodsSold.value = (totalAmount.value - paperGoods.value).toFixed(2)
}
 
btnEnter.addEventListener('click', getAmount)

function resetForm() {  
    document.getElementById("totals").reset();  
}   

function copyBtn(element) {
    var $copyBtn = document.getElementById(element).innerText;
    var button = document.getElementById(element + '-button');
    navigator.clipboard.writeText($copyBtn).then(function() {
      var originalText = button.innerText;
      button.innerText = 'Copied!';
      setTimeout(function(){
        button.innerText = originalText;
        }, 750);
    }, function() {
      button.style.cssText = "background-color: var(--red);";
      button.innerText = 'Error';
    });
}

document.getElementById('btnPaste').addEventListener('click', ()=>{
    navigator.clipboard.readText()
    .then((text)=>{
        totalAmount.value = text;
    });
});