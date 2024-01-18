import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import options from './options';
import { StylesAccess } from 'components/AddCarInfo/AddCarInfo.styled';
import {
  StyledAccessoriesDiv,
  StyledAddBtn,
  StyledBtnDiv,
  StyledDiv,
  StyledForm,
  StyledValid,
} from './AddAccessories.styled';
import { useTranslation } from 'react-i18next';

const AddAccessories = ({ control, errors, accessories, setAccessories }) => {
  const [count, setCount] = useState(2);
  const { t } = useTranslation();
  const addInput = e => {
    e.preventDefault();
    setAccessories([...accessories, count]);
    setCount(count + 1);
  };
  const deleteInput = e => {
    e.preventDefault();
    if (accessories.length <= 2) {
      return;
    }
    const newNumber = accessories.slice(0, accessories.length - 1);
    setAccessories(newNumber);
  };
  const deleteCurrent = (e, index) => {
    e.preventDefault();
    if (accessories.length <= 2) {
      return;
    }

    const newNumber = accessories.filter(
      el => accessories.indexOf(el) !== index
    );
    setAccessories(newNumber);
  };
  return (
    <StyledForm>
      <div>
        <h2>{t('acesories')}</h2>
        <StyledBtnDiv>
          <StyledAddBtn type="button" onClick={e => deleteInput(e)}>
            -
          </StyledAddBtn>
          <p>{accessories.length}</p>
          <StyledAddBtn type="button" onClick={e => addInput(e)}>
            +
          </StyledAddBtn>
        </StyledBtnDiv>
      </div>
      <StyledDiv>
        {accessories.map((el, index) => {
          return (
            <StyledAccessoriesDiv key={el}>
              <Controller
                name={`accessories${index}`}
                control={control}
                render={({ field }) => (
                  <Select
                    styles={StylesAccess}
                    {...field}
                    options={options}
                    // theme={theme}
                  />
                )}
                rules={{ required: '!' }}
              />
              {errors[`accessories${index}`] && (
                <StyledValid>
                  {errors[`accessories${index}`].message}
                </StyledValid>
              )}
              <StyledAddBtn
                type="button"
                onClick={e => deleteCurrent(e, index)}
              >
                X
              </StyledAddBtn>
            </StyledAccessoriesDiv>
          );
        })}
      </StyledDiv>
    </StyledForm>
  );
};
export default AddAccessories;
