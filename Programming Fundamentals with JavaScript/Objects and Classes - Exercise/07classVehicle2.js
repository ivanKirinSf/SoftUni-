class Vehicle{

    constructor (vehicleType, vehicleModel, parts, vehicleFuel){

        this.type = vehicleType;
        
        this.model = vehicleModel;

        this.parts = parts;

        this.fuel = vehicleFuel;

        this.parts.quality = parts.engine*parts.power;       

    }

    drive(loss){
        this.fuel = this.fuel - loss;
    }

}
