import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../../components";
import { AppDispatch, RootState } from "../../../../../redux/ReduxStore";
import RegisterLibraryCardForm from "../../Forms/RegisterLibraryCardForm/RegisterLibraryCardForm";
import { setDisplayLibraryCard } from "../../../../../redux/slices/ModalSlice";

export const LibraryCardModal: React.FC = () => {
    const userState = useSelector((state:RootState)=> state.authentication);

    console.log(userState)
  const dispatch: AppDispatch = useDispatch();
  const closeModal = () => {
    dispatch(setDisplayLibraryCard(false));
  };
  return (
    <Modal content={<RegisterLibraryCardForm />} toggleModal={closeModal} />
  );
};
