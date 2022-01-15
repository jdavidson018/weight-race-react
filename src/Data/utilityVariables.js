// Local
// export const host = 'http://localhost:5241';
// Production
export const host = 'https://www.weightraceapi.com';

export const getDayOfWeekString = (date) => {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = date.getDay();

    return days[day];
}

// if a loading variable evaluates to one of these states, that variable is either unavailable or still loading
export const stillLoadingStates = ['unloaded', 'pending'];

export const random_rgba = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}