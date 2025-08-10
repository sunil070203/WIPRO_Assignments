package com.solid.examples;

interface Workable {
    void work();
}

interface Feedable {
    void eat();
}

class InterfaceSegregationPrinciple implements Workable, Feedable {
    public void work() {
        System.out.println("Working");
    }

    public void eat() {
        System.out.println("Eating");
    }

    public static void main(String[] args) {
    	InterfaceSegregationPrinciple human = new InterfaceSegregationPrinciple();
        human.work();
        human.eat();

        RobotWorker robot = new RobotWorker();
        robot.work();
    }
}

class RobotWorker implements Workable {
    public void work() {
        System.out.println("Working");
    }
}

