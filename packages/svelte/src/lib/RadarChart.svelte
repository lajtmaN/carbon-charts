<script lang="ts">
	import {
		RadarChart as RadarChartCore,
		type RadarChartOptions,
		type ChartTabularData
	} from '@carbon/charts'
	import BaseChart from './BaseChart.svelte'

	export let options: RadarChartOptions
	export let data: ChartTabularData
	export let chart: RadarChartCore
	export let ref: HTMLDivElement
</script>

<BaseChart
	{...$$restProps}
	Chart={RadarChartCore}
	{options}
	{data}
	bind:ref
	bind:chart
	on:load
	on:update
	on:destroy />
