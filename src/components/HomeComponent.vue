<template>
    <div>
        <h1>Home Component</h1>
        
        {{ products }}
    </div>
</template>

<script setup lang="ts">
import { onMounted , ref } from 'vue';
import { db } from '@/plugins/firebase'

const products:any = ref([])

onMounted(() => {
    
    
    products.value= [] 
    
    db.collection('products').onSnapshot( (querySnapshot) => {
        querySnapshot.forEach( doc => products.value.push(doc.data()) )
    })
})

</script>

<style scoped>
    
</style>