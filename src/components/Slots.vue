<template>
	<h1>SLOT 1</h1>
	<slot name="header">Default Data</slot>
	<slot name="body"></slot>
	<slot name="footer"></slot>
</template>

<script>
	export default{
		name: "SlotSample"
	}
</script>