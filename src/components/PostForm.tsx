import React, {ChangeEventHandler, Component} from "react";


export default class PostForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title} = this.state
        const newPost = {
            title: title,
            id: (Math.round(Math.random() * 1000))
        }
        console.log(newPost)
        this.setState((prev: any) => ({...prev, title: ''}))
    }

    changeInputHandler = (e: any) => {
        this.setState((prev: any)=> ({...prev, ...{
                [e.target.name]: e.target.value
            }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title" >Title header</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name={"title"}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className={'btn btn-success '} type={"submit"}>Post</button>
            </form>
        )
    }
}