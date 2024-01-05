import { useState } from 'react';
import {
  StyledCheckbox,
  StyledCheckboxAge,
  StyledDiv,
  StyledLabel,
  StyledText,
} from './Conditions.styled';

const Conditions = ({
  register,
  control,
  handleSubmit,
  setValue,
  errors,
  onSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState('18');
  const [driverLicense, setDriverLicense] = useState(true);
  const [securityDeposit, setSecurityDeposit] = useState(true);
  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
  return (
    <form>
      <h2>Conditions</h2>
      <StyledLabel isChecked={driverLicense}>
        Valid driver's license
        <StyledCheckbox
          type="checkbox"
          {...register('driverLicense')}
          checked={driverLicense}
          onChange={() => setDriverLicense(!driverLicense)}
        />
      </StyledLabel>
      <StyledLabel isChecked={securityDeposit}>
        Security deposit required
        <StyledCheckbox
          type="checkbox"
          {...register('securityDeposit')}
          checked={securityDeposit}
          onChange={() => setSecurityDeposit(!securityDeposit)}
        />
      </StyledLabel>
      <div>
        <StyledText>Minimum age:</StyledText>
        <StyledDiv>
          <StyledCheckboxAge isChecked={selectedOption === '18'}>
            {' '}
            18{' '}
            <StyledCheckbox
              type="radio"
              {...register('minAge')}
              value={18}
              checked={selectedOption === '18'}
              onChange={handleOptionChange}
            />
          </StyledCheckboxAge>
          <StyledCheckboxAge isChecked={selectedOption === '21'}>
            {' '}
            21{' '}
            <StyledCheckbox
              type="radio"
              {...register('minAge')}
              value={21}
              checked={selectedOption === '21'}
              onChange={handleOptionChange}
            />
          </StyledCheckboxAge>
          <StyledCheckboxAge isChecked={selectedOption === '25'}>
            {' '}
            25{' '}
            <StyledCheckbox
              type="radio"
              {...register('minAge')}
              value={25}
              checked={selectedOption === '25'}
              onChange={handleOptionChange}
            />
          </StyledCheckboxAge>
          <StyledCheckboxAge isChecked={selectedOption === '30'}>
            {' '}
            30{' '}
            <StyledCheckbox
              type="radio"
              {...register('minAge')}
              value={30}
              checked={selectedOption === '30'}
              onChange={handleOptionChange}
            />
          </StyledCheckboxAge>
        </StyledDiv>
      </div>
    </form>
  );
};
export default Conditions;
