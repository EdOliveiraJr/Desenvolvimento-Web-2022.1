<template>
    <div class="header m-4">
        <div class="d-flex align-items-center">
            <div class="foto flex-shirink-0">
                <img src="img/myProfile.jpg" class="rounded-circle" alt = fotoperfil width="150">    
            </div>

            <div class="textarea flex-grow-1 ms-3 align-items-center">
                <textarea class="form-control border-1" id="textarea" cols="70" rows="1"></textarea>
            </div>
        </div>
        
        <div class="configuracaoReply m-4">
            <a href=""> <i class="bi bi-globe2"></i> Everyone can reply</a>
        </div>
        
        <div class="d-flex justify-content-between">
            <div class="multimidea m-4" >
                <a href=""><i class="bi bi-card-image"></i> </a>
                <a href=""><i class="bi bi-filetype-doc" ></i></a>
                <a href=""><i class="bi bi-emoji-smile"></i></a>
                <a href=""><i class="bi bi-bar-chart"></i></a>
                <a href=""><i class="bi bi-calendar-week"></i></a>
                <a href=""><i class="bi bi-geo-alt"></i></a>
            </div>
            
            <div class="statusEnvio d-flex">
                
                <strong><p class="" id="contador"></p></strong>    
                <strong><span class="ml-2"> | </span></strong> 
                
                <a href=""><i class="bi bi-plus-circle"></i></a>
                <button type="button" class="btn btn-primary" id="btnEnviar">Enviar</button>
                
            </div>
        </div>
    </div>                      

</template>