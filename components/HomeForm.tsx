'use client'
import React from 'react'
import Button from './Button'
import { clientAction } from '@/lib/clientActions'

function HomeForm() {
    return (
        <form action={async (e) => await clientAction(e)} className='flex flex-col gap-2 max-w-sm mx-auto'>
            <Button name='Get Free Quote' url='/get-free-quote?type=residence&bhk=1rk&area=250'
                style='text-white'
            />
            <input type="number" className='text-lg py-2 px-4 rounded-md text-orange-600' placeholder='(+91) Enter Mobile Nunber' />
        </form>
    )
}

export default HomeForm