import React, { useState, useRef, useEffect} from "react";
import { TextInput, Select , Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import resultBMIimage from './resultBMI.png';
import arrowImage from './arrow.png';
import "./Calculator.scss";


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
    const [resultMinProteins, setMinProtein] = useState({ value:'' });
    const [minFat, setMinFat] = useState({ value:'' });
    const [maxFat, setMaxFat] = useState({ value:'' });
    const [minCarb, setMinCarb] = useState({ value:'' });
    const [maxCarb, setMaxCarb] = useState({ value:'' });
    const [arrowClass, setArrowClass] = useState({value:'' });

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
    function CPMWomen(values) {
        const sumCPM = ((womenValues.palIndicator + (womenValues.weightIndicator * values.weight) + (womenValues.heightIndicator * values.height) - (womenValues.ageIndicator * values.age)) * values.activity);
        return parseInt(sumCPM,10);
    }
    function CPMMen(values) {
        const sumCPM = ((menValues.palIndicator + (menValues.weightIndicator * values.weight) + (menValues.heightIndicator * values.height) - (menValues.ageIndicator * values.age)) * values.activity);
        return parseInt(sumCPM,10);
    }
    function bmi(values) {
        const newHeight = values.height / 100;
        const powerOfHeight = Math.pow(newHeight, 2);
        const bmi = (values.weight / powerOfHeight);
        return bmi.toFixed(2);
    }

    function arrowBmi() {
        let arrowClassName = '';
        if (resultBMI.value <= 18.49 ) {
            arrowClassName = 'calculator__infograph-under-weight';
        }
        if (resultBMI.value >= 18.5 && resultBMI.value < 24.99 ) {
            arrowClassName = 'calculator__infograph-normal-weight';
        }
        if (resultBMI.value >= 25 && resultBMI.value < 29.99 ) {
            arrowClassName = 'calculator__infograph-over-weight';
        }
        if (resultBMI.value >= 30 && resultBMI.value < 39.99 ) {
            arrowClassName = 'calculator__infograph-obese';
        }
        if (resultBMI.value >= 40 ) {
            arrowClassName = 'calculator__infograph-extreme-obese';
        } 
        if(resultBMI.value==='') {
            arrowClassName = '';
        }
        setArrowClass({value: arrowClassName});
    }

    function minProteins(values) {
        return parseInt(values.weight,10);
    }

    function proteins(values) {
        const maxProteins = (values.weight * 1.6);
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
    function sumValues(values) {
        if(values.height !=='' && values.weight !== '' && values.age !== '' && values.activity !== '' && values.gender !== '') {
            setShow({value: true});

            if (values.gender === 'f') {
                setResultCPM({value: CPMWomen(values)});
            } else {
                setResultCPM({value: CPMMen(values)});
            }
            setResultBMI({value: bmi(values)});
            setProtein({value: proteins(values)});
            setMinProtein({value: minProteins(values)});   
        }
    }

    useEffect(() => {
        setMinFat({value: minFats()});
        setMaxFat({value: maxFats()});
        setMinCarb({value: minCarbs()});
        setMaxCarb({value: maxCarbs()});
        arrowBmi();
        const elem = localStorage.getItem('arrayWithResults');
        if (elem !== null) {
            const results = JSON.parse(elem); 
            setResultBMI({value: results.bmi});
            setResultCPM({value: results.cpm});
            setMinFat({value: results.minFat});
            setProtein({value: results.maxProtein});
            setMinProtein({value: results.minProtein});
            setMinCarb({value: results.minCarb});
            setMaxCarb({value: results.maxCarb});
            setShow({value: true});
        } else {
            if(resultBMI.value!=='') {
                    const arrayWithResults = { 
                    bmi: resultBMI.value,
                    cpm: resultCPM.value,
                    minProtein: resultMinProteins.value,
                    maxProtein: protein.value,
                    minFat: minFats(),
                    maxFat: maxFats(),
                    minCarb: minCarbs(),
                    maxCarb: maxCarbs()
                };
                localStorage.setItem('arrayWithResults', JSON.stringify(arrayWithResults));
            }
        }
    }, [resultCPM, resultBMI]);
    
    function resetResults() {
        setResultBMI({value:''});
            setResultCPM({value:''});
            setMinFat({value: ''});
            setProtein({value: ''});
            setMinProtein({value: ''});
            setMinCarb({value: ''});
            setMaxCarb({value: ''});
        localStorage.removeItem('arrayWithResults');
        setShow({ value:'' });
    }

    function Form() {

        const form = useForm({
            initialValues: { height: '', weight: '', age: '', activity: '', gender: ''},
            validate: {
              height: (value) => (value.length < 1 ? 'Wypełnij pole' : null),
              weight: (value) => (value.length < 1 ? 'Wypełnij pole' : null),
              age: (value) => (value.length < 1 ? 'Wypełnij pole' : null),
              activity: (value) => (value.length < 1 ? 'Wypełnij pole' : null),
              gender: (value) => (value.length < 1 ? 'Wypełnij pole' : null),
            },
          });
    
        
        return (
            <form onSubmit={form.onSubmit((values) => sumValues(values))}>
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
                    {...form.getInputProps('height')}
                />
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
                    {...form.getInputProps('weight')}
                />
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
                    {...form.getInputProps('age')}
                />
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
                    {...form.getInputProps('activity')}
                    />
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
                        {...form.getInputProps('gender')}
                        />
                         <Button
                        className="ButtonCalculate ButtonCalculate-active"
                        type="submit"
                        variant="light"
                        radius="md"
                        size="lg"
                        >
                            Oblicz zapotrzebowanie
                        </Button>
            </form>
        );
      }

    return (
        <div className="calculator__content">
            <div className="calculator__infograph">
                <img className="calculator__infograph-scale" src={resultBMIimage} alt="result-bmi" />
                <img className={`calculator-arrow ${arrowClass.value}`} src={arrowImage} />
            </div>
            <div className={`calculator ${hideFormClass}`}>
                <h2>Wprowadź dane</h2>
                <div className="calculator-inputs">
                    <Form />
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
                        <span>{resultMinProteins.value} g - {protein.value} g</span>
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
                </div>
                <Button
                    onClick={resetResults}
                    className="ButtonRecalculate ButtonRecalculate-active"
                    type="submit"
                    variant="light"
                    radius="md"
                    size="lg"
                >
                Oblicz ponownie
                </Button>
            </div>
        </div>
    )
}