import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Header from "./header";
import Layout from "./layout";
import SettingBar from "./settingBar";
import workModeList from "./config/workMode.json";
import NavBar from "./navBar";
import useTool from "./hook/useTool";
import NavBarButton from "./navBar/NavBarButton";
import useSelection from "./hook/useSelection";
import useModal from "./hook/useModal";
import Pano from "./components/Pano";

import useI18n from "./hook/usei18n";

export type FileKind = {
  "file-id": string;
  title: string;
  data: Record<string, any>[];
};

export type FileData = Record<string, FileKind>;

function App() {

  const { selectedItems }
    = useSelection();
  const modal = useModal();


  const { getClickCallback } = useTool(
    modal,
  );

  const header = (
    <Header>

    </Header>
  );

  const navBar = (
    <NavBar>
      {workModeList.map((data) => (
        <NavBarButton
          key={`navbar-${data.id}`}
          data={data}
          onClick={getClickCallback(data.id)}
        />
      ))}
    </NavBar>
  );

  const hotkeyModal = (
    <Modal show={modal.displayModal} onHide={modal.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Keyboard Shortcut</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Col>
          <h6>test</h6>
          <Row className="justify-content-end" xs={4}>
            <React.Fragment >
              <Col xs="auto" className="align-items-center">
                <Button disabled>1</Button>
              </Col>
            </React.Fragment>
          </Row>
        </Col>
        
      </Modal.Body>
    </Modal>
  );

  const settingBar = (
    <SettingBar
      selectedItems={selectedItems}
    />
  );


  const teste = <div>Teste</div>;

  return (
    <Layout header={header} navBar={navBar} settingBar={settingBar}>
      {teste}
      <Pano />
      {hotkeyModal}
    </Layout>
  );
}

export default App;
