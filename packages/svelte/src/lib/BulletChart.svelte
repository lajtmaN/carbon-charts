<script lang="ts">
	import {
		BulletChart as BulletChartCore,
		type BulletChartOptions,
		type ChartTabularData
	} from '@carbon/charts'
	import BaseChart from './BaseChart.svelte'

	export let options: BulletChartOptions
	export let data: ChartTabularData
	export let chart: BulletChartCore
	export let ref: HTMLDivElement
</script>

<BaseChart
	{...$$restProps}
	Chart={BulletChartCore}
	{options}
	{data}
	bind:ref
	bind:chart
	on:load
	on:update
	on:destroy />
