import useModal from "./useModal";

const useTool = (
  modal: ReturnType<typeof useModal>,
) => {
  const onClickHotkeyButton = () => {
    modal.openModal();
  };
  const getClickCallback = (id: string) => () => {
    console.log(id);
    switch (id) {
      case "select-all":
        return onClickHotkeyButton();
      case "flip-horizontally":
        return onClickHotkeyButton();
      case "flip-vertically":
        return onClickHotkeyButton();
      case "layer-up":
        return onClickHotkeyButton();
      case "layer-down":
        return onClickHotkeyButton();
      case "zoom-in":
        return onClickHotkeyButton();
      case "zoom-out":
        return onClickHotkeyButton();
      case "reset-zoom":
        return onClickHotkeyButton();
      case "remove-background":
        return onClickHotkeyButton();
      case "hotkey":
        return onClickHotkeyButton();
      default:
        return null;
    }
  };

  return {
    onClickHotkeyButton,
    getClickCallback,
  };

};

export default useTool;
