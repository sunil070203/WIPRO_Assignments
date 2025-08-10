package com.solid.examples;


class LiskovSubstitutionPrinciple {
    public void fly() {
        System.out.println("Flying");
    }

    public static void main(String[] args) {
    	LiskovSubstitutionPrinciple sparrow = new Sparrow();
        sparrow.fly();

        LiskovSubstitutionPrinciple ostrich = new Ostrich();
        try {
            ostrich.fly();
        } catch (UnsupportedOperationException e) {
            System.out.println(e.getMessage());
        }
    }
}

class Sparrow extends LiskovSubstitutionPrinciple {
    // Sparrow can fly
}

class Ostrich extends LiskovSubstitutionPrinciple {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Ostrich can't fly");
    }
}
