"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import Toggle from 'react-toggle'
import clsx from'clsx'

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Toggle 
        defaultChecked={theme === 'dark' ? false : true }
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className={clsx({
            "text-neutral-700 hover:text-stone-100":theme === 'light',
            "text-stone-100 hover:text-neutral-700":theme === 'dark'})}
        icons={{
            checked: <FontAwesomeIcon icon={faMoon}  className="h-4 dark-toggle-icon-checked" />,
            unchecked: <FontAwesomeIcon icon={faSun} className="h-4 dark-toggle-icon-checked" />,
        }}
        aria-label="Toggle light and dark mode"
    />

  )
};