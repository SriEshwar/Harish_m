import java.util.*;
import java.util.ArrayList;
import java.util.List;

abstract class Employee {
    private String name;
    private double hourlyRate;

    public Employee(String name, double hourlyRate) {
        this.name = name;
        this.hourlyRate = hourlyRate;
    }

    public String getName() {
        return name;
    }

    public double getHourlyRate() {
        return hourlyRate;
    }

    public abstract double calculateMonthlySalary();
}

class FullTimeEmployee extends Employee {
    private double monthlySalary;

    public FullTimeEmployee(String name, double hourlyRate, double monthlySalary) {
        super(name, hourlyRate);
        this.monthlySalary = monthlySalary;
    }

    @Override
    public double calculateMonthlySalary() {
        return monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    private int hoursWorked;

    public PartTimeEmployee(String name, double hourlyRate, int hoursWorked) {
        super(name, hourlyRate);
        this.hoursWorked = hoursWorked;
    }

    @Override
    public double calculateMonthlySalary() {
        return getHourlyRate() * hoursWorked;
    }
}



public class Polymorphism{
    
    public static double calculateTotalMonthlySalary(List<Employee> employees) {
        double totalSalary = 0;
        for (Employee employee : employees) {
            totalSalary += employee.calculateMonthlySalary();
        }
        return totalSalary;
    }

    public static void main(String[] args) {
        FullTimeEmployee fullTimeEmployee = new FullTimeEmployee("John Doe", 25.0, 4000);
        PartTimeEmployee partTimeEmployee = new PartTimeEmployee("Jane Smith", 15.0, 80);

        List<Employee> employees = new ArrayList<>();
        employees.add(fullTimeEmployee);
        employees.add(partTimeEmployee);

        double totalMonthlySalary = calculateTotalMonthlySalary(employees);
        System.out.println("Total monthly salary of all employees: $" + totalMonthlySalary);
    }
}
