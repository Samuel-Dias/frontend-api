import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    
//-------------------------------------------------------------    
$(document).ready(function(){ 

// Fecha e abre 'menu' do usuário no sidebar
    const tag = $('#myLinks');
    $("app-perfil-sidenav").click(function(e){
      if (tag.css('display') == 'none'){
      $("#myLinks").fadeIn("fast");
      }
      else $("#myLinks").fadeOut("fast");
  }); 
     $("html").click(function(e){
    if (!e.target.closest("app-perfil-sidenav") ){
        $("#myLinks").fadeOut("fast");
    }
}); 
//---------------------------------------------------------------
});

}
}

