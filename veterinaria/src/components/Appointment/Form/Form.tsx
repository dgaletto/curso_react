import * as React from "react";
import { IAppointment } from "../../../interfaces/Appointment";
import AppointmentAlert from "./Alert";

export interface IAppointmentFormProps {
  handleSubmit: (appointment: IAppointment) => void;
}

export interface IAppointmentFormState {
  appointment: IAppointment;
  error: boolean;
}

const defaultState: IAppointmentFormState = {
  appointment: {
    date: "",
    owner: "",
    pet: "",
    symptom: "",
    time: ""
  },
  error: false
};

export default class AppointmentForm extends React.Component<
  IAppointmentFormProps,
  IAppointmentFormState
> {
  constructor(props: IAppointmentFormProps) {
    super(props);

    this.state = { ...defaultState };
  }

  public render() {
    return (
      <div className="card mt-2">
        <div className="card-body">
          <h3 className="card-title mb-4">Nueva cita</h3>
          {this.state.error ? (
            <AppointmentAlert text="Todos los campos son obligatorios" />
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="pet" className="col-sm-4 col-lg-2 col-form-label">
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="pet"
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la mascota"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label
                htmlFor="owner"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Nombre dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="owner"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del dueño de la mascota"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label
                htmlFor="date"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  id="date"
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
              <label
                htmlFor="time"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  id="time"
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>
            {/* form-group */}
            <div className="form-group row">
              <label
                htmlFor="symptom"
                className="col-sm-4 col-lg-2 col-form-label"
              >
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  id="symptom"
                  className="form-control"
                  placeholder="Descripción de los síntomas"
                  name="symptom"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptom}
                />
              </div>
            </div>
            {/* form-group */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="GUARDAR CITA"
            />
          </form>
        </div>
      </div>
    );
  }

  private handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [event.target.name]: event.target.value
      }
    });
  };

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.setState(
      {
        error: !this.isValidAppointment(this.state.appointment)
      },
      () => {
        if (!this.state.error) {
          this.props.handleSubmit(this.state.appointment);
          this.resetForm();
        }
      }
    );
  };

  private isValidAppointment = ({
    pet,
    owner,
    date,
    time,
    symptom
  }: IAppointment) =>
    pet !== "" && owner !== "" && date !== "" && time !== "" && symptom !== "";

  private resetForm() {
    this.setState({
      ...defaultState
    });
  }
}
