<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Navegacao from '../components/Navegacao.vue'
import Tzeet from '../components/Tzeet.vue'
import Sugestao from '../components/Sugestao.vue'
import FormEnvio from '../components/FormEnvio.vue'
import ModalForm from '../components/ModalForm.vue'


</script>

<template>
          <div class= "contianer">
            
            <div class="row">
                <Navegacao></Navegacao>

                <!-- coluna central -->
                <div class= "central col-7 border border-left borde-right">
                    
                    <h1>Home</h1>
                    <FormEnvio></FormEnvio>
                    <Tzeet></Tzeet>
                </div>

                <!-- cloluna da direita -->
                <Sugestao></Sugestao>
            </div>

            <ModalForm></ModalForm>
        </div>
</template>

<style scoped>

</style>