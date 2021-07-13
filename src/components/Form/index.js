import React from "react";
import Modal from "react-modal";

//components
import Form from "./Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ userId }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    return;
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {userId === undefined ? (
        <button
          onClick={openModal}
          className="flex items-center justify-center w-full px-2 py-3 mt-8 font-bold text-black bg-white rounded-lg shadow outline-none dark:text-gray-200 hover:text-blue-600 dark:bg-green-500"
        >
          <span>Add User</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={openModal}
          className="w-4 mr-2 transform outline-none  hover:text-purple-500 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form close={closeModal} userId={userId} />
      </Modal>
    </div>
  );
};

export default ModalComponent;
