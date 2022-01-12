// Local
// export const host = 'http://localhost:5241';
// Production
export const host = 'https://www.weightraceapi.com';

export const getDayOfWeekString = (date) => {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = date.getDay();

    return days[day];
}