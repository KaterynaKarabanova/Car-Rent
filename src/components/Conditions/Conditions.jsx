import { useState } from 'react';

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
      <label>
        Valid driver's license
        <input
          type="checkbox"
          {...register('driverLicense')}
          checked={driverLicense}
          onChange={() => setDriverLicense(!driverLicense)}
        />
      </label>
      <label>
        Security deposit required
        <input
          type="checkbox"
          {...register('securityDeposit')}
          checked={securityDeposit}
          onChange={() => setSecurityDeposit(!securityDeposit)}
        />
      </label>
      <div>
        Minimum age:
        <label>
          {' '}
          18{' '}
          <input
            type="radio"
            {...register('minAge')}
            value={18}
            checked={selectedOption === '18'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          {' '}
          21{' '}
          <input
            type="radio"
            {...register('minAge')}
            value={21}
            checked={selectedOption === '21'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          {' '}
          25{' '}
          <input
            type="radio"
            {...register('minAge')}
            value={25}
            checked={selectedOption === '25'}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          {' '}
          30{' '}
          <input
            type="radio"
            {...register('minAge')}
            value={30}
            checked={selectedOption === '30'}
            onChange={handleOptionChange}
          />
        </label>
      </div>
    </form>
  );
};
export default Conditions;
