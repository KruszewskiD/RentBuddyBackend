class User{
    constructor(firstName, lastName, email, username, password){
        this.id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    static create(){
        // TODO: Add user to database
        // TODO: Return new User() object
    }
    static findById(){
        // TODO: Query DB to find user by passed ID Argument
    }
    update(){
        // TODO: Update user data in database
    }
    
}