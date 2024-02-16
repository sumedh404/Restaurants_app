import ErrorHandler from "../error/error.js";
import { Reservation } from '../models/reservationSchema.js';

const send_Reservations = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;

    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        // Create a new reservation object using Reservation model
        const newReservation = await Reservation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            time: time,
            date: date
        });

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
            reservation: newReservation // Optionally, you can send back the created reservation
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);

            return next(new ErrorHandler(validationErrors.join(', '), 400));
        }
        return next(error);
    }
}

export default send_Reservations;
