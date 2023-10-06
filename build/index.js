"use strict";
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
				<input type="text" class="form-control" id="input-resolution" required>
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
    const select_product_value = document.querySelector('#select-product').value;
    if (select_product_value === '-- Selecione --') {
        alert('Selecione um produto');
        return;
    }
};
const select_product = document.querySelector('#select-product');
select_product.addEventListener('change', defineFormFields, false);