import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar'; // Assuming you have a Navbar component
import './UserDashboard.css';  // Custom CSS for styling

const UserDashboard = () => {
    const [userData, setUserData] = useState({});
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data after component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/user/profile'); // Make sure this route exists in your backend
                setUserData(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
                alert('Failed to fetch user data');
            }
        };

        // Fetch user's upcoming events
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/user/events'); // Assuming you have a route for fetching user events
                setEvents(response.data);
            } catch (err) {
                console.error('Error fetching events:', err);
                alert('Failed to fetch events');
            }
        };

        fetchUserData();
        fetchEvents();
    }, []);

    const handleLogout = () => {
        // Handle logout logic (clear session, etc.)
        axios.post('/user/logout').then(() => {
            navigate('/login'); // Redirect to login page after logout
        }).catch(err => {
            console.error('Logout failed:', err);
        });
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2>Welcome, {userData.name}!</h2>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>

                <div className="dashboard-content">
                    <section className="profile-section">
                        <h3>Your Profile</h3>
                        <p>Email: {userData.email}</p>
                        {/* Add more fields like name, phone number, etc. */}
                        <button className="btn btn-primary" onClick={() => navigate('/profile/edit')}>
                            Edit Profile
                        </button>
                    </section>

                    <section className="events-section">
                        <h3>Your Upcoming Events</h3>
                        {events.length > 0 ? (
                            <ul>
                                {events.map(event => (
                                    <li key={event.id}>
                                        <strong>{event.name}</strong> - {event.date}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No upcoming events.</p>
                        )}
                    </section>

                    <section className="actions-section">
                        <button className="btn btn-success" onClick={() => navigate('/addevent')}>
                            Add New Event
                        </button>
                        <button className="btn btn-info" onClick={() => navigate('/events')}>
                            View All Events
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
