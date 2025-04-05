'use client';
import { useState } from "react";



export default function FloatingLabelInput({ inputLabel, inputType='text', autoComplete='off', max=Infinity }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');


  function getFocusedClasses(mode) {
    return mode === 1 ? ((focused || value) ? 'pt-6' : '') : ((focused || value) ? 'text-gray pt-6 top-[-16px] text-xs' : '')
  }


  return (
    <div className="bg-[#444] w-full relative rounded-sm">
      <label className={`transition-all select-none absolute px-4 py-4 ${getFocusedClasses(0)}`} htmlFor={inputLabel.toLowerCase()}>{inputLabel}</label>
      <input onInput={(e) => setValue(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`transition-all w-full px-4 py-4 h-full outline-0 border-0 ${getFocusedClasses(1)}`} maxLength={max} autoComplete={autoComplete} type={inputType} id={inputLabel.toLowerCase()} />
    </div>
  );
}