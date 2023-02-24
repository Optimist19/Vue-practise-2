<template>
  <CounterO />
  <InjectProvideCompApi />
  <WatcherCompApiReactive />
  <WatcherCompApiRef />
  <ComputedCompApi />
  <VmodelComApi />
  <ReactiveReactivity />
  <RefReactivity />
  <DataReactive />
  <CompApiDataToRef />
  <ColorMixIn />
  <DynaComp />
  <CompVmodel />
  <div id="app">
    <FilterSearch/>
  </div>
  <AltColor />
  <br />
  <ValidatingEmit />
  <br />
  <EmitEvent />
  <br />
  <WatcherDeep />
  <WatcherImmediate />
  <CustomCompEvent />
  <AnotherSlotProps  url="https://reqres.in/api/users/2">
    <template v-slot:details="slotProps">
      <p v-if="slotProps.isLoading">
        Loading...
      </p>
      <p v-else>
        {{ slotProps.data }}
      </p>
    </template>
  </AnotherSlotProps>
  <ParentSlot />
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/ifElse">If Else</router-link>
  <router-link to="/bind">Bind</router-link>
  <router-link to="/profile/whatever">Profile</router-link>
  <router-view></router-view> -->
  <IfTwo v-if="display" />
  <button @click="display = !display">Show</button>
  <teleport to="#name">
    <TelePort />
    <!-- This is commented===> <**p>teleported component to the footer id from the app id</p> -->
  </teleport>
  <div>
    <component :is="component" />
    <p>Dynamic Component</p>
    <p>Testing Component tag</p>
    <button @click="component = 'Test'">Test</button>
    <button @click="component = 'Test2'">Test2</button>
    <!-- This is commented===>  <button @click="component = 'Test2'">Test2</button> -->
  </div>

  <!-- This is commented===> <button></button>
  This is commented===> <button></button> -->

  <DynamicCom />
  <ComPro />
  <WatcherS />
  <FormsData />
  <RefRef />
  <ChildToParentProps />
  <ClassBinding />
  <HtmlBind />
  <AltAss />
  <VShow />
  <ForLoop />
  <IfElse />
  <IfStatement />
  <FormBoxRadio />
  <InputField />
  <About />
  <Bind />
  <Home text="Getting to know better" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- This is commented===> <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
//  commented out initially  import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Bind from "./components/twoWayBind.vue";
import InputField from "./components/dataInputField.vue";
import FormBoxRadio from "./components/checkboxAndRadio.vue";
import IfStatement from "./components/ifStatement.vue";
import IfElse from "./components/ifElse.vue";
import ForLoop from "./components/forLoop.vue";
import VShow from "./components/VShow.vue";
import AltAss from "./components/AltAss.vue";
import HtmlBind from "./components/HtmlBind.vue";
import ClassBinding from "./components/ClassBinding.vue";
import ChildToParentProps from "./components/ClassBinding.vue";
import RefRef from "./components/Ref.vue";
import FormsData from "./components/Forms.vue";
import WatcherS from "./components/Watchers.vue";
import ComPro from "./components/ComputedProperty.vue";
import DynamicCom from "./components/DynamicComp.vue";
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import TelePort from "./components/Teleport.vue";
import IfTwo from "./components/If.vue";
import ParentSlot from "./components/ParentSlot.vue";
import AnotherSlotProps from "./components/AnotherSlotProps.vue";
import CustomCompEvent from "./components/CustomCompEvent.vue";
import WatcherImmediate from "./components/WatcherImmediate.vue";
import WatcherDeep from "./components/WatcherDeep.vue";
import EmitEvent from "./components/EmitEvent.vue";
import ValidatingEmit from "./components/ValidatingEmit.vue";
import AltColor from "./components/AltColor.vue";
import FilterSearch from "./components/AltAssComposable.vue";
import CompVmodel from "./components/CompVmodel.vue";
import DynaComp from "./components/DynaComp.vue";
import ColorMixIn from "./components/Mixins.vue";
import CompApiDataToRef from "./components/DataToRef.vue";
import DataReactive from "./components/DataToReactive.vue";
import RefReactivity from "./components/RefReactivity.vue";
import ReactiveReactivity from "./components/ReactiveReactivity.vue";
import VmodelComApi from "./components/VmodelComApi.vue";
import ComputedCompApi from "./components/ComputedCompApi.vue";
import WatcherCompApiRef from "./components/WatcherCompApiRef.vue";
import WatcherCompApiReactive from "./components/WatcherCompApiReactive.vue";
import InjectProvideCompApi from "./components/CompositionApi/InjectProvideCompApi.vue";
import CounterO from "./components/MixinTwo.vue";

export default {
  name: "App",
  data() {
    return {
      component: "Test",
      display: false,
    };

  },
  provide:{
    username: "Oluwasegunn",
    lastName: "Bamidele"
  },

  // <p>This is when the parent also want to use data and then pass it to the parent</p>
  // provide(){
  //   return{
  //     example: this.component
  //   }
  // },
  components: {
    Home,
    About,
    Bind,
    InputField,
    FormBoxRadio,
    IfStatement,
    IfElse,
    ForLoop,
    VShow,
    AltAss,
    HtmlBind,
    ClassBinding,
    ChildToParentProps,
    RefRef,
    FormsData,
    WatcherS,
    ComPro,
    DynamicCom,
    Test,
    Test2,
    TelePort,
    IfTwo,
    ParentSlot,
    AnotherSlotProps,
    CustomCompEvent,
    WatcherImmediate,
    WatcherDeep,
    EmitEvent,
    ValidatingEmit,
    AltColor,
    FilterSearch,
    CompVmodel,
    DynaComp,
    ColorMixIn,
    CompApiDataToRef,
    DataReactive,
    RefReactivity,
    ReactiveReactivity,
    VmodelComApi,
    ComputedCompApi,
    WatcherCompApiRef,
    WatcherCompApiReactive,
    InjectProvideCompApi,
    CounterO,
  },
  // beforeCreate() {
     // console.log("beforeCreate");
  //   alert("Tis is before created");
  // },
  // created() {
  //   console.log("Create");
  //   alert("Created");
  // },

  // beforeMount() {
  //   console.log("beforeMount", this.$el);
  //   alert(`Parent beforeMount`);
  // },

  // mounted() {
  //   console.log("Mounted", this.$el);
  //   alert("Mounted");
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
