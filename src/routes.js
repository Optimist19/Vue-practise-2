import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue";
import Bind from "./components/twoWayBind.vue";
import IfElse from "./components/ifElse.vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import PageNotFound from "./components/Page404.vue";


const router = createRouter({
	history: createWebHistory(),
	routes:[
	{
		name: "Home",
		component: Home,
		path: "/"
	},
	{
		name: "About",
		component: About,
		path: "/about"
	},
	{
		name: "Bind",
		component: Bind,
		path: "/bind"
	},
	{
		name: "IfElse",
		component: IfElse,
		path: "/ifElse"
	},
	{
		name: "Profile",
		component: Profile,
		path: "/profile/:any"
	},
	{
		name: "Page404",
		component: PageNotFound,
		path: "/:pageNotFound(.*)*"
	}
]
})

export default router

