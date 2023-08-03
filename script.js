
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiChart = document.getElementById('bmiChart').getContext('2d');

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; 
    const weight = parseFloat(weightInput.value);
    const bmi = weight / (height * height);

    displayBMI(bmi);
}

function displayBMI(bmi) {
    const bmiData = {
        labels: ['BMI'],
        datasets: [
            {
                label: 'Your BMI',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [bmi.toFixed(2)]
            }
        ]
    };

    const bmiChartConfig = {
        type: 'bar',
        data: bmiData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(bmiChart, bmiChartConfig);
}
