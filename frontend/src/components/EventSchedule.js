import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const EventSchedule = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle Buy Ticket button click and redirect to Payment page
    const handleBuyTicket = (eventName, price) => {
        // Use query parameters instead of state
        navigate(`/payment?event=${eventName}&price=${price}`);
    };

    return (
        <>
            <section className="schedule-section section-padding" id="section_4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white mb-4">Event Schedule</h2>

                            <div className="table-responsive">
                                <table className="schedule-table table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Days</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {/* Sunday Events */}
                                        <tr>
                                            <th scope="row">Sunday</th>
                                            <td className="table-background-image-wrap pop-background-image">
                                                <h3>Tahuko</h3>
                                                <p className="mb-2">5:00 - 7:00 PM</p>
                                                <p>Vasai</p>
                                                <p>Price: ₹500</p>
                                                <button className="btn btn-warning" onClick={() => handleBuyTicket('Tahuko', 500)}>
                                                    Buy Ticket
                                                </button>
                                                <div className="section-overlay"></div>
                                            </td>
                                            <td style={{ backgroundColor: '#F3DCD4' }}></td>
                                            <td className="table-background-image-wrap rock-background-image">
                                                <h3>Rock & Roll</h3>
                                                <p className="mb-2">7:00 - 11:00 PM</p>
                                                <p>By Diljit</p>
                                                <p>Price: ₹1000</p>
                                                <button className="btn btn-warning" onClick={() => handleBuyTicket('Rock & Roll', 1000)}>
                                                    Buy Ticket
                                                </button>
                                                <div className="section-overlay"></div>
                                            </td>
                                        </tr>

                                        {/* Monday Events */}
                                        <tr>
                                            <th scope="row">Monday</th>
                                            <td style={{ backgroundColor: '#ECC9C7' }}></td>
                                            <td className="Dj-background-image Dj-background-image">
                                                <h3>DJ Night</h3>
                                                <p className="mb-2">6:30 - 9:30 PM</p>
                                                <p>Dj Snake</p>
                                                <p>Price: ₹1200</p>
                                                <button className="btn btn-warning" onClick={() => handleBuyTicket('DJ Night', 1200)}>
                                                    Buy Ticket
                                                </button>
                                            </td>
                                            <td style={{ backgroundColor: '#D9E3DA' }}></td>
                                        </tr>

                                        {/* Tuesday Events */}
                                        <tr>
                                            <th scope="row">Tuesday</th>
                                            <td className="table-background-image-wrap country-background-image">
                                                <h3>Hackathon</h3>
                                                <p className="mb-2">4:30 - 7:30 PM</p>
                                                <p>by UCOE</p>
                                                <p>Price: ₹800</p>
                                                <button className="btn btn-warning" onClick={() => handleBuyTicket('Hackathon', 800)}>
                                                    Buy Ticket
                                                </button>
                                                <div className="section-overlay"></div>
                                            </td>
                                            <td style={{ backgroundColor: '#D1CFC0' }}></td>
                                            <td className="table-background-image-wrap sports-background-image">
                                                <h3>Sports</h3>
                                                <p className="mb-2">6:00 - 10:00 PM</p>
                                                <p>By Members</p>
                                                <p>Price: ₹300</p>
                                                <button className="btn btn-warning" onClick={() => handleBuyTicket('Sports', 300)}>
                                                    Buy Ticket
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventSchedule;



// import React from 'react'

// const EventSchedule = () => {
//     return (
//         <>
//             <section class="schedule-section section-padding" id="section_4">
//                 <div class="container">
//                     <div class="row">

//                         <div class="col-12 text-center">
//                             <h2 class="text-white mb-4">Event Schedule</h2>

//                             <div class="table-responsive">
//                                 <table class="schedule-table table table-dark">
//                                     <thead>
//                                         <tr>
//                                             <th scope="col">Days</th>

//                                             <th scope="col"></th>

//                                             <th scope="col"></th>

//                                             <th scope="col"></th>

//                                         </tr>
//                                     </thead>

//                                     <tbody>
//                                         <tr>
//                                             <th scope="row">Sunday</th>

//                                             <td class="table-background-image-wrap pop-background-image">
//                                                 <h3>Tahuko</h3>

//                                                 <p class="mb-2">5:00 - 7:00 PM</p>

//                                                 <p>Vasai</p>

//                                                 <div class="section-overlay"></div>
//                                             </td>

//                                             <td  style={{backgroundColor:'#F3DCD4'}}></td>

//                                             <td class="table-background-image-wrap rock-background-image">
//                                                 <h3>Rock & Roll</h3>

//                                                 <p class="mb-2">7:00 - 11:00 PM</p>

//                                                 <p>By Diljit</p>

//                                                 <div class="section-overlay"></div>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <th scope="row">Monday</th>

//                                             <td style={{backgroundColor:'#ECC9C7'}}></td>

//                                             <td class="Dj-background-image Dj-background-image">
//                                                 <h3>DJ Night</h3>

//                                                 <p class="mb-2">6:30 - 9:30 PM</p>

//                                                 <p>Dj Snake</p>
//                                             </td>

//                                             <td  style={{backgroundColor:'#D9E3DA'}}></td>
//                                         </tr>

//                                         <tr>
//                                             <th scope="row">Tuesday</th>

//                                             <td class="table-background-image-wrap country-background-image">
//                                                 <h3>Hackathon</h3>

//                                                 <p class="mb-2">4:30 - 7:30 PM</p>

//                                                 <p> by UCOE</p>

//                                                 <div class="section-overlay"></div>
//                                             </td>

//                                             <td style={{backgroundColor:'#D1CFC0'}}></td>

//                                             <td className="table-background-image-wrap sports-background-image">
//                                                 <h3>Sports</h3>

//                                                 <p class="mb-2">6:00 - 10:00 PM</p>

//                                                 <p>By Members</p>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default EventSchedule