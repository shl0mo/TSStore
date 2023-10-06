"use strict";
class Product {
    constructor(model, maker, price) {
        this.model = '';
        this.maker = '';
        this.price = 0;
        this.setModel(model);
        this.setMaker(maker);
        this.setPrice(price);
    }
    setModel(model) {
        this.model = model;
    }
    setMaker(maker) {
        this.maker = maker;
    }
    setPrice(price) {
        this.price = price;
    }
    getModel() {
        return this.model;
    }
    getMaker() {
        return this.maker;
    }
    getPrice() {
        return this.price;
    }
}
class TV extends Product {
    constructor(model, maker, price, resolution, inches) {
        super(model, maker, price);
        this.resolution = 0;
        this.inches = 0;
        this.setResolution(resolution);
        this.setInches(inches);
    }
    setResolution(resolution) {
        this.resolution = resolution;
    }
    setInches(inches) {
        this.inches = inches;
    }
    getResolution() {
        return this.resolution;
    }
    getInches() {
        return this.inches;
    }
}
class Cellphone extends Product {
    constructor(model, maker, price, memory) {
        super(model, maker, price);
        this.memory = 0;
        this.setMemory(memory);
    }
    setMemory(memory) {
        this.memory = memory;
    }
    getMemory() {
        return this.memory;
    }
}
class Bike extends Product {
    constructor(model, maker, price, rim_size) {
        super(model, maker, price);
        this.rim_size = 0;
        this.setRimSize(rim_size);
    }
    setRimSize(rim_size) {
        this.rim_size = rim_size;
    }
    getRimSize() {
        return this.rim_size;
    }
}
class Cart {
    constructor(products) {
        this.products = [];
        this.setProducts(products);
    }
    setProducts(products) {
        this.products = products;
    }
    getProducts() {
        return this.products;
    }
    sumProductsPrices() {
        let sum_prices = 0;
        for (const product of this.getProducts()) {
            sum_prices = sum_prices + product.getPrice();
        }
        return sum_prices;
    }
}
function defineFormFields() {
    const select_product = this;
    let container_form_inputs = document.querySelector('#container-form-inputs');
    const product = select_product.value;
    if (product === 'TV') {
        container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-resolution">Resolução</label>
				<input type="number" class="form-control" id="input-resolution" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-inches">Polegadas</label>
				<input type="number" class="form-control" id="input-inches" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`;
        const modal_add_button = document.querySelector('#modal-add-button');
        modal_add_button.addEventListener('click', addProduct, false);
    }
    else if (product === 'Celular') {
        container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-memory">Memória</label>
				<input type="number" class="form-control" id="input-memory" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-inches">Polegadas</label>
				<input type="number" class="form-control" id="input-inches" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`;
        const modal_add_button = document.querySelector('#modal-add-button');
        modal_add_button.addEventListener('click', addProduct, false);
    }
    else if (product === 'Bicicleta') {
        container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-rim-size">Tamanho do aro</label>
				<input type="number" class="form-control" id="input-rim-size" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`;
        const modal_add_button = document.querySelector('#modal-add-button');
        modal_add_button.addEventListener('click', addProduct, false);
    }
    else if (product === '-- Selecione --') {
        container_form_inputs.innerHTML = '';
    }
}
const addProduct = () => {
    const product = document.querySelector('#select-product').value;
    const model = document.querySelector('#input-model').value;
    const maker = document.querySelector('#input-maker').value;
    const price = parseFloat(document.querySelector('#input-price').value);
    const input_shipping_total = document.querySelector('#input-shipping-total');
    const products = cart.getProducts();
    if (product === 'TV') {
        const resolution = parseFloat(document.querySelector('#input-resolution').value);
        const inches = parseFloat(document.querySelector('#input-inches').value);
        const new_TV = new TV(model, maker, price, resolution, inches);
        products.push(new_TV);
        const sum_products_prices = cart.sumProductsPrices();
        input_shipping_total.value = 'R$ ' + String(sum_products_prices);
    }
    else if (product === 'Celular') {
        const memory = parseFloat(document.querySelector('#input-memory').value);
        const new_cellphone = new Cellphone(model, maker, price, memory);
        products.push(new_cellphone);
        const sum_products_prices = cart.sumProductsPrices();
        input_shipping_total.value = 'R$ ' + String(sum_products_prices);
    }
    else if (product === 'Bicicleta') {
        const rim_size = parseFloat(document.querySelector('#input-rim-size').value);
        const new_bike = new Bike(model, maker, price, rim_size);
        products.push(new_bike);
        const sum_products_prices = cart.sumProductsPrices();
        input_shipping_total.value = 'R$ ' + String(sum_products_prices);
    }
    else if (product === '-- Selecione --') {
        alert('Selecione um produto');
        return;
    }
};
const products = [];
const cart = new Cart(products);
const select_product = document.querySelector('#select-product');
select_product.addEventListener('change', defineFormFields, false);
