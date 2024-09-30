import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkTheme from "assets/icons/theme-dark.svg"
import LightTheme from "assets/icons/theme-light.svg"
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkTheme width={20}/> : <LightTheme width={20}/>}
        </Button>
    );
};
