import { HeaderMenuButton, PasswordInput } from "@carbon/react";
import Moment from "moment";
import React from "react";

import { Modal, Select, SelectItem } from "@carbon/react";

const ReportModal = (props) => {
  const incident = props.incident;
  const formattedDate = Moment(incident.case_date, "MM/DD/YYYY").format(
    "YYYY-MM-DD"
  );

  return (
    <Modal
      open={props.modalIsOpen}
      modalHeading="Edit this incident."
      modalLabel="Incident resources"
      primaryButtonText="Update"
      secondaryButtonText="Cancel"
      onSecondarySubmit={props.modalCancelHandler}
      onRequestClose={props.modalCancelHandler}
    >
      <p style={{ marginBottom: "1rem" }}>
        Remember only certain portions of the incident may be updated.
      </p>
      <PasswordInput
        id="number"
        labelText="Number"
        value={incident.number}
        disabled="true"
      />
      <HeaderMenuButton ariaLabel="Open menu" active={"isSideNavExpanded"} />
      <PasswordInput
        id="location"
        labelText="Location"
        value={incident.location}
        disabled="true"
      />
      <PasswordInput
        id={'case_date'}
        value={formattedDate}
        labelText="Case Date"
        type="date"
        disabled="true"
      />
      <Select
        id="incident_type"
        defaultValue={incident.incident_type}
        labelText="Incident Type"
      >
        <SelectItem value="Negligence" text="Negligence" />
        <SelectItem value="Harrassment" text="Harrassment" />
        <SelectItem value="Brutality" text="Brutality" />
      </Select>
      <Select
        id="case_officer"
        defaultValue={incident.case_officer}
        labelText="Case Officer"
      >
        <SelectItem value="Harry" text="Harry" />
        <SelectItem value="Rick" text="Rick" />
        <SelectItem value="Simon" text="Simon" />
        <SelectItem value="Bobby" text="Bobby" />
        <SelectItem value="William" text="William" />
        <SelectItem value="David" text="David" />
      </Select>
    </Modal>
  );
};

export default ReportModal;
