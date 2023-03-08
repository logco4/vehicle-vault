import { useEffect, useState } from 'react';
import App from './App';
import {Link} from 'react-router-dom';


function ListAppointments() {
    const [appointments, setAppointments] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (e) => {
        const url = `http://localhost:8080/api/appointments/${e.target.id}`

        const fetchConfigs = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const resp = await fetch(url, fetchConfigs)
        const data = await resp.json()

        setAppointments(appointments.filter(appointment => String(appointment.id) !== e.target.id))
    }


    return (
        <>
        <h1>Service appointments</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>VIP</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>{appointment.isVip}</td>
                            <td>{appointment.appt_date}</td>
                            <td>{appointment.appt_time}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <button onClick={handleDelete} id={appointment.id} className='btn btn-danger'>Cancel</button>
                                <button className='btn btn-success'>Finished</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/appointments/new">
            <button className='btn btn-primary'>Create appointment</button>
        </Link>
        </>
    )
}

export default ListAppointments;
