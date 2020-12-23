class Vehicule {

    constructor(color, wheelNbr, mark) {
        this.color = color;
        this.wheel = wheelNbr;
        this.mark = mark;
    }

    start() {
        console.log('starting');
    }
    stop() {
        console.log('arret');
    }
}

class Bike extends Vehicule {

    constructor(color, wheelNbr, mark, wheelSpoke, paint) {
        super(color, wheelNbr, mark);
        this.wheelSpoke = wheelSpoke;
        this.paint = paint;
    }

    monter() {
        console.log('je monte sur mon velo');
    }
}

class Car extends Vehicule {

    constructor(color, wheelNbr, mark, assurance, owner) {
        super(color, wheelNbr, mark);
        this.assurance = assurance;
        this.owner = owner;
    }

    wash() {
        console.log('carwash');
    }
}
