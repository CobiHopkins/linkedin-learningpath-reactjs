import './App.css';
import appointmentList from './data.json';
import Search from './components/Search/Search';
import AddAppointment from './components/AddAppointment/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo/AppointmentInfo';

import { BiCalendar } from'react-icons/bi';

function App() {

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/> Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map(appointment => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );

}

export default App;