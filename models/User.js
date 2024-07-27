class User{
    constructor(userId,firstName, lastName, email, username, password, role="user"){
        this.userId=userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
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