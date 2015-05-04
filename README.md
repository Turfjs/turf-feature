# turf-feature

[![build status](https://secure.travis-ci.org/Turfjs/turf-feature.png)](http://travis-ci.org/Turfjs/turf-feature)

[Turf](http://turfjs.org/) feature module


### `turf.feature(geometry)`

Wraps a GeoJSON Geometry in a GeoJSON Feature.


### Parameters

| parameter  | type     | description    |
| ---------- | -------- | -------------- |
| `geometry` | Geometry | input geometry |


### Example

```js
var geometry = {
     "type": "Point",
     "coordinates": [
       67.5,
       32.84267363195431
     ]
   }

var feature = turf.feature(geometry);

//=feature
```


**Returns** `FeatureCollection`, a FeatureCollection of input features

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-feature
```

## Tests

```sh
$ npm test
```


