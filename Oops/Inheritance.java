// Account.java - Base class
import java.util.*;
class Account {
    private String accountNumber;
    private double balance;

    public Account(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited $" + amount + " into account " + accountNumber);
        } else {
            System.out.println("Invalid amount for deposit.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn $" + amount + " from account " + accountNumber);
        } else {
            System.out.println("Insufficient balance or invalid amount for withdrawal.");
        }
    }
}

// SavingsAccount.java - Subclass
class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(String accountNumber, double interestRate) {
        super(accountNumber);
        this.interestRate = interestRate;
    }

    public void addInterest() {
        double interest = getBalance() * interestRate / 100;
        deposit(interest);
        System.out.println("Interest added to account " + getAccountNumber() + ": $" + interest);
    }
}

// CheckingAccount.java - Subclass
class CheckingAccount extends Account {
    private double overdraftLimit;

    public CheckingAccount(String accountNumber, double overdraftLimit) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= getBalance() + overdraftLimit) {
            super.withdraw(amount);
        } else {
            System.out.println("Withdrawal amount exceeds overdraft limit.");
        }
    }
}

// Main.java - Test the Implementation
public class Inheritance{
    public static void main(String[] args) {
        // Creating a savings account
        SavingsAccount savings = new SavingsAccount("SA001", 2.5);
        savings.deposit(1000);
        savings.addInterest();
        savings.withdraw(2000); // Should fail due to insufficient balance

        // Creating a checking account
        CheckingAccount checking = new CheckingAccount("CA001", 500);
        checking.deposit(1000);
        checking.withdraw(1500); // Should succeed due to overdraft limit
    }
}
