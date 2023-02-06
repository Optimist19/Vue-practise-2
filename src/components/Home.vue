<template>
    <ProVide />
    <ProvideNInject />
    <h1>Debug {{ text }}</h1>
    <SlotExample>
        <template v-slot:header>
            <h1>playing around slot</h1>
        </template>
        <template v-slot:body>
            <h1>playing around slot1</h1>
        </template>
        <template v-slot:footer>
            <h1>playing around slot2</h1>
        </template>
    </SlotExample>
    <DataNonDataPropsTwo pass="propsData" passOne="NonPropsData"/>
    <DataNonDataPropsOne propsData="propsData" NonPropsData="NonPropsData"/>
    <DataNonDataProps pass="propsData" passOne="NonPropsData"/>
    <ChildToParentProps :getData="getData" />
    <h1>{{gottenIt}}</h1>
    <CompTwoComp :surname="surname" :pra="users.surname" :getGoal="showGoal()" />
    <Child :name="name" />
    <h1>Home component {{"hello".length}}</h1>
    <h1>Email: {{email}}</h1>
    <h1>Number: {{(number=2)}}</h1>
    <h1>Name: {{(getName("oluwasegunbam"))}}</h1>
</template>

<script>
import CompTwoComp from "./CompoInComp.vue"
import Child from "./Child.vue"
import ChildToParentProps from "./ChildToParentProps.vue"
import DataNonDataProps from "./DataNonDataProps.vue"
import DataNonDataPropsOne from "./DataNonDataProps1.vue"
import DataNonDataPropsTwo from "./DataNonDataProps2.vue"
import SlotExample from "./Slots.vue"
import ProvideNInject from "./ProvideNInject.vue";
import ProVide from "./ProVide.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",

    components: {
        Child,
        CompTwoComp,
        ChildToParentProps,
        DataNonDataProps,
        DataNonDataPropsOne,
        DataNonDataPropsTwo,
        SlotExample,
        ProvideNInject,
        ProVide
    },
    props:{
        text: String
    },

    data() {
        return {
            email: "oluwasegun@yahoo.com",
            surname: "Getting better at it,mhan",
            number: 4444,
            getName(x) {
                return x
            },
            gottenIt: "",
            name: "bruce",
            users: {
                name: "bruce",
                email: "ali@yahoo.com",
                surname: "Gooooood job my guy"
            }
        }
    },
    methods: {
        showGoal() {
            console.log("best goal!!!")
        },

        getData(data) {
            this.gottenIt = data
        }
    }
};
</script>

<style scoped>
h1 {
    color: red;
}
</style>
