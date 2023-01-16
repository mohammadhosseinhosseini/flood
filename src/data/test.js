const fs = require('fs')
const floodDepth = require('./Flood_Depths_Normalized.json')
const floodHazard = require('./Flood_hazard.json')

const featuresLow = floodDepth.features.filter(
    (feature) => feature.properties.Category === 'Low'
)

console.log(featuresLow.length)

fs.writeFileSync(
    './Flood_Depths_Normalized_Low.json',
    JSON.stringify({ ...floodDepth, features: featuresLow })
)

const featuresMedium = floodDepth.features.filter(
    (feature) => feature.properties.Category === 'Medium'
)

fs.writeFileSync(
    './Flood_Depths_Normalized_Medium.json',
    JSON.stringify({ ...floodDepth, features: featuresMedium })
)

const featuresHigh = floodDepth.features.filter(
    (feature) => feature.properties.Category === 'High'
)

fs.writeFileSync(
    './Flood_Depths_Normalized_High.json',
    JSON.stringify({ ...floodDepth, features: featuresHigh })
)

const floodHazardLow = floodHazard.features.filter(
    (feature) => feature.properties.FloodHazardAreaScenario === 'Low'
)

fs.writeFileSync(
    './Flood_hazard_Low.json',
    JSON.stringify({ ...floodHazard, features: floodHazardLow })
)

const floodHazardMedium = floodHazard.features.filter(
    (feature) => feature.properties.FloodHazardAreaScenario === 'Medium'
)

fs.writeFileSync(
    './Flood_hazard_Medium.json',
    JSON.stringify({ ...floodHazard, features: floodHazardMedium })
)

const floodHazardHigh = floodHazard.features.filter(
    (feature) => feature.properties.FloodHazardAreaScenario === 'High'
)

fs.writeFileSync(
    './Flood_hazard_High.json',
    JSON.stringify({ ...floodHazard, features: floodHazardHigh })
)
