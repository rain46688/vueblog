<template>
    <div class="contatiner mt-4">
        <h3>{{blog[$route.params.number].number}}, {{blog[$route.params.number].title}}</h3>
        <p>{{blog[$route.params.number].date}}</p>
        <p>{{blog[$route.params.number].content}}</p>
    </div>
</template>

<script>
export default {
    name: 'DetailComp',
    props: {
        blog: Array
    }
}
</script>

<style>
</style>