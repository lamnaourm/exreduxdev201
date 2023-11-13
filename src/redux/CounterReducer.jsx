const initial_state = {
    compteur : 0
}

const CounterRedcuer = (state = initial_state, action) => {
    let NewState = {...state}

    switch(action.type) {
        case 'INC' : NewState.compteur += action.payload; break;
        case 'DEC' : NewState.compteur -= action.payload; break;
        case 'INI' : NewState.compteur = action.payload; break;
    }

    return NewState;
}

export default CounterRedcuer;