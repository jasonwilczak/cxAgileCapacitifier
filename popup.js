document.addEventListener('DOMContentLoaded', function() {
  var calculateButton = document.getElementById('calculate');
  calculateButton.addEventListener('click', function() {
alert('hi');
    // chrome.tabs.getSelected(null, function(tab) {
    //   d = document;

    //   var f = d.createElement('form');
    //   f.action = 'http://gtmetrix.com/analyze.html?bm';
    //   f.method = 'post';
    //   var i = d.createElement('input');
    //   i.type = 'hidden';
    //   i.name = 'url';
    //   i.value = tab.url;
    //   f.appendChild(i);
    //   d.body.appendChild(f);
    //   f.submit();
    // });
  }, false);
}, false);