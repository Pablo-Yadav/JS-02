const clockUpdate = () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const format1 = `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
    const format2 = `${padding(fomart12hrs(hours))}:${padding(minutes)}:${padding(seconds)} ${setAMPM(hours)}`;

    console.log(`Time Format 1 : ${format1} || Time Format 2 : ${format2}`);
}

const padding = (num) => {
    return String(num).padStart(2,'0');
}

const fomart12hrs = (hrs) => {
    return hrs % 12;
}

const setAMPM = (hrs) => {
    return hrs < 12 ? 'AM' : 'PM';
}

clockUpdate();

setInterval(clockUpdate,1000);