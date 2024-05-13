"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import Toggle from 'react-toggle'
import clsx from'clsx'

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    console.log("unmounted")
    return null
  }
  console.log("theme: ", theme);
  console.log("resolved theme: ", resolvedTheme);

  if (theme === 'system' && resolvedTheme) {
    setTheme(resolvedTheme.toString());
  }

  return (
    <Toggle 
        checked={theme === 'dark' ? false : true }
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className={clsx({
            "text-dark hover:text-light":theme === 'light',
            "text-light hover:text-dark":theme === 'dark'})}
        icons={{
            checked: <FontAwesomeIcon icon={faMoon}  className="h-4" />,
            unchecked: <FontAwesomeIcon icon={faSun} className="h-4" />,
        }}
        aria-label="Toggle light and dark mode"
    />

  )
};