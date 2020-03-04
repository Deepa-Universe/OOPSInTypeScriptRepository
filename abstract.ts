export abstract class BookStore {
    public Author : string = "KRISHNA";
    public BookName : string = "BHAGWAT-GITA";
    /*public abstract BookDetails(){
        //Cannot be implemented
    }*/
    public abstract BookDetails();
};

//let store =  new BookStore(); //Cannot be instantiated