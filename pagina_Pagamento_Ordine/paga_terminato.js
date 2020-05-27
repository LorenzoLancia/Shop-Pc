function pagaterminato(){
    tab+='<td><button class="subscribe btn btn-primary btn-block" onclick="return cancellaCarrello();">Svuota carrello</button></td></tr>';
}

function cancellaCarrello() {
    sessionStorage.clear();
    location.reload();
    return true;
}