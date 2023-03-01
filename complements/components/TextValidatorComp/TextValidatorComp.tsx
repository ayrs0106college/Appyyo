/*---------------------------------------------------------
 ------------- README FUNCTION INSTRUCTIONS: --------------
 Type: Component and Function
 Import statements:
    import TextValidatorComp from '@/...path.../TextValidatorComp'

 Import modules:
    import { useRef } from 'react

 Instructions:
    1) create references and states:

    const ComponentRef = useRef(null)//Referencia de textarea de Description
    const TextToValidate = useRef(null)//Referencia de label para contador de palabras o caracteres a encontrar
    const [InvalidChart, setInvalidChart] = useState<any>(0)//Contador de  de palabras o caracteres encontrados


    <TextValidatorComp 
        StringToValidate={ComponentRef}
        ElementForAnswer={TextToValidate}
        placeholder={'Holder'} // Placeholder
        ArrayKeyWordsToCheckLang={["Alain",'yOsSEph']} //Array of strings to validate
        allowOverlapping={true} //Allow overlaping
        setInvalidChart={setInvalidChart} //share state for counter of findings
        className={'TextValidator'} // Classes to style component as global style
        style={{backgroundColor:"whitesmoke"}} // Inline styles
    />

---------------------------------------------------------*/

import React from 'react'
import TextValidationFunc, { LangNumbers } from '@/complements/components/TextValidatorComp/TextValidationFunc'//Validador de textos especificados en la captura textual del usuario
import styles from './TextValidatorComp.module.css'

interface ITextValidator{
    StringToValidate: any|null,
    placeholder?: string|undefined,
    ElementForAnswer: any|null,
    ArrayKeyWordsToCheckLang: string[]|null,
    allowOverlapping: boolean|null,
    setInvalidChart: any|null,
    style?: React.CSSProperties|undefined,
    className?: string
}

export default function TextValidatorFunComp(props:ITextValidator){
    return (
        <>
            <textarea
                ref={props.StringToValidate}
                className={(props.className, styles.TextToValidate)}
                style={props.style}
                placeholder={props.placeholder}
                onChange={() => {
                    TextValidationFunc(
                    props.StringToValidate,
                    props.ElementForAnswer,
                    props.ArrayKeyWordsToCheckLang,
                    props.allowOverlapping,
                    props.setInvalidChart
                    )}}
                required title={''}
            />
            <span ref={props.ElementForAnswer}
                title="">
            </span>
        </>
    )
}