/*jslint browser:true, esnext:true*/
/*globals Ponderation*/
class App {
	static setAttributes(obj, attrs) {
		var k;
		if (!attrs) {
			return this;
		}
		for (k in attrs) {
			this.setAttribute(obj, k, attrs[k]);
		}
		return this;
	}
	static setAttribute(obj, name, value) {
		if (name === "parentNode") {
			value.appendChild(obj);
		} else if (name === "events") {
			this.addEventListeners(obj, value);
		} else {
			obj.setAttribute(name, value);
		}
		return this;
	}
	static setProperties(obj, props) {
		var k;
		if (!props) {
			return this;
		}
		for (k in props) {
			this.setProperty(obj, k, props[k]);
		}
		return this;
	}
	static setProperty(obj, name, prop) {
		obj[name] = prop;
		return this;
	}
	static addEventListeners(obj, evts) {
		var k;
		if (!evts) {
			return this;
		}
		for (k in evts) {
			obj.addEventListeners(k, evts[k]);
		}
		return this;
	}
	static createSVG(name, attributes, events) {
		var resultat;
		resultat = document.createElementNS(this.NS, name);
		this.setAttributes(resultat, attributes);
		this.addEventListeners(resultat, events);
		return resultat;
	}
	static init() {
		this.NS = "http://www.w3.org/2000/svg";
		window.addEventListener("load", function () {
			var ponderation = new Ponderation();
			document.getElementById("graphique").appendChild(ponderation.svg());
		});
	}
}
App.init();
