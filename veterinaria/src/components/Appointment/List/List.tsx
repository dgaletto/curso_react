import * as React from "react";
import { IAppointment } from "../../../interfaces/Appointment";
import AppointmentItem from "./Item";

interface IAppointmentListProps {
  appointments: IAppointment[];
  onClick: (appointment: IAppointment) => void;
}

const AppointmentList: React.FunctionComponent<IAppointmentListProps> = ({
  appointments,
  onClick
}) => (
  <div className="card mt-2">
    <div className="card-body">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className={appointments.length === 0 ? "text-muted" : ""}>
          Citas
        </span>
        <span className="badge badge-secondary badge-pill">
          {appointments.length}
        </span>
      </h4>

      <ul className="list-group mb-3">
        {appointments.map(appointment => (
          <AppointmentItem
            appointment={appointment}
            key={appointment.id}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default AppointmentList;
