// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/system'
import {useRouter} from 'next/navigation'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useTheme} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const { theme, setTheme } = useTheme()
    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider attribute="class" defaultTheme={theme}>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}