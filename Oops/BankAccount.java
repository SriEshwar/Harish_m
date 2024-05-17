import java.util.*;
public class BankAccount {
   
    private String accountNumber;
    private double balance;
    private String ownerName;

  
    public BankAccount(String accountNumber, double balance, String ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }

   
    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public String getOwnerName() {
        return ownerName;
    }

   
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("$" + amount + " deposited successfully.");
        } else {
            System.out.println("Invalid amount for deposit.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("$" + amount + " withdrawn successfully.");
        } else {
            System.out.println("Insufficient balance or invalid amount for withdrawal.");
        }
    }

    public static void main(String[] args) {

        BankAccount account = new BankAccount("123456789", 1000.0, "John Doe");

       
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Owner Name: " + account.getOwnerName());
        System.out.println("Balance: $" + account.getBalance());

       
        account.deposit(500);
        account.withdraw(200);

       
        System.out.println("Updated Balance: $" + account.getBalance());
    }
}
