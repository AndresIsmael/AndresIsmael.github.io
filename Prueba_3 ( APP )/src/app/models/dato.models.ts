
export class DatoModel{
    
    userId: string;
    id: string;
    title: string;
    body: string;

    constructor(){
        this.title = 'title';
        this.body = 'body';
        this.userId = '0';
        this.id = '0';
    }

}

export class CommentModel{
    
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;

    constructor(){
        this.postId = '0';
        this.id = '0';
        this.name = 'name';
        this.email = 'email';
        this.body = 'body';
    }

}