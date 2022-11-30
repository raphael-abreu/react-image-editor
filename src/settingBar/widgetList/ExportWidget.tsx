import React from "react";
import { Col, Figure, Row } from "react-bootstrap";
import { Node, NodeConfig } from "konva/lib/Node";
import { Group } from "konva/lib/Group";
import exportList from "../../config/export.json";
import alignStyles from "../../style/align.module.css";
import fontStyles from "../../style/font.module.css";
import sizeStyles from "../../style/size.module.css";
import { WidgetKind } from "../Widget";
import { SettingBarProps } from "..";
import useSelection from "../../hook/useSelection";
import useI18n from "../../hook/usei18n";

export type ExportKind = {
  "data-item-type": string;
  id: string;
  icon: string;
  name: string;
  selectedItems: Node<NodeConfig>[];
  clearSelection: ReturnType<typeof useSelection>["clearSelection"];
};

type ExportWidgetProps = {
  data: WidgetKind & SettingBarProps;
};

const ExportWidget: React.FC<ExportWidgetProps> = ({ data }) => (
  <Col>
    <Row>
      {exportList.map((_data) => (
        <ExportThumbnail
          key={`export-thumbnail-${_data.id}`}
          data={{
            id: _data.id,
            icon: _data.icon,
            name: _data.name,
            "data-item-type": "export",
            selectedItems: data.selectedItems,
            clearSelection: data.clearSelection,
          }}
        />
      ))}
    </Row>
  </Col>
);

export default ExportWidget;

const ExportThumbnail: React.FC<{
  data: ExportKind;
}> = ({ data }) => {
  const { getTranslation } = useI18n();
  const downloadSelected = () => {
    return;
  };

  const downloadAll = () => {
    return; 
  };

  const onClickDownload = (exportId: string) => () => {
    if (exportId === "export-all-frame") {
      downloadAll();
      return;
    }
    downloadSelected();
  };

  return (
    <Figure
      as={Col}
      onClick={onClickDownload(data.id)}
      className={[alignStyles.absoluteCenter, alignStyles.wrapTrue].join(" ")}>
      <i className={`bi-${data.icon}`} style={{ fontSize: 20, width: 25 }} />
      <Figure.Caption
        className={[fontStyles.font075em, sizeStyles.width100, "text-center"].join(" ")}>
        {`${getTranslation("widget", "export", data.id, "name")}`}
      </Figure.Caption>
    </Figure>
  );
};
