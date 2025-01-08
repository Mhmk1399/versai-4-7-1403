'use client'
import React from 'react'
import logo from '../../public/logo.webp'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import styles from './loader.module.css'

export const Loader = () => {
  return (
    <div className=" w-full h-[200vh] absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-999">
      <div className={styles.logoWrapper}>
        <Image 
          src={logo} 
          alt="Versai Logo" 
          width={120} 
          height={120}
          className={styles.logo}
        />
        <div className={styles.glowRing}></div>
      </div>
      <div className="mt-8 text-2xl font-light text-green" dir='rtl'>
        <TypeAnimation
          sequence={[
            'شاتو دو ورسای',
            1000,
            'رویای یک شب فرانسوی در تهران',
            1000,
            'شاتو دو ورسای',
            1000,
            'رویای یک شب فرانسوی در تهران',
            1000,
          ]}
          repeat={Infinity}
          speed={40}
        />
      </div>
    </div>
  )
}
