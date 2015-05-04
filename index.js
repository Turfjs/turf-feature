/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @module turf/feature
 * @category helper
 * @param {Geometry} geometry input geometry
 * @returns {FeatureCollection} a FeatureCollection of input features
 * @example
 * var geometry = {
 *      "type": "Point",
 *      "coordinates": [
 *        67.5,
 *        32.84267363195431
 *      ]
 *    }
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
module.exports = function(geometry) {
  return {
    type: "Feature",
    properties: {},
    geometry: geometry
  };
};