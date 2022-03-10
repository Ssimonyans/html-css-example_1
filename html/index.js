let list
function onAddBtnClick(){
    let input = document.getElementById('input');
    let value=input.value.trim();
    if(!value){
        alert('please enter value');
        return;
    }
    let item=document.createElement('li');
    item.innerHTML=value;
    let removeBtn=document.createElement("span");
    removeBtn.innerHTML='x';
    removeBtn.className='removeBtn'
    item.append(removeBtn);
    list =document.getElementById('listRoot');
    list.append(item);
    input.value="";
}

function onKeyPress(){
    if(event.key==="Enter"){
        onAddBtnClick();
    }

}
function onCleanBtnClick(){
    list.remove();
    return
}
