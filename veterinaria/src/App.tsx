import React from "react";
import uuid from "uuid";
import AppointmentForm from "./components/Appointment/Form/Form";
import AppointmentList from "./components/Appointment/List/List";
import Header from "./components/Header/Header";
import { IAppointment } from "./interfaces/Appointment";

export interface IAppState {
  appointments: IAppointment[];
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      appointments: []
    };

    document.body.classList.add("bg-light");
  }

  public handleSubmit = (appointment: IAppointment) => {
    appointment.id = uuid();
    this.setState(
      {
        appointments: [...this.state.appointments, appointment]
      },
      () => {
        this.updateTitle();
      }
    );
  };

  public handleClick = (appointment: IAppointment) => {
    const appointments = this.state.appointments.filter(
      appt => appt.id !== appointment.id
    );

    this.setState(
      {
        appointments
      },
      () => {
        this.updateTitle();
      }
    );
  };

  public render() {
    return (
      <div className="container">
        <Header title="Administrador de pacientes - Veterinaria" />
        <AppointmentForm handleSubmit={this.handleSubmit} />
        <AppointmentList
          appointments={this.state.appointments}
          onClick={this.handleClick}
        />
      </div>
    );
  }

  private updateTitle() {
    document.title = `Citas - #${this.state.appointments.length}`;
  }
}
