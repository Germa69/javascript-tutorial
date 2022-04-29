// Nơi nhận actions 

const init = {
    cars: ['BWM']
}

export default function reducer(state = init, action, args) {
    console.log(action, args);
    // Lần đầu tiên thằng reducer nó chạy không có đối số gì nên nó return lại thằng init
    switch (action) {
        case 'ADD':
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }            
        default: 
            return state
    }
}