import * as React from "react";

interface IAppointmentAlertProps {
  text: string;
}

const AppointmentAlert: React.FunctionComponent<IAppointmentAlertProps> = ({
  text
}) => (
  <div className="alert alert-danger text-center mt-2 mb-5" role="alert">
    {text}
  </div>
);

export default AppointmentAlert;
