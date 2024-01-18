import { useTranslation } from 'react-i18next';
import {
  StyledDescValid,
  StyledForm,
  StyledTextarea,
} from './AddDescription.styled';

const AddDescription = ({ register, errors }) => {
  const { t } = useTranslation();
  return (
    <StyledForm>
      <h2>{t('addDescription')}</h2>
      <StyledTextarea
        type="text"
        {...register('description', { required: true })}
        placeholder={t('placeholderDesc')}
      />
      {errors.description && (
        <StyledDescValid>{t('descriptionValid')}</StyledDescValid>
      )}
    </StyledForm>
  );
};
export default AddDescription;
