let tipo = 'bar';
let dados = {
    // rótulos
    labels: ["Vermelho", "Azul", "Amarelo", "Verde", "Roxo", "Laranja"],
    // conjuntos de dados
    datasets: [
        {
            label: "# votos",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: "#1E90FF",
            backgroundColor: "#1E90FF"
        },
        {
            label: "objeto 2",
            data: [10, 20, 1, 10, 4, 3],
            borderWidth: 1,
            borderColor:  "#FF6347",
            backgroundColor: "#FF6347"
        }
    ]
};
let opcoes = {
    // escala
    scales: {
        y: {
            beginAtZero: true,
            stacked: true
        },
        x: {
            stacked: true
        }
    },

    plugins: {
        title: {
            display: true,
            text: "Gráfico de barras empilhadas"
        }
    }

};

// gráfico 1 - gráfico de barras
const ctx1 = document.querySelector("#meu-grafico1");

new Chart(ctx1, {
    // type = tipo do gráfico
    type: tipo,
    
    // data = recebe os dados
    data: dados,

    // options = options de configuração do gráfico
    options: {
        // escala
        scales: {
            y: {
                beginAtZero: true
            },
        },

        plugins: {
            title: {
                display: true,
                text: "Gráfico de barras"
            }
        }
    }
})

// gráfico 2 - gráfico de barras empilhadas
const ctx2 = document.querySelector("#meu-grafico2");

new Chart(ctx2, {
    // type = tipo do gráfico
    type: tipo,
    
    // data = recebe os dados
    data: dados,

    // options = options de configuração do gráfico
    options: opcoes
})

// gráfico 3 - gráfico de linhas
const ctx3 = document.querySelector("#meu-grafico3");

new Chart(ctx3, {
    // type = tipo do gráfico
    type: 'line',
    
    // data = recebe os dados
    data: dados,

    // options = options de configuração do gráfico
    options: { plugins: {
        title: {
            display: true,
            text: "Gráfico de linhas"
        }
    }}
})


// gráfico 4 - gráfico de pizza
const ctx4 = document.querySelector("#meu-grafico4");

new Chart(ctx4, {
    // type = tipo do gráfico
    type: 'pie',
    
    // data = recebe os dados
    data: {
        labels: ["Vermelho", "Azul", "Amarelo", "Verde", "Roxo", "Laranja"],

        datasets: [
            {
                label: "# votos",
                data: [12, 19, 3, 5, 2, 3],
            }
        ]
    },

    // options = options de configuração do gráfico
    options: { 
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Gráfico de pizza"
            }
    }}
})



// gráfico 5 - gráfico de donuts
const ctx5 = document.querySelector("#meu-grafico5");

new Chart(ctx5, {
    // type = tipo do gráfico
    type: 'doughnut',
    
    // data = recebe os dados
    data: {
        labels: ["Vermelho", "Azul", "Amarelo", "Verde", "Roxo", "Laranja"],

        datasets: [
            {
                label: "# votos",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"]
            }
        ]
    },

    // options = options de configuração do gráfico
    options: { 
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Gráfico de donut"
            }
    }}
})


// gráfico 6 - gráfico de dispersão (scatterplot)
const ctx6 = document.querySelector("#meu-grafico6");

new Chart(ctx6, {
    // type = tipo do gráfico
    type: 'scatter',
    
    // data = recebe os dados
    data: {
        labels: ["Vermelho", "Azul", "Amarelo", "Verde", "Roxo", "Laranja"],

        datasets: [
            {
                label: "Vermelho",
                data: [{x: 10, y: 20}],
                backgroundColor: "red",
            },
            {label: "Azul", data: [{x:32, y:22}], backgroundColor: "blue"},
            {label: "Amarelo", data: [{x:4, y:5}], backgroundColor: "yellow"},
            {label: "Verde", data: [{x:11, y:11}], backgroundColor: "green"},
            {label: "Roxo", data: [{x:12, y:12}], backgroundColor: "purple"},
            {label: "Laranja", data: [{x:29, y:12}], backgroundColor: "orange"},

        ]
    },

    // options = options de configuração do gráfico
    options: { 
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Gráfico de donut"
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    
    }
})

