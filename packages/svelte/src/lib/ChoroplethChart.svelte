<script lang="ts">
	import {
		ChoroplethChart as ChoroplethChartCore,
		type ChoroplethChartOptions,
		type ChartTabularData
	} from '@carbon/charts'
	import BaseChart from './BaseChart.svelte'

	export let options: ChoroplethChartOptions
	export let data: ChartTabularData
	export let chart: ChoroplethChartCore
	export let ref: HTMLDivElement
</script>

<BaseChart
	{...$$restProps}
	Chart={ChoroplethChartCore}
	{options}
	{data}
	bind:ref
	bind:chart
	on:load
	on:update
	on:destroy />
