"use client"
import React, { useState } from 'react';
import {findSolutions} from './findSolutions'
import { Button, Input } from '@nextui-org/react';
import FormTable from './table';
export default function Home() {
  const [total, setTotal] = useState(0);
  const [parameters, setParameters] = useState([{ value: 0 },{ value: 0 },{ value: 0 },{ value: 0 }]);
  const [solutions, setSolutions] = useState([]);

  const handleAddParameter = () => {
    setParameters([...parameters, { value: 0 }]);
    setSolutions([])
  };

  const handleParameterChange = (index, value) => {
    const newParameters = [...parameters];
    newParameters[index].value = Number(value);
    setParameters(newParameters);
  };

  const handleCompute = () => {
    const coefficients = parameters.map(p => p.value);
    setSolutions(findSolutions(total, coefficients).filter(solution => !solution.includes(0)))
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 md:gap-y-2 ">
      <div className='flex md:flex-row flex-col justify-center items-center gap-4 w-full'>
      <Input label="总价" placeholder="输入总值" onChange={e => setTotal(Number(e.target.value))} />
      {parameters.map((param, index) => (
        <div className='w-full ' key={index}>
          <Input
            label={`参数 ${index + 1}`}
            placeholder="输入参数值"
            value={param.value}
            onChange={e => handleParameterChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className='flex m-4 justify-around w-full'>
      <Button onClick={handleAddParameter}>添加参数</Button>
      <Button color='primary' onClick={handleCompute}>计算</Button>
      </div>
      </div>
      <FormTable parameters={parameters} solutions={solutions} />
    </main>
  );
}
