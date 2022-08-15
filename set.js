class MySet{
	constructor(){
		this.collection = [];
	}

	has(element) {
		return (this.collection.indexOf(element) !== -1);
	}

	values() {
		return this.collection;
	}

	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}

	remove(element){
		if (this.has(element)){
			let index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}

	size() {
		return this.collection.length;
	}

	union(otherSet){
		let unionSet = new Set();
		let firstSet = this.values();
		let secondSet = otherSet.values();

		firstSet.forEach((value) => {
			unionSet.add(value);
		});
		secondSet.forEach((value) => {
			unionSet.add(value);
		})

		return unionSet; // retorna os dois set unidos
	}

	intersection(otherSet){
		let intersectionSet = new Set();
		let firstSet = this.values();
		firstSet.forEach((value) => {
			if(otherSet.has(value)){
				intersectionSet.add(value);
			}
		})
		return intersectionSet; // retorna apenas os elementos que se cruzam ou que sao iguais
	}

	difference(otherSet){
		let differenceSet = new Set();
		let firstSet = this.values();
		firstSet.forEach((value) => {
			if (!otherSet.has(value)){
				differenceSet.add(value);
			}
		});
		return differenceSet; // retorna os valores que nao se cruzam ou que nao sao iguais
	}

	subset(otherSet){
		let firstSet = this.values();
		return firstSet.every((value) => {
			return otherSet.has(value);
		})
	}
}

let setA = new MySet();
let setB = new MySet();

setA.add('a');
setA.add('b');
setA.add('c');

setB.add('a');
setB.add('b');
setB.add('c');
setB.add('d');

console.log('setA: '+setA.values());
console.log('setB: '+setB.values());

setB.remove('c');
console.log('setB: '+setB.values());

console.log('setA size: '+setA.size());
console.log('setB size: '+setB.size());

console.log('Union: ');
console.log(setA.union(setB));

console.log('Intersection: ');
console.log(setA.intersection(setB));

console.log('setA is subset of B -> '+setA.subset(setB));
console.log('setB is subset of A -> '+setB.subset(setA));

console.log(setA.has('k'));
