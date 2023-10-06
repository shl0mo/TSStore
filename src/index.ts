class Product {
	private model : string = ''
	private maker : string = ''
	private price : number = 0

	constructor (model : string, maker : string, price : number) {
		this.setModel(model)
		this.setMaker(maker)
		this.setPrice(price)
	}

	public setModel (model : string) : void {
		this.model = model
	}

	public setMaker (maker : string) : void {
		this.maker = maker
	}

	public setPrice (price : number) : void {
		this.price = price
	}

	public getModel () : string {
		return this.model
	}

	public getMaker () : string {
		return this.maker
	}

	public getPrice () : number {
		return this.price
	}
}

class TV extends Product {
	private resolution : number = 0
	private inches : number = 0

	constructor (
		model : string,
		maker : string,
		price : number,
		resolution : number,
		inches: number,
	) {
		super(model, maker, price)
		this.setResolution(resolution)
		this.setInches(inches)
	}

	public setResolution (resolution : number) : void {
		this.resolution = resolution
	}

	public setInches (inches : number) : void {
		this.inches = inches
	}

	public getResolution () : number {
		return this.resolution
	}

	public getInches () : number {
		return this.inches
	}
}

class Cellphone extends Product {
	private memory : number = 0

	constructor (
		model : string,
		maker : string,
		price : number,
		memory : number
	) {
		super(model, maker, price)
		this.setMemory(resolution)
	}

	public setMemory (memory : number) : void {
		this.memory = memory
	}

	public getMemory () : number {
		return this.memory
	}
}

class Cart {
	private products : Product[] = []
	private sum_products_prices : number = 0

	constructor (products : Product[]) {
		this.setProducts(products)
	}

	public setProducts (products : Product[]) : void {
		this.products = products
	}
	
	public getProducts () : Product[] {
		return this.products
	}

	public getSumProductsPrices () : number {
		return this.sum_products_prices
	}
}

function defineFormFields() {
	const select_product = this
	let container_form_inputs : HTMLElement = (<HTMLElement>document.querySelector('#container-form-inputs'))
	const product : string = select_product.value
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
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === 'Celular') {
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
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === 'Bicicleta') {
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
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === '-- Selecione --') {
		container_form_inputs.innerHTML = ''	
	}
}

const addProduct = () => {
	const product : string = (<HTMLInputElement>document.querySelector('#select-product')).value
	if (product === 'TV') {
		
	} else if (product === 'Celular') {
		
	} else if (product === 'Bicicleta') {
		
	} else if (product === '-- Selecione --') {
		alert('Selecione um produto')
		return
	}

}


const select_product : HTMLInputElement = (<HTMLInputElement>document.querySelector('#select-product'))
select_product.addEventListener('change', defineFormFields, false)
