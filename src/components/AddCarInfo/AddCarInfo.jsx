import { useTranslation } from 'react-i18next';
import { StyledInput } from '../../pages/Cooperation/Cooperation.styled';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { getPlaceOptions, typeOptions, yearOptions } from './options';
import { Styles } from 'pages/Catalog/Catalog.styled';
import {
  StyledFileDiv,
  StyledFileInput,
  StyledFileLabel,
  StyledFileTextAdd,
  StyledFileTextPlus,
} from './AddCarInfo.styled';
import { useState } from 'react';

const AddCarInfo = ({
  register,
  control,
  handleSubmit,
  setValue,
  errors,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const [imagePreview, setImagePreview] = useState('');
  const handleFileChange = e => {
    const file = e.target.files[0];
    setValue('photo', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form>
      <StyledFileLabel style={{ backgroundImage: `url(${imagePreview})` }}>
        <StyledFileInput
          type="file"
          accept=".png, .jpeg, .jpg"
          {...register('photo')}
          onChange={handleFileChange}
        />
        {!imagePreview && (
          <StyledFileDiv>
            <StyledFileTextPlus>+</StyledFileTextPlus>
            <StyledFileTextAdd>Add image</StyledFileTextAdd>
          </StyledFileDiv>
        )}
      </StyledFileLabel>
      <div>
        <h3>Personal information</h3>
        <label>
          Name
          <StyledInput
            type="text"
            name="userName"
            minLength={2}
            {...register('userName', {
              required: true,
              minLength: {
                value: 2,
                message: 'name must contain at least 2 characters',
              },
            })}
          />
          {errors.userName && <p>Name is required</p>}
        </label>
        <label>
          Surname
          <StyledInput
            type="text"
            name="userSurname"
            {...register('userSurname', {
              required: true,
              minLength: {
                value: 2,
                message: 'surname must contain at least 2 characters',
              },
            })}
          />
          {errors.userSurname && <p>Surame is required</p>}
        </label>
        <label>
          Phone
          <StyledInput
            type="number"
            name="phone"
            {...register('phone', {
              required: true,
              minLength: {
                value: 10,
                message: 'email must contain at least 5 characters',
              },
              pattern: {
                value:
                  /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                message: 'Invalid characters or missing  @ or . ',
              },
            })}
          />
          {errors.phone && <p>Phone is required</p>}
        </label>
        <label>
          City
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select styles={Styles} {...field} options={getPlaceOptions(t)} />
            )}
            rules={{ required: 'City is required' }}
          />
        </label>
        <h3>Car information</h3>
        <label>
          Name of Car
          <StyledInput
            type="text"
            name="carName"
            {...register('carName', { required: true })}
          />
          {errors.carName && <p>Car Name is required</p>}
        </label>
        <label>
          Year
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Select styles={Styles} {...field} options={yearOptions} />
            )}
            rules={{ required: 'Car year is required' }}
          />
          {/* <StyledInput
            type="text"
            name="year"
            {...register('year', { required: true })}
          />
          {errors.year && <p>Car year is required</p>} */}
        </label>
        <label>
          Type of Car
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select styles={Styles} {...field} options={typeOptions} />
            )}
            rules={{ required: 'Car type is required' }}
          />
          {/* <StyledInput
            type="text"
            name="type"
            {...register('type', { required: true })}
          />
          {errors.type && <p>Car type is required</p>} */}
        </label>
        <label>
          Fuel Consumption
          <StyledInput
            type="text"
            name="fuelConsumption"
            {...register('fuelConsumption', { required: true })}
          />
          {errors.fuelConsumption && <p>Fuel consumption is required</p>}
        </label>
        <label>
          Engine Size
          <StyledInput
            type="text"
            name="engineSize"
            {...register('engineSize', { required: true })}
          />
          {errors.engineSize && <p>Engine size is required</p>}
        </label>
      </div>
    </form>
  );
};
export default AddCarInfo;
