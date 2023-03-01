import { rerenderEntireTree } from "../render";


let state = {
    dialogsDate:[
        { id: 1, name: 'oleg' },
        { id: 2, name: 'tolik' },
        { id: 3, name: 'vlad' },
        { id: 4, name: 'loh' },
        { id: 5, name: 'vanya' },
        { id: 6, name: 'ola' }
    ],
    messageDate: [
        { message: "hello" },
        { message: "how are you" },
        { message: "what happend" },
        { message: "goodbye" }
    ]
}

export let addMessage = (Message) => {
    let newMessage = {
        message: Message,
    };
    state.messageDate.push(newMessage);
    rerenderEntireTree(state);
};


export default state;