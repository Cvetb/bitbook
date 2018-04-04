class User {
    constructor(user){
        this.name = user.name;
        this.surname=user.surname;
        this.username = user.username;
        this.sessionId=user.sessionId;
        this.email = user.email;
        this.about = user.about;
        this.id = user.id;
        this.userId =user.userId;
        this.aboutShort = user.aboutShort;
        this.avatarUrl = user.avatarUrl;
        this.postsCount = user.postsCount;
        this.commentsCount = user.commentsCount;
        
    }
}

export default User;