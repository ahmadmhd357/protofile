import { ILevels } from '@/type'
import React,{FunctionComponent} from 'react'

const Bar:FunctionComponent<{
    data:ILevels
}>=({data:{Icon,level,name}})=> {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-stone-700'>
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
      style={{width:level}}
      >
        <Icon className='mx-3'/>
        {name}
      </div>
    </div>
  )
}

export default Bar