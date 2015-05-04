var test = require('tape');
var feature = require('./');

test('feature', function(t){
  var pt = {
      "type": "Point",
      "coordinates": [
        67.5,
        32.84267363195431
      ]
    };
  var line = {
      "type": "LineString",
      "coordinates": [
        [
          82.96875,
          58.99531118795094
        ],
        [
          72.7734375,
          55.57834467218206
        ],
        [
          84.0234375,
          55.57834467218206
        ]
      ]
    };
  var polygon = {
      "type": "Polygon",
      "coordinates": [
        [
          [
            85.78125,
            -3.513421045640032
          ],
          [
            85.78125,
            13.581920900545844
          ],
          [
            92.46093749999999,
            13.581920900545844
          ],
          [
            92.46093749999999,
            -3.513421045640032
          ],
          [
            85.78125,
            -3.513421045640032
          ]
        ]
      ]
    };

  t.equal(feature(pt).type, 'Feature');
  t.equal(feature(line).type, 'Feature');
  t.equal(feature(polygon).type, 'Feature');
  t.deepEqual(feature(pt),
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          67.5,
          32.84267363195431
        ]
      }
    });

  t.end();
});
