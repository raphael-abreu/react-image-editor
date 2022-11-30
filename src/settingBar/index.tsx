import React from "react";
import { Accordion } from "react-bootstrap";
import { Node, NodeConfig } from "konva/lib/Node";
import Widget, { WidgetKind } from "./Widget";
import widgetList from "../config/widget.json";
import ColorPaletteWidget from "./widgetList/ColorPaletteWidget";
import ExportWidget from "./widgetList/ExportWidget";

export type SettingBarProps = {
  selectedItems: Node<NodeConfig>[];
};

const Widgets = {
  colorPalette: (data: WidgetKind & SettingBarProps) => <ColorPaletteWidget data={data} />,
  export: (data: WidgetKind & SettingBarProps) => <ExportWidget data={data} />,
};

export type WidgetIDList = keyof typeof Widgets;

const SettingBar: React.FC<SettingBarProps> = (settingProps) => (
  <aside>
    <Accordion>
      {(widgetList as WidgetKind[]).map((data) => (
        <Widget key={`widget-${data.id}`} data={{ ...data, ...settingProps }}>
          {Widgets[data.id] && Widgets[data.id]({ ...data, ...settingProps })}
        </Widget>
      ))}
    </Accordion>
  </aside>
);

export default SettingBar;
