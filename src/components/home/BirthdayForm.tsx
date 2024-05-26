import { useState } from "react";
import { monthData } from "../../data/CalendarData";


const BirthdayForm = () => {

    const [selectedMonth, setSelectedMonth] = useState('01');


    const createDayOptions = (days: number) => {
        let options = [];
        for (let day = 1;day <= days;day++) {
            options.push(<option value={day}>{day}</option>);
        }
        return options;
    }
    
    const onSelectedMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    }
    
    const mapValueToMonthObj = (name: string) => {
        return monthData.filter((month) => month.value === name);
    }

    return (
        <>
            <form>
                <label>
                    Month:
                    <select name="selectedMonth" value={selectedMonth} onChange={onSelectedMonth}>
                        {monthData.map((month) => <option value={month.value}>{month.key}</option>)}
                    </select>
                </label>
                <label>
                    Day:
                    <select name="selectedDay">
                        {createDayOptions(mapValueToMonthObj(selectedMonth)[0].days)}
                    </select>
                </label>
            </form>
        </>
    );
}

export { BirthdayForm };