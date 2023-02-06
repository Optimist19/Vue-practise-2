<template>
    <p v-if="display">I don show</p>
    <p v-show="!display"> I never show oo</p>
    <div>
        <div v-show="mode === 'bed-time'">1</div>
        <div v-show="mode === 'focus'">2</div>
        <div v-show="mode === 'busy'">3</div>
        <div v-show="!mode">4</div>
        <div v-show="display1">4</div>
    </div>
</template>

  
<script>
export default {
    name: "VShow",
    data() {
        return {
            display: true,
            mode: "bed-time",
            display1: true
        }
    }
}
</script>
