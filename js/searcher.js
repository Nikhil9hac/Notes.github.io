// targeting the Element
const searcher=document.getElementById('searcherBar');
const searcherBtn=document.querySelector('.searcherBtn');
const card=document.querySelectorAll('.card');
searcherBtn.addEventListener('click',()=>{
    card.forEach(element=>{
        let data=element.getAttribute('data-value')
        let data2=element.getAttribute('data-value2')
        let data3=element.getAttribute('data-value3')
        if (data==searcher.value || data2==searcher.value) {
            element.style.display="block";
            element.style.display="flex";
        } else {
            element.style.display='none'
        }
    })
})