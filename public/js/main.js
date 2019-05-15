'use strict';

const respos = document.getElementById("resp");

const span = (e) => {
	event.preventDefault();
	respos.innerHTML = "Is not definition";
}

const expand = document.getElementById("expand");

const abrir = () => {
	expand.style.opacity = "1";
	expand.style.height = "320px";
}

const filtro = document.getElementById("filtro");

const fort = () => {
	filtro.style.opacity = "1";
	filtro.style.marginLeft = "200px";
}