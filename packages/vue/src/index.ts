import { App } from 'vue'

import {
	CcvAlluvialChart,
	CcvAreaChart,
	CcvBoxplotChart,
	CcvBubbleChart,
	CcvBulletChart,
	CcvCirclePackChart,
	CcvComboChart,
	CcvChoroplethChart,
	CcvChoroplethChart as ExperimentalCcvChoroplethChart,
	CcvDonutChart,
	CcvGaugeChart,
	CcvGroupedBarChart,
	CcvHeatmapChart,
	CcvHistogramChart,
	CcvLineChart,
	CcvLollipopChart,
	CcvMeterChart,
	CcvPieChart,
	CcvRadarChart,
	CcvScatterChart,
	CcvSimpleBarChart,
	CcvStackedAreaChart,
	CcvStackedBarChart,
	CcvTreeChart,
	CcvTreemapChart,
	CcvWordCloudChart
} from './components'

const components = [
	CcvAlluvialChart,
	CcvAreaChart,
	CcvBoxplotChart,
	CcvBubbleChart,
	CcvBulletChart,
	CcvChoroplethChart,
	ExperimentalCcvChoroplethChart,
	CcvCirclePackChart,
	CcvComboChart,
	CcvDonutChart,
	CcvGaugeChart,
	CcvGroupedBarChart,
	CcvHeatmapChart,
	CcvHistogramChart,
	CcvLineChart,
	CcvLollipopChart,
	CcvMeterChart,
	CcvPieChart,
	CcvRadarChart,
	CcvScatterChart,
	CcvSimpleBarChart,
	CcvStackedAreaChart,
	CcvStackedBarChart,
	CcvTreeChart,
	CcvTreemapChart,
	CcvWordCloudChart
]

/*
  Allows the module to be used as a Vue plug-in, and has an install()
  method (which is called when the plug-in loads) that registers all the
  components unless an array of components to register is provided.
*/
export default {
	install(app: App, options?: string[]) {
		for (const component of components) {
			// Check that component.name is defined and is a string
			if (component.name && (!options || options.includes(component.name))) {
				app.component(component.name, component)
			}
		}
	}
}

/*
  Allows import of individual components from the module, as an
  alternative to loading them all via a Vue plug-in.
*/
export {
	CcvAlluvialChart,
	CcvAreaChart,
	CcvBoxplotChart,
	CcvBubbleChart,
	CcvBulletChart,
	CcvChoroplethChart,
	/**
	 * @deprecated Use `CcvChoroplethChart` instead.
	 */
	ExperimentalCcvChoroplethChart,
	CcvCirclePackChart,
	CcvComboChart,
	CcvDonutChart,
	CcvGaugeChart,
	CcvGroupedBarChart,
	CcvHeatmapChart,
	CcvHistogramChart,
	CcvLineChart,
	CcvLollipopChart,
	CcvMeterChart,
	CcvPieChart,
	CcvRadarChart,
	CcvScatterChart,
	CcvSimpleBarChart,
	CcvStackedAreaChart,
	CcvStackedBarChart,
	CcvTreeChart,
	CcvTreemapChart,
	CcvWordCloudChart
}

// Republish essential types from core so it's not a required dependency
export type {
	ChartTabularData,
	ChartOptions,
	AlluvialChartOptions,
	AreaChartOptions,
	BarChartOptions,
	BoxplotChartOptions,
	BubbleChartOptions,
	BulletChartOptions,
	ChoroplethChartOptions,
	CirclePackChartOptions,
	ComboChartOptions,
	DonutChartOptions,
	GaugeChartOptions,
	HeatmapChartOptions,
	HistogramChartOptions,
	LineChartOptions,
	LollipopChartOptions,
	MeterChartOptions,
	PieChartOptions,
	RadarChartOptions,
	ScatterChartOptions,
	StackedAreaChartOptions,
	TreeChartOptions,
	TreemapChartOptions,
	WordCloudChartOptions,
	/**
	 * @deprecated Use `WordCloudChartOptions` instead.
	 */
	WordCloudChartOptions as WorldCloudChartOptions
} from '@carbon/charts'

// Commonly-used enums
export { Alignments, ChartTheme, ScaleTypes } from '@carbon/charts'
