<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps<{
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    discount: number
}>();

const mDiscount = computed({
    get() {
        return props.discount;
    }, 
    set(value) {
        store.dispatch('update', { 
            id: props.id,
            discount : value
        });
    }
});
        
const mQuantity = computed({
    get() {
        return props.quantity;
    }, 
    set(value) {
        store.dispatch('update', {
            id: props.id, 
            quantity: value}
        );
    }
});

const mPrice = computed({
    get() {
        return props.price;
    },
    set(value){
        store.dispatch('update',{
            id:props.id,
            price:value
        });
    }
});

const mDescription = computed({
    get() {
        return props.description;
    },
    set(value){
        store.dispatch('update',{
            id:props.id,
            description:value
        });
    }
});

const mName = computed({
    get() {
        return props.name;
    },
    set(value){
        store.dispatch('update',{
            id:props.id,
            name:value
        });
    }
});


</script>



<template>
    <tr>
        <td>{{id}}</td>
        <td><input type="text" v-model="mName" ></td>
        <td><input type="text" v-model="mDescription" ></td>
        <td><input type="number" min="0" step="1" max="1000" v-model="mQuantity"></td>
        <td><input type="number" min="0" step="1" max="10000" v-model="mPrice" ></td>
        <td><input type="number" min="0" max="95" step="5" v-model="mDiscount"></td>
        <td><button class="btn btn-danger" @click="store.dispatch('remove', id)">Delete</button></td>
    </tr>
</template>