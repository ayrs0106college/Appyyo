export default function TextValidationFunc(StringToValidate, ElementForAnswer, ArrayKeyWordsToCheckLang, allowOverlapping, setInvalidChart) {        
    let ocurrencias = 0
    var ArrayKeyWordsToCheckLang = ArrayKeyWordsToCheckLang.map((x)=>{return x.toUpperCase()})
    let NormalizedString = StringToValidate.current.value.toString().toUpperCase().replaceAll(" ","").replaceAll("¨","").replaceAll("<","").replaceAll(">","").replaceAll("]","").replaceAll('"',"").replaceAll('\\',"").replaceAll('¬',"").replaceAll('|',"").replaceAll("°","").replaceAll("´","").replaceAll("^","").replaceAll("~","")
    const SpeChars = { 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ä': 'A', 'Ë': 'E', 'Ï': 'I', 'Ö': 'O', 'Ü': 'U', '-': '', '/': '', '(': '', ')': '', '*': '', '_': '', ',': '', '.': '', ';': '', ':': '', '{': '', '}': '', '[': '', ']': '', '+': '', "'": '', '#': '', '$': '', '%': '', '&': '', '=': '', '¿': '', '?': '', '¡': '', '!': '', 'Â': 'A', 'Ê': 'E', 'Î': 'I', 'Ô': 'O', 'Û': 'U', 'Ã': 'A', '@': '' }
    NormalizedString = NormalizedString.replace(/[ÁÉÍÓÚÄËÏÖÜÂÊÎÔÛÃ<>¨ ,.;:{}_+'#()*¨ ~^`°|¬$%&=¿?¡!-/[]/g, m => SpeChars[m]);

    ArrayKeyWordsToCheckLang.forEach(KeyWord => {
        NormalizedString += "";
        KeyWord += "";
        if (KeyWord.length <= 0) return (NormalizedString.length + 1);
        var n = 0,
            pos = 0,
            step = allowOverlapping ? 1 : KeyWord.length;
        while (true) {
            pos = NormalizedString.indexOf(KeyWord, pos);
            if (pos >= 0) {
                if (KeyWord === "@"){
                    n = n + 70000;
                } else {
                    ++n;
                }
                pos += step;
            } else break;
        }
        if (n > 0) {
        }
        setInvalidChart(ocurrencias)
        ocurrencias = ocurrencias + n
        if(ocurrencias == 0){
            ElementForAnswer.current.innerHTML = ''
        } else {
            ElementForAnswer.current.innerHTML = ocurrencias
        }
    }
    )
}

const LangNumbers = {
    custom: [],
    num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "MAIL", "EMAIL", "HOTMAIL", "GMAIL", "YAHOO", "FACEBOOK", "INSTAGRAM", "WWW", "HTTP", ".COM","DISCORD","WHATSAPP"],
    de: ["NULL", "EINER", "ZWEI", "DREI", "VIER", "FÜNF", "FUNF", "SECHS", "SIEBEN", "ACHT", "NEUN", "ZEHN", "ELF", "ZWÖLF", "ZWOLF", "DREIZEHN", "VIERZEHN", "FÜNFZEHN", "FUNFZEHN", "SECHSZEHN", "SIEBZEHN", "ACHTZEHN", "NEUNZEHN", "ZWANZIG", "DREISSIG", "VIERZIG", "FÜNFZIG", "FUNFZIG", "SECHZIG", "SIEBZIG", "ACHTZIG", "NEUNZIG", "HUNDERT", "TAUSEND", "MILLION"],
    en: ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY", "HUNDRED", "THOUSAND", "MILLION","REAL ESTATE"],
    es: ["CERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE", "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA", "CIEN", "MIL", "MILLÓN", "MILLON", "ARROBA", "ARROVA", "CORREO", "CENTURY", "INMOBILIARIA", "AGENCIA","RAICES","RAIZ","BIENES RAICES",],
    et: ["NULL", "ÜKS", "UKS", "KAKS", "KOLM", "NELI", "VIIS", "KUUS", "SEITSE", "KAHEKSA", "ÜHEKSA", "UHEKSA", "KÜMME", "KUMME", "ÜKSTEIST", "UKSTEIST", "KAKSTEIST", "KOLMETTEIST", "NELITEIST", "VIISTEIST", "KUUSTEIST", "SEITSTEISTE", "KAHEKSATEIST", "ÜHEKSATEIST", "UHEKSATEIST", "KAKSKÜMMEND", "KAKSKUMMEND", "KOLMEKÜMMEND", "KOLMEKUMMEND", "NELJAKÜMMEND", "NELJAKUMMEND", "VIISKÜMMEND", "VIISKUMMEND", "KUUSKÜMMEND", "KUUSKUMMEND", "SEITSMEKÜMMEND", "SEITSMEKUMMEND", "KAHEKSAKÜMMEND", "KAHEKSAKUMMEND", "ÜHEKSAKÜMMEND", "UHEKSAKUMMEND", "SADA", "TUHAT", "MILJONIT"],
    fr: ["ZÉRO", "ZERO", "UNE", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT", "HUIT", "NEUF", "DIX", "ONZE", "DOUZE", "TREIZE", "QUATORZE", "QUINZE", "SEIZE", "DIX-SEPT", "DIXSEPT", "DIX-HUIT", "DIXHUIT", "DIX-NEUF", "DIXNEUF", "VINGT", "TRENTE", "QUARANTE", "CINQUANTE", "SOIXANTE", "SOIXANTE-DIX", "SOIXANTEDIX", "QUATRE-VINGTS", "QUATREVINGTS", "QUATRE-VINGT-DIX", "QUATREVINGTDIX", "CENT", "MILLE", "MILLION"],
    it: ["ZERO", "UNO", "DUE", "TRE", "QUATTRO", "CINQUE", "SEI", "SETTE", "OTTO", "NOVE", "DIECI", "UNDICI", "DODICI", "TREDICI", "QUATTORDICI", "QUINDICI", "SEDICI", "DICIASSETTE", "DICIOTTO", "DICIANNOVE", "VENTI", "TRENTA", "QUARANTA", "CINQUANTA", "SESSANTA", "SETTANTA", "OTTANTA", "NOVANTA", "CENTINAIO", "MILLE", "MILIONI"],
    pt: ["ZERO", "UM", "DOIS", "TRÊS", "TRES", "QUATRO", "CINCO", "SEIS", "SETE", "OITO", "NOVE", "DEZ", "ONZE", "DOZE", "TREZE", "QUATORZE", "QUINZE", "DEZESSEIS", "DEZESSETE", "DEZOITO", "DEZENOVE", "VINTE", "TRINTA", "QUARENTA", "CINQUENTA", "SESSENTA", "SETENTA", "OITENTA", "NOVENTA", "CEM", "MIL", "MILHÃO", "MILHAO"],
    ru: ["НУЛЬ", "ОДИН", "ДВА", "ТРИ", "ЧЕТЫРЕ", "ПЯТЬ", "ШЕСТЬ", "СЕМЬ", "ВОСЕМЬ", "ДЕВЯТЬ", "ДЕСЯТЬ", "ОДИННАДЦАТЬ", "ДВЕНАДЦАТЬ", "тринадцать", "ЧЕТЫРНАДЦАТЬ", "ПЯТНАДЦАТЬ", "ШЕСТНАДЦАТЬ", "СЕМНАДЦАТЬ", "восемнадцать", "девятнадцать", "ДВАДЦАТЬ", "тридцать", "СОРОК", "ПЯТЬДЕСЯТ", "ШЕСТЬДЕСЯТ", "СЕМЬДЕСЯТ", "ВОСЕМЬДЕСЯТ", "ДЕВЯНОСТО", "СОТНИ", "ТЫСЯЧА", "МИЛЛИОН"],
    www: ["UN", "СТО"],
    yyy: ["EINS", "SOIXANTEDIX", "CENTENAS", "MILJON"],
    zzz: ["НОЛЬ", "EINE", "KOLMTEIST", "SECHZEHN", "SEITSETEIST", "DIXHUIT", "DIXNEUF", "VEINTI", "KOLMKÜMMEND", "KOLMKUMMEND", "NELIKÜMMEND", "NELIKUMMEND", "SEITSEKÜMMEND", "SEITSEKUMMEND", "QUATREVINGTDIX", "CENTO", "EINTAUSEND", "MILIONE"],
    all: ["NULL", "EINER", "ZWEI", "DREI", "VIER", "FÜNF", "FUNF", "SECHS", "SIEBEN", "ACHT", "NEUN", "ZEHN", "ELF", "ZWÖLF", "ZWOLF", "DREIZEHN", "VIERZEHN", "FÜNFZEHN", "FUNFZEHN", "SECHSZEHN", "SIEBZEHN", "ACHTZEHN", "NEUNZEHN", "ZWANZIG", "DREISSIG", "VIERZIG", "FÜNFZIG", "FUNFZIG", "SECHZIG", "SIEBZIG", "ACHTZIG", "NEUNZIG", "HUNDERT", "TAUSEND", "MILLION", "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY", "HUNDRED", "THOUSAND", "MILLION","REAL ESTATE",
    "CERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE", "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA", "CIEN", "MIL", "MILLÓN", "MILLON", "ARROBA", "ARROVA", "CORREO", "CENTURY", "INMOBILIARIA", "AGENCIA","RAICES","RAIZ","BIENES RAICES",
    "NULL", "ÜKS", "UKS", "KAKS", "KOLM", "NELI", "VIIS", "KUUS", "SEITSE", "KAHEKSA", "ÜHEKSA", "UHEKSA", "KÜMME", "KUMME", "ÜKSTEIST", "UKSTEIST", "KAKSTEIST", "KOLMETTEIST", "NELITEIST", "VIISTEIST", "KUUSTEIST", "SEITSTEISTE", "KAHEKSATEIST", "ÜHEKSATEIST", "UHEKSATEIST", "KAKSKÜMMEND", "KAKSKUMMEND", "KOLMEKÜMMEND", "KOLMEKUMMEND", "NELJAKÜMMEND", "NELJAKUMMEND", "VIISKÜMMEND", "VIISKUMMEND", "KUUSKÜMMEND", "KUUSKUMMEND", "SEITSMEKÜMMEND", "SEITSMEKUMMEND", "KAHEKSAKÜMMEND", "KAHEKSAKUMMEND", "ÜHEKSAKÜMMEND", "UHEKSAKUMMEND", "SADA", "TUHAT", "MILJONIT",
    "ZÉRO", "ZERO", "UNE", "DEUX", "TROIS", "QUATRE", "CINQ", "SIX", "SEPT", "HUIT", "NEUF", "DIX", "ONZE", "DOUZE", "TREIZE", "QUATORZE", "QUINZE", "SEIZE", "DIX-SEPT", "DIXSEPT", "DIX-HUIT", "DIXHUIT", "DIX-NEUF", "DIXNEUF", "VINGT", "TRENTE", "QUARANTE", "CINQUANTE", "SOIXANTE", "SOIXANTE-DIX", "SOIXANTEDIX", "QUATRE-VINGTS", "QUATREVINGTS", "QUATRE-VINGT-DIX", "QUATREVINGTDIX", "CENT", "MILLE", "MILLION",
    "ZERO", "UNO", "DUE", "TRE", "QUATTRO", "CINQUE", "SEI", "SETTE", "OTTO", "NOVE", "DIECI", "UNDICI", "DODICI", "TREDICI", "QUATTORDICI", "QUINDICI", "SEDICI", "DICIASSETTE", "DICIOTTO", "DICIANNOVE", "VENTI", "TRENTA", "QUARANTA", "CINQUANTA", "SESSANTA", "SETTANTA", "OTTANTA", "NOVANTA", "CENTINAIO", "MILLE", "MILIONI",
    "ZERO", "UM", "DOIS", "TRÊS", "TRES", "QUATRO", "CINCO", "SEIS", "SETE", "OITO", "NOVE", "DEZ", "ONZE", "DOZE", "TREZE", "QUATORZE", "QUINZE", "DEZESSEIS", "DEZESSETE", "DEZOITO", "DEZENOVE", "VINTE", "TRINTA", "QUARENTA", "CINQUENTA", "SESSENTA", "SETENTA", "OITENTA", "NOVENTA", "CEM", "MIL", "MILHÃO", "MILHAO",
    "НУЛЬ", "ОДИН", "ДВА", "ТРИ", "ЧЕТЫРЕ", "ПЯТЬ", "ШЕСТЬ", "СЕМЬ", "ВОСЕМЬ", "ДЕВЯТЬ", "ДЕСЯТЬ", "ОДИННАДЦАТЬ", "ДВЕНАДЦАТЬ", "тринадцать", "ЧЕТЫРНАДЦАТЬ", "ПЯТНАДЦАТЬ", "ШЕСТНАДЦАТЬ", "СЕМНАДЦАТЬ", "восемнадцать", "девятнадцать", "ДВАДЦАТЬ", "тридцать", "СОРОК", "ПЯТЬДЕСЯТ", "ШЕСТЬДЕСЯТ", "СЕМЬДЕСЯТ", "ВОСЕМЬДЕСЯТ", "ДЕВЯНОСТО", "СОТНИ", "ТЫСЯЧА", "МИЛЛИОН"],
    full: ["UN", "СТО", "EINS", "SOIXANTEDIX", "CENTENAS", "MILJON", "НОЛЬ", "EINE", "KOLMTEIST", "SECHZEHN", "SEITSETEIST", "DIXHUIT", "DIXNEUF", "VEINTI", "KOLMKÜMMEND", "KOLMKUMMEND", "NELIKÜMMEND", "NELIKUMMEND", "SEITSEKÜMMEND", "SEITSEKUMMEND", "QUATREVINGTDIX", "CENTO", "EINTAUSEND", "MILIONE"]
}
export {LangNumbers}

const BlogSEOHref = {
    REMX: ["Real Estate", "SEO", "HREF", "..."],
    ZEMX: ["Zone Establishments", "SEO", "HREF", "..."],
    ZSMX: ["Zone Services", "SEO", "HREF", "..."],
}
export {BlogSEOHref}