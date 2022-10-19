import React, { useState, useRef, useEffect} from "react";
import { TextInput, Select} from '@mantine/core';
import "./Calculator.scss";
import { Button } from '@mantine/core';

export function Calculator() {
    const womenValues = {
        weightIndicator: 9.563,
        heightIndicator: 1.85,
        ageIndicator: 4.676,
        palIndicator: 655.1
    };
    const menValues = {
        weightIndicator: 13.75,
        heightIndicator: 5.003,
        ageIndicator: 6.775,
        palIndicator: 66.5
    };
   
    const [height, setHeight] = useState({ value:'' });
    const [weight, setWeight] = useState({ value:'' });
    const [age, setAge] = useState({ value:'' });
    const [activity, setActivity] = useState({ value:'' });
    const [gender, setGender] = useState({ value:'' });
    const [resultCPM, setResultCPM] = useState({ value:'' });
    const [resultBMI, setResultBMI] = useState({ value:'' });
    const [show, setShow] = useState({ value:'' });
    const [protein, setProtein] = useState({ value:'' });
    const [minFat, setMinFat] = useState({ value:'' });
    const [maxFat, setMaxFat] = useState({ value:'' });
    const [minCarb, setMinCarb] = useState({ value:'' });
    const [maxCarb, setMaxCarb] = useState({ value:'' });

    const showClass = show.value ? 'show' : '';
    const hideFormClass = show.value ? 'hide' : '';

    const heightInput = useRef(null);
    const weightInput = useRef(null);
    const ageInput = useRef(null);
    const genderInput = useRef(null);
    const activityInput = useRef(null);

    const handleChangeHeight = (e) => {
        setHeight({value: e.target.value});
        setTimeout(() => {
            heightInput.current.focus()
          });
    }
    const handleChangeWeight = (e) => {
        setWeight({value: e.target.value});
        setTimeout(() => {
            weightInput.current.focus()
          });
    }
    const handleChangeAge = (e) => {
        setAge({value: e.target.value});
        setTimeout(() => {
            ageInput.current.focus()
          });
    }
    const handleChangeActivity = (e) => {
        setActivity({value: e});
        setTimeout(() => {
            activityInput.current.focus()
          });
    }
    const handleChangeGender = (e) => {
        setGender({value: e});
        setTimeout(() => {
            genderInput.current.focus()
          });
    }
    function validateNumber(event) {
        if (event.key == "." || event.key === "-" || event.key === "+") {
            event.preventDefault();
        }
    }
    function CPMWomen() {
        const sumCPM = ((womenValues.palIndicator + (womenValues.weightIndicator * weight.value) + (womenValues.heightIndicator * height.value) - (womenValues.ageIndicator * age.value)) * activity.value);
        return parseInt(sumCPM,10);
    }
    function CPMMen() {
        const sumCPM = ((menValues.palIndicator + (menValues.weightIndicator * weight.value) + (menValues.heightIndicator * height.value) - (menValues.ageIndicator * age.value)) * activity.value);
        return parseInt(sumCPM,10);
    }
    function bmi() {
        const newHeight = height.value / 100;
        const powerOfHeight = Math.pow(newHeight, 2);
        const bmi = (weight.value / powerOfHeight);
        return bmi.toFixed(2);
    }

    function proteins() {
        const maxProteins = (weight.value * 1.6);
        return parseInt(maxProteins,10);
    }
    function minFats() {
        const minFats = ((0.2 * resultCPM.value) / 9);
        return parseInt(minFats,10);
    }
    function maxFats() {
        const maxFats = ((0.3 * resultCPM.value) / 9);
        return parseInt(maxFats,10);
    }
    function minCarbs() {
        const minCarbs = ((0.54 * resultCPM.value) / 4);
        return parseInt(minCarbs,10);
    }
    function maxCarbs() {
        const maxCarbs = ((0.70 * resultCPM.value) / 4);
        return parseInt(maxCarbs,10);
    }
    function sumValues() {
        if(height.value !=='' && weight.value !== '' && age.value !== '' && activity.value !== '' && gender.value !== '') {
            setShow({value: true});
            if (gender.value === 'f') {
                setResultCPM({value: CPMWomen()});
            } else {
                setResultCPM({value: CPMMen()});
            }
            setResultBMI({value: bmi()});
            setProtein({value: proteins()});
        } 
    }
    useEffect(() => {
        setMinFat({value: minFats()});
        setMaxFat({value: maxFats()});
        setMinCarb({value: minCarbs()});
        setMaxCarb({value: maxCarbs()});
    }, [resultCPM]);

    function FormHeight() {
        return (
          <TextInput
            placeholder="Wpisz wzrost w cm ..."
            type="number"
            label="Wzrost"
            radius="md"
            ref={heightInput} 
            withAsterisk
            value={height.value}
            onChange={(e)=>handleChangeHeight(e)}
            onKeyDown={validateNumber}
          />
        );
      }
    function FormWeight() {
        return (
          <TextInput
            placeholder="Wpisz wagę w kg ..."
            type="number"
            label="Waga"
            radius="md"
            ref={weightInput} 
            withAsterisk
            value={weight.value}
            onChange={(e)=>handleChangeWeight(e)}
            onKeyDown={validateNumber}
          />
        );
      }
    function FormAge() {
        return (
          <TextInput
            placeholder="Wpisz wiek ..."
            type="number"
            label="Wiek"
            radius="md"
            ref={ageInput}
            withAsterisk
            value={age.value}
            onChange={(e)=>handleChangeAge(e)}
            onKeyDown={validateNumber}
          />
        );
      }
    function SelectActivity() {
        return (
            <Select
            label="Aktywność"
            withAsterisk
            placeholder="Wybierz..."
            ref={activityInput} 
            value={activity.value}
            onChange={(e)=>handleChangeActivity(e)}
            radius="md"
            data={[
                { value: '1.2', label: 'Prawie brak' },
                { value: '1.25', label: 'Lekka aktywność' },
                { value: '1.5', label: 'Umiarkowana aktywność' },
                { value: '1.75', label: 'Duża aktywność' },
                { value: '2', label: 'Bardzo duża aktywność' },
            ]}
            />
        );
    }
    function SelectGender() {
    return (
        <Select
        label="Płeć"
        withAsterisk
        placeholder="Wybierz..."
        ref={genderInput} 
        value={gender.value}
        onChange={(e)=>handleChangeGender(e)}
        radius="md"
        data={[
            {value: 'm', label: 'Mężczyzna' },
            {value: 'f', label: 'Kobieta' },
        ]}
        />
    );
    }
    function ButtonCalculate() {
        return (
          <Button
          className="ButtonCalculate ButtonCalculate-active"
          type="submit"
          variant="light"
          radius="md"
          size="lg"
          onClick={sumValues}>
            Oblicz zapotrzebowanie
          </Button>
        );
      }

    return (
        <div className="calculator__content">
            <div className="calculator__infograph"></div>
            <div className={`calculator ${hideFormClass}`}>
                <h2>Wprowadź dane</h2>
                <div className="calculator-inputs">
                    <FormHeight />
                    <FormWeight />
                    <FormAge />
                    <SelectActivity />
                    <SelectGender />
                    <ButtonCalculate />
                </div>
            </div>
                <div className={`result-of-calculator ${showClass}`}>
                    <span>
                        Twoje BMI wynosi:
                        <div className="result_bmi-and-cpm">
                        {resultBMI.value}
                        </div>
                    </span>
                    <span>
                        Twoja całkowita przemiana materii wynosi:
                        <div className="result_bmi-and-cpm">{resultCPM.value} kcal
                        </div>
                    </span>
                    <div className="carbs-fats-proteins">
                        <div className="proteins">
                            <span>Białka</span>
                            <span>{weight.value} g - {protein.value} g</span>
                            <span>10% - 16%</span>
                        </div>
                        <div className="fats">
                            <span>Tłuszcze</span>
                            <span>{minFat.value} g - {maxFat.value} g</span>
                            <span>20% - 30%</span>
                        </div>
                        <div className="carbs">
                            <span>Węglowodany</span>
                            <span>{minCarb.value} g - {maxCarb.value} g</span>
                            <span>54% - 70%</span>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
        </div>
    )
}