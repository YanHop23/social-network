let rerenderEntireTree = () => {
    console.log('lol');
};
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
            
    ]
}

export let addMessage = (Message) => {
    let newMessage = {
        message: Message,
    };
    state.messageDate.push(newMessage);
    rerenderEntireTree(state)
};

export const subscribe = (observe) => {
    rerenderEntireTree = observe;
}


export default state;