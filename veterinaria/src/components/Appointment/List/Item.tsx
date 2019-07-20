import * as React from "react";
import { IAppointment } from "../../../interfaces/Appointment";

interface IAppointmentItemProps {
  appointment: IAppointment;
  onClick: (appointment: IAppointment) => void;
}

const AppointmentItem: React.FunctionComponent<IAppointmentItemProps> = ({
  appointment,
  onClick
}) => {
  const handleClick = () => onClick(appointment);
  const [year, month, day] = appointment.date.split("-");

  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">
          {appointment.pet} de {appointment.owner}
        </h6>
        <small className="text-muted">{appointment.symptom}</small>
      </div>
      <div>
        <span className="d-block text-info">
          {day}/{month}/{year} - {appointment.time}
        </span>
        <button className="btn btn-link p-0 text-danger" onClick={handleClick}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default AppointmentItem;
