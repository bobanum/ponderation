/*jslint browser:true, esnext:true, forin:true*/
/*global App*/
class Ponderation {
	constructor() {
		this.largeur = 1000;
		this.hauteur = 1000;
	}
	svg() {
		var resultat, rect;
		resultat = App.createSVG("svg", {
			"width": "100%",
			"height": "100%",
//			"preserveAspectRatio": "none",
			"viewBox": "-100 -2 1103 1023"
		});
		rect = App.createSVG("rect", {
			"id": "zonef",
			"class": "zone",
			"x": "0",
			"y": "400",
			"width": this.largeur,
			"height": "600",
			"parentNode": resultat
		});
		rect = App.createSVG("rect", {
			"id": "zone0",
			"class": "zone",
			"x": "0",
			"y": "0",
			"width": "600",
			"height": this.hauteur,
			"parentNode": resultat
		});
		rect = App.createSVG("rect", {
			"id": "cadre",
			"x": "0",
			"y": "0",
			"width": this.largeur,
			"height": this.hauteur,
			"parentNode": resultat
		});
		App.createSVG("path", {
			"id": "chemin",
			"d": "M 0," + this.hauteur + " L " + this.largeur + ",0",
			"parentNode": resultat
		});
		rect = ["M"];
		let div = 100;
		let coef = 2;
		for (let i = 0; i <= div; i += 1) {
			rect.push("" + (i * this.largeur / div) + "," + (this.hauteur - this.hauteur * (Math.pow(i / div, 1 / coef))) + "");
		}
		App.createSVG("path", {
			"id": "chemin2",
			"class": "test",
			"d": rect.join(" "),
			"parentNode": resultat
		});
//		rect = ["M"];
//		for (let i = 0; i <= div; i += 1) {
//			rect.push("" + (i * this.largeur / div) + "," + (this.hauteur * (Math.pow(1 - i / div, coef))) + "");
//		}
//		App.createSVG("path", {
//			"id": "chemin2",
//			"class": "test",
//			"d": rect.join(" "),
//			"parentNode": resultat
//		});
		App.createSVG("path", {
			"id": "courbe",
			"class": "courbe",
			"d": "M 0,"+this.hauteur+" C0,890 0,500 1000,0",
			"parentNode": resultat
		});
		App.createSVG("path", {
			"id": "courbe",
			"class": "courbe",
			"d": "M 0,"+this.hauteur+" C0,670 0,333 1000,0",
			"parentNode": resultat
		});
//		App.createSVG("path", {
//			"id": "courbe",
//			"class": "courbe",
//			"d": "M 0,"+this.hauteur+" C0,500 0,250 1000,0",
//			"parentNode": resultat
//		});
//		App.createSVG("path", {
//			"id": "courbe",
//			"class": "courbe",
//			"d": "M 0,"+this.hauteur+" C0,380 0,200 1000,0",
//			"parentNode": resultat
//		});
//		1.5
		App.createSVG("path", {
			"id": "courbe",
			"class": "courbe",
			"d": "M 0,"+this.hauteur+" C0,990 0,666.667 1000,0",
			"parentNode": resultat
		});
//		1.1
		App.createSVG("path", {
			"id": "courbe",
			"class": "courbe",
			"d": "M 0,"+this.hauteur+" C0,1000 0,909.09 1000,0",
			"parentNode": resultat,
			style: "stroke:cyan"
		});


		//<rect class="zone" id="zonef" x="0" y="160" height="240" width="400"></rect>
		//<rect class="zone" id="zone0" x="0" y="0" height="400" width="240"></rect>
		//<rect id="cadre" x=".5" y=".5" height="399" width="399"></rect>
		//<path id="chemin" d="M 1,299 L 399,1" />

		return resultat;
	}
	static calcCoeff(note0, notef, max) {
		return Math.log(note0 / max) / Math.log(notef / max);
	}
	static majChemin() {
		var ponderation, coefficient, d, i, note, chemin;
		chemin = window.chemin;
		ponderation = window.ponderation;
		coefficient = parseFloat(ponderation.coefficient.value) || 1;
		d = "M ";
		for (i = 0; i <= 100; i += 1) {
			note = this.calcNote(i, coefficient, 100);
			note = this.calcNote(i, coefficient, 100);
			d += " " + (i * 4) + "," + (400 - note * 4);
		}
		chemin.setAttribute("d", d);
	}
	static validerUneDonnee(nom, defaut) {
		var ponderation, donnee;
		ponderation = window.ponderation;
		donnee = parseFloat(ponderation[nom].value);
		if (isNaN(donnee)) {
			if (ponderation[nom].val !== undefined) {
				donnee = ponderation[nom].val;
			} else {
				donnee = defaut;
			}
		}
		ponderation[nom].val = donnee;
		return donnee;
	}
	static validerDonnees() {
		var notemax0, notemaxf, notemin0, noteminf, note0, notef, coefficient;
		notemax0 = this.validerUneDonnee('notemax0', 100);
		notemaxf = this.validerUneDonnee('notemaxf', notemax0);
		notemin0 = this.validerUneDonnee('notemin0', 0);
		noteminf = this.validerUneDonnee('noteminf', notemin0);
		note0 = this.validerUneDonnee('note0', 60);
		notef = this.validerUneDonnee('notef', note0);
		coefficient = this.validerUneDonnee('coefficient', 1);
		notemax0 = this.validerUneDonnee('notemax0', 100);
		notemaxf = this.validerUneDonnee('notemaxf', notemax0);
		notemin0 = this.validerUneDonnee('notemin0', 0);
		noteminf = this.validerUneDonnee('noteminf', notemin0);
		note0 = this.validerUneDonnee('note0', 60);
		notef = this.validerUneDonnee('notef', note0);
		coefficient = this.validerUneDonnee('coefficient', 1);
	}
	static ajusterCoefficient() {
		var ponderation, notef, coefficient;
		ponderation = window.ponderation;
		this.validerDonnees();
		this.validerDonnees();
		notef = ponderation.notef.val * ponderation.notemax0.val / ponderation.notemaxf.val;
		coefficient = this.calcCoeff(ponderation.note0.val, notef, ponderation.notemax0.val);
		coefficient = this.calcCoeff(ponderation.note0.val, notef, ponderation.notemax0.val);
		ponderation.coefficient.val = coefficient;
		ponderation.coefficient.value = coefficient;
		this.majChemin();
		this.majChemin();
		return coefficient;

	}
	static ajusterNote() {
		var ponderation, notef;
		ponderation = window.ponderation;
		this.validerDonnees();
		notef = this.calcNote(ponderation.note0.val, ponderation.coefficient.val, ponderation.notemax0.val);
		this.validerDonnees();
		notef = this.calcNote(ponderation.note0.val, ponderation.coefficient.val, ponderation.notemax0.val);
		notef = notef * ponderation.notemaxf.val / ponderation.notemax0.val;
		ponderation.notef.val = notef;
		ponderation.notef.value = notef;
		this.majChemin();
		this.majChemin();
		return notef;

	}
	static calculerArrivee() {
		var ponderation, donnees, virgule, coefficient, notemax0, notemaxf, i, n, note0, notef;
		ponderation = window.ponderation;
		donnees = ponderation.depart.value;
		virgule = (donnees.indexOf(",") >= 0);
		if (virgule) {
			donnees = donnees.replace(/,/g, ".");
		}
		donnees = donnees.split(/[\r\n\s\t ]+/);
		this.validerDonnees();
		this.validerDonnees();
		coefficient = ponderation.coefficient.val;
		notemax0 = ponderation.notemax0.val;
		notemaxf = ponderation.notemaxf.val;
		for (i = 0, n = donnees.length; i < n; i += 1) {
			note0 = donnees[i];
			notef = this.calcNote(note0, coefficient, notemax0);
			notef = this.calcNote(note0, coefficient, notemax0);
			notef = notef * notemaxf / notemax0;
			donnees[i] = notef;
		}
		donnees = donnees.join("\r\n");
		if (virgule) {
			donnees = donnees.replace(/\./g, ",");
		}
		ponderation.arrivee.value = donnees;
	}
	static calcNote(note, coeff, max) {
		var ponderation, ratio;
		ponderation = window.ponderation;
		ratio = ponderation.ratio ||  1;
		max = ponderation.max ||  100;
		return Math.pow(note / max, 1 / coeff) * max;
	}
	static calcNotes(note, coeff) {
		var resultat, i;
		resultat = [];
		for (i = 0; i <= 100; i += 1) {
			resultat.push(Ponderation.calcNote(i, coeff, 100));
		}
		return resultat;
	}
	static ajouterEvt(element, evts) {
		var e;
		for (e in evts) {
			element.addEventListener(e, evts[e], true);
		}
		return this;
	}
	static ajouterEvts(evts) {
		var id, element;
		for (id in evts) {
			element = document.getElementById(id);
			this.ajouterEvt(element, evts[id]);
			this.ajouterEvt(element, evts[id]);
		}
		return this;
	}
	static setEvt() {
		var targetObj;
		targetObj = this;
		this.evt = {
			ponderation: {
				input: function (e) {
					if (e.target.name === "depart") {
						return Ponderation.calculerArrivee();
					}
					if (this.type[3].checked) {
						return Ponderation.ajusterCoefficient();
					}
					if (this.type[2].checked) {
						return Ponderation.ajusterNote();
					}
				}
			},
			chemin: {
				mouseover: function () {
					//debugger;
				}
			}
		};
	}
	static init() {
		this.NS = "http://www.w3.org/2000/svg";
		//		this.ajouterEvts(this.evt);
		//		this.majChemin();
		//		this.ajouterEvts(this.evt);
		//		this.majChemin();
	}
}
Ponderation.init();
