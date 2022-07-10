<script setup lang="ts">

const props = defineProps<{
    id: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    quantity: number,
    rating: number
}>()

</script>

template