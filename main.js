import './style.css'
import '@arcgis/core/assets/esri/themes/dark/main.css';

import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = './assets';

import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import LayerList from "@arcgis/core/widgets/LayerList"
import Legend from "@arcgis/core/widgets/Legend"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import Swipe from "@arcgis/core/widgets/Swipe"
import Expand from "@arcgis/core/widgets/Expand"
import { Extent } from '@arcgis/core/geometry';

import appConfig from "./config.js"

// FEATURE DATA LAYERS
// Raleigh City Limits
const raleighCityLimitsLayer = new FeatureLayer({
  url: appConfig.layers.raleighCityLimits.data.path,
  definitionExpression: appConfig.layers.raleighCityLimits.data.definitionExpression,
  title: appConfig.layers.raleighCityLimits.displayName,
  copyright: appConfig.layers.raleighCityLimits.data.attribution,
  renderer: appConfig.layers.raleighCityLimits.renderer,
  opacity: 0.7,
  popupEnabled: false,
  visible: false
})

// PRCR's data
const prcrParksLayer = new GeoJSONLayer({
  url: appConfig.layers.prcrParks.data.path,
  title: appConfig.layers.prcrParks.displayName,
  copyright: appConfig.layers.prcrParks.data.attribution,
  popupTemplate: appConfig.layers.prcrParks.popupTemplate,
  renderer: appConfig.layers.prcrParks.renderer
})

// TPL's data

// const tplParksUrl = "https://server3.tplgis.org/arcgis3/rest/services/ParkServe/ParkServe_DevWeb/FeatureServer/2"
const tplParksLayer = new FeatureLayer({
  url: appConfig.layers.tplParks.data.path,
  definitionExpression: appConfig.layers.tplParks.data.definitionExpression,
  title: appConfig.layers.tplParks.displayName,
  copyright: appConfig.layers.tplParks.data.attribution,
  popupTemplate: appConfig.layers.tplParks.popupTemplate,
  renderer: appConfig.layers.tplParks.renderer,
  opacity: 1
})

// MAP
const map = new Map({
  basemap: "gray-vector",
  layers: [raleighCityLimitsLayer, tplParksLayer, prcrParksLayer]
})

const view = new MapView({
  container: "viewDiv",
  map: map
})

prcrParksLayer
  .when(() => prcrParksLayer.queryExtent())
  .then(response => view.goTo(response.extent))

// UI

// Layer List
const layerList = new LayerList({
  view: view,
  container: "div"
})
const layerListExpand = new Expand({
  view: view,
  content: layerList,
  expandTooltip: "Toggle Map Layers",
  group: "ui-elements"
})
view.ui.add(layerListExpand, {position: "top-left"})

// Legend
const legend = new Legend({
  view: view,
  container: "div"
})
const legendExpand = new Expand({
  view: view,
  content: legend,
  expandTooltip: "Legend",
  group: "ui-elements"
})
view.ui.add(legendExpand, {position: "top-left"})

// Basemap Gallery
const basemapGallery = new BasemapGallery({
  view: view,
  container: "div"
})
const basemapGalleryExpand = new Expand({
  view: view,
  content: basemapGallery,
  expandTooltip: "Basemap Gallery",
  group: "ui-elements"
})
view.ui.add(basemapGalleryExpand, "top-left")

// Misc. UI
let uiOptionsEl = document.getElementById("uiOptionsDiv")
const uiOptionsExpand = new Expand({
  view: view,
  content: uiOptionsEl,
  expandTooltip: "Misc. UI",
  expandIconClass: "esri-icon-experimental",
  group: "ui-elements"
})
view.ui.add(uiOptionsExpand, "top-left")

view.when(() => {
  // Swiper
  const swipeCheckboxEl = document.getElementById("swipeToggle")
  swipeCheckboxEl.addEventListener("change", () => {
    console.log("Toggled!")
    toggleSwipe()
  })
  let swiper;
  function toggleSwipe() {
    if (swipeCheckboxEl.checked) {
      swiper = new Swipe({
        leadingLayers: [prcrParksLayer],
        trailingLayers: [tplParksLayer],
        position: 35,
        view: view
      })
      view.ui.add(swiper)
    } else {
      swiper.trailingLayers.removeAll()
      swiper.leadingLayers.removeAll()
      swiper.
      view.ui.remove(swiper)
    }
  }

  // Bookmarks
  const fullExtentButton = document.getElementById("fullExtentBtn")
  fullExtentButton.addEventListener("click", () => {
    view.goTo(prcrParksLayer.fullExtent, {duration: 1000})
  })
  const bookmarkButtons = document.getElementsByClassName("bookmarkBtn")
  for (let btn of bookmarkButtons) {
    btn.addEventListener("click", () => {
      let layerExtent = new Extent({
        xmin: parseFloat(btn.dataset.xmin),
        ymin: parseFloat(btn.dataset.ymin),
        xmax: parseFloat(btn.dataset.xmax),
        ymax: parseFloat(btn.dataset.ymax)
      })
      view.goTo(layerExtent, {
        duration: 1000,
        easing: "ease-in-out"
      })
    })
  }
})
