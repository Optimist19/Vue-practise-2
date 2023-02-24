import {ref} from "vue"

export default function useComposable(){
	const count = ref(0)

	function add(){
		count.value = count.value + 1
	}

	return{
		count,
		add
	}
}