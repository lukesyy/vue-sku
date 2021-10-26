<!--
 * @Date: 2021-10-25 17:53:20
 * @LastEditors: LiJinGang
 * @LastEditTime: 2021-10-26 10:15:13
-->
<template>
	<div>
		<router-link to="/">新增一个商品</router-link>
		<router-link to="/edit">数据回显及修改</router-link>
		<div style="padding: 10px;">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style scoped>
a {
	margin-right: 10px;
}
a {
	display: inline-block;
	width: 200px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: rgb(130, 133, 130);
	font-size: larger;
	color: aliceblue;
	text-decoration: none;
}
</style>
