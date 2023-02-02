enum ModalStatus {
  Opened,
  Closed,
};

function buildModal(text: string, status: ModalStatus): { text: string, status: ModalStatus} {
  return { text, status};
}
