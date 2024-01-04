import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import options from './options';
const AddAccessories = ({
  register,
  control,
  handleSubmit,
  setValue,
  errors,
  onSubmit,
}) => {
  const [accessories, setAccessories] = useState([1, 2]);
  const [count, setCount] = useState(3);

  const addInput = e => {
    e.preventDefault();
    setAccessories([...accessories, count]);
    setCount(count + 1);
  };
  const deleteInput = e => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Accessories and functionalities</h2>
        <div>
          <button type="button" onClick={e => deleteInput(e)}>
            -
          </button>
          <p>{accessories.length}</p>
          <button type="button" onClick={e => addInput(e)}>
            +
          </button>
        </div>
      </div>
      <div>
        {accessories.map((el, index) => {
          return (
            <div key={el}>
              <Controller
                name={`accessories${index}`}
                control={control}
                render={({ field }) => (
                  <Select
                    // styles={ingStyles}
                    {...field}
                    options={options}
                    // theme={theme}
                  />
                )}
                rules={{ required: '!' }}
              />
              {errors[`accessories${index}`] && (
                <p>{errors[`accessories${index}`].message}</p>
              )}
              <button type="button" onClick={e => deleteCurrent(e, index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
};
export default AddAccessories;
