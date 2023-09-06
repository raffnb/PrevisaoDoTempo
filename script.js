const key = "ae12b18e6ba8e201d79ef41ff47ce860";


function dateInfo(dados){
document.querySelector('.city').innerHTML = "Tempo em "  + dados.name;
document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp)+ "ºC ";
document.querySelector('.textPreview').innerHTML = dados.weather[0].description;
document.querySelector('.imgPreview').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
document.querySelector('.umidy').innerHTML = 'Umidade ' +  dados.main.humidity + "%";


}

async function buscarCidade  (cidade){
const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
dateInfo(dados);
}




function clickButton(){
    var cidade = document.querySelector('.inputCity').value;
buscarCidade(cidade);
}


