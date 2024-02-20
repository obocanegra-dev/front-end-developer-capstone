import React, {useState} from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [ocassion, setOcassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={data} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" value={guests} min="1" onChange={(e) => setGuests(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="book-ocassion">Ocassion:</label>
                            <select id="book-ocassion" value={ocassion} key={ocassion} onChange={(e) => setOcassion(e.target.value)}>
                                <option value="">Birthday</option>
                                <option value="">Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;