<script setup lang="ts">

</script>

<template>
    <h1>PROFILE</h1>

        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body ">
                        <div class="d-flex justify-content-center m-4">
                            <img src="./img/tiziu.png" alt="">
                        </div>
                        <h5 class="m-4">Entre no Tzeet agora mesmo!</h5>
                    <form class="needs-validation" novalidate>
                            <div class="form-floating m-4">
                                <input type="email" class="form-control" id="floatingEmail" placeholder="Email:" required>
                            </div>
                            <div class="invalid-feedback">Este email é invalido</div>
                
                            <div class="form-floating m-4">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Senha:" data-minlength="6" required>
                            </div>

                        </form>
                    
                        <div class="m-4">
                            <a href="http://" target="_self" >Esqueceu a senha?</a>
                        </div>
                    
                        <div class="m-4">
                            <button type="submit" class="btn btn-primary btnEntrar">Entrar</button>
                        </div>
                        
                        <div class="m-4">
                            Não tem uma conta?<a href="./signup.html" target="_self"> Inscreva-se</a>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>

    
</template>
