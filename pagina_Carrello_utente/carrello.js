/*
    libreria per la gestione del carrello
*/

function stampaTabellaDaStorage() {
    var l=sessionStorage.length;  // oggetto che permette il salvataggio di variabili
    var tot=0;
    var tab=new String('<table id="cart" class="table table-hover table-condensed"><thead><tr><th style="width:50%">Prodotto</th><th style="width:10%">Prezzo</th><th style="width:8%">Quantità</th><th style="width:22%" class="text-center">Totale</th><th style="width:10%"></th></tr></thead>');
    tab+="<tbody>";
    var i;
    for (i=0; i<l; i++) {
        var p=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));  // funzione che prende gli oggetti inseriti nel carrello
        
        tab+='<tr><td data-th="Product">';
        tab+='<div class="row"><div class="col-sm-10"><h4 class="nomargin">'+p.nome_prodotto+'</h4><small></div></div></td>';
        tab+='<td data-th="Price">'+p.prezzo_unitario+' €</td>';
        tab+='<td data-th="Quantity">'+p.quantita+'</td>';
        tab+='<td data-th="Subtotal" class="text-center">'+p.prezzo_unitario*p.quantita+' €</td>';
        tab+='</tr>';
        tot+=p.prezzo_unitario*p.quantita;
        
    }
    tab+='<tfoot><tr class="visible-xs"><td class="text-center"><strong>Totale '+tot+' €</strong></td></tr>';
    tab+='<tr><td><a href="../pagina_Catalogo/lista_Catalogo.html" class="btn btn-warning"><i class="fa fa-angle-left"></i> Torna al Catalogo</a></td>';
    tab+='<td><button class="btn btn-success" onclick="return cancellaTutto();">Checkout <i class="fa fa-angle-right"></i></button></td>';
    tab+='<td><button class="btn btn-danger" onclick="return cancellaCarrello();">Svuota carrello</button></td></tr>';
    tab+="</tbody></table>";
    document.getElementById("tabella").innerHTML=tab;
    return true;
}

function cancellaTuttoLocalStorage() {
    localStorage.clear();
    location.reload();
    return true;
}

function cancellaCarrello() {   //funzione per svuotare il carrello con tasto "Svuota carrello"
    sessionStorage.clear();
    location.reload();
    return true;
}

function cancellaTutto(){   //funzione per svuotare il carrello quando si effettua il pagametno (Check)
    sessionStorage.clear();
    location.href="../pagina_Pagamento_Ordine/pagamento.html";
    return true;
}