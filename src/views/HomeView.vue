<script lang="ts" setup></script>
<template>
	<router-link to="/frame">
		<div id="main">
			<h1>서비스 명</h1>
			<h3>화면을 터치하세요</h3>
		</div>
	</router-link>
</template>

<style scoped>
div {
	height: 100%;
	text-align: center;
	background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
}

h1,
h3 {
	color: white;
}

h1 {
	padding-top: 20%;
	padding-bottom: 10%;
	font-size: 7em;
}

h3 {
	font-size: 3em;
}
</style>

