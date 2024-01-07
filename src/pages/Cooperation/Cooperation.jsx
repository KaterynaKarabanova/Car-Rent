import AddAccessories from 'components/AddAccessories/AddAccessories';
import AddCarInfo from 'components/AddCarInfo/AddCarInfo';
import AddDescription from 'components/AddDescription/AddDescription';
import Conditions from 'components/Conditions/Conditions';
import { StyledBack } from 'pages/Catalog/Catalog.styled';
import { useForm } from 'react-hook-form';
import { StyledBtn } from './Cooperation.styled';
import ContactUs from 'components/ContactUs/ContactUs';
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
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [accessories, setAccessories] = useState([0, 1]);
  const [imagePreview, setImagePreview] = useState('');
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
      functionalities: accessoriesArray,
      rentalConditions: conditionsString,
      description: data.description,
    });
    setShowModal(true);
  };
  return (
    <StyledBack>
      <h1> {t('cooperation')}</h1>
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
      </>
      <ContactUs />
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          element={data}
        />
      )}
      <StyledBtn type="button" onClick={handleSubmit(onSubmit)}>
        {t('add')}
      </StyledBtn>
    </StyledBack>
  );
};
export default Cooperation;
