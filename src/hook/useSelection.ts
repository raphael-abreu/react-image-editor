import { Node, NodeConfig } from "konva/lib/Node";
import { useState } from "react";
import { ITEMS_CONTEXT } from "./useItem";

const useSelection = () => {
  const [selectedItems, setSelectedItems] = useState<ITEMS_CONTEXT["selectedItems"]>(
    [] as ITEMS_CONTEXT["selectedItems"],
  );

  const onSelectItem = (itemList?: Node<NodeConfig>[]) => {
    
    if (itemList) {
      // const newNodeList = itemList.filter(
      //   (item, _, array) =>
      //     item.attrs["data-item-type"] === "frame" ||
      //     item.getParent().attrs["name"] !== "label-group"
      // );
      // console.log("item list", newNodeList);
      setSelectedItems(itemList);
      return;
    }
  

  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  return {
    selectedItems,
    setSelectedItems,
    onSelectItem,
    clearSelection,
  };
};

export default useSelection;
