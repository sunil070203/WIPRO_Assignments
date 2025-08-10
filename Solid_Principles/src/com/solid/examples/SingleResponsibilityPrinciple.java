package com.solid.examples;
public class SingleResponsibilityPrinciple {
    private String name;
    private double salary;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public static void main(String[] args) {
        SingleResponsibilityPrinciple emp = new SingleResponsibilityPrinciple();
        emp.setName("John");
        emp.setSalary(50000);
        System.out.println("Employee Name: " + emp.getName());
        System.out.println("Employee Salary: " + emp.getSalary());

        MailSender mailSender = new MailSender();
        mailSender.sendMail("Welcome email to " + emp.getName());
    }
}

class MailSender {
    public void sendMail(String message) {
        System.out.println("Sending mail: " + message);
    }
}



