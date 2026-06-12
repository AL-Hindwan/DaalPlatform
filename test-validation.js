const oldAvailSlots = [
    { day: "SUNDAY", startTime: "08:00", endTime: "16:00" },
    { day: "MONDAY", startTime: "08:00", endTime: "16:00" },
    { day: "TUESDAY", startTime: "08:00", endTime: "16:00" }
];
const newAvailSlots = [
    { day: "SUNDAY", startTime: "08:00", endTime: "16:00", isUsed: true },
    { day: "MONDAY", startTime: "08:00", endTime: "16:00", isUsed: true },
    { day: "TUESDAY", startTime: "08:00", endTime: "16:00", isUsed: true }
];

let isReduction = false;
for (const oldSlot of oldAvailSlots) {
    const oldStartMin = parseInt(oldSlot.startTime.split(':')[0]) * 60 + parseInt(oldSlot.startTime.split(':')[1]);
    const oldEndMin = parseInt(oldSlot.endTime.split(':')[0]) * 60 + parseInt(oldSlot.endTime.split(':')[1]);
    let covered = false;
    for (const newSlot of newAvailSlots) {
        if (newSlot.day !== oldSlot.day) continue;
        const newStartMin = parseInt(newSlot.startTime.split(':')[0]) * 60 + parseInt(newSlot.startTime.split(':')[1]);
        const newEndMin = parseInt(newSlot.endTime.split(':')[0]) * 60 + parseInt(newSlot.endTime.split(':')[1]);
        if (newStartMin <= oldStartMin && newEndMin >= oldEndMin) {
            covered = true;
            break;
        }
    }
    if (!covered) {
        isReduction = true;
        console.log("Not covered:", oldSlot);
        break;
    }
}
console.log("isReduction:", isReduction);
