google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Project' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'McNeilus Truck & Manufacturing', new Date(2017, 2, 15), new Date(2017, 8, 15) ],
    [ 'Test: Catalog3',                 new Date(2017, 6, 23),  new Date(2017, 12, 23) ],
    [ 'Test: 3D Model Viewer',          new Date(2017, 9, 11),  new Date(2018, 3, 11) ],
    [ 'Focal Point',                    new Date(2018, 2, 15), new Date(2018, 8, 15) ],
    [ 'Data Team',                      new Date(2018, 6, 23), new Date(2018, 12, 23) ],
    [ 'Quotes',                         new Date(2018, 9, 11),  new Date(2019, 3, 11) ],
    [ 'RhinoAg',                        new Date(2019, 2, 15),  new Date(2019, 8, 15) ],
    [ 'Rexnord Maintenance',            new Date(2019, 6, 23), new Date(2019, 12, 23) ],
    [ 'IGS',                            new Date(2019, 9, 11), new Date(2020, 3, 11) ]]);

  chart.draw(dataTable);
}

