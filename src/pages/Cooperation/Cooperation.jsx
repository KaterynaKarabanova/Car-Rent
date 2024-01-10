import AddAccessories from 'components/AddAccessories/AddAccessories';
import AddCarInfo from 'components/AddCarInfo/AddCarInfo';
import AddDescription from 'components/AddDescription/AddDescription';
import Conditions from 'components/Conditions/Conditions';
import { StyledBack, StyledSpan } from 'pages/Catalog/Catalog.styled';
import { useForm } from 'react-hook-form';
import {
  StyledBtn,
  StyledText,
  StyledTitle,
  StyledUnderTitle,
} from './Cooperation.styled';

import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { useTranslation } from 'react-i18next';

const Cooperation = () => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [accessories, setAccessories] = useState([0, 1]);
  const [imagePreview, setImagePreview] = useState('');
  const onModalClose = () => {
    setShowModal(!showModal);
    alert(
      'Your request has been sent successfully and will be processed by a manager'
    );
  };
  const onSubmit = data => {
    console.log(data);
    const accessoriesArray = accessories.map(
      (el, index) => data[`accessories${index}`].value
    );
    const conditionsArray = [];
    if (data.driverLicense) {
      conditionsArray.push("Valid driver's license");
    }
    if (data.securityDeposit) {
      conditionsArray.push('Security deposit required');
    }
    conditionsArray.push(`Minimum age: ${data.minAge}`);
    const conditionsString = conditionsArray.join('\n');
    setData({
      img: imagePreview,
      make: data.make,
      model: data.model,
      year: data.year.value,
      address: `456 Example Avenue, ${data.address.value}, Ukraine`,
      type: data.type.value,
      fuelConsumption: data.fuelConsumption,
      engineSize: data.engineSize,
      accessories: accessoriesArray,
      functionalities: [],
      rentalConditions: conditionsString,
      description: data.description,
      userName: data.userName,
      userSurname: data.userSurname,
      phone: data.phone,
    });
    setShowModal(true);
    reset();
  };
  return (
    <StyledBack>
      <StyledTitle>Want to rent </StyledTitle>
      <StyledUnderTitle>your car with us?</StyledUnderTitle>
      <StyledText>
        {t('cooperationText')}
        <a href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
          {' '}
          {t('rentConditions')}{' '}
        </a>
        {t('and')}
        <a href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
          {t('rentContract')}
        </a>
        . {t('cooperateText')}
      </StyledText>
      <StyledBtn onClick={() => setShowForm(!showForm)}>
        {t('fillForm')}
      </StyledBtn>
      {showForm && (
        <>
          <AddCarInfo
            register={register}
            control={control}
            setValue={setValue}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
          <AddAccessories
            register={register}
            control={control}
            setValue={setValue}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            accessories={accessories}
            setAccessories={setAccessories}
          />
          <AddDescription
            register={register}
            control={control}
            setValue={setValue}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
          <Conditions
            register={register}
            control={control}
            setValue={setValue}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />

          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              element={data}
            >
              <div>
                <h3>Check personal information</h3>
                <h5>
                  Name: <StyledSpan>{data.userName}</StyledSpan>
                </h5>
                <h5>
                  Surname: <StyledSpan>{data.userSurname}</StyledSpan>
                </h5>
                <h5>
                  Phone: <StyledSpan>{data.phone}</StyledSpan>
                </h5>
                <p>
                  Please check again your personal and car information. If
                  everything is correct - send data. Our manager will call you
                  in three days after receiving your appointment to discuss
                  further cooperation
                </p>
                <StyledBtn onClick={onModalClose}>Send Data</StyledBtn>
              </div>
            </Modal>
          )}
          <StyledBtn type="button" onClick={handleSubmit(onSubmit)}>
            {t('add')}
          </StyledBtn>
        </>
      )}
    </StyledBack>
  );
};
export default Cooperation;
