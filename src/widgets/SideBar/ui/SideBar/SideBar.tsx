import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="submit" onClick={() => onToggle()}>toggle</button>
            <LangSwitcher />
        </div>
    );
};
