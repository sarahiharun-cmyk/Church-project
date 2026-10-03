const module=document.getElementById("prayerModule");
const form=document.getElementById("prayerForm");
function openModule(){
    if (!module)return
    module.style.display="flex"
    document.body.classList.add(module-open)
    const firstField=document.getElementById("name")
    if(firstField){
        setTimeout(() =>firstField.focus(,50) {
            
        }, timeout);
    }
}
function closeModule(){
    if(!module)return
    module.style.display="none"
    document.body.classList.remove(module-open)
}
if(module){
    window.onclick= function(event){
        if(event.target === module){
            closeModule();
        }
    }

    
}