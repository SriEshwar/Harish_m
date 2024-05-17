
import java.util.*;
abstract class Vehicle {
    private String name;
    private int year;

    public Vehicle(String name, int year) {
        this.name = name;
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public int getYear() {
        return year;
    }

    public abstract void startEngine();

    
    public void displayInfo() {
        System.out.println("Vehicle Name: " + name);
        System.out.println("Year: " + year);
    }
}


interface FuelEfficiency {
    void fuelConsumption();
}


class Car extends Vehicle implements FuelEfficiency {
    public Car(String name, int year) {
        super(name, year);
    }

    @Override
    public void startEngine() {
        System.out.println("The car engine is starting with a key ignition.");
    }

    @Override
    public void fuelConsumption() {
        System.out.println("The car has a fuel efficiency of 25 miles per gallon.");
    }
}


class Motorcycle extends Vehicle implements FuelEfficiency {
    public Motorcycle(String name, int year) {
        super(name, year);
    }

    @Override
    public void startEngine() {
        System.out.println("The motorcycle engine is starting with a kick start.");
    }

    @Override
    public void fuelConsumption() {
        System.out.println("The motorcycle has a fuel efficiency of 60 miles per gallon.");
    }
}


public class Abstraction {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota Camry", 2020);
        car.displayInfo();
        car.startEngine();
        ((FuelEfficiency) car).fuelConsumption();

        System.out.println();

        Vehicle motorcycle = new Motorcycle("Harley Davidson", 2018);
        motorcycle.displayInfo();
        motorcycle.startEngine();
        ((FuelEfficiency) motorcycle).fuelConsumption();
    }
}
