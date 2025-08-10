package com.solid.examples;
interface Keyboard {
    void type();
}

class MechanicalKeyboard implements Keyboard {
    public void type() {
        System.out.println("Typing on mechanical keyboard");
    }
}

class DependencyInversionPrinciple {
    private Keyboard keyboard;

    public DependencyInversionPrinciple(Keyboard keyboard) {
        this.keyboard = keyboard;
    }

    public void input() {
        keyboard.type();
    }

    public static void main(String[] args) {
        Keyboard keyboard = new MechanicalKeyboard();
        DependencyInversionPrinciple computer = new DependencyInversionPrinciple(keyboard);
        computer.input();
    }
}
