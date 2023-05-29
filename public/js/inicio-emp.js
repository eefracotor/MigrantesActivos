// Obtén una referencia al elemento canvas
var ctx = document.getElementById('myChart').getContext('2d');
var cantMasc = document.getElementById('cantMasc').dataset.variable;
var cantFem = document.getElementById('cantFem').dataset.variable;
// Crea el objeto de configuración del gráfico
var chartConfig = {
type: 'bar', // Tipo de gráfico (en este caso, de barras)
data: {
  labels: ['Masculino', 'Femenido'], // Etiquetas del eje X
  datasets: [
    {
      label: 'Cantidades', // Etiqueta de la serie de datos
      data: [ cantMasc , cantFem ] // Valores de la serie de datos
    }
  ]
}
};

// Crea el gráfico utilizando Chart.js
var myChart = new Chart(ctx, chartConfig);

