<script setup´lang="ts">

const book {
    autores: "fulano, siclano"
    avaliacao: 5
    categoria: "Fantasia" 
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{titulo}}</h5>
            <p class="card-text">
                <p>{{autores}}</p>
                <p>{{avaliacao}}</p>
                <p>{{categoria}}</p>
            </p>
            
        </div>
    </div>
</template>