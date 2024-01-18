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
import Reviews from 'components/Reviews/Reviews';

const Cooperation = () => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    setValue,
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
  };
  return (
    <StyledBack>
      <StyledTitle> {t('wantToRent')} </StyledTitle>
      <StyledUnderTitle> {t('yourCar')}</StyledUnderTitle>
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
            errors={errors}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
          <AddAccessories
            control={control}
            errors={errors}
            accessories={accessories}
            setAccessories={setAccessories}
          />
          <AddDescription register={register} errors={errors} />
          <Conditions register={register} />

          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              element={data}
            >
              <div>
                <h3>{t('checkInfo')}</h3>
                <h5>
                  {t('name')}: <StyledSpan>{data.userName}</StyledSpan>
                </h5>
                <h5>
                  {t('surname')}: <StyledSpan>{data.userSurname}</StyledSpan>
                </h5>
                <h5>
                  {t('phone')}: <StyledSpan>{data.phone}</StyledSpan>
                </h5>
                <p>{t('checkAgain')}</p>
                <StyledBtn onClick={onModalClose}>{t('sendData')}</StyledBtn>
              </div>
            </Modal>
          )}
          <StyledBtn type="button" onClick={handleSubmit(onSubmit)}>
            {t('add')}
          </StyledBtn>
        </>
      )}
      <Reviews />
    </StyledBack>
  );
};
export default Cooperation;
