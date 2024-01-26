import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { setList } from "../redux/slices/list";
import InputForm from "./InputForm";

const WrapperSeccion = styled.div`
  margin-top: 3em;

  &.second-seccion {
    margin-top: 2em;
  }

  > h3 {
    color: var(--secondary-color);
    margin-bottom: 1.5em;

    &.second-h3 {
      margin-top: 0;
      margin-bottom: 1em;
    }
  }
  @media (max-width: 768px) {
    > h3 {
      font-size: 1.2em;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }
  }
`;
const WapperInputSeller = styled.div`
  display: grid;
  grid-template-columns: 63% 33%;
  flex-direction: row;
  grid-gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const WapperInputVehicle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
  grid-gap: 1rem 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: 1.5em 0;

  @media (max-width: 768px) {
    margin: 0.8em 0;
  }
`;

const WapperButton = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    border-radius: 100px;
    border: none;
    background: var(--primary-color);
    color: #fff;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #001fcc;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1.5em;
    > button {
      width: 65%;
    }
  }
`;

const StyledSelect = styled.select`
  height: 52px;
  width: 100%;
  outline: none;
  border: 1px solid #dadce0;
  background: none;
  position: relative;
  padding-left: 0.5em;
  border-radius: 8px;
  font-size: inherit;
  color: var(--secondary-color);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;

const WapperSelect = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  padding: 0px 5px;
  left: 5px;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  background: #fff;
  transition: all 0.3s ease-in-out;

  &::after {
    content: " *";
    color: red;
    margin-right: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${StyledSelect}:focus + &::after,
  ${StyledSelect}:valid + &::after {
    opacity: 1;
  }

  ${StyledSelect}:focus + &,
  ${StyledSelect}:valid + & {
    top: 0px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-color);
  }
`;
const Form = () => {
  const [error, setError] = useState("");
  const idGenerator = uuidv4();

  const formProperties = {
    sellerName: "",
    sellerRut: "",
    vehiclePatent: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehiclePrice: "",
  };

  const [formData, setFormData] = useState(formProperties);

  const vehicleBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
  const vehicleModels = {
    Toyota: ["Camry", "Corolla", "Rav4", "Highlander"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot"],
    Ford: ["Fusion", "Escape", "Explorer", "Mustang"],
    Chevrolet: ["Malibu", "Equinox", "Traverse", "Camaro"],
    Nissan: ["Altima", "Maxima", "Rogue", "Pathfinder"],
  };

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;

    if (!nameRegex.test(formData.sellerName)) {
      setError("El campo requiere sus 2 nombres y 2 apellidos");
      return; 
    }
    setError("");

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const id = idGenerator;
    const newItem = {
      ...formData,
      id,
      currentDate: formattedDate,
    };

    dispatch(setList(newItem));
    setFormData(formProperties);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <WrapperSeccion>
          <h3>Datos del vendedor:</h3>
          <WapperInputSeller>
            <InputForm
              name="sellerName"
              title="Nombre completo"
              handleInputChange={handleInputChange}
              FormDataValue={formData.sellerName}
              error={error}
            />
            <InputForm
              name="sellerRut"
              title="Rut vendedor"
              handleInputChange={handleInputChange}
              FormDataValue={formData.sellerRut}
            />
          </WapperInputSeller>
        </WrapperSeccion>
        <Line />
        <WrapperSeccion className="second-seccion">
          <h3 className="second-h3">Datos del vehiculo:</h3>
          <WapperInputVehicle>
            <InputForm
              name="vehiclePatent"
              title="Patente del vehiculo"
              handleInputChange={handleInputChange}
              FormDataValue={formData.vehiclePatent}
            />

            <InputForm
              name="vehicleBrand"
              title="Marca del vehiculo"
              handleInputChange={handleInputChange}
              FormDataValue={formData.vehicleBrand}
              isSelect={true}
              options={vehicleBrands}
            />

            <WapperSelect>
              <StyledSelect
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Seleccione
                </option>
                {formData.vehicleBrand &&
                  vehicleModels[formData.vehicleBrand]?.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
              </StyledSelect>
              <Label htmlFor="vehicleModel">Modelo del vehiculo</Label>
            </WapperSelect>

            <InputForm
              name="vehiclePrice"
              type="number"
              title="Precio del vehiculo"
              handleInputChange={handleInputChange}
              FormDataValue={formData.vehiclePrice}
            />
          </WapperInputVehicle>
        </WrapperSeccion>

        <Line />

        <WapperButton>
          <button type="submit">Enviar</button>
        </WapperButton>
      </form>
    </div>
  );
};

export default Form;
