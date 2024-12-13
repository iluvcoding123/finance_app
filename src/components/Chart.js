import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart({ data }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                intersect: true,
                mode: 'nearest',
                axis: 'xy',
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `$${context.parsed.y.toLocaleString()}`;
                        }
                        return label;
                    }
                }
            },
            crosshair: {
                line: {
                    color: '#808080',
                    width: 1
                }
            }
        },
        interaction: {
            intersect: true,
            mode: 'nearest',
            axis: 'xy',
        },
        elements: {
            point: {
                radius: 4,                    // Default point size
                hitRadius: 20,                // Added: Increases the detection area
                hoverRadius: 8,               // Point size on hover
                hoverBorderWidth: 2,          // Border width on hover
                backgroundColor: 'rgba(75,192,192,0.2)',  // Point fill color
                borderColor: 'rgba(75,192,192,1)',        // Point border color
                hoverBackgroundColor: 'rgba(75,192,192,1)', // Hover fill color
            },
            line: {
                tension: 0.4,
            }
        },
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Savings ($)',
                },
                ticks: {
                    callback: function (value) {
                        return `$${value.toLocaleString()}`;
                    },
                },
            },
        },
    };

    return <Line data={data} options={options} />;
}

export default Chart;