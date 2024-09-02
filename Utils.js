const toLocalISOString = date => {
    const pad = (n) => (n < 10 ? '0' + n : n);
    return date.getFullYear() + '-' +
        pad(date.getMonth() + 1) + '-' +
        pad(date.getDate()) + 'T' +
        pad(date.getHours()) + ':' +
        pad(date.getMinutes()) + ':' +
        pad(date.getSeconds());
};

function cleanId(id) {
    var cleanedId = 0;
    if (id) {
        cleanedId = id.replace(/[{}]/g, "");
    } else {
        console.log(`Given ID(${id}) is not valid.`);
    }
    return cleanedId;
}

function validateDuration(timeWithAnyPunctuationMark) {
    const time = timeWithAnyPunctuationMark.replace(/[,;:]/g, '.');
    var regex = /^\d+([:.,][0-5][0-9])?$/;
    return regex.test(time);
}

function validateTime(time) {
    var regex = /^([0-1]?[0-9]|2[0-3])(:|\.|)([0-5][0-9])?$/;
    return regex.test(time);
}

function formatTime(unformattedTime) {
    if (unformattedTime) {
        if (validateTime(unformattedTime)) {

            let time = unformattedTime.replace(/\./g, ":");

            const hh_mm = /^\d{2}:\d{2}$/; // Formato HH:mm
            const h_mm = /^\d{1}:\d{2}$/;  // Formato H:mm
            const hh = /^\d{2}$/;          // Formato HH
            const h = /^\d{1}$/;           // Formato H

            if (hh_mm.test(time)) {
                return time;
            }

            else if (h_mm.test(time)) {
                return "0" + time;
            }

            else if (hh.test(time)) {
                return time + ":00";
            }

            else if (h.test(time)) {
                return "0" + time + ":00";

            } else throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");

        } else throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");

    } else throw new Error("Time string not found.");
}

const timeStringToMinutes = timeString => {
    if (timeString) {
        const formattedTimeString = formatTime(timeString);
        const hhmm = formattedTimeString.split(":");
        const hours = parseInt(hhmm[0], 10);
        const minutes = hhmm[1] ? parseInt(hhmm[1], 10) : 0;

        return (hours * 60) + minutes;
    } else throw new Error("Time string not found.");
}

const minutesToTimeString = totalMinutes => {
    if (totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}`;
    }
    else if (totalMinutes === 0) {
        return '00:00';
    }
    else throw new Error("Time not found.")
}

function getTimeValue(context, field) {
    const timeString = context.getAttribute(field).getValue();
    if (timeString != null) {
        if (validateTime(timeString)) {
            return parseFloat(timeString);
        } else {
            throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");
        }
    } else {
        throw new Error("Missing value");
    }
};

function clearFields(context, fieldsToClear) {
    fieldsToClear.forEach(fieldToClear => {
        let attr = context.getAttribute(fieldToClear);
        if (attr && attr.getValue() !== null) {
            attr.setValue(null);
        }
    });
}

function checkFieldsHaveValue(context, fieldsToCheck) {
    fieldsToCheck.forEach(fieldToCheck => {
        let attribute = context.getAttribute(fieldToCheck);
        if (attribute && attribute.getValue() !== null) {
            return true;
        }
        return false;
    });
}