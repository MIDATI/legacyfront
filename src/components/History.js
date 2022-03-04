import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

function History(props) {
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const renderTasks = (tasksList, type) => {
    if (type === "deleted") {
      return tasksList
        .filter((task) => {
          return task.deleted === true;
        })
        .map((task) => {
          return <li>{task.title}</li>;
        });
    } else if (type === "completed") {
      return tasksList
        .filter((task) => {
          return task.completed === true;
        })
        .map((task) => {
          return (
            <li style={{ textDecoration: "line-through" }}>{task.title}</li>
          );
        });
    }
  };

  return (
    <Modal
      onClose={() => handleModal()}
      onOpen={() => handleModal()}
      open={open}
      size={"tiny"}
      trigger={<Button id="buttomHistory">{props.title}</Button>}
    >
      <Modal.Header>
        <Header textAlign="center">{props.title}</Header>
      </Modal.Header>

      <Modal.Description>
        <h3>TAREAS REALIZADAS</h3>
        <ul>{renderTasks(props.taskList, "completed")}</ul>
        <h3>TAREAS ELIMINADAS</h3>
        <ul>{renderTasks(props.taskList, "deleted")}</ul>
      </Modal.Description>

      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default History;
