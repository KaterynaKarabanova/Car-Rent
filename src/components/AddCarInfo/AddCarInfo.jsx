import { useTranslation } from 'react-i18next';
import {
  StyledCarInfoDiv,
  StyledInput,
  StyledLabel,
  StyledMainForm,
  StyledValidation,
} from './AddCarInfo.styled';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { getPlaceOptions, typeOptions, yearOptions } from './options';
import { Styles } from './AddCarInfo.styled';
import {
  StyledFileDiv,
  StyledFileInput,
  StyledFileLabel,
  StyledFileTextAdd,
  StyledFileTextPlus,
} from './AddCarInfo.styled';

const AddCarInfo = ({
  register,
  control,
  setValue,
  errors,
  imagePreview,
  setImagePreview,
}) => {
  const { t } = useTranslation();
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
    <StyledMainForm>
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
            <StyledFileTextAdd> {t('addImage')}</StyledFileTextAdd>
          </StyledFileDiv>
        )}
      </StyledFileLabel>
      <div>
        <h2>{t('personalInfo')}</h2>
        <StyledLabel>
          {t('name')}
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
            placeholder={t('placeholderName')}
          />
          {errors.userName && <StyledValidation>!</StyledValidation>}
        </StyledLabel>
        <StyledLabel>
          {t('surname')}
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
            placeholder={t('placeholderSurname')}
          />
          {errors.userSurname && <StyledValidation>!</StyledValidation>}
        </StyledLabel>
        <StyledLabel>
          {t('phone')}
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
            placeholder={t('placeholderPhone')}
          />
          {errors.phone && <StyledValidation>!</StyledValidation>}
        </StyledLabel>
        <StyledLabel>
          {t('city')}
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Select styles={Styles} {...field} options={getPlaceOptions(t)} />
            )}
            rules={{ required: '!' }}
          />
          {errors.address && (
            <StyledValidation>{errors.address.message}</StyledValidation>
          )}
        </StyledLabel>
      </div>
      <StyledCarInfoDiv>
        <div>
          <h2>{t('carInfo')}</h2>
          <StyledLabel>
            {t('manufacturerCompany')}
            <StyledInput
              type="text"
              name="make"
              {...register('make', { required: true })}
              placeholder={t('placeholderCompany')}
            />
            {errors.make && <StyledValidation>!</StyledValidation>}
          </StyledLabel>
          <StyledLabel>
            {t('model')}
            <StyledInput
              type="text"
              name="model"
              {...register('model', { required: true })}
              placeholder={t('placeholderModel')}
            />
            {errors.model && <StyledValidation>!</StyledValidation>}
          </StyledLabel>
          <StyledLabel>
            {t('fuelCons')}
            <StyledInput
              type="text"
              name="fuelConsumption"
              {...register('fuelConsumption', { required: true })}
              placeholder={t('placeholderFuel')}
            />
            {errors.fuelConsumption && <StyledValidation>!</StyledValidation>}
          </StyledLabel>
          <StyledLabel>
            {t('engineSize')}
            <StyledInput
              type="text"
              name="engineSize"
              {...register('engineSize', { required: true })}
              placeholder={t('placeholderEngine')}
            />
            {errors.engineSize && <StyledValidation>!</StyledValidation>}
          </StyledLabel>
        </div>
        <div>
          <StyledLabel>
            {t('year')}
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Select styles={Styles} {...field} options={yearOptions} />
              )}
              rules={{ required: '!' }}
            />
            {errors.year && (
              <StyledValidation>{errors.year.message}</StyledValidation>
            )}
          </StyledLabel>
          <StyledLabel>
            {t('type')}
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select styles={Styles} {...field} options={typeOptions} />
              )}
              rules={{ required: '!' }}
            />
            {errors.type && (
              <StyledValidation>{errors.type.message}</StyledValidation>
            )}
          </StyledLabel>
        </div>
      </StyledCarInfoDiv>
    </StyledMainForm>
  );
};
export default AddCarInfo;
