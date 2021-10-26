<template>
	<div>
		<div class="box-card title">商品属性</div>
		<el-card>
			<div class="spec">
				<div class="name">
					<el-input size="small" v-model="specName" placeholder="输入产品规格"></el-input>
				</div>
				<div class="add-spec">
					<el-button size="small" type="info" @click="addSpec">添加规格项目</el-button>
				</div>
			</div>
		</el-card>
		<div class="skuForm">
			<SkuForm ref="skuForm" :source-attribute="sourceAttribute" :structure="structure" :attribute.sync="attribute" :sku.sync="sku" />
		</div>
        <el-row type="flex" :gutter="20">
			<el-col>
				<el-divider content-position="left">attribute 数据</el-divider>
				<pre><code>{{ attribute }}</code></pre>
			</el-col>
			<el-col>
				<el-divider content-position="left">sku 数据</el-divider>
				<pre><code>{{ sku }}</code></pre>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			disabledGoods: false, //是否禁用输入商品名
			specName: '', //商品规格名称
			sourceAttribute: [], //规格列表
			sku: [], //规格表格数据
			attribute: [], //选中规格列表
			structure: [
				//规格表格头
				{
					name: 'goodsCode',
					type: 'input',
					label: '商品编码',
					tip: '商品编码不能重复'
				},
				{
					name: 'price',
					type: 'input',
					label: '商品原价（元）'
				},

				{
					name: 'stock',
					type: 'input',
					label: '商品库存'
				},
				{
					name: 'realPrice',
					type: 'input',
					label: '实际价格（元）'
				},
				{
					name: 'weight',
					type: 'input',
					label: '商品重量'
				}
			]
		}
	},
	methods: {
		addSpec() {
			let specName = this.specName
			if (!specName) {
				this.$message({
					type: 'warning',
					message: '请先输入规格名称'
				})
				return
			}
			let tag = true
			this.sourceAttribute.forEach(item => {
				if (item.name == specName) {
					tag = false
				}
			})
			if (!tag)
				return this.$message({
					type: 'warning',
					message: '规格名称已存在'
				})
			let obj = {
				name: specName,
				item: []
			}
			this.sourceAttribute.push(obj)
			if (this.msgTitle == '修改成功') {  //根据自己的实际情况 区分修改还是增加
				this.$refs.skuForm.init(true)
			} else {
				this.$refs.skuForm.init()
			}

			this.specName = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.box-card {
	margin-top: 10px;
	margin-bottom: 20px;
	background: rgb(240, 239, 239);
	padding: 20px;
	box-sizing: border-box;
}
.title {
	margin-bottom: 10px;
	font-weight: bold;
}
.spec {
	display: flex;
	.name {
		width: 200px;
		.el-input {
			width: 200px;
		}
	}
	.add-spec {
		margin-left: 20px;
	}
}
</style>
