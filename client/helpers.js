// helpers.js
UI.registerHelper('addKeys', function (all) {
    return _.map(all, function(i, k) {
        return {key: k, value: i};
    });
});

getColor = function (id) {
  var colors = [
          'rgb(31, 124, 224)', 'rgb(224, 224, 31)', 'rgb(108, 224, 31)',
          'rgb(224, 124, 31)', 'rgb(224, 31, 139)'
        ];
  return colors[id%6];
}