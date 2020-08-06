
/*Nav bar toggler*/
(function() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });
  })();
  
 
 
 

  /*1sst start */
 var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    options: {
        title: {
                display: true,
                text: 'GIS Team Services'
            }
        },
    data: {
      labels: ["High Priority","Unassigned", "Open Jobs", "Completed", "All Jobs"],

      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          // "#e74c3c",
          // "#34495e"
        ],        
        data: [12, 19, 3, 17, 28] //, 24, 7]
      }]
    }
  });
    


  /*2nd start */
  var ctx = document.getElementById("myChart1").getContext('2d');
  var myChart1 = new Chart(ctx, {
    type: 'pie',
    options: {
        title: {
                display: true,
                text: 'James'
            }
        },
    data: {
      labels: ["High Priority","Open Jobs", "Completed", "All Jobs"],
      // labels: ["M", "T", "W", "T"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",          
          "#e74c3c",
          "#34495e"
        ],
        data: [12, 19, 24, 7]
      }]
    }
  });
 

  /*3rd start */
  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    options: {
        title: {
                display: true,
                text: 'Bright'
            }
        },
    data: {
      labels: ["High Priority","Open Jobs", "Completed", "All Jobs"],
      datasets: [{
        backgroundColor: [
          
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [12, 19, 28, 24]
      }]
    }
  });
 


   /*4th start */
   var ctx = document.getElementById("myChart3").getContext('2d');
   var myChart2 = new Chart(ctx, {
    type: 'polarArea',
    options: {
        title: {
                display: true,
                text: 'Caleb'
            }
        },
    data: {
      labels: ["High Priority","Open Jobs", "Completed", "All Jobs"],      
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6"
          
        ],
        data: [19, 17, 28, 24]
      }]
    }
  });


  /*5th start*/
  var ctx = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx, {
  type: 'line',
  options: {
        title: {
                display: true,
                text: 'No of Cases by Month'
            }
        },
  data: {
    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
    datasets: [{
      label: 'Closed Cases',
      data: [12, 19, 3, 17, 6, 3],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Open Cases',
      data: [2, 29, 5, 5, 2, 3],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
 
